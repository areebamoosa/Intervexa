from fpdf import FPDF


def build_report_pdf(report):
    lines = [
        "Intervexa interview report",
        "",
        report["candidate_name"],
        report["candidate_email"],
        report["job_role"],
        "",
        f"{report['percentage']}%  {report['result']}",
        f"{report['total_score']} / {report['max_score']} marks",
        "",
        report["recommendation"],
        "",
        "Strengths",
    ]

    if report["strengths"]:
        for item in report["strengths"]:
            lines.append(f"- {item}")
    else:
        lines.append("No strong topics yet.")

    lines.append("")
    lines.append("Weaknesses")

    if report["weaknesses"]:
        for item in report["weaknesses"]:
            lines.append(f"- {item}")
    else:
        lines.append("No missing topics.")

    lines.append("")
    lines.append("Answer review")

    for number, item in enumerate(report["question_results"], start=1):
        lines.append("")
        lines.append(f"{number}. {item['question']}")
        lines.append(f"{item['required_skill']} | {item['score']} / {item['max_score']} | Model: {item['ml_label']}")
        lines.append(item["answer"])
        if item["missing_keywords"]:
            lines.append("Missing: " + ", ".join(item["missing_keywords"]))

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Helvetica", size=12)

    for line in lines:
        pdf.set_x(pdf.l_margin)
        safe = str(line).encode("latin-1", "replace").decode("latin-1")
        pdf.multi_cell(0, 8, safe, new_x="LMARGIN", new_y="NEXT")

    return bytes(pdf.output())
