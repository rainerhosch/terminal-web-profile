import { NextResponse } from 'next/server';
import {GoogleGenAI} from '@google/genai';

export async function POST(request) {
    const { prompt } = await request.json();

    // 1. Dapatkan respons dari model AI
    // Contoh: Menggunakan OpenAI API
    // Anda harus menginstal 'openai' dan menyetel API key.
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     { role: "system", content: "You are a helpful assistant that answers questions about [Nama Anda]'s portfolio." },
    //     { role: "user", content: prompt }
    //   ],
    // });

    // 2. Dapatkan respons dari Gemini API
    // Instal 'genai' atau library yang sesuai
    // const { GoogleGenerativeAI } = require("@google/generative-ai");
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenAI({apiKey: GEMINI_API_KEY});
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        // const response = await genAI.models.generateContent({
        //     // model: 'gemini-pro',
        //     model: 'gemini-2.5-flash-lite',
        //     // model: 'gemini-2.5-flash',
        //     contents:`Based on the following context, answer the user's question. If the question is outside of this context, politely decline.
        //     Context:
        //     - My name is [Rizky Oktan], I'm a[ tech enthusiasts with a passion for building awesome things with the code].
        //     - My background [S1 Teknik Informatika (STT WASTUKANCANA), S2 Ilmu Komputer (Universitas Budi Luhur)]
        //     - My skills are [Programming, Api Architect, AI Agent Engineer, Prompt Engineer, Data Science, Web Dev.
        //     - My other skills is [server maintener, configure server virtualization, container, remote worker, familiar with ubuntu server, alma linux, proxmox, and cloud environtment.].
        //     - My projects are [Pengo NFT: Project NFT dan smart contract di jaringan Ethereum, 
        //     Pembuat Smart Contract & DApp: Pengembangan smart contract dan aplikasi terdesentralisasi (DApp), 
        //     Agentic AI for Akademik: AI agent untuk membantu proses akademik dan pembelajaran,
        //     Asisten Pencatatan dengan Agent AI: Asisten cerdas untuk pencatatan dan otomasi tugas,
        //     Sistem Informasi Akademik: Platform untuk manajemen data akademik dan administrasi kampus/sekolah,
        //     Sistem Keuangan: Aplikasi untuk pengelolaan keuangan dan akuntansi,
        //     Aplikasi POS: Sistem Point of Sales untuk kebutuhan retail dan bisnis,
        //     Marketplace untuk PT Supply: Platform marketplace khusus untuk perusahaan supply,
        //     Kontributor di Blockchain Abstract: Berkontribusi pada pengembangan proyek blockchain Abstract,
        //     ...dan berbagai project teknologi lainnya.
        //     ].
        //     - My contact info: [Email: rz.oktan@gmail.com], [GitHub: https://github.com/rainerhosch/], [LinkedIn: https://www.linkedin.com/in/rizky-ardiansyah-5ba6b9289].
            
        //     User's question: "${prompt}"`
        // });
        const response = await genAI.models.generateContent({
            // model: 'gemini-pro',
            model: 'gemini-2.5-flash-lite',
            // model: 'gemini-2.5-flash',
            contents:`Anda adalah asisten AI yang dirancang untuk menjawab pertanyaan seputar profil profesional Rizky Oktan. Jawaban Anda harus singkat, jelas, dan hanya berdasarkan konteks yang diberikan. Jika ada pertanyaan di luar informasi ini, sampaikan dengan sopan bahwa Anda tidak dapat menjawabnya.
            PENTING: memberikan informasi berdasarkan data yang telah diberikan, struktur balasan tidak harus persis konteks data, kamu bisa membuatnya, seperti percakapan santai tidak terlalu formal.
            ---

            # Tentang Rizky Oktan

            ## Informasi Pribadi
            - **Nama:** Rizky Oktan
            - **Profesi:** Tech enthusiast yang memiliki passion dalam membangun inovasi melalui sebuah code.

            ## Pendidikan
            - **S2, M.Kom (Magister Ilmu Komputer):** Universitas Budi Luhur (masuk tahun 2023)
            - **S1, S.Kom (Teknik Informatika):** STT Wastukancana (2014-2019)
            - **Kursus: Database Professional Application:** Coding Studio (2023)
            - **Kursus: Ethereum Developer Bootcamp:** Ethereum Developer (2021)

            ## Pengalaman Profesional
            - **Staf Pengembangan Sistem Informasi:** STT Wastukancana Purwakarta (2020 - Sekarang)
            - Mengembangkan sistem informasi menggunakan PHP dan JavaScript.
            - **Partner Developer:** OPTIMISM LAB (2019 - Sekarang)
            - Berkontribusi sebagai partner ekosistem, membangun DApp dengan Next.js, React, dan Solidity.
            - **Full Stack Developer:** PT SUPPLY (2016 - 2018)
            - Fokus pada pengembangan backend, membangun API server dengan Node.js.
            - **IT Support:** PT Outdoor Footwer Network (2013 - 2015)
            - Menangani masalah jaringan serta pemeliharaan perangkat lunak dan perangkat keras.

            ## Keahlian & Kompetensi Utama
            - **Full Stack Development:** Mahir dalam **MERN stack** (MongoDB, Express.js, React.js, Node.js) dengan pemahaman mendalam tentang server-side rendering, integrasi API, dan manajemen basis data.
            - **Web3 & Pengembangan Smart Contract:** Berpengalaman membangun **DApp dan smart contract** menggunakan Solidity, Ether.js, Wagmi, React, dan Next.js, serta ahli dalam manajemen basis data blockchain.
            - **AI & Machine Learning:** Antusias dalam pengembangan **chatbot**, **pengolahan citra digital**, **pengenalan gambar**, **penyimpanan DNA**, dan pembuatan model untuk Hugging Face.
            - **Desain (UI/UX):** Mahir menggunakan **Figma, Adobe XD, dan Adobe Illustrator**. Berpengalaman dalam desain UI/UX dan desain grafis dari hackathon maupun freelance.
            - **Programming**
            - **API Architect**
            - **AI Agent Engineer**
            - **Prompt Engineer**
            - **Data Science**
            - **Web Development**
            - **GitHub & Open Source:** Mahir menggunakan **GitHub** untuk version control dan kolaborasi. Aktif sebagai kontributor open source, berkomitmen belajar dari best practice dan berkontribusi ke komunitas.

            ## Keahlian & Kompetensi Lain
            - Pemeliharaan dan konfigurasi server
            - Virtualisasi server (Proxmox)
            - Containerization
            - Familiar dengan Ubuntu Server, Alma Linux, dan lingkungan cloud
            - Remote working

            ## Proyek Pilihan
            - **Pengo NFT:** Proyek NFT dan smart contract di jaringan Ethereum.
            - **Pengembangan Smart Contract & DApp:** Membuat aplikasi terdesentralisasi (DApp) dan smart contract.
            - **Agentic AI untuk Akademik:** AI agent untuk membantu proses akademik dan pembelajaran.
            - **Asisten Pencatatan Berbasis AI:** Asisten cerdas untuk otomasi pencatatan.
            - **Sistem Informasi Akademik:** Platform untuk manajemen data akademik dan administrasi kampus.
            - **Sistem Keuangan:** Aplikasi untuk pengelolaan keuangan dan akuntansi.
            - **Aplikasi POS:** Sistem Point of Sales untuk kebutuhan retail dan bisnis.
            - **Marketplace untuk PT Supply:** Platform marketplace khusus.
            - **Kontributor Blockchain Abstract:** Berkontribusi dalam pengembangan proyek Blockchain Abstract.

            ## Kontak
            - **Email:** rz.oktan@gmail.com
            - **GitHub:** https://github.com/rainerhosch/
            - **LinkedIn:** https://www.linkedin.com/in/rizky-ardiansyah-5ba6b9289/

            ---

            User's question: "${prompt}"`
        });

        const responseText = response.text;
        return NextResponse.json({ text: responseText });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Sorry, I couldn't process that request." }, { status: 500 });
    }
}