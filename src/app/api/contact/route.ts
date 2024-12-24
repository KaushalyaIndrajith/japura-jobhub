import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const { firstname, lastname, phone, email, message } = await req.json();

    if (!firstname || !lastname || !phone || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    const query = `
      INSERT INTO contact_messages (firstname, lastname, phone, email, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id;
    `;
    const values = [firstname, lastname, phone, email, message];

    await pool.query(query, values);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error." }, { status: 500 });
  }
}
