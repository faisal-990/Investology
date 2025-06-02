import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-gradient-to-b from-red-400 to-sky-600 flex flex-col items-center justify-center h-60 text-white py-4">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-xl font-semibold">Connect with me</h2>
        <div className="flex space-x-6 text-2xl">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black transition-colors" />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-300 transition-colors" />
          </a>
        <a href="##" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="hover:text-sky-500 transition-colors"/>
      </a>
        </div>
      </div>

      <div className="text-center text-black mt-6 text-sm">
        <strong>© 31/05/2025 Md Sawez Faisal. All Rights Reserved.</strong>
      </div>
    </section>
  );
}

export default Footer;

