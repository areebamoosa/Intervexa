from pathlib import Path

import joblib

MODEL_FILE = Path(__file__).resolve().parent.parent / "models" / "answer_model.pkl"
model = joblib.load(MODEL_FILE)


def predict_label(answer_text):
    return str(model.predict([answer_text])[0])
