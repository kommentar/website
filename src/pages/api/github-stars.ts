export const prerender = false;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/kommentar/kommentar",
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const data = await response.json();

    return new Response(JSON.stringify({ stars: data.stargazers_count }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch stars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
