import TerminalHeader from './TerminalHeader';
import TerminalAiContent from './TerminalAiContent';

export default function Terminal() {
    return (
        <div className="w-full max-w-3xl h-[600px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden font-mono">
            <TerminalHeader />
            <TerminalAiContent />
        </div>
    );
}