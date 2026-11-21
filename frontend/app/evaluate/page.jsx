"use client";

import { useState } from "react";
import PageMain from "@/components/layout/PageMain";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import TextField from "@/components/ui/TextField";
import { predictExperience } from "@/lib/api";

export default function EvaluatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setLevel("");

    try {
      const data = await predictExperience({
        title: title.trim(),
        description: description.trim(),
      });
      setLevel(data.predicted_experience_level);
    } catch {
      setError("The model could not be reached. Start the backend, then try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageMain>
      <form
        onSubmit={onSubmit}
        className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,40,36,0.06)] sm:p-8"
      >
        <h1 className="text-3xl font-bold tracking-tight text-ink">Check a job level</h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Paste a job title and description. The saved model predicts the experience level.
        </p>
        <div className="mt-6 space-y-4">
          <TextField label="Job title" value={title} onChange={setTitle} required placeholder="Python Developer" />
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Job description<span className="text-orange"> *</span>
            </span>
            <TextArea
              value={description}
              onChange={setDescription}
              rows={8}
              placeholder="We need a Python developer who will build APIs."
            />
          </label>
        </div>
        <Button type="submit" disabled={loading || description.trim() === ""} className="mt-6">
          {loading ? "Checking..." : "Predict level"}
        </Button>
        {error ? <p className="mt-4 text-sm text-[#9a3412]">{error}</p> : null}
        {level ? (
          <p className="mt-4 rounded-xl bg-[#e7f7f2] px-4 py-3 text-sm font-semibold text-ink">
            Predicted experience level: {level}
          </p>
        ) : null}
      </form>
    </PageMain>
  );
}
