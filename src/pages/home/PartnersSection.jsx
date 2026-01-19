import React from 'react';
import styles from './PartnersSection.module.css';

// Import Partner Assets
import partner1 from '../../assets/img/home/partner1.png';
import partner2 from '../../assets/img/home/partner2.png';
import partner3 from '../../assets/img/home/partner3.png';
import partner4 from '../../assets/img/home/partner4.png';
import partner5 from '../../assets/img/home/partner5.png';
import partner6 from '../../assets/img/home/partner6.png';
import partner7 from '../../assets/img/home/partner7.png';
import partner8 from '../../assets/img/home/partner8.png';
import partner9 from '../../assets/img/home/partner9.png';
import partner10 from '../../assets/img/home/partner10.png';
import partner11 from '../../assets/img/home/partner11.png';
import partner12 from '../../assets/img/home/partner12.png';

const partners = [
    { id: 1, img: partner1, alt: 'Partner 1' },
    { id: 2, img: partner2, alt: 'Partner 2' },
    { id: 3, img: partner3, alt: 'Partner 3' },
    { id: 4, img: partner4, alt: 'Partner 4' },
    { id: 5, img: partner5, alt: 'Partner 5' },
    { id: 6, img: partner6, alt: 'Partner 6' },
    { id: 7, img: partner7, alt: 'Partner 7' },
    { id: 8, img: partner8, alt: 'Partner 8' },
    { id: 9, img: partner9, alt: 'Partner 9' },
    { id: 10, img: partner10, alt: 'Partner 10' },
    { id: 11, img: partner11, alt: 'Partner 11' },
    { id: 12, img: partner12, alt: 'Partner 12' },
];

const PartnersSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Partners</h2>
            </div>

            <div className={styles.grid}>
                {partners.map((partner, index) => {
                    // Checkerboard Logic for 3 columns
                    // Row index = Math.floor(index / 3)
                    // Col index = index % 3
                    // Pattern: (Row + Col) % 2 !== 0 ? Color A (Dark) : Color B (Light)
                    // This creates a pattern starting with Light at (0,0)
                    const row = Math.floor(index / 3);
                    const col = index % 3;
                    const isDark = (row + col) % 2 !== 0;

                    return (
                        <div
                            key={partner.id}
                            className={`${styles.cell} ${isDark ? styles.bgDark : styles.bgLight}`}
                        >
                            <img
                                src={partner.img}
                                alt={partner.alt}
                                className={styles.logo}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PartnersSection;
