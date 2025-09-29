'use client';

import { useState, useEffect } from 'react';

export default function TypingEffect({ text }) {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setCurrentText(prev => prev + text.charAt(index));
                setIndex(prev => prev + 1);
            }, 20); // Kecepatan ketik
            return () => clearTimeout(timeoutId);
        }
    }, [index, text]);

    return <p>{currentText}</p>;
}