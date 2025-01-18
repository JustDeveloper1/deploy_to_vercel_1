'use server'

import { viewCode } from "@/lib/actions/code";
import fetcher from "@/lib/fetch";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const id = await params;
  const response = await fetch(`https://api.juststudio.is-a.dev/cs/${id}`);
  const data = await response.json();

  if (!response.ok) {
    return new Response("Unknown error.", {
      status: 500,
    });
  }
  if (!data.success) {
    return new Response("Code not found.", {
      status: 404,
    });
  }
  return new Response(data.data.code, {
    status: 200,
  });
}
