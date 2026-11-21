import api from "./axios";

export const predictExperience = async (data) => {
  const response = await api.post("/experience", data);
  return response.data;
};

export const GetRoles = async () => {
  const response = await api.get("/roles");
  return response.data;
};

export const GetQuestions = async (jobRole) => {
  const response = await api.get("/questions", {
    params: { job_role: jobRole },
  });
  return response.data;
};

export const SubmitInterview = async (data) => {
  const response = await api.post("/submissions", data);
  return response.data;
};

export const DownloadReport = async (reportId) => {
  const response = await api.get(`/reports/${reportId}/pdf`, {
    responseType: "blob",
  });
  return response.data;
};
