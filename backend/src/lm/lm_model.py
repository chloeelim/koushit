from src.common.constants import OPENAI_API_KEY
from langchain_openai import ChatOpenAI
import os

os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

lm_model = ChatOpenAI(model="gpt-4o-mini", temperature=0.3, max_retries=5)

CONCURRENCY = 150

HALLUCINATION_ATTEMPT_LIMIT = 2
