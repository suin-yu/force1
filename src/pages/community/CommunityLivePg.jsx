import React from 'react';
import './CommunityLivePg.css';

// Data
import liveData from '../../assets/data/community/communityLiveData.json';

// Assets
import videoSrc from '../../assets/video/racing.mp4';
import iconSend from '../../assets/img/community/live/icon_send.svg';
import iconHeart from '../../assets/img/community/live/icon_heart.svg';

// Replay Thumbnails
import imgLive1 from '../../assets/img/community/live/live_1.png';
import imgLive2 from '../../assets/img/community/live/live_2.png';
import imgLive3 from '../../assets/img/community/live/live_3.png';
import imgLive4 from '../../assets/img/community/live/live_4.png';

// Dynamic Image Loader for avatars in JSON
const images = import.meta.glob('/src/assets/img/community/post/*.{png,jpg,jpeg,svg}', { eager: true });
function getAssetSrc(path) {
  if (!path) return "";
  const mod = images[path];
  return mod?.default || mod || path;
}

export default function CommunityLivePg() {
  const [visibleChats, setVisibleChats] = React.useState([]);
  const nextChatIndexRef = React.useRef(0);

  // Initialize with first 4 chats on mount
  React.useEffect(() => {
    const initialChats = liveData.comments.slice(0, 4);
    setVisibleChats(initialChats);
    nextChatIndexRef.current = 4;
  }, []);

  // Timer to add new chat every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentIdx = nextChatIndexRef.current % liveData.comments.length;
      const nextChat = liveData.comments[currentIdx];

      setVisibleChats(prevChats => {
        const newChats = [...prevChats.slice(1), nextChat];
        return newChats;
      });

      nextChatIndexRef.current += 1;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    /* Heart Animation Logic */
  const [hearts, setHearts] = React.useState([]);

  const handleHeartClick = () => {
    const id = Date.now() + Math.random();
    // Random horizontal offset between -15px and 15px
    const offset = Math.random() * 30 - 15; 
    setHearts(prev => [...prev, { id, offset }]);

    // Remove heart after 1.5s (animation duration)
    setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
    }, 1500);
  };

  const replayList = [
    { id: 1, date: "2025 12 06  Pm 11:00", title: "Abu Dhabi  Qualifying", img: imgLive1 },
    { id: 2, date: "2025 12 06  Pm 07:30", title: "Abu Dhabi  FP3", img: imgLive2 },
    { id: 3, date: "2025 12 05  Pm 10:00", title: "Abu Dhabi  FP2", img: imgLive3 },
    { id: 4, date: "2025 12 05  Pm 06:30", title: "Abu Dhabi  FP1", img: imgLive4 },
  ];

    /* Chat Input Logic */
    const [chatInput, setChatInput] = React.useState("");
    const handleSendChat = () => {
        if (!chatInput.trim()) return;

        const newChat = {
            id: Date.now(),
            name: "Fanner1_98",
            msg: chatInput,
            avatar: "/src/assets/img/community/post/Fanner1_98.png"
        };

        setVisibleChats(prev => {
            // Keep last 3 and add new one
            return [...prev.slice(1), newChat];
        });
        setChatInput("");
    };

  return (
    <div className="community-live-container">
      {/* Header */}
      <div className="live-header">
        <span className="live-dot"></span>
        <h2 className="live-title-font">Live Talk</h2>
      </div>

      {/* Video Section */}
      <div className="live-video-wrapper">
        <video 
            className="live-video" 
            src={videoSrc} 
            autoPlay 
            muted 
            loop 
            playsInline 
        />
        <div className="video-top-wrapper">
            <div className="video-overlay-top">
                <div className="video-date">2025 12 07  Pm 10:00</div>
                <div className="video-title">Abu Dhabi  Race</div>
            </div>
        </div>
        
        <div className="video-overlay-bottom">
            <div className="chat-list">
                {visibleChats.map((chat, index) => {
                    // Calculate opacity based on index (0 is top/oldest)
                    let opacity = 1;
                    if (index === 0) opacity = 0.6;
                    if (index === 1) opacity = 0.8;
                    
                    return (
                        <div key={chat.id} className="chat-item" style={{ opacity }}>
                            <img src={getAssetSrc(chat.avatar)} alt={chat.name} className="chat-avatar" />
                            <div className="chat-content">
                                <span className="chat-name">{chat.name}</span>
                                <span className="chat-text">{chat.msg}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="live-input-bar">
        <div className="input-field">
            <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                placeholder="채팅하기"
                style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    color: '#FFF', /* Changed to white or light gray for visibility */
                    fontSize: '16px', 
                    flex: 1, 
                    outline: 'none',
                    height: '100%'
                }}
            />
            <button className="btn-send" onClick={handleSendChat}>
                <img src={iconSend} alt="Send" />
            </button>
        </div>
        <div className="heart-wrapper" style={{ position: 'relative' }}>
            <button className="btn-heart" onClick={handleHeartClick}>
                <img src={iconHeart} alt="Heart" />
            </button>
            {/* Render Floating Hearts */}
            {hearts.map(h => (
                <img 
                    key={h.id} 
                    src={iconHeart} 
                    className="floating-heart" 
                    alt=""
                    style={{ '--h-offset': `${h.offset}px` }} 
                />
            ))}
        </div>
      </div>

      <div className="divider-section"></div>

      {/* Replay Section */}
      <div className="replay-header">
        <h2 className="live-title-font">Replay Live</h2>
      </div>

      <div className="replay-list">
        {replayList.map(item => (
            <div key={item.id} className="replay-card">
                <img src={item.img} alt={item.title} className="replay-img" />
                <div className="replay-overlay">
                    <div className="video-date">{item.date}</div>
                    <div className="video-title">{item.title}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
