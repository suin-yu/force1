import React, { useRef, useEffect } from 'react';
import styles from './LiveTalkSection.module.css';

// Video Asset
import bgVideo from '../../assets/video/forceforce.mp4';

// Dummy Icons (Using placeholders or re-using existing icons if available)
import user1 from '../../assets/img/home/fan1.png';
import user2 from '../../assets/img/home/fan2.png';
import user3 from '../../assets/img/home/fan3.png';
import user4 from '../../assets/img/home/fan4.png';
import sendBtnImg from '../../assets/img/home/send_btn.png';
import heartImg from '../../assets/img/home/heart.png';

const LiveTalkSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Misc speed adjustment if needed
        }
    }, []);

    const chatData = [
        { id: 1, name: "PitCrew", msg: "예선은 봤어?", img: user1 },
        { id: 2, name: "RedFlag", msg: "출발 미쳤다 와...", img: user2 },
        { id: 3, name: "NorrisFan", msg: "방금 오버테이크 봤어?", img: user3 },
        { id: 4, name: "TurboMax", msg: "이게 F1이지 ㄷㄷ", img: user4 },
    ];

    return (
        <section className={styles.liveTalkSection}>
            {/* 1. Header */}
            <div className={styles.header}>
                <div className={styles.indicatorWrapper}>
                    <div className={styles.redDot}></div>
                </div>
                <h2 className={styles.title}>Live Talk</h2>
            </div>

            {/* 2. Video Container */}
            <div className={styles.videoContainer}>
                <video
                    ref={videoRef}
                    className={styles.bgVideo}
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Gradient Overlays for Readability */}
                <div className={styles.topGradient}></div>
                <div className={styles.bottomGradient}></div>

                {/* 3. Chat Overlay */}
                <div className={styles.chatOverlay}>
                    <div className={styles.chatList}>
                        {chatData.map((chat) => (
                            <div key={chat.id} className={styles.chatRow}>
                                <div className={styles.avatar}>
                                    <img src={chat.img} alt={chat.name} />
                                </div>
                                <div className={styles.messageBubble}>
                                    <span className={styles.userName}>{chat.name}</span>
                                    <span className={styles.userMsg}>{chat.msg}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Input Area */}
                <div className={styles.inputWrapper}>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="채팅하기" className={styles.chatInput} />
                        <button className={styles.sendBtn}>
                            <img src={sendBtnImg} alt="Send" />
                        </button>
                    </div>
                    <button className={styles.heartBtn}>
                        <img src={heartImg} alt="Like" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LiveTalkSection;
