import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function TerminalHeader() {
    return (
        <div className="flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="w-8"></div> {/* Spacer */}
            <div className="text-sm font-semibold text-gray-400">
                © {new Date().getFullYear()} Rizky Oktan - Personal Portfolio
            </div>
            <div className="w-8"></div> {/* Spacer */}
            {/* Tombol Sosial & Kontak (Kanan Atas) */}
            <div className="flex space-x-3 pr-2"> {/* pr-2 untuk padding kanan */}
                <a
                    href="https://www.instagram.com/rz._.ar" // Ganti dengan URL Instagram Anda
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram Profile"
                >
                    <FaInstagram size={18} />
                </a>
                <a
                    href="https://github.com/rainerhosch" // Ganti dengan URL GitHub Anda
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                >
                    <FaGithub size={18} />
                    {/* <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.043-3.338.726-4.042-1.616-4.042-1.616-.546-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.238 1.839 1.238 1.07 1.834 2.806 1.304 3.492.996.108-.776.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.467-2.381 1.236-3.222-.124-.304-.535-1.527.117-3.183 0 0 1.008-.323 3.3 1.23.958-.267 1.984-.4 3.003-.404 1.018.004 2.045.137 3.004.403 2.289-1.553 3.295-1.23 3.295-1.23.653 1.656.242 2.879.12 3.184.77.841 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.473 5.921.43.37.814 1.096.814 2.211 0 1.596-.014 2.884-.014 3.279 0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg> */}
                </a>
                
                <a
                    href="https://www.linkedin.com/in/rizky-ardiansyah-5ba6b9289/" // Ganti dengan URL LinkedIn Anda
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin size={18} />
                </a>
                <a
                    href="mailto:rz.oktan@gmail.com" // Ganti dengan alamat email Anda
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Send an Email"
                >
                    <FaEnvelope size={18} />
                </a>
            </div>
        </div>
    );
}