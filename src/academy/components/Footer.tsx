import { FaGithub, FaYoutube, FaFacebook, FaTelegram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { SiHackerrank, SiKaggle, SiDatacamp, SiCoursera, SiReact, SiTypescript, SiTailwindcss, SiVite, SiGeeksforgeeks, SiCredly } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--site-border)] bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 text-center sm:px-6 md:grid-cols-3 md:text-left">
        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Education Platform</h3>
          <p className="mb-6 text-sm text-slate-300/80">
            A frontend-first version of EthioCodingRoom focused on data science, analytics, machine learning, AI, data engineering, and deep learning.
            <a href="mailto:asregam@gmail.com" className="mt-1 block text-cyan-300 hover:underline">asregam@gmail.com</a>
          </p>
          <div className="flex justify-center gap-3 text-2xl md:justify-start">
            <a href="https://t.me/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Telegram" className="rounded-lg p-2"><FaTelegram className="hover:text-blue-400 transition-colors" /></a>
            <a href="https://facebook.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-lg p-2"><FaFacebook className="hover:text-blue-600 transition-colors" /></a>
            <a href="https://x.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="X" className="rounded-lg p-2"><FaTwitter className="hover:text-white transition-colors" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Community Links</h3>
          <p className="mb-4 text-sm text-slate-300/80">
            External platforms that can support the community, public profile, and future resource-sharing ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-2xl md:justify-start">
            <a href="https://github.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2"><FaGithub className="hover:text-gray-400 transition-colors" /></a>
            <a href="https://www.hackerrank.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="HackerRank" className="rounded-lg p-2"><SiHackerrank className="hover:text-green-500 transition-colors" /></a>
            <a href="https://www.coursera.org/user/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Coursera" className="rounded-lg p-2"><SiCoursera className="hover:text-blue-500 transition-colors" /></a>
            <a href="https://www.datacamp.com/portfolio/asresgamu" target="_blank" rel="noreferrer" aria-label="DataCamp" className="rounded-lg p-2"><SiDatacamp className="hover:text-yellow-500 transition-colors" /></a>
            <a href="https://www.kaggle.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Kaggle" className="rounded-lg p-2"><SiKaggle className="hover:text-blue-400 transition-colors" /></a>
            <a href="https://www.geeksforgeeks.org/profile/asresgamu/" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks" className="rounded-lg p-2"><SiGeeksforgeeks className="text-gray-400 hover:text-green-500 transition-colors" /></a>
            <a href="https://www.credly.com/users/ethiocodingroom" target="_blank" rel="noreferrer" aria-label="Credly" className="rounded-lg p-2"><SiCredly className="hover:text-orange-400 transition-colors" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Frontend Stack</h3>
          <p className="mb-4 text-sm text-slate-300/80">
            The current build is intentionally frontend only, which makes it fast to iterate now and straightforward to connect to Django later for courses, students, and AI learning workflows.
          </p>
          <div className="mb-6 flex justify-center gap-3 text-2xl md:justify-start">
            <a href="https://www.youtube.com/c/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-lg p-2"><FaYoutube className="hover:text-red-600 transition-colors" /></a>
            <a href="https://www.tiktok.com/@ethio.coding.room" target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-lg p-2"><FaTiktok className="hover:text-pink-500 transition-colors" /></a>
          </div>
          <p className="mb-2 text-xs text-slate-300/70">Built with:</p>
          <div className="flex justify-center gap-4 text-xl text-slate-300/70 md:justify-start">
            <SiReact title="React" className="hover:text-blue-400 transition-colors duration-300" />
            <SiTypescript title="TypeScript" className="hover:text-blue-600 transition-colors duration-300" />
            <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-400 transition-colors duration-300" />
            <SiVite title="Vite" className="hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-slate-300/50">
        © {new Date().getFullYear()} EthioCodingRoom Academy. Frontend preview for a future educational platform.
      </div>
    </footer>
  );
};