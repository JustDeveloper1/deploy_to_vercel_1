import { viewCode } from "@/lib/actions/code";
import useSWR from "swr";
import fetcher from "@/lib/fetch";

export default function ViewCode() {
  const params = useParams<{ id: string }>();

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
  >(`https://api.juststudio.is-a.dev/cs/${params.id}`, fetcher);

  return new Response(code.data.code, {
    status: 200,
  });
}
