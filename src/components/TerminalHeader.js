export default function TerminalHeader() {
    return (
        <div className="flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
            <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-sm font-semibold text-gray-400">
            © {new Date().getFullYear()} Rizky Oktan - Personal Portfolio
            </div>
            <div className="w-8"></div> {/* Spacer */}
        </div>
    );
}