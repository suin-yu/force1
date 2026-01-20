import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPg.css';

// Importing assets (Assuming these paths exist as per instructions)
// Note: In a real scenario, make sure these files exist. 
// If not, you might need placeholder images.
// import profileImg from '../../assets/img/My/profile.jpg';
import profileImg from '../../assets/img/my/MyPg_2.png';
import bookmarkIcon from '../../assets/img/my/MyPg-Icon.png';
import editIcon from '../../assets/img/my/MyPg-Icon2.png';
import charlesImg from '../../assets/img/my/MyPg_3.png';
import kimiImg from '../../assets/img/my/MyPg_4.png';
import postImg1 from '../../assets/img/my/MyPg_5.png';
import postImg2 from '../../assets/img/my/MyPg_6.png';
import postImg3 from '../../assets/img/my/MyPg_7.png';
import postImg4 from '../../assets/img/my/MyPg_8.png';
import postImg5 from '../../assets/img/my/MyPg_9.png';
import postImg6 from '../../assets/img/my/MyPg_10.png';
import shortsImg1 from '../../assets/img/my/MyPg_11.png';
import shortsImg2 from '../../assets/img/my/MyPg_12.png';
import shortsImg3 from '../../assets/img/my/MyPg_14.png';
import shortsImg4 from '../../assets/img/my/MyPg_15.png';
import shortsImg5 from '../../assets/img/my/MyPg_16.png';
import addDriverImg from '../../assets/img/my/MyPg_17.png';
import plusIcon from '../../assets/img/my/MyPg-IconPlus.png';
import heartIcon from '../../assets/img/my/Heart.png';
import chatIcon from '../../assets/img/my/Chat.png';
import arrowIcon from '../../assets/img/my/MyPg-Icon3.png';
import commentUserImg from '../../assets/img/my/MyPg_13.png';

// Dummy data imports/declarations for UI representation
const drivers = [
    { id: 1, name: 'Charles Leclerc', img: charlesImg },
    { id: 2, name: 'Kimi Antonelli', img: kimiImg },
];

const posts = [
    { id: 1, img: postImg1, span: 'large' }, // Large item
    { id: 2, img: postImg2, span: 'normal' },
    { id: 3, img: postImg3, span: 'normal' },
    { id: 4, img: postImg4, span: 'large' }, // Large item example
    { id: 5, img: postImg5, span: 'normal' },
    { id: 6, img: postImg6, span: 'normal' },
];

const shorts = [
    { id: 1, title: '홈 포디엄은 못 참지', desc: 'F1 이탈리아 그랑프리 페라리 팀메이트 대결', img: shortsImg1 },
    { id: 2, title: '올해 최고의 순간', desc: 'F1 몬자 그랑프리 샤를 르클레르 우승', img: shortsImg2 },
    { id: 3, title: 'F1은 왜 추월이 쉬워보일까?', desc: 'F1 경기 중 추월이 쉬워 보이는 이유', img: shortsImg3 },
    { id: 4, title: 'F1과 슈퍼카의 차이', desc: 'F1과 슈퍼카의 차이 이게 너와 나의 눈높이다', img: shortsImg4 },
    { id: 5, title: '올해 최고의 배틀 장면', desc: '올해 최고의 배틀 장면 르클레르 vs 노리스', img: shortsImg5 },
];

const comments = [
    { id: 1, text: '난 아직도 맥스 베르스타펜. 압박 오면 오히려 더 강해지는게 차원이 다름', likes: 23, replies: 4, userImg: 'user1.jpg' },
    { id: 2, text: '저 시절부터 레이싱밖에 모르던 애가 결국 페라리 드라이버 된 거 생각하면 마음이 복잡해짐...', likes: 4, replies: 1, userImg: 'user2.jpg' },
    { id: 3, text: '맞음 ㅇㅇ 아부다비는 원래 한 번 흐름 타면 뒤집기 힘든 트랙이라 이날은 특히 운영 실수 하나가 바로 성적 갈린 경기였던 듯…', likes: 88, replies: 12, userImg: 'user3.jpg' },
];

