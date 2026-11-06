export type Question = {
  required_skill: string;
  question: string;
  max_score: number;
};

export type AnswerInput = {
  question: string;
  answer: string;
};

export type QuestionResult = {
  question: string;
  answer: string;
  required_skill: string;
  score: number;
  max_score: number;
  matched_keywords: string[];
  missing_keywords: string[];
  ml_label: string;
};

export type Evaluation = {
  id: number;
  candidate_name: string;
  candidate_email: string;
  job_role: string;
  question_results: QuestionResult[];
  total_score: number;
  max_score: number;
  percentage: number;
  result: string;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
};

export type Draft = {
  candidateName: string;
  candidateEmail: string;
  jobRole: string;
};
