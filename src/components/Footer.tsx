
import { FaGithub, FaYoutube, FaFacebook, FaTelegram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { SiHackerrank, SiKaggle, SiDatacamp, SiCoursera, SiReact, SiTypescript, SiTailwindcss, SiVite, SiGeeksforgeeks } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--site-border)] bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3 md:text-left">
        
        {/* Contact & Socials */}
        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Get In Touch</h3>
          <p className="mb-6 text-sm text-slate-300/80">
            Contact me on Telegram, Facebook, or via email at 
            <a href="mailto:asregam@gmail.com" className="mt-1 block text-cyan-300 hover:underline">asregam@gmail.com</a>
          </p>
          <div className="flex justify-center gap-4 text-2xl md:justify-start">
            <a href="https://t.me/ethioCodingRoom" aria-label="Telegram"><FaTelegram className="hover:text-blue-400 transition-colors" /></a>
            <a href="https://facebook.com/ethioCodingRoom" aria-label="Facebook"><FaFacebook className="hover:text-blue-600 transition-colors" /></a>
            <a href="https://x.com/ethioCodingRoom" aria-label="X"><FaTwitter className="hover:text-white transition-colors" /></a>
          </div>
        </div>

        {/* Accomplishments */}
        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Accomplishments</h3>
          <div className="flex flex-wrap justify-center gap-4 text-2xl md:justify-start">
            <a href="https://github.com/ethioCodingRoom" aria-label="GitHub"><FaGithub className="hover:text-gray-400 transition-colors" /></a>
            <a href="https://www.hackerrank.com/ethioCodingRoom" aria-label="HackerRank"><SiHackerrank className="hover:text-green-500 transition-colors" /></a>
            <a href="https://www.coursera.org/user/ethioCodingRoom" aria-label="Coursera"><SiCoursera className="hover:text-blue-500 transition-colors" /></a>
            <a href="https://www.datacamp.com/profile/ethioCodingRoom" aria-label="DataCamp"><SiDatacamp className="hover:text-yellow-500 transition-colors" /></a>
            <a href="https://www.kaggle.com/ethioCodingRoom" aria-label="Kaggle"><SiKaggle className="hover:text-blue-400 transition-colors" /></a>
            <a href="https://www.geeksforgeeks.org/profile/asresgamu/" aria-label="GeeksforGeeks"><SiGeeksforgeeks className="text-gray-400 hover:text-green-500 transition-colors" /></a>
          </div>
        </div>

        {/* Tutorials & Tech Stack */}
        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Tutorials & Stack</h3>
          <div className="mb-6 flex justify-center gap-4 text-2xl md:justify-start">
            <a href="https://www.youtube.com/c/ethioCodingRoom" aria-label="YouTube"><FaYoutube className="hover:text-red-600 transition-colors" /></a>
            <a href="https://www.tiktok.com/@ethio.coding.room" aria-label="TikTok"><FaTiktok className="hover:text-pink-500 transition-colors" /></a>
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
        © {new Date().getFullYear()} EthioCodingRoom. All rights reserved.
      </div>
    </footer>
  );
};