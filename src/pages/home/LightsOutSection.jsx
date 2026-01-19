import React, { useEffect, useState, useRef } from 'react';
import styles from './LightsOutSection.module.css';

// Import Assets
import emojiBg from '../../assets/img/home/emoji_bg.png';
import emoji1 from '../../assets/img/home/emoji1.png';
import emoji2 from '../../assets/img/home/emoji2.png';
import emoji3 from '../../assets/img/home/emoji3.png';
import emoji4 from '../../assets/img/home/emoji4.png';
import emoji5 from '../../assets/img/home/emoji5.png';
import emoji6 from '../../assets/img/home/emoji6.png';
import emoji7 from '../../assets/img/home/emoji7.png';

const emojiImages = [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7];

const LightsOutSection = () => {
    const [emojis, setEmojis] = useState([]);
    const emojiIdCounter = useRef(0);

    // Scroll Observer for Text Animation
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% visible
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    // Emoji Popcorn Logic
    useEffect(() => {
        if (!isVisible) return;

        const spawnEmoji = () => {
            const id = emojiIdCounter.current++;
            const randomImg = emojiImages[Math.floor(Math.random() * emojiImages.length)];

            // Launch Zone: Wider base (40% to 60%) to prevent clumping
            const startX = 40 + Math.random() * 20;

            // Spread Calculation: More extreme "Explosion"
            // Angle varies from -60 (left) to 60 (right)
            const angle = (Math.random() - 0.5) * 120;

            // Horizontal travel distance: HUGE spread
            const xOffset = angle * 12; // Much wider drift

            // Speed: Some very fast (0.8s), some slow floaters (3s)
            const duration = 0.8 + Math.random() * 2.5;

            // Size: Extreme variance (Tiny 30px to Giant 130px)
            const size = 30 + Math.random() * 100;

            // Rotation: Full chaotic spin
            const rotate = -180 + Math.random() * 360;

            const newEmoji = {
                id,
                img: randomImg,
                style: {
                    left: `${startX}%`,
                    width: `${size}px`,
                    animationDuration: `${duration}s`,
                    '--x-offset': `${xOffset}px`,
                    '--rotate': `${rotate}deg`,
                }
            };

            setEmojis(prev => [...prev, newEmoji]);

            setTimeout(() => {
                setEmojis(prev => prev.filter(e => e.id !== id));
            }, duration * 1000);
        };

        // Ultra-high density bursts: spawn faster
        const interval = setInterval(spawnEmoji, 100);
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className={styles.section} style={{ backgroundImage: `url(${emojiBg})` }}>
            {/* Text Content */}
            <div className={`${styles.content} ${isVisible ? styles.animate : ''}`}>
                <h2 className={styles.title}>
                    <span className={styles.line} style={{ animationDelay: '0.2s' }}>Lights out</span>
                    <span className={styles.line} style={{ animationDelay: '0.4s' }}>and away</span>
                    <span className={styles.line} style={{ animationDelay: '0.6s' }}>we go!</span>
                </h2>
            </div>

            {/* Emoji Container */}
            <div className={styles.emojiContainer}>
                {emojis.map(emoji => (
                    <img
                        key={emoji.id}
                        src={emoji.img}
                        alt="emoji"
                        className={styles.emoji}
                        style={emoji.style}
                    />
                ))}
            </div>
        </section>
    );
};

export default LightsOutSection;
