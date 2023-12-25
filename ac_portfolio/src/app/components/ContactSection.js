const ContactSection = ({ darkMode }) => {
  return (
    <section className={`font-firacode py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-semibold  text-center py-1 ${
            darkMode ? "text-white" : "dark:text-white"
          } mb-4`}
        >
          Contact Me
        </h2>
        <div className="max-w-md mx-auto">
          <p
            className={`text-center py-1 ${
              darkMode ? "text-white" : "dark:text-white"
            }`}
          >
            ☕ Let's connect! Feel free to leave a message. 📩
          </p>
          <form
            className="space-y-4"
            action="https://formspree.io/f/meqnpqdw"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className={`block ${
                  darkMode ? "text-white" : "text-black"
                } mb-1`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 border rounded-md focus:ring ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-400"
                } focus:outline-none`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block ${
                  darkMode ? "text-white" : "text-black"
                } mb-1`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 border rounded-md focus:ring ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-400"
                } focus:outline-none`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block ${
                  darkMode ? "text-white" : "text-black"
                } mb-1`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:ring ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-400"
                } focus:outline-none`}
              ></textarea>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
