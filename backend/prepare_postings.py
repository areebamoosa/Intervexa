

import re
from pathlib import Path

import pandas as pd

RAW_FILE = Path(__file__).parent / "app" / "datasets" / "raw" / "postings.csv"
CLEAN_FILE = Path(__file__).parent / "app" / "datasets" / "processed" / "postings_cleaned.csv"

COLUMNS = ["title", "description", "formatted_experience_level"]

LINK_PATTERN = re.compile(r"https?://\S+|www\.\S+", re.IGNORECASE)
TAG_PATTERN = re.compile(r"<[^>]+>")
SPACE_PATTERN = re.compile(r"\s+")


def clean_text(value):
    """Lowercase the text and remove links, tags, and extra spaces."""
    text = str(value).lower()
    text = TAG_PATTERN.sub(" ", text)
    text = LINK_PATTERN.sub(" ", text)
    text = SPACE_PATTERN.sub(" ", text)
    return text.strip()


def main():
    raw = pd.read_csv(RAW_FILE, low_memory=False)
    print(f"Raw rows: {len(raw)}")
    print(f"Raw columns: {raw.shape[1]}")

    cleaned = raw[COLUMNS].copy()

    # A row with no experience label cannot be used for training.
    cleaned = cleaned.dropna(subset=["formatted_experience_level"])

    cleaned["title"] = cleaned["title"].map(clean_text)
    cleaned["description"] = cleaned["description"].map(clean_text)

    # Drop rows whose title or description became empty after cleaning.
    cleaned = cleaned[(cleaned["title"] != "") & (cleaned["description"] != "")]

    CLEAN_FILE.parent.mkdir(parents=True, exist_ok=True)
    cleaned.to_csv(CLEAN_FILE, index=False)

    print(f"Clean rows: {len(cleaned)}")
    print(f"Clean columns: {list(cleaned.columns)}")
    print(f"Saved: {CLEAN_FILE}")
    print("Experience level counts:")
    print(cleaned["formatted_experience_level"].value_counts().to_string())


if __name__ == "__main__":
    main()
