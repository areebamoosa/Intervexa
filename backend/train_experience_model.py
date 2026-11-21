from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline

DATA_FILE = Path(__file__).parent / "app" / "datasets" / "processed" / "postings_cleaned.csv"
MODEL_FILE = Path(__file__).parent / "app" / "models" / "experience_model.pkl"


def main():
    data = pd.read_csv(DATA_FILE)

    # The model reads one text field. The title and description are joined together.
    data["text"] = data["title"] + " " + data["description"]

    x = data["text"]
    y = data["formatted_experience_level"]

    # stratify keeps the same mix of experience levels in the train and test sets.
    x_train, x_test, y_train, y_test = train_test_split(
        x,
        y,
        test_size=0.2,
        random_state=42,
        stratify=y,
    )

    # TfidfVectorizer turns each job into a vector of word weights.
    # LogisticRegression learns which weights match each experience level.
    model = Pipeline([
        ("words", TfidfVectorizer(stop_words="english", max_features=10000)),
        ("classifier", LogisticRegression(max_iter=1000)),
    ])

    print("Training. This can take a few minutes.")
    model.fit(x_train, y_train)
    predictions = model.predict(x_test)

    print("Accuracy:", round(accuracy_score(y_test, predictions), 4))
    print()
    print(classification_report(y_test, predictions))

    labels = sorted(y.unique())
    print("Labels:", labels)
    print("Confusion matrix:")
    print(confusion_matrix(y_test, predictions, labels=labels))

    MODEL_FILE.parent.mkdir(exist_ok=True)
    joblib.dump(model, MODEL_FILE)
    print("Saved:", MODEL_FILE)


if __name__ == "__main__":
    main()