"use client";
import { useState } from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateCodeEditor } from "@/components/create-code-editor";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DoneDialog } from "@/components/done-dialog";

export default function Landing() {
  const [code, setCode] = useState("");

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
          <p className="font-rubik text-xl font-medium">CodeShare</p>
        </span>
        <p className="text-sm __hide">
          description{" "}
          <strong className="font-semibold underline">here</strong>.
        </p>
      </header>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="-mt-4">
          <CreateCodeEditor code={code} setCode={setCode} />
        </CardContent>
      </Card>
    </main>
  );
}
