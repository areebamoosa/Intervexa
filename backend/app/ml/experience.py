from pathlib import Path

import joblib

MODEL_FILE = Path(__file__).resolve().parent.parent / "models" / "experience_model_tuned.pkl"
model = joblib.load(MODEL_FILE)


def predict_experience(title, description):
    # The saved pipeline turns this text into word weights, then predicts the level.
    text = f"{title} {description}"
    return str(model.predict([text])[0])
