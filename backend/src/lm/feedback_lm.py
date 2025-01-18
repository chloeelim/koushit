from src.videos.models import Video
from src.lm.prompts import RESPONSE_ANALYSIS_SYSPROMPT
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.output_parsers import JsonOutputParser
from src.lm.lm_model import lm_model
from sqlalchemy.orm import Session
from src.common.database import engine


def generate_feedback(question_id: int, student_response: str):
    sysprompt = RESPONSE_ANALYSIS_SYSPROMPT
    messages = [
        SystemMessage(sysprompt),
        HumanMessage(format_human_prompt(question_id, student_response)),
    ]

    result = lm_model.invoke(messages)
    parser = JsonOutputParser()
    parser_output = parser.parse(result.content)
    print(parser_output)
    return parser_output


def format_human_prompt(question_id: int, student_response: str) -> str:
    with Session(engine) as session:
        video = session.get(Video, question_id)

        video_summary = video.summary
        video_prompts = ", ".join([point.point for point in video.points])

    human_prompt = f"""
    Video summary: {video_summary},
    Accompanying prompt: {video_prompts},

    Student's response, transcribed: {student_response}
    """

    return human_prompt
