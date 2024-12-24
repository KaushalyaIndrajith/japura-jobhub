import { neon } from '@neondatabase/serverless';

export async function POST(req: Request) {
    const { searchQuery, jobType } = await req.json();
    const sql = neon(`${process.env.DATABASE_URL}`);

    try {
        let query = 'SELECT * FROM jobs WHERE 1=1';
        const params: string[] = [];

        if (searchQuery) {
            query += ' AND (job_name ILIKE $1 OR company_name ILIKE $1)';
            params.push(`%${searchQuery}%`);
        }
        if (jobType) {
            query += params.length ? ' AND job_type = $2' : ' AND job_type = $1';
            params.push(jobType);
        }

        const jobs = await sql(query, params); // No .rows needed
        return new Response(JSON.stringify(jobs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
