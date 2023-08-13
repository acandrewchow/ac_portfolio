const ContactSection = ({ darkMode }) => {
    return (
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl text-center py-1 ${darkMode ? 'text-white' : 'dark:text-white'} mb-8`}>
            Contact Me
          </h2>
          <div className="max-w-md mx-auto">
            <p className={`text-center py-1 ${darkMode ? 'text-white' : 'dark:text-white'}`}>
              Have a question or want to work together? Feel free to reach out.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 border rounded-md focus:ring ${darkMode ? 'focus:ring-gray-500' : 'focus:ring-teal-400'} focus:outline-none`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 border rounded-md focus:ring ${darkMode ? 'focus:ring-gray-500' : 'focus:ring-teal-400'} focus:outline-none`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-md focus:ring ${darkMode ? 'focus:ring-gray-500' : 'focus:ring-teal-400'} focus:outline-none`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition duration-300`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  