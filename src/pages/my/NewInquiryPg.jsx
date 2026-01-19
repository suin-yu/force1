import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewInquiryPg.css';

const NewInquiryPg = () => {
    const navigate = useNavigate();
    const [inquiryType, setInquiryType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notification, setNotification] = useState({
        push: false,
        sms: true, // Default to SMS as per image showing it selected/visible
        email: false
    });
    const [smsPhone, setSmsPhone] = useState(['', '', '']);
    const [emailPrefix, setEmailPrefix] = useState('');
    const [emailDomain, setEmailDomain] = useState('');

    const handleContentChange = (e) => {
        if (e.target.value.length <= 1000) {
            setContent(e.target.value);
        }
    };

    const handleNotificationToggle = (type) => {
        setNotification(prev => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <div className="new-inquiry-container">
            {/* Header */}
            <header className="ni-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="ni-title">1:1 inquiry</h1>
            </header>

            <form className="ni-form" onSubmit={(e) => e.preventDefault()}>
                {/* Question Type Selection */}
                <div className="ni-field select-field">
                    <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className={inquiryType === '' ? 'placeholder' : ''}
                    >
                        <option value="" disabled hidden>질문 유형</option>
                        <option value="delivery">배송/결제</option>
                        <option value="product">상품 문의</option>
                        <option value="cancel">취소/환불</option>
                        <option value="etc">기타</option>
                    </select>
                </div>

                {/* Title Input */}
                <div className="ni-field">
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="ni-input-title"
                    />
                </div>

                {/* Content Textarea */}
                <div className="ni-field content-field">
                    <textarea
                        placeholder="여기에 내용을 입력해주세요. (1,000자 이내)"
                        value={content}
                        onChange={handleContentChange}
                    ></textarea>
                </div>

                {/* File Attachment */}
                <div className="ni-file-attach">
                    <div className="file-header">
                        <span>파일 첨부하기</span>
                        <button type="button" className="add-file-btn">
                            <span className="plus-icon">+</span>
                        </button>
                    </div>
                    <p className="file-hint">
                        <strong>0MB</strong> / 3MB 이하까지 최대 3개 이미지 파일 첨부 가능합니다.
                    </p>
                </div>

                {/* Notice Info */}
                <div className="ni-notice">
                    <h3>안내사항</h3>
                    <p>평일 : 익일 답변완료 | 토·일·공휴일 : 휴일 이후 영업일 답변완료 (단, 문의가 급증할 경우 지연될 수 있습니다.)</p>
                </div>

                {/* Notification Settings */}
                <div className="ni-notifications">
                    <h3 className="notif-title">답변이 오면 알림 받기</h3>

                    {/* PUSH */}
                    <div className="notif-item">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={notification.push}
                                onChange={() => handleNotificationToggle('push')}
                            />
                            <span className="checkmark"></span>
                            <span className="notif-label">PUSH</span>
                        </label>
                    </div>

                    {/* SMS */}
                    <div className="notif-item collapsible">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={notification.sms}
                                onChange={() => handleNotificationToggle('sms')}
                            />
                            <span className="checkmark"></span>
                            <span className="notif-label">SMS</span>
                        </label>
                        {notification.sms && (
                            <div className="notif-inputs sms-inputs">
                                <select value={smsPhone[0]} onChange={(e) => setSmsPhone([e.target.value, smsPhone[1], smsPhone[2]])}>
                                    <option value="">선택</option>
                                    <option value="010">010</option>
                                </select>
                                <span className="dash">-</span>
                                <input type="text" maxLength="4" value={smsPhone[1]} onChange={(e) => setSmsPhone([smsPhone[0], e.target.value, smsPhone[2]])} />
                                <span className="dash">-</span>
                                <input type="text" maxLength="4" value={smsPhone[2]} onChange={(e) => setSmsPhone([smsPhone[0], smsPhone[1], e.target.value])} />
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="notif-item collapsible">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={notification.email}
                                onChange={() => handleNotificationToggle('email')}
                            />
                            <span className="checkmark"></span>
                            <span className="notif-label">이메일</span>
                        </label>
                        {notification.email && (
                            <div className="notif-inputs email-inputs">
                                <input type="text" placeholder="" value={emailPrefix} onChange={(e) => setEmailPrefix(e.target.value)} />
                                <select value={emailDomain} onChange={(e) => setEmailDomain(e.target.value)}>
                                    <option value="">직접 입력</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                </select>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={!title || !content || !inquiryType}>
                    작성 완료
                </button>
            </form>
        </div>
    );
};

export default NewInquiryPg;
