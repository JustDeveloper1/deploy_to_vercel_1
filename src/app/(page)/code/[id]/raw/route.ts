import { viewCode } from "@/lib/actions/code";
import useSWR from "swr";
import fetcher from "@/lib/fetch";

export const dynamic = "force-static";
export const revalidate = 10;

export async function generateStaticParams() {
  const response = await fetch('https://api.juststudio.is-a.dev/cs/ids');
  const ids = await response.json();

  return [{id:"1"}] /*ids.map((id: string) => ({
    id,
  }));*/
}

export function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const { data, isLoading } = useSWR<
    {
      success: true;
      data: {
        id: number;
        authorId: string;
        code: string;
        langDone: string;
        name: string;
        created: number;
        updated: number;
        status: number;
      };
    },
    { success: false; error: any }
  >(`https://api.juststudio.is-a.dev/cs/${params}`, fetcher);

  if (!(data)) {
    return new Response("Unknown error.", {
      status: 500,
    });
  }
  if (!data.success)
    return new Response("Code not found.", {
      status: 404,
    });
  return new Response(data.data.code, {
    status: 200,
  });
}
