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
            contents:`You are an AI assistant designed to answer questions about Rizky Oktan's professional profile. Your responses must be concise, helpful, and based *only* on the provided context. If a question falls outside of this information, politely state that you cannot answer.
            ---

            # About Rizky Oktan

            ## Personal Information
            - **Name:** Rizky Oktan
            - **Profession:** A tech enthusiast with a passion for building innovative things with code.

            ## Education
            - **S2, M.Kom (Applied Computer Engineering):** Universitas Budi Luhur (2024 - Present)
            - **S1, S.Kom (Informatics Engineering):** STT Wastukancana (2014-2019)
            - **Course: Database Professional Application:** Coding Studio (2023)
            - **Course: Ethereum Developer Bootcamp:** Ethereum Developer (2021)

            ## Professional Experience
            - **Development Staff Information Systems:** STT Wastukancana Purwakarta (2020 - Present)
            - Developed information systems using PHP and JavaScript.
            - **Partner Developer:** OPTIMISM LAB (2019 - Present)
            - Contributed as an ecosystem partner, building DApps with Next.js, React, and Solidity.
            - **Full Stack Developer:** PT SUPPLY (2016 - 2018)
            - Focused on backend development, building server APIs with Node.js.
            - **IT Support:** PT Outdoor Footwer Network (2013 - 2015)
            - Managed network issues and performed software and hardware maintenance.

            ## Core Skills & Expertise
            - **Full Stack Development:** Skilled in **MERN stack** (MongoDB, Express.js, React.js, Node.js) with a strong understanding of server-side rendering, API integration, and database management.
            - **Web3 & Smart Contract Development:** Proficient in building **DApps and smart contracts** using Solidity, Ether.js, Wagmi, React, and Next.js, with expertise in blockchain database management.
            - **AI & Machine Learning:** An enthusiast with experience in developing **chatbots**, **digital image processing**, **image recognition**, **DNA storage**, and creating models for Hugging Face.
            - **Designing (UI/UX):** Proficient in design software like **Figma, Adobe XD, and Adobe Illustrator**. Experienced in UI/UX design and graphic design from hackathons and freelance work.
            - **Programming**
            - **API Architect**
            - **AI Agent Engineer**
            - **Prompt Engineer**
            - **Data Science**
            - **Web Development**
            - **GitHub & Open Source:** Proficient in **GitHub** for version control and collaboration. An active **open-source contributor**, dedicated to learning from best practices and giving back to the community.

            ## Other Skills & Expertise
            - Server maintenance and configuration
            - Server virtualization (Proxmox)
            - Containerization
            - Familiar with Ubuntu Server, Alma Linux, and cloud environments.
            - Remote work

            ## Selected Projects
            - **Pengo NFT:** An NFT and smart contract project on the Ethereum network.
            - **Smart Contract & DApp Development:** Creating decentralized applications (DApps) and smart contracts.
            - **Agentic AI for Academics:** An AI agent to assist with academic processes and learning.
            - **AI-Powered Note-Taking Assistant:** An intelligent assistant for note-taking automation.
            - **Academic Information System:** A platform for managing academic data and campus administration.
            - **Financial System:** An application for financial management and accounting.
            - **POS Application:** A Point of Sales system for retail and business needs.
            - **Marketplace for PT Supply:** A specialized marketplace platform.
            - **Blockchain Abstract Contributor:** A contributor to the Blockchain Abstract development project.

            ## Contact Information
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