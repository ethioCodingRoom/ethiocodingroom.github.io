import { FaGithub, FaYoutube, FaFacebook, FaTelegram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import { SiHackerrank, SiKaggle, SiDatacamp, SiCoursera, SiReact, SiTypescript, SiTailwindcss, SiVite, SiGeeksforgeeks, SiCredly, SiR } from 'react-icons/si';

export const PersonalFooter = () => {
  return (
    <footer className="border-t border-[var(--site-border)] bg-slate-950 py-12 text-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 text-center sm:px-6 md:grid-cols-3 md:text-left">
        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Get In Touch</h3>
          <p className="mb-6 text-sm text-slate-300/80">
            Find me on Telegram, Facebook, and X, or reach me directly by email at
            <a href="mailto:asregam@gmail.com" className="mt-1 block text-cyan-300 hover:underline">asregam@gmail.com</a>
          </p>
          <div className="flex justify-center gap-3 text-2xl md:justify-start">
            <a href="https://t.me/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Telegram" className="rounded-lg p-2"><FaTelegram className="transition-colors hover:text-blue-400" /></a>
            <a href="https://facebook.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-lg p-2"><FaFacebook className="transition-colors hover:text-blue-600" /></a>
            <a href="https://x.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="X" className="rounded-lg p-2"><FaTwitter className="transition-colors hover:text-white" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Accomplishments</h3>
          <p className="mb-4 text-sm text-slate-300/80">
            See my achievements, certifications, and coding accomplishments across learning and challenge platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-2xl md:justify-start">
            <a href="https://github.com/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="rounded-lg p-2"><FaGithub className="transition-colors hover:text-gray-400" /></a>
            <a href="https://www.hackerrank.com/profile/asresgamu" target="_blank" rel="noreferrer" aria-label="HackerRank" title="HackerRank" className="rounded-lg p-2"><SiHackerrank className="transition-colors hover:text-green-500" /></a>
            <a href="https://www.coursera.org/user/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="Coursera" title="Coursera" className="rounded-lg p-2"><SiCoursera className="transition-colors hover:text-blue-500" /></a>
            <a href="https://www.datacamp.com/portfolio/asresgamu" target="_blank" rel="noreferrer" aria-label="DataCamp" title="DataCamp" className="rounded-lg p-2"><SiDatacamp className="transition-colors hover:text-yellow-500" /></a>
            <a href="https://www.kaggle.com/asresgamu" target="_blank" rel="noreferrer" aria-label="Kaggle" title="Kaggle" className="rounded-lg p-2"><SiKaggle className="transition-colors hover:text-blue-400" /></a>
            <a href="https://posit.cloud/spaces/736077/users/3504229" target="_blank" rel="noreferrer" aria-label="R / Posit Cloud" title="R / Posit Cloud" className="rounded-lg p-2"><SiR className="transition-colors hover:text-blue-500" /></a>
            <a href="https://public.tableau.com/app/profile/asres.yelia/vizzes" target="_blank" rel="noreferrer" aria-label="Tableau Public" title="Tableau Public" className="rounded-lg p-2"><IoLogoTableau className="transition-colors hover:text-sky-400" /></a>
            <a href="https://www.geeksforgeeks.org/profile/asresgamu/" target="_blank" rel="noreferrer" aria-label="GeeksforGeeks" title="GeeksforGeeks" className="rounded-lg p-2"><SiGeeksforgeeks className="text-gray-400 transition-colors hover:text-green-500" /></a>
            <a href="https://www.credly.com/users/ethiocodingroom" target="_blank" rel="noreferrer" aria-label="Credly" title="Credly" className="rounded-lg p-2"><SiCredly className="transition-colors hover:text-orange-400" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-cyan-300">Tutorials & Stack</h3>
          <p className="mb-4 text-sm text-slate-300/80">
            Subscribe and follow me for tutorials, project walkthroughs, and practical data analytics content.
          </p>
          <div className="mb-6 flex justify-center gap-3 text-2xl md:justify-start">
            <a href="https://www.youtube.com/c/ethioCodingRoom" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-lg p-2"><FaYoutube className="transition-colors hover:text-red-600" /></a>
            <a href="https://www.tiktok.com/@ethio.coding.room" target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-lg p-2"><FaTiktok className="transition-colors hover:text-pink-500" /></a>
          </div>
          <p className="mb-2 text-xs text-slate-300/70">Built with:</p>
          <div className="flex justify-center gap-4 text-xl text-slate-300/70 md:justify-start">
            <SiReact title="React" className="transition-colors duration-300 hover:text-blue-400" />
            <SiTypescript title="TypeScript" className="transition-colors duration-300 hover:text-blue-600" />
            <SiTailwindcss title="Tailwind CSS" className="transition-colors duration-300 hover:text-teal-400" />
            <SiVite title="Vite" className="transition-colors duration-300 hover:text-purple-400" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-slate-300/50">
        © {new Date().getFullYear()} Asres Gamu Yelia. Personal portfolio and professional brand.
      </div>
    </footer>
  );
};