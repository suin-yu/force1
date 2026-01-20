import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQPg.css';

const FAQPg = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('전체');
    const [openIndex, setOpenIndex] = useState(null);

    const categories = ['전체', '프로필변경', '경기 일정'];

    const faqData = [
        { q: '프로필 정보는 어디에서 수정하나요?', a: '마이페이지 상단의 프로필 수정 아이콘을 클릭하여 닉네임, 프로필 사진, 한 줄 소개 등을 수정하실 수 있습니다.' },
        { q: '팀이나 드라이버를 팔로우하려면 어떻게 하나요?', a: '대시보드 또는 검색 메뉴에서 원하는 팀/드라이버를 선택한 후, 프로필 옆의 팔로우 버튼을 누르시면 됩니다.' },
        { q: '내 주문 내역은 어디에서 확인하나요?', a: '마이페이지의 주문 내역 또는 설정 메뉴에서 최근 구매 정보를 확인하실 수 있습니다.' },
        { q: '다음 레이스는 언제 열리나요?', a: '경기 일정 탭 또는 메인 화면의 카운트다운 섹션에서 다음 레이스 일정을 실시간으로 확인하실 수 있습니다.' },
        { q: '여러 팀이나 드라이버를 동시에 응원할 수 있나요?', a: '네, 여러 드라이버와 팀을 동시에 팔로우하고 응원 게시글을 남기실 수 있습니다.' },
        { q: '다음해 F1 선수의 정보는 어디서 확인할 수 있나요?', a: '오피셜 공지사항 또는 선수 프로필 업데이트 정보를 통해 내년 시즌 라인업을 확인하실 수 있습니다.' },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page-container">
            {/* Header */}
            <header className="faq-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="faq-title">FAQ</h1>
            </header>

            {/* Search Bar */}
            <div className="faq-search-wrapper">
                <input
                    type="text"
                    placeholder="검색어 입력"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="faq-search-input"
                />
                <button className="search-icon-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8" stroke="#666" strokeWidth="2" />
                        <path d="M21 21L16.65 16.65" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            {/* Category Filter */}
            <div className="faq-categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion List */}
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <div className="faq-question" onClick={() => toggleAccordion(index)}>
                            <span className="q-text">Q. {item.q}</span>
                            <span className="chevron-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPg;
