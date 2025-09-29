export default function Prompt({ command }) {
    return (
        <div className="flex items-center">
            <span className="text-gray-400 mr-2">$</span>
            <span>{command}</span>
        </div>
    );
}