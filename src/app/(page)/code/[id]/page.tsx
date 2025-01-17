import{generateStaticParams}from'./params';export{generateStaticParams};
/*import { useParams } from "next/navigation";*/
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ViewCodeEditor } from "@/components/view-code-editor";

import useSWR from "swr";
import fetcher from "@/lib/fetch";
import { Skeleton } from "@/components/ui/skeleton";

let paramsID: string;
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const params111 = (await params).id;
  paramsID = params111;
  return <ViewCode initialId={params111} />;
}

function ViewCode({ initialId }: { initialId: string }) {
  const params = paramsID || initialId;//useParams<{ id: string }>()|| { id: initialId };

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

  return (
    <main className="p-8 px-10">
      <header className="pb-4 leading-tight">
        <span className="flex items-center gap-2">
          <Image
            src="/static/images/logo-light.png"
            alt="CodeShare Logo"
            width={48}
            height={48}
            priority
            className="hidden size-6 items-center dark:block"
          />
          <Image
            src="/static/images/logo-dark.png"
            alt="CodeShare Logo"
            width={48}
            height={48}
            priority
            className="block size-6 items-center dark:hidden"
          />
          <p className="font-grotesque text-xl font-medium">Pastebon</p>
        </span>
        <p className="text-sm">
          Share your code{" "}
          <strong className="font-semibold underline"></strong>.
        </p>
      </header>
      <Card>
        <CardHeader> </CardHeader>
        <CardContent className="-mt-4">
          {isLoading ? (
            <Skeleton className="h-[calc(60vh)] w-full" />
          ) : data ? (
            <ViewCodeEditor
              language={data.data.langDone}
              code={data.data.code}
              id={params.id}
            />
          ) : (
            <p>Error loading code.</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
