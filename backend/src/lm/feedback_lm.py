from langchain_openai import OpenAI
from prompts import RESPONSE_ANALYSIS_SYSPROMPT
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.output_parsers import JsonOutputParser
from lm_model import lm_model


def generate_feedback(question_id: int):
    video_summary = """
        Lorem ipsum
    """  # Get from db query w qid

    sysprompt = RESPONSE_ANALYSIS_SYSPROMPT
    messages = [
        SystemMessage(sysprompt),
        HumanMessage(video_summary),
    ]

    result = lm_model.invoke(messages)
    result_json = JsonOutputParser.parse(result)

    return result_json
