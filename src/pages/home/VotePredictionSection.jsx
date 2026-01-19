import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VotePredictionSection.module.css';

import maxImg from '../../assets/img/home/vote1.png';
import charlesImg from '../../assets/img/home/vote2.png';
import georgeImg from '../../assets/img/home/vote3.png';

const VotePredictionSection = () => {
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleVoteClick = () => {
        if (isAnimating) return; // Prevent double click

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            navigate('/community/vote');
        }, 2000); // 2s duration
    };

    const rankingData = [
        {
            rank: 1,
            firstName: "Max",
            lastName: "Verstappen",
            votes: "78.3%",
            img: maxImg,
            align: 'right' // Image on right, Text on left
        },
        {
            rank: 2,
            firstName: "Charles",
            lastName: "Leclerc",
            votes: "67.4%",
            img: charlesImg,
            align: 'left' // Image on left, Text on right
        },
        {
            rank: 3,
            firstName: "George",
            lastName: "Russell",
            votes: "56.8%",
            img: georgeImg,
            align: 'right' // Image on right, Text on left
        }
    ];

    return (
        <section className={styles.voteSection}>
            <div className={styles.overlay}></div>
            <div className={styles.contentContainer}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Vote</h2>
                    <p className={styles.subTitle}>2026시즌 1위 예측 순위</p>
                </div>

                <div className={styles.rankingList}>
                    {rankingData.map((driver, index) => (
                        <div
                            key={index}
                            className={`${styles.driverBlock} ${driver.align === 'left' ? styles.alignLeft : styles.alignRight}`}
                        >
                            <div className={styles.textGroup}>
                                <div className={styles.topRow}>
                                    <span className={styles.firstName}>{driver.firstName}</span>
                                    <div className={styles.rankNumber}>{driver.rank}</div>
                                </div>
                                <span className={styles.lastName}>{driver.lastName}</span>
                                <div className={styles.voteRate}>투표율 : {driver.votes}</div>
                            </div>

                            <div className={styles.imageGroup}>
                                <img src={driver.img} alt={driver.lastName} className={styles.driverImg} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <div
                        className={`${styles['selector-button']} ${isAnimating ? styles['run-motion'] : ''}`}
                        onClick={handleVoteClick}
                    >
                        <div className={styles['selector-border-glow']}></div>
                        <div className={styles['selector-inner']}>
                            <span>승부 예측하기</span>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default VotePredictionSection;