const MyPg = () => {
    const navigate = useNavigate();
    const scrollRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Helper to resolve image paths or return placeholder
    const getImgPath = (filename) => {
        // If the filename is an imported path (contains /), return it directly
        if (filename && filename.includes('/')) return filename;
        // In Vite, dynamic require is not supported in the same way.
        // For now, returning a placeholder to prevent errors.
        return `https://via.placeholder.com/150?text=${filename}`;
    };

    return (
        <div className="my-page-container">
            {/* 1. Header Section */}
            <header className="mp-header">
                <h1 className="mp-title">My Page</h1>

                <div className="profile-section">
                    <div className="profile-img-wrapper">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>
                    <div className="user-id">
                        에프원_98
                    </div>
                    <div className="user-handle">
                        @eppwonf1_98 <img src={editIcon} alt="Edit" className="edit-icon-img" />
                    </div>
                    <p className="user-desc">샤를남/샤를 르클레르 진심남</p>

                    <div className="mp-stats">
                        <div className="stat-item">
                            <span className="stat-num">84</span>
                            <span className="stat-label">follower</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <img src={bookmarkIcon} alt="Bookmark" className="bookmark-icon-img" />
                            <span className="stat-label">Bookmarks</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-num">152</span>
                            <span className="stat-label">following</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. My Driver Section */}
            <section className="mp-section">
                <div className="section-header">
                    <h2 className="section-title">My Driver</h2>
                </div>
                <div className="driver-list">
                    {drivers.map(driver => (
                        <div key={driver.id} className="driver-item">
                            <div className="driver-img-wrapper">
                                <img src={getImgPath(driver.img)} alt={driver.name} className="driver-img" onError={(e) => e.target.src = 'https://via.placeholder.com/70'} />
                            </div>
                            <span className="driver-name">{driver.name}</span>
                        </div>
                    ))}
                    <div className="driver-item">
                        <div className="add-driver-btn">
                            <img src={addDriverImg} alt="Add Driver" className="add-driver-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. My Post Section */}
            <section className="mp-section">
                <div className="section-header">
                    <h2 className="section-title">My Post</h2>
                    <img src={plusIcon} alt="Add" className="plus-btn" />
                </div>
                <div className="post-grid">
                    <div className="post-column">
                        {posts.filter((_, i) => i % 2 === 0).map((post, index) => (
                            <div key={post.id} className={`post-item post-${index * 2 + 1}`}>
                                <img src={getImgPath(post.img)} alt="Post" className="post-img" onError={(e) => e.target.src = 'https://via.placeholder.com/200'} />
                            </div>
                        ))}
                    </div>
                    <div className="post-column">
                        {posts.filter((_, i) => i % 2 !== 0).map((post, index) => (
                            <div key={post.id} className={`post-item post-${index * 2 + 2}`}>
                                <img src={getImgPath(post.img)} alt="Post" className="post-img" onError={(e) => e.target.src = 'https://via.placeholder.com/200'} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. My Shorts Section */}
            <section className="mp-section">
                <div className="section-header">
                    <h2 className="section-title">My Shorts</h2>
                    <img src={plusIcon} alt="Add" className="plus-btn" />
                </div>
                <div
                    className={`shorts-container ${isDragging ? 'dragging' : ''}`}
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    {shorts.map(short => (
                        <div key={short.id} className="shorts-card">
                            <div className="shorts-thumbnail">
                                <img src={getImgPath(short.img)} alt={short.title} className="shorts-img" onError={(e) => e.target.src = 'https://via.placeholder.com/150x250'} />
                                <div className="play-icon">▶</div>
                            </div>
                            <div className="shorts-info">
                                <p className="shorts-desc">{short.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. My Comments Section */}
            <section className="mp-section">
                <div className="section-header">
                    <h2 className="section-title">My Comments</h2>
                    <img src={plusIcon} alt="Add" className="plus-btn" />
                </div>
                <div className="comments-list">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-item">
                            <img src={commentUserImg} alt="User" className="comment-profile-img" />
                            <div className="comment-content">
                                <p className="comment-text">{comment.text}</p>
                                <div className="comment-meta">
                                    <span><img src={heartIcon} alt="Likes" className="meta-icon" /> {comment.likes}</span>
                                    <span><img src={chatIcon} alt="Replies" className="meta-icon" /> {comment.replies}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Utility Menu */}
            <div className="utility-menu">
                <div className="menu-item" onClick={() => navigate('/inquiry-list')}>
                    <span>1:1 Inquiry</span>
                    <img src={arrowIcon} alt="Go" className="menu-arrow" />
                </div>
                <div className="menu-item" onClick={() => navigate('/faq')}>
                    <span>FAQ</span>
                    <img src={arrowIcon} alt="Go" className="menu-arrow" />
                </div>
                <div className="menu-item" onClick={() => navigate('/tos')}>
                    <span>개인정보 처리방침 및 이용약관</span>
                    <img src={arrowIcon} alt="Go" className="menu-arrow" />
                </div>
            </div>
        </div>
    );
};

export default MyPg;