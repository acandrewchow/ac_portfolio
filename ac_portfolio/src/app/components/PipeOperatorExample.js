import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

function PipeOperatorExample() {
  const code = ` defmodule Math do
      def add(a, b) do
        a + b
      end

      def square(a) do
        a * a
      end
    end

    value =
      Math.add(5, 5)
      |> Math.square()

    IO.puts("Result: " <> Integer.to_string(value))
    # Outputs: 100
  `;

  return (
    <CodeBlock
      text={code}
      language="elixir"
      showLineNumbers={true}
      wrapLines={true}
      theme={dracula}
    />
  );
}

export default PipeOperatorExample;
