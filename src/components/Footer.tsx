
import { FaGithub, FaYoutube, FaFacebook, FaTelegram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { SiHackerrank, SiKaggle, SiDatacamp, SiCoursera, SiReact, SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact & Socials */}
        <div>
          <h3 className="font-bold mb-4 text-indigo-400">Get In Touch</h3>
          <p className="text-sm text-gray-400 mb-6">
            Contact me on Telegram, Facebook, or via email at 
            <a href="mailto:asregam@gmail.com" className="text-indigo-400 block mt-1 hover:underline">asregam@gmail.com</a>
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://t.me/ethioCodingRoom" aria-label="Telegram"><FaTelegram className="hover:text-blue-400 transition-colors" /></a>
            <a href="https://facebook.com/ethioCodingRoom" aria-label="Facebook"><FaFacebook className="hover:text-blue-600 transition-colors" /></a>
            <a href="https://x.com/ethioCodingRoom" aria-label="X"><FaTwitter className="hover:text-white transition-colors" /></a>
          </div>
        </div>

        {/* Accomplishments */}
        <div>
          <h3 className="font-bold mb-4 text-indigo-400">Accomplishments</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/ethioCodingRoom" aria-label="GitHub"><FaGithub className="hover:text-gray-400 transition-colors" /></a>
            <a href="https://www.hackerrank.com/ethioCodingRoom" aria-label="HackerRank"><SiHackerrank className="hover:text-green-500 transition-colors" /></a>
            <a href="https://www.coursera.org/user/ethioCodingRoom" aria-label="Coursera"><SiCoursera className="hover:text-blue-500 transition-colors" /></a>
            <a href="https://www.datacamp.com/profile/ethioCodingRoom" aria-label="DataCamp"><SiDatacamp className="hover:text-yellow-500 transition-colors" /></a>
            <a href="https://www.kaggle.com/ethioCodingRoom" aria-label="Kaggle"><SiKaggle className="hover:text-blue-400 transition-colors" /></a>
          </div>
        </div>

        {/* Tutorials & Tech Stack */}
        <div>
          <h3 className="font-bold mb-4 text-indigo-400">Tutorials & Stack</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl mb-6">
            <a href="https://www.youtube.com/c/ethioCodingRoom" aria-label="YouTube"><FaYoutube className="hover:text-red-600 transition-colors" /></a>
            <a href="https://www.tiktok.com/@ethio.coding.room" aria-label="TikTok"><FaTiktok className="hover:text-pink-500 transition-colors" /></a>
          </div>
          <p className="text-xs text-gray-500 mb-2">Built with:</p>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
            <SiReact title="React" className="hover:text-blue-400 transition-colors duration-300" />
            <SiTypescript title="TypeScript" className="hover:text-blue-600 transition-colors duration-300" />
            <SiTailwindcss title="Tailwind CSS" className="hover:text-teal-400 transition-colors duration-300" />
            <SiVite title="Vite" className="hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-xs text-gray-600">
        © {new Date().getFullYear()} EthioCodingRoom. All rights reserved.
      </div>
    </footer>
  );
};