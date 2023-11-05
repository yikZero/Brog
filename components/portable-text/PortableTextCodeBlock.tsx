import { type PortableTextComponentProps } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export function PortableTextCodeBlock({
  value,
}: PortableTextComponentProps<{
  _key: string;
  language: string;
  code: string;
}>) {
  return (
    <SyntaxHighlighter
      language={value.language}
      showLineNumbers
      useInlineStyles={false}
      codeTagProps={{
        style: {},
        className: `language-${value.language}`,
      }}
    >
      {value.code}
    </SyntaxHighlighter>
  );
}
