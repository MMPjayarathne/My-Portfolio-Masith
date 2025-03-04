import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: {
    avatar_url: string;
  };
  language: string | null;
  created_at: string;
  updated_at: string;
  readme_image?: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  try {
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.GIT_TOKEN}`, // Use the token
      },
    });
    if (!reposResponse.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }
    const repos: GitHubRepo[] = await reposResponse.json();

    const reposWithImages = await Promise.all(
      repos.map(async (repo) => {
        try {
          const readmeResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/readme`,
            {
              headers: {
                Accept: "application/vnd.github.v3.raw",
                Authorization: `Bearer ${process.env.GIT_TOKEN}`,
              },
            }
          );
          if (!readmeResponse.ok) {
            return { ...repo, readme_image: null }; 
          }
          const readmeText = await readmeResponse.text();

          const imageRegex = /!\[.*?\]\((.*?)\)/;
          const match = imageRegex.exec(readmeText);
          const readmeImage = match ? match[1] : null;

          return { ...repo, readme_image: readmeImage };
        } catch (error) {
          console.log(error)
          return { ...repo, readme_image: null };
        }
      })
    );

    return NextResponse.json(reposWithImages);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}