from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import cross_val_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

DATA_FILE = Path(__file__).parent / "app" / "datasets" / "training_answers.csv"
MODEL_FILE = Path(__file__).parent / "app" / "models" / "answer_model.pkl"

df = pd.read_csv(DATA_FILE)

model = Pipeline([
    ("words", CountVectorizer()),
    ("classifier", MultinomialNB()),
])

scores = cross_val_score(model, df["answer"], df["label"], cv=5)
print("Accuracy:", round(scores.mean() * 100, 2), "%")

model.fit(df["answer"], df["label"])

MODEL_FILE.parent.mkdir(exist_ok=True)
joblib.dump(model, MODEL_FILE)
print("Model saved")