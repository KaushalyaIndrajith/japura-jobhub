// app/api/auth/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

// Initialize database connection using Pool (configure with your Neon credentials)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Make sure to set the DATABASE_URL in your environment variables
});

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  try {
    // Query database to find user by email (username is treated as email here)
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 400 });
    }

    // Directly compare the password with the one in the database
    if (password !== user.password) {
      return NextResponse.json({ error: "Invalid username or password" }, { status: 400 });
    }

    // If login is successful, return a success response
    return NextResponse.json({ message: "Login successful" }, { status: 200 });

  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
