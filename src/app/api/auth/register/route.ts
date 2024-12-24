import { NextResponse } from "next/server";
import { Client } from "pg";

// Handle POST request for user registration
export async function POST(request: Request) {
  // Get data from request body
  const { fullName, academicYear, faculty, department, birthday, email, phoneNumber, password } = await request.json();

  // Initialize PostgreSQL client
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL from env
    ssl: { rejectUnauthorized: false }, // Ensure SSL connection is enabled
  });

  try {
    // Connect to the database
    await client.connect();

    // Insert the user data into the users table
    await client.query(
      `INSERT INTO users (full_name, academic_year, faculty, department, birthday, email, phone_number, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [fullName, academicYear, faculty, department, birthday, email, phoneNumber, password]
    );

    // Close the connection after the query
    await client.end();

    // Return success response
    return NextResponse.json({ message: "Registration successful" });
  } catch (err) {
    console.error("Error inserting data:", err);

    // Return error response in case of failure
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
