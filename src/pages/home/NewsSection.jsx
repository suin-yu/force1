import React, { useState } from 'react';
import styles from './NewsSection.module.css';

// News Images
import news1 from '../../assets/img/home/news1.png';
import news2 from '../../assets/img/home/news2.png';
import news3 from '../../assets/img/home/news3.png';

// News Titles
import newsTitleBg from '../../assets/img/home/news_title_bg.png';

const NewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const newsData = [
        {
            id: 1,
            img: news1,
            subTitle: "F1 더 무비 실사판!",
            mainTitle: "맥라렌 노리스\n생애 첫 드라이버\n챔피언 등극!",
            date: "2026.1.10 BBC"
        },
        {
            id: 2,
            img: news2,
            subTitle: "기다림의 결실",
            mainTitle: "데뷔 후 첫 챔피언,\n노리스의 시대가\n열렸다!",
            date: "2026.1.10 BBC"
        },
        {
            id: 3,
            img: news3,
            subTitle: "한 시즌의 완성",
            mainTitle: "끝내 증명한\n노리스,\nF1 정상에 서다",
            date: "2026.1.10 BBC"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };

    return (
        <section className={styles.newsSection}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>News</h2>
            </div>

            <div className={styles.carouselContainer}>
                {/* Image Slider */}
                <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {newsData.map((news) => (
                        <div key={news.id} className={styles.slideItem}>
                            <img src={news.img} alt={news.subTitle} className={styles.newsImg} />

                            {/* Overlay Content */}
                            <div className={styles.contentOverlay}>
                                <div className={styles.textBox}>
                                    <img src={newsTitleBg} alt="" className={styles.boxBg} />
                                    <div className={styles.textContent}>
                                        <span className={styles.subTitle}>{news.subTitle}</span>
                                        <h3 className={styles.mainTitle}>{news.mainTitle}</h3>
                                        <span className={styles.date}>{news.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button className={styles.navBtn} onClick={prevSlide} style={{ left: '10px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className={styles.navBtn} onClick={nextSlide} style={{ right: '10px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default NewsSection;
