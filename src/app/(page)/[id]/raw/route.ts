import { viewCode } from "@/lib/actions/code";
import fetcher from "@/lib/fetch";

import { useParams } from "next/navigation";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<useParams<{ id: string }>>;
  },
) {
  try {
    const response = await fetcher(`https://api.juststudio.is-a.dev/cs/${params.id}`);
    const data = await response.json();

    if (!data) {
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
  } catch (error) {
    return new Response("Internal Server Error.", {
      status: 500,
    });
  }
}
