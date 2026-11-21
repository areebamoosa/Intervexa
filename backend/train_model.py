from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

DATA_FILE = Path(__file__).parent / "app" / "datasets" / "training_answers.csv"
MODEL_FILE = Path(__file__).parent / "app" / "models" / "answer_model.pkl"

answers = pd.read_csv(DATA_FILE)

# CountVectorizer turns each answer into a vector of word counts.
# MultinomialNB learns which counts mean Excellent, Good, Average, or Poor.
model = Pipeline([
    ("words", CountVectorizer()),
    ("classifier", MultinomialNB()),
])

model.fit(answers["answer"], answers["label"])

MODEL_FILE.parent.mkdir(exist_ok=True)
joblib.dump(model, MODEL_FILE)
print("Answer model saved")
