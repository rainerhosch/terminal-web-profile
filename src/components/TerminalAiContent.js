'use client';

import { useState } from 'react';
import TypingEffect from './TypingEffect';
import Prompt from './Prompt';

// ... (Kode sebelumnya)
const COMMANDS = {
    help: `Available commands:
    - tellme      : Get asiste by ai agent.
    - about       : Get to know me.
    - background  : View my graduation.
    - projects    : View my projects.
    - contact     : Find my contact info.
    - clear       : Clear the terminal.`,
    about: `Hello, I'm Rizky Oktan!
  I'm a tech enthusiasts with a passion for building awesome things with the code.
  My skills on technology include Programming, Api Architect, AI Agent Engineer, 
  Prompt Engineer, Data Science, Web Dev.
  My other skills is server maintener, configure server virtualization, container, 
  remote worker, familiar with ubuntu server, alma linux, proxmox, 
  and cloud environtment.`,
    background:`Here is my background:
    S1 Teknik Informatika (STT WASTUKANCANA) 
    S2 Ilmu Komputer (Universitas Budi Luhur) 
    `,
    projects: `Featured Projects:
  - Pengo NFT: Project NFT dan smart contract di jaringan Ethereum.
  - Pembuat Smart Contract & DApp: Pengembangan smart contract dan aplikasi terdesentralisasi (DApp).
  - Agentic AI for Akademik: AI agent untuk membantu proses akademik dan pembelajaran.
  - Asisten Pencatatan dengan Agent AI: Asisten cerdas untuk pencatatan dan otomasi tugas.
  - Sistem Informasi Akademik: Platform untuk manajemen data akademik dan administrasi kampus/sekolah.
  - Sistem Keuangan: Aplikasi untuk pengelolaan keuangan dan akuntansi.
  - Aplikasi POS: Sistem Point of Sales untuk kebutuhan retail dan bisnis.
  - Marketplace untuk PT Supply: Platform marketplace khusus untuk perusahaan supply.
  - Kontributor di Blockchain Abstract: Berkontribusi pada pengembangan proyek blockchain Abstract.
  - ...dan berbagai project teknologi lainnya.`,
    contact: `You can find me here:
  - Email: rz.oktan@gmail.com
  - GitHub: https://github.com/rainerhosch/
  - LinkedIn: https://www.linkedin.com/in/rizky-ardiansyah-5ba6b9289`,
};

export default function TerminalAiContent() {
    // ... (State dan variabel lainnya)
    const [history, setHistory] = useState([
        // { type: 'output', text: 'Welcome to my portfolio! Type `help` to get started.' }
    ]);
    const [input, setInput] = useState('');

    const handleCommand = async (command) => {
        
        // Tambahkan perintah AI
        if (command.startsWith('ai')) {
            const prompt = command.substring(3).trim();
            setHistory(prev => [
                ...prev,
                { type: 'input', text: command },
                { type: 'output', text: 'Thinking...\n' }
            ]);

            try {
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt }),
                });

                const data = await res.json();
                const aiResponse = data.text || data.error;

                setHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1] = { type: 'output', text: aiResponse }; // Ganti 'Thinking...' dengan respons AI
                    return newHistory;
                });
            } catch (error) {
                setHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1] = { type: 'output', text: 'Error: Could not connect to AI assistant.' };
                    return newHistory;
                });
            }
        } else {
            // Perintah internal yang sudah ada
            const output = COMMANDS[command] || `Command not found: ${command}. Type \`help\` for a list of commands or \`ai [your question]\` to ask my AI assistant.`;
            setHistory(prev => [
                ...prev,
                { type: 'input', text: command },
                { type: 'output', text: output }
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const command = input.trim().toLowerCase();
            if (command === 'clear') {
                setHistory([]);
            } else {
                handleCommand(command);
            }
            setInput('');
        }
    };

    // ... (Fungsi handleKeyDown dan return JSX)
    // Perbarui pesan sambutan di `TypingEffect` atau di `history` awal
    // "Welcome to my portfolio! Type `help` to get started or `ai [your question]` to ask my AI assistant."
    return (
        <div className="p-4 text-green-400 h-[calc(100%-40px)] overflow-y-auto">
            <div className="mb-2">
                <TypingEffect text="Hello, and Welcome to my portfolio! Type `help` to get started or `ai [your question]` to ask my AI assistant." />
            </div>
            {history.map((entry, index) => (
                <div key={index} className="mb-2">
                    {entry.type === 'input' && <Prompt command={entry.text} />}
                    {entry.type === 'output' && <pre className="whitespace-pre-wrap"><TypingEffect text={entry.text}/></pre>}
                </div>
            ))}
            <div className="flex items-center">
                <span className="text-gray-400 mr-2">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent focus:outline-none flex-grow"
                    autoFocus
                />
            </div>
        </div>
    );
}