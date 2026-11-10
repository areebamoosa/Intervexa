import json
import os
from pathlib import Path

import pymysql
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent / ".env")


def get_connection():
    return pymysql.connect(
        host=os.getenv("MYSQL_HOST", "127.0.0.1"),
        port=int(os.getenv("MYSQL_PORT", "3306")),
        user=os.getenv("MYSQL_USER", "root"),
        password=os.getenv("MYSQL_PASSWORD", ""),
        database=os.getenv("MYSQL_DATABASE", "intervexa"),
        cursorclass=pymysql.cursors.DictCursor,
    )


def setup_tables():
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS reports (
            id INT AUTO_INCREMENT PRIMARY KEY,
            candidate_name VARCHAR(255),
            candidate_email VARCHAR(255),
            job_role VARCHAR(255),
            percentage DOUBLE,
            result VARCHAR(50),
            report_json LONGTEXT
        )
        """
    )
    connection.commit()
    connection.close()


def save_report(submission):
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(
        """
        INSERT INTO reports
        (candidate_name, candidate_email, job_role, percentage, result, report_json)
        VALUES (%s, %s, %s, %s, %s, %s)
        """,
        (
            submission["candidate_name"],
            submission["candidate_email"],
            submission["job_role"],
            submission["percentage"],
            submission["result"],
            json.dumps(submission),
        ),
    )
    connection.commit()
    report_id = cursor.lastrowid
    connection.close()
    return report_id


def get_report(report_id):
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT report_json FROM reports WHERE id = %s", (report_id,))
    row = cursor.fetchone()
    connection.close()

    if not row:
        return None

    return json.loads(row["report_json"])
