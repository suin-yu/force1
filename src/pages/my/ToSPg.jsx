import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToSPg.css';

const ToSPg = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tos-container">
            {/* Header */}
            <header className="tos-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="tos-title">개인정보 처리방침 및 이용약관</h1>
            </header>

            {/* Content Body */}
            <div className="tos-content">
                <p className="tos-intro">
                    이 약관은 F1 팬덤(이하 "서비스")의 이용과 관련하여 서비스 제공자와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>

                <section className="tos-section">
                    <h3>제1조 (목적)</h3>
                    <p>본 약관은 이용자가 서비스 제공자가 제공하는 F1 팬덤 및 관련 서비스를 이용함에 있어 필요한 기본적인 사항을 규정합니다.</p>
                </section>

                <section className="tos-section">
                    <h3>제2조 (정의)</h3>
                    <ol>
                        <li>"서비스"란 F1 관련 정보, 커뮤니티, 숏폼 콘텐츠, 팬덤 채팅 기능을 제공하는 F1 팬덤 앱을 의미합니다.</li>
                        <li>"이용자"란 본 약관에 동의하고 서비스를 이용하는 모든 회원 및 비회원을 의미합니다.</li>
                        <li>"회원"이란 서비스에 회원가입을 하고 지속적으로 서비스를 이용하는자를 의미합니다.</li>
                        <li>"콘텐츠"란 텍스트, 이미지, 음성, 비디오 등 서비스 내에서 제공되거나 이용자가 업로드한 모든 정보를 의미합니다.</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제3조 (약관의 효력 및 변경)</h3>
                    <ol>
                        <li>본 약관은 서비스 화면에 게시하거나 기타 방법으로 공지함으로써 효력을 발생합니다.</li>
                        <li>서비스 제공자는 관련 법령을 위배하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 사전에 공지합니다.</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제4조 (회원가입)</h3>
                    <ol>
                        <li>회원가입은 이용자가 약관에 동의하고 필요한 정보를 입력함으로써 완료됩니다.</li>
                        <li>서비스 제공자는 허위 정보 입력, 타인 명의 도용 등의 경우 회원가입을 제한할 수 있습니다.</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제5조 (서비스의 제공 및 변경)</h3>
                    <ol>
                        <li>서비스 제공자는 F1 관련 뉴스, 일시, 분석 데이터 정보, 커뮤니티 기능 등을 제공합니다.</li>
                        <li>서비스 내용은 운영상 또는 기술적 필요에 따라 변경될 수 있습니다.</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제6조 (이용자의 의무)</h3>
                    <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
                    <ol>
                        <li>타인의 권리를 침해하거나 불쾌감을 주는 행위</li>
                        <li>허위 정보 게시 및 서비스 운영을 방해하는 행위</li>
                        <li>관련 법령 및 본 약관을 위반하는 행위</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제7조 (콘텐츠의 저작권)</h3>
                    <ol>
                        <li>서비스 내 제공되는 콘텐츠의 저작권은 서비스 제공자 또는 정당한 권리자에게 있습니다.</li>
                        <li>이용자가 작성한 콘텐츠의 저작권은 이용자에게 있으나, 서비스 제공자는 서비스 운영 및 홍보를 위해 이를 무상으로 사용할 수 있습니다.</li>
                    </ol>
                </section>

                <section className="tos-section">
                    <h3>제8조 (서비스 이용 제한)</h3>
                    <p>서비스 제공자는 이용자가 약관을 위배한 경우 사전 통지 없이 서비스 이용을 제한하거나 회원자격을 박탈할 수 있습니다.</p>
                </section>

                <section className="tos-section">
                    <h3>제9조 (책임의 제한)</h3>
                    <p>서비스 제공자는 천재지변, 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
                </section>

                <section className="tos-section">
                    <h3>제10조 (분쟁 해결 및 준거법)</h3>
                    <p>본 약관과 관련된 분쟁은 대한민국 법을 준거법으로 하며 관할 법원은 민사소송법에 따릅니다.</p>
                </section>

                <div className="tos-divider"></div>

                <section className="tos-section privacy-section">
                    <h2>개인정보 처리방침</h2>
                    <p>F1 팬덤은 이용자의 개인정보를 보호하기 위해 최선을 다하며, '개인정보보호법' 등 관련 법령을 준수합니다.</p>

                    <h4>1. 수집하는 개인정보 항목</h4>
                    <p>서비스는 다음과 같은 개인정보를 수집할 수 있습니다.</p>
                    <ul>
                        <li>필수항목: 이메일, 닉네임, 비밀번호</li>
                        <li>선택항목: 프로필 이미지, 관심 팀/드라이버</li>
                        <li>자동수집항목: 서비스 로그, 기기 정보, 방문 기록</li>
                    </ul>

                    <h4>2. 개인정보 수집 및 이용 목적</h4>
                    <p>수집한 개인정보는 다음 목적을 위해 이용됩니다.</p>
                    <ol>
                        <li>회원 관리 및 본인 확인</li>
                        <li>서비스 제공 및 개선</li>
                        <li>커뮤니티 서비스 및 개인별 맞춤 서비스 제공</li>
                    </ol>

                    <h4>3. 개인정보 보유 및 이용 기간</h4>
                    <p>개인정보는 회원 탈퇴 시까지 보유하며, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관합니다.</p>

                    <h4>4. 개인정보의 제3자 제공</h4>
                    <p>서비스는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않으며, 법령에 따른 경우에만 예외로 합니다.</p>

                    <h4>5. 개인정보 처리 위탁</h4>
                    <p>서비스 제공자는 원활한 서비스 운영을 위해 일부 업무를 외부에 위탁할 수 있으며, 이 경우 관리 감독을 철저히 합니다.</p>

                    <h4>6. 이용자의 권리</h4>
                    <p>이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있습니다.</p>

                    <h4>7. 개인정보 보호를 위한 조치</h4>
                    <p>서비스는 개인정보 보호를 위해 기술적/관리적 보호 조치를 취합니다.</p>

                    <h4>8. 개인정보 처리방침 변경</h4>
                    <p>본 방침은 변경될 수 있으며, 변경 시 서비스 내 공지사항을 통해 안내합니다.</p>
                </section>

                <p className="tos-footer-text">
                    본 약관 및 개인정보 처리방침은 서비스 초기 기획 단계에서 사용 수급용 초안이며, 실제 서비스 운영 전에는 법률 전문가의 검토를 진행합니다.
                </p>
            </div>
        </div>
    );
};

export default ToSPg;
