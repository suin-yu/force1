import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChatbotPg.module.css';

// Import Assets
import arrowIcon from '../../assets/img/top_btn.png';
import chatbotAvatar from '../../assets/img/home/chatbot.png';
import sendIcon from '../../assets/img/home/chatbot_btn.png';

const ChatbotPg = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: '어떤 도움이 필요하신가요?'
        },
        {
            id: 2,
            type: 'user',
            text: '2026년 F1에서 새로워지는 게 뭐야?'
        },
        {
            id: 3,
            type: 'bot',
            text: `엔진 규정이 완전히 바뀌어.\n🔌 전기 모터 비중이 커지고\n🌱 연료는 100% 지속가능 연료만 사용해.\n\n그래서 2026년은\n🚗 미래 자동차 기술에 더 가까워지는 시즌이야.`
        },
        {
            id: 4,
            type: 'user',
            text: '그럼 레이스 재미에도 영향이 있을까?'
        },
        {
            id: 5,
            type: 'bot',
            text: `있어.\n엔진이랑 차 규정이 동시에 바뀌면서\n⚖️ 팀 간 성능 격차가 다시 생길 수 있어.\n\n그래서 시즌 초반엔\n🎲 예측하기 어려운 레이스가 많고\n🔥 새로운 강팀이 나올 수도 있어.`
        }
    ]);

    const [inputValue, setInputValue] = useState('');

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMsg = {
            id: Date.now(),
            type: 'user',
            text: inputValue
        };

        setMessages(prev => [...prev, newMsg]);
        setInputValue('');

        // Simulate echo response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: '죄송해요, 저는 아직 학습 중인 AI 피트입니다. 😅\n조금 더 구체적으로 질문해 주시겠어요?'
            }]);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className={styles.pageContainer}>
            {/* Header */}
            <header className={styles.header}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    <img src={arrowIcon} alt="Back" className={styles.backIcon} />
                </button>
                <h1 className={styles.headerTitle}>AI 챗봇</h1>
            </header>

            {/* Content */}
            <div className={styles.content} ref={scrollRef}>
                {/* Intro */}
                <div className={styles.introSection}>
                    <div className={styles.introTitle}>안녕하세요. AI도우미 ‘피트’에요.</div>
                    <div className={styles.introSub}>문의 항목을 선택하거나 질문을 입력해주세요.</div>

                    <div className={styles.chipContainer}>
                        {['#경기일정', '#드라이버순위', '#승부예측', '#팀정보', '#시작가이드'].map(tag => (
                            <button key={tag} className={styles.chip} onClick={() => setInputValue(tag.replace('#', ''))}>
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat List */}
                <div className={styles.messageList}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`${styles.messageRow} ${msg.type === 'bot' ? styles.botRow : styles.userRow}`}>
                            {msg.type === 'bot' && (
                                <img src={chatbotAvatar} alt="Pete" className={styles.avatar} />
                            )}
                            <div className={`${styles.bubble} ${msg.type === 'bot' ? styles.botBubble : styles.userBubble}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className={styles.inputArea}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="채팅하기"
                        className={styles.input}
                    />
                    <button className={styles.sendBtn} onClick={handleSend}>
                        <img src={sendIcon} alt="Send" className={styles.sendIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPg;