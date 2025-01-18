from transcribe.transcribe import transcribe
from lm.feedback_lm import generate_feedback

if __name__ == "__main__":
    audio_file_path = "src/testaudio.mp3"
    transcribed_audio_text = transcribe(audio_file_path)
    question_id = -1
    lm_feedback = generate_feedback(question_id, transcribed_audio_text)
    print(lm_feedback)
