import Terminal from '../components/Terminal';

export default function Home() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
    // <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#0dabff] via-[#00a17f] to-black">
    <div className="flex items-center justify-center min-h-screen p-4 bg-[url('/images/bg-1.jpeg')] bg-cover bg-center">
      <Terminal />
    </div>
  );
}