import { VercelRequest, VercelResponse } from '@vercel/node';
import { jobPostings } from '../shared/schema';
import { sql } from 'drizzle-orm';
import { db } from './db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const [stats] = await db
      .select({
        totalJobs: sql<number>`count(*)`,
        urgentJobs: sql<number>`count(*) filter (where is_urgent = true)`,
        newJobs: sql<number>`count(*) filter (where is_new = true)`,
        ministries: sql<number>`count(distinct ministry)`
      })
      .from(jobPostings);

    res.json(stats);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
}