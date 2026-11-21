from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline

DATA_FILE = Path(__file__).parent / "app" / "datasets" / "processed" / "postings_cleaned.csv"
TUNED_FILE = Path(__file__).parent / "app" / "models" / "experience_model_tuned.pkl"

# Same split as the first model, so the scores can be compared.
SETTINGS = [
    {"name": "more words and word pairs", "max_features": 20000, "ngram_range": (1, 2), "C": 1.0, "class_weight": None},
    {"name": "stronger classifier", "max_features": 10000, "ngram_range": (1, 1), "C": 4.0, "class_weight": None},
    {"name": "balanced rare levels", "max_features": 10000, "ngram_range": (1, 1), "C": 1.0, "class_weight": "balanced"},
]


def main():
    data = pd.read_csv(DATA_FILE)
    data["text"] = data["title"] + " " + data["description"]

    x_train, x_test, y_train, y_test = train_test_split(
        data["text"],
        data["formatted_experience_level"],
        test_size=0.2,
        random_state=42,
        stratify=data["formatted_experience_level"],
    )

    best_accuracy = 0
    best_model = None
    best_name = ""

    for setting in SETTINGS:
        # Each setting turns the job text into word weights, then trains a classifier.
        model = Pipeline([
            ("words", TfidfVectorizer(
                stop_words="english",
                max_features=setting["max_features"],
                ngram_range=setting["ngram_range"],
            )),
            ("classifier", LogisticRegression(
                C=setting["C"],
                class_weight=setting["class_weight"],
                max_iter=1000,
            )),
        ])

        print("Training:", setting["name"])
        model.fit(x_train, y_train)
        predictions = model.predict(x_test)

        accuracy = accuracy_score(y_test, predictions)
        macro_f1 = f1_score(y_test, predictions, average="macro")
        print(f"Accuracy: {accuracy:.4f}")
        print(f"Macro F1: {macro_f1:.4f}")
        print()

        if accuracy > best_accuracy:
            best_accuracy = accuracy
            best_model = model
            best_name = setting["name"]

    TUNED_FILE.parent.mkdir(exist_ok=True)
    joblib.dump(best_model, TUNED_FILE)
    print("Best accuracy:", round(best_accuracy, 4), "from", best_name)
    print("Saved:", TUNED_FILE)


if __name__ == "__main__":
    main()