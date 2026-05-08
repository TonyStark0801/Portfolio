import { NextResponse } from "next/server";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });
  }

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { username: "TonyStark0801" } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "GitHub API error" }, { status: res.status });
  }

  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    return NextResponse.json({ error: "Unexpected response shape" }, { status: 502 });
  }

  // Flatten days for easier client consumption
  const days: { date: string; count: number }[] = calendar.weeks.flatMap(
    (w: { contributionDays: { date: string; contributionCount: number }[] }) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
  );

  return NextResponse.json({ total: calendar.totalContributions, days });
}
