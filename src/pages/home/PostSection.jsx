import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostSection.module.css';

// Post Images
import post1 from '../../assets/img/community/post/post_1.png';
import post2 from '../../assets/img/community/post/post_2_1.png'; // Assuming 2_1 is the one
import post3 from '../../assets/img/community/post/post_3.png';
import post4 from '../../assets/img/community/post/post_4.png';
import post5 from '../../assets/img/community/post/post_5.png';

// Profile Images
import profile1 from '../../assets/img/community/post/Fanner1_98.png';
import profile2 from '../../assets/img/community/post/bradpitbox.png';
import profile3 from '../../assets/img/community/post/pitlane_99.png';

const PostSection = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/community');
    };

    const postData = [
        {
            id: 1,
            title: "F1 굿즈 교환 원합니다",
            user: "Fanner1_98",
            time: "5m",
            img: post1,
            profile: profile1
        },
        {
            id: 2,
            title: "샤를",
            user: "Fanner1_98",
            time: "40m",
            img: post2,
            profile: profile1
        },
        {
            id: 3,
            title: "2025 아부다비 경기분석",
            user: "bradpitbox",
            time: "24m",
            img: post3,
            profile: profile2
        },
        {
            id: 4,
            title: "페라리는 성적이 아니라...",
            user: "Fanner1_98",
            time: "45m",
            img: post4,
            profile: profile1
        },
        {
            id: 5,
            title: "안녕하세요.",
            user: "pitlane_99",
            time: "17m",
            img: post5,
            profile: profile3
        }
    ];

    return (
        <section className={styles.postSection}>
            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>Post</h2>
                <button className={styles.plusBtn} onClick={handleNavigation}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Scroll Container */}
            <div className={styles.scrollContainer}>
                {postData.map((post) => (
                    <div key={post.id} className={styles.card} onClick={handleNavigation}>
                        <img src={post.img} alt={post.title} className={styles.cardImg} />

                        {/* Gradient Overlay */}
                        <div className={styles.cardOverlay}></div>

                        {/* Content */}
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <div className={styles.userInfo}>
                                <div className={styles.profileImg}>
                                    <img src={post.profile} alt={post.user} />
                                </div>
                                <span className={styles.userName}>@ {post.user}</span>
                                <span className={styles.dot}>·</span>
                                <span className={styles.time}>{post.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PostSection;
