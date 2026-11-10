# 🤖 Intervexa

An AI-powered interview evaluation system designed to make candidate assessment smarter and more structured.

## About the project 🚀

**Intervexa** is an AI-based interview evaluation system built using **Python, FastAPI, and Machine Learning**. It helps interviewers assess candidates based on their technical interview answers and predefined job requirements.

Interviewers can select a job role, enter candidate information, and evaluate responses to role-specific interview questions. The system processes submitted answers using dataset-based evaluation logic and a Machine Learning model to calculate performance scores, identify strengths and knowledge gaps, and generate a structured candidate evaluation report.

## ✨ Key Features

- 💼 **Job role selection:** Select different job roles and access relevant interview questions.

- 📝 **Interview questions:** Display predefined technical questions based on the selected job role.

- 👤 **Candidate management:** Enter candidate details before starting an evaluation.

- 📊 **Answer evaluation:** Analyze candidate responses against expected answers, important keywords, and evaluation criteria.

- 🤖 **Machine Learning classification:** Classify candidate answers into predefined evaluation categories using a trained ML model.

- 🎯 **Automated scoring:** Calculate individual question scores and an overall performance score.

- 💡 **Strengths & weaknesses analysis:** Identify correctly understood concepts and missing knowledge areas.

- 📑 **Evaluation reports:** Generate structured reports containing scores, answer evaluations, strengths, weaknesses, and recommendations.



## 🛠️ Technologies Used

**Backend & Machine Learning**
- `Python`
- `FastAPI`
- `Uvicorn`
- `Pandas`
- `NumPy`
- `Scikit-learn`

**Frontend**
- `Next.js`
- `React.js`
- `Tailwind CSS`

**Data & API Documentation**
- `CSV`

## ⚙️ How It Works

1. The interviewer selects a job role.
2. Intervexa displays predefined interview questions for that role.
3. Candidate information and interview answers are submitted.
4. The backend processes the answers using the prepared dataset.
5. Evaluation logic compares responses against expected answers and predefined criteria.
6. The trained ML model classifies candidate responses into evaluation categories.
7. The system calculates scores and identifies strengths and knowledge gaps.
8. A structured evaluation report is generated and displayed on the dashboard.

## 🚦 Running the Project

**1. Clone the repository**

```bash
git clone https://github.com/your-username/Intervexa.git
cd Intervexa
```

**2. Backend Setup**

Navigate to the backend directory:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the  server:

```bash
make start
```


**4. Frontend Setup**

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the frontend in your browser at the URL displayed in your terminal.
