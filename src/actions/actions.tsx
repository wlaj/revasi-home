"use server";

import { neon } from "@neondatabase/serverless";

export async function getData() {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = await sql`SELECT * FROM inquiries`;
  return response;
}

export async function postInquiry(
  email: string
) {
  const sql = neon(process.env.DATABASE_URL as string);

  try {
    const result = await sql`
        INSERT INTO inquiries (email)
        VALUES (${email})
        RETURNING *;
      `;
    return { success: true, data: result[0] };
  } catch (error) {
    console.error("Error inserting inquiry:", error);
    return { success: false, error: "Failed to insert inquiry." };
  }
}
