import React from 'react';
import styles from './GoodsSection.module.css';

// Images
import goods1 from '../../assets/img/home/goods1.png';
import goods2 from '../../assets/img/home/goods2.png';
import goods3 from '../../assets/img/home/goods3.png';
import goods4 from '../../assets/img/home/goods4.png';

const GoodsSection = () => {
    const goodsList = [
        {
            id: 1,
            img: goods1,
            price: "$128",
            title: "Mercedes AMG Petronas\nadidas F1 Dress",
            alt: "Mercedes Dress"
        },
        {
            id: 2,
            img: goods2,
            price: "$58",
            title: "Ferrari MT7 T-Shirt\nby Puma - Black",
            alt: "Ferrari T-Shirt"
        },
        {
            id: 3,
            img: goods3,
            price: "$79",
            title: "Hülkenberg\nFirst Podium Poster",
            alt: "Hülkenberg Poster"
        },
        {
            id: 4,
            img: goods4,
            price: "$65",
            title: "Hamilton Ferrari\nSF-25 Poster",
            alt: "Hamilton Poster"
        }
    ];

    const handleNavigation = () => {
        window.open('https://f1store.formula1.com/en/', '_blank');
    };

    return (
        <section className={styles.goodsSection}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>Goods</h2>
                <button className={styles.plusBtn} onClick={handleNavigation}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.gridContainer}>
                {goodsList.map((item) => (
                    <div key={item.id} className={styles.card} onClick={handleNavigation}>
                        <img src={item.img} alt={item.alt} className={styles.bgImage} />
                        <div className={styles.overlay}>
                            <div className={styles.info}>
                                <div className={styles.price}>{item.price}</div>
                                <div className={styles.title}>{item.title}</div>
                            </div>
                            <button className={styles.viewBtn}>VIEW</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GoodsSection;
