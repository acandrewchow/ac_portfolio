import React from "react";
import { CodeBlock } from "react-code-blocks";

function TestCodeComponent() {
  const code = `
      function greet(name) {
        return 'Hello, ' + name + '!';
      }
    `;

  return (
    <CodeBlock
      text={code}
      language="javascript"
      showLineNumbers={true}
      wrapLines={true}
      theme="solarizedlight"
    />
  );
}

export default TestCodeComponent;
