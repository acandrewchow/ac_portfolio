import React, { useState, useEffect } from "react";

const HeroSection = ({ darkMode }) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const typeOutput = (newLines) => {
    let currentLine = 0;
    let currentIndex = 0;
    let tempOutput = [...output];

    const typeCharacter = () => {
      if (currentLine < newLines.length) {
        if (currentIndex < newLines[currentLine].length) {
          const newText = newLines[currentLine].slice(0, currentIndex + 1);
          if (tempOutput.length <= output.length + currentLine) {
            tempOutput.push(newText);
          } else {
            tempOutput[output.length + currentLine] = newText;
          }
          setOutput([...tempOutput]);
          currentIndex++;
        } else {
          currentIndex = 0;
          currentLine++;
        }
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    };

    setIsTyping(true);
    const typingInterval = setInterval(typeCharacter, 30);

    return () => clearInterval(typingInterval);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (isTyping) return;

    const newOutput = [];
    if (command.trim() === "help") {
      newOutput.push("Available commands:");
      newOutput.push("about - Learn about me");
      newOutput.push("contact - Get my contact information");
      newOutput.push("clear - Clear the terminal");
    } else if (command.trim() === "about") {
      newOutput.push("Hi, I'm Andrew 👋");
      newOutput.push(
        "Software Engineering student at the University of Guelph."
      );
      newOutput.push(
        "I have experience building scalable applications and working with teams to create innovative products."
      );
    } else if (command.trim() === "contact") {
      newOutput.push("Contact me via email: andrew@example.com");
      newOutput.push("Find me on LinkedIn: linkedin.com/in/acandrewchow");
    } else if (command.trim() === "resume") {
      newOutput.push("You can view my resume at: andrewchow.ca/resume");
    } else if (command.trim() === "clear") {
      setOutput([]);
      setCommand("");
      return;
    } else {
      newOutput.push(`Command not found: ${command.trim()}`);
      newOutput.push("Type 'help' for a list of available commands.");
    }

    typeOutput(newOutput);
    setCommand(""); // Clear the input
  };

  // useEffect to simulate the initial message when the component mounts
  useEffect(() => {
    const initialMessage = [
      "Welcome to my terminal interface! 👨‍💻",
      "Type 'help' to see available commands.",
    ];
    typeOutput(initialMessage);
  }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-gray-800"
      } font-mono p-4`}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl mb-4">Hello! I'm Andrew</h1>
        <div
          className={`bg-black border border-gray-700 rounded p-4 h-96 overflow-y-auto ${
            darkMode ? "bg-zinc-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <div>
            {output.map((line, index) => (
              <p
                key={index}
                className={`${darkMode ? "text-green-500" : "text-gray-800"}`}
              >
                &gt; {line}
              </p>
            ))}
          </div>
          <form
            onSubmit={handleCommand}
            className="mt-2 flex items-center gap-2"
          >
            <span
              className={`${darkMode ? "text-green-500" : "text-green-700"}`}
            >
              &gt;
            </span>
            <input
              type="text"
              className={`${
                darkMode ? "bg-zinc-800 text-green-500" : "bg-white text-black"
              } focus:outline-none w-full`}
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              autoFocus
              placeholder="Type a command..."
              disabled={isTyping}
            />
          </form>
        </div>
        <p className="text-gray-500 mt-4">
          Type <span className="text-green-500">'help'</span> for a list of
          commands.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
