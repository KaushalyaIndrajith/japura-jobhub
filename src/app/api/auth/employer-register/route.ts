import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Setup the PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure you set up the Neon DB connection string
});

export async function POST(req: NextRequest) {
  try {
    const { fullName, companyName, jobPosition, birthday, phoneNumber, email, password } = await req.json();

    // Insert data into the Neon database
    const query = `
      INSERT INTO employers (full_name, company_name, job_position, birthday, phone_number, email, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [fullName, companyName, jobPosition, birthday, phoneNumber, email, password];

    await pool.query(query, values);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
  }
}
