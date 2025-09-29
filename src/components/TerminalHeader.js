import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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