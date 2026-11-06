import type { Draft, Evaluation } from "./types";

const DRAFT_KEY = "intervexa-draft";
const REPORT_KEY = "intervexa-report";

const emptyDraft: Draft = {
  candidateName: "",
  candidateEmail: "",
  jobRole: "",
};

export function getDraft(): Draft {
  const saved = sessionStorage.getItem(DRAFT_KEY);
  if (!saved) return emptyDraft;
  return { ...emptyDraft, ...JSON.parse(saved) };
}

export function saveDraft(update: Partial<Draft>) {
  const next = { ...getDraft(), ...update };
  sessionStorage.setItem(DRAFT_KEY, JSON.stringify(next));
  return next;
}

export function saveReport(report: Evaluation) {
  sessionStorage.setItem(REPORT_KEY, JSON.stringify(report));
}

export function getReport(): Evaluation | null {
  const saved = sessionStorage.getItem(REPORT_KEY);
  if (!saved) return null;
  return JSON.parse(saved);
}

export function clearInterview() {
  sessionStorage.removeItem(DRAFT_KEY);
  sessionStorage.removeItem(REPORT_KEY);
}
