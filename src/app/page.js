import Terminal from '../components/Terminal';

// const sharp = require('sharp');

// sharp('public/images/bg-1.jpeg')
//   .webp({ quality: 80 })
//   .toFile('public/images/bg-1.webp')
//   .then(() => console.log('Konversi selesai!'))
//   .catch(err => console.error('Gagal konversi:', err));

export default function Home() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
    // <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#0dabff] via-[#00a17f] to-black">
    <div className="flex items-center justify-center min-h-screen p-4 bg-[url('/images/bg-1.webp')] bg-cover bg-center">
      <Terminal />
    </div>
  );
}