"use client";
import { languages } from "@/config/code";
import { type editor as MonacoEditor } from "monaco-editor";
import { CodeEditor } from "./code-editor";
import { EditorProps } from "@monaco-editor/react";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Pencil, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ViewCodeEditor({
  code,
  id,
  ...props
}: {
  code: string;
  id: string;
} & EditorProps) {
  const [language, setLanguage] = useState<string>();
  const [editor, setEditor] = useState<MonacoEditor.IStandaloneCodeEditor>();

  useEffect(() => {
    if (!editor) return;

    function resizeEditor() {
      // @ts-expect-error
      editor.layout({});
    }

    window.addEventListener("resize", resizeEditor);
    return () => {
      window.removeEventListener("resize", resizeEditor);
    };
  }, [editor]);

  return (
    <CodeEditor
      code={code}
      language={language || props.language}
      options={{
        readOnly: true,
        readOnlyMessage: {
          value:
            'Cannot edit this read-only code.\n\nClick the "Edit" button below for editing this code.',
        },
      }}
      onMount={(editor, monaco) => {
        setEditor(editor);
      }}
      navChildren={
        <div className="flex justify-between">
          {typeof editor === "undefined" ? (
            <Skeleton className="h-8 w-44" />
          ) : (
            <Select
              value={language || props.language}
              onValueChange={setLanguage}
            >
              <SelectTrigger className="w-[180px] _just_monacoEditorButtons">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => {
                  const langIcon = lang[2];

                  return (
                    <SelectItem key={lang[1]} value={lang[1]}>
                      <span className="flex items-center gap-2 truncate text-sm">
                        <span className="scale-75 noHighlightEffect">{langIcon}</span> {lang[0]}
                      </span>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
          <div className="flex gap-2">
            {typeof editor === "undefined" ? (
              <>
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </>
            ) : (
              <>
                <Button asChild>
                  <Link href={`/${id}/raw`} className="_just_monacoEditorButtons disabled:cursor-not-allowed">
                    <ScrollText size={16} className="size-2 sm:size-4" />
                    View Raw
                  </Link>
                </Button>
                <Button
                  onClick={async () => {
                    toast.info("Coming soon :')");
                  }}
                  className="flex items-center gap-1 _just_monacoEditorButtons disabled:cursor-not-allowed"
                >
                  <Pencil size={16} className="size-2 sm:size-4" />
                  Edit
                </Button>
              </>
            )}
          </div>
        </div>
      }
    />
  );
}
