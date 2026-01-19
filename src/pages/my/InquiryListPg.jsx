import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryListPg.css';

const InquiryListPg = () => {
    const navigate = useNavigate();

    // Sample inquiry data
    const inquiries = [
        { id: 1, category: '답변대기', title: '문의 드립니다.', author: '김*아', date: '2026.01.13' },
        { id: 2, category: '답변완료', title: '문의 드립니다.', author: '김*아', date: '2025.11.23' },
        { id: 3, category: '답변완료', title: '문의 드립니다.', author: '김*아', date: '2025.11.23' },
    ];

    return (
        <div className="inquiry-list-container">
            {/* Header */}
            <header className="il-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="il-title">1:1 inquiry</h1>
            </header>

            {/* Operating Hours Section */}
            <section className="operating-hours">
                <h2 className="section-title">운영 시간 안내</h2>
                <div className="hours-info">
                    <p>접수시간 24시간 접수 가능</p>
                    <p>답변시간 평일 10:00-19:00 (토·일, 공휴일 휴무)</p>
                </div>
            </section>

            {/* New Inquiry Button */}
            <button
                className="new-inquiry-btn"
                onClick={() => navigate('/new-inquiry')}
            >
                문의하기
            </button>

            {/* Inquiry List */}
            <div className="inquiry-list">
                {inquiries.length > 0 ? (
                    inquiries.map((inquiry) => (
                        <div key={inquiry.id} className="inquiry-item">
                            <h3 className="inquiry-title">{inquiry.title}</h3>
                            <div className="inquiry-meta">
                                <span className={`inquiry-status ${inquiry.category === '답변완료' ? 'completed' : 'pending'}`}>
                                    {inquiry.category}
                                </span>
                                <span className="inquiry-separator">|</span>
                                <span className="inquiry-author">{inquiry.author}</span>
                                <span className="inquiry-separator">|</span>
                                <span className="inquiry-date">{inquiry.date}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-state">
                        <p>문의 내역이 없습니다.</p>
                    </div>
                )}
            </div>

            {/* Load More Button */}
            <button className="load-more-btn">
                더보기
            </button>

            {/* FAQ Button */}
            <button
                className="faq-btn"
                onClick={() => navigate('/faq')}
            >
                자주 묻는 질문
            </button>
        </div>
    );
};

export default InquiryListPg;
