"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewCodeEditor } from "@/components/view-code-editor";

import useSWR from "swr";
import fetcher from "@/lib/fetch";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateStaticParams() {
  const response = await fetch('https://api.juststudio.is-a.dev/cs');
  const codes = await response.json();
  
  return codes.map((code: { id: string }) => ({
    id: code.id.toString(),
  }));
}

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

  return (
    <main className="p-8 px-10">
      <header className="pb-4 leading-tight">
        <span className="flex items-center gap-2">
          <Image
            src="/static/images/logo-light.png"
            alt="Pastebon Logo"
            width={48}
            height={48}
            priority
            className="hidden size-6 items-center dark:block"
          />
          <Image
            src="/static/images/logo-dark.png"
            alt="Pastebon Logo"
            width={48}
            height={48}
            priority
            className="block size-6 items-center dark:hidden"
          />
          <p className="font-grotesque text-xl font-medium">Pastebon</p>
        </span>
        <p className="text-sm">
          Paste your codes, logs, and errors{" "}
          <strong className="font-semibold underline">anonymously</strong>.
        </p>
      </header>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="-mt-4">
          {isLoading ? (
            <Skeleton className="h-[calc(60vh)] w-full" />
          ) : (
            <ViewCodeEditor
              language={isLoading ? "plaintext" : data!.data?.langDone}
              code={isLoading ? "Loading..." : data!.data?.code}
              id={params.id}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
