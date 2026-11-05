from pathlib import Path

import pandas as pd

DATA_FILE = Path(__file__).resolve().parent / "datasets" / "interview_questions.csv"
questions_df = pd.read_csv(DATA_FILE)