# Intervexa

An AI-powered interview evaluation system designed to make candidate assessment smarter and more structured.

## About the project 🚀

**Intervexa** is an AI-based interview evaluation system built using **Python, FastAPI, and Machine Learning**. It gives interviewers two separate tools: one that predicts the experience level of a job posting, and one that scores a candidate's written interview answers for a selected job role.

Interviewers can choose one of 15 job roles, enter candidate details, and answer that role's 10 predefined questions. The system scores each answer, labels its quality with a trained ML model, and generates a structured evaluation report that can be saved and downloaded as a PDF.

## ⚙️ How It Works

**📝 Interview evaluation**

1. The interviewer enters the candidate's name and email.
2. The interviewer selects a job role.
3. Intervexa displays the 10 predefined questions for that role.
4. The candidate's answers are submitted to the backend.
5. Each answer is scored by keyword coverage, and the ML model assigns a quality label.
6. The system calculates the total score, percentage, grade, strengths, and weaknesses.
7. The report is saved in MySQL and shown on the dashboard, with a PDF download option.

**💼 Job level check**

1. The interviewer pastes a job title and description.
2. The ML model predicts the experience level, which is shown on screen (not saved).

## 🛠️ Technologies Used

**Backend & Machine Learning**

- `Python`
- `FastAPI`
- `Uvicorn`
- `Pandas`
- `Scikit-learn`
- `Joblib`
- `fpdf2`

**Frontend**

- `Next.js`
- `React.js`
- `Tailwind CSS`
- `Axios`

**Data & Storage**

- `CSV` (question bank and training datasets)
- `MySQL` (via PyMySQL)

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

Create a `.env` file with your MySQL settings:

```env
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_db_name
```

Start the server:

```bash
make start
```

The API runs at `http://127.0.0.1:8000`. The reports table is created automatically on startup.

**3. Frontend Setup**

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

Open the frontend in your browser at `http://localhost:4000`. If your API runs on a different address, set `NEXT_PUBLIC_API_URL` accordingly.
