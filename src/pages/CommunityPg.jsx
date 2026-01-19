import React, { useEffect, useRef, useState } from "react";
import "./CommunityPg.css";
import noticeData from "../assets/data/community/communityNoticeData.json";
import ImgAtm from "../components/atoms/ImgAtm";
import ButtonAtm from "../components/atoms/ButtonAtm";

import CommunityPostPg from "./community/CommunityPostPg";
import CommunityLivePg from "./community/CommunityLivePg";
import CommunityVotePg from "./community/CommunityVotePg";
import searchIcon from "../assets/img/community/post/icon_search.svg";

const W = 430;
const AUTO = 5000;

export default function Community() {
  const notices = noticeData.notices ?? [];
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ 검색 관련 상태
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  // ✅ 탭: 아래만 바뀌게 (라우터 제거)
  const tabs = ["post", "live", "vote"];
  const [activeTab, setActiveTab] = useState("post");

  // ✅ 공지 슬라이더 잠금/드래그 관련
  const targetIndexRef = useRef(null);
  const userDraggingRef = useRef(false);
  const timerRef = useRef(null);

  const stopAuto = () => {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const goTo = (i, behavior = "smooth") => {
    const el = listRef.current;
    if (!el) return;
    if (notices.length === 0) return;

    const next = ((i % notices.length) + notices.length) % notices.length;
    targetIndexRef.current = next;
    setActiveIndex(next);
    el.scrollTo({ left: next * W, behavior });
  };

  const startAuto = () => {
    if (timerRef.current) return;
    if (notices.length <= 1) return;

    timerRef.current = setInterval(() => {
      goTo((targetIndexRef.current ?? activeIndex) + 1, "smooth");
    }, AUTO);
  };

  useEffect(() => {
    setActiveIndex(0);
    targetIndexRef.current = 0;
    listRef.current?.scrollTo({ left: 0, behavior: "auto" });

    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notices.length]);

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;

    const left = el.scrollLeft;

    if (userDraggingRef.current) {
      const idx = Math.round(left / W);
      if (idx !== activeIndex) setActiveIndex(idx);
      return;
    }

    if (targetIndexRef.current !== null) {
      const targetLeft = targetIndexRef.current * W;
      if (Math.abs(left - targetLeft) <= 2) targetIndexRef.current = null;
    }
  };

  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });

  const onDown = (e) => {
    const el = listRef.current;
    if (!el) return;

    userDraggingRef.current = true;
    drag.current.down = true;
    drag.current.moved = false;
    drag.current.x = e.clientX;
    drag.current.left = el.scrollLeft;

    e.currentTarget.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  };

  const onMove = (e) => {
    const el = listRef.current;
    if (!el || !drag.current.down) return;

    const dx = e.clientX - drag.current.x;

    if (!drag.current.moved && Math.abs(dx) > 5) {
      drag.current.moved = true;
      stopAuto();
      el.classList.add("is-dragging");
    }

    if (!drag.current.moved) return;

    targetIndexRef.current = null;
    el.scrollLeft = drag.current.left - dx;
    e.preventDefault();
  };

  const onUp = (e) => {
    const el = listRef.current;
    if (!el) return;

    drag.current.down = false;
    userDraggingRef.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    el.classList.remove("is-dragging");

    if (drag.current.moved) {
      const idx = Math.round(el.scrollLeft / W);
      goTo(idx, "smooth");
    }

    startAuto();
  };

  return (
    <>
      {/* 공지 슬라이더 */}
      <section className="notice-section">
        <div
          className="notice-list"
          ref={listRef}
          onScroll={onScroll}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onPointerCancel={onUp}
        >
          {notices.map((item) => (
            <div className="notice-card" key={item.id}>
              <ImgAtm srcProps={item.image} altProps={item.title} />
              <div className="notice-overlay">
                <h3 className="notice-title">{item.title}</h3>
                <p className="notice-sub">{item.subtitle}</p>
                <ButtonAtm>View</ButtonAtm>

                <div className="bar">
                  {notices.map((_, i) => (
                    <span
                      key={i}
                      className={`bar_circle ${i === activeIndex ? "on" : ""}`}
                      onClick={() => goTo(i, "smooth")}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ 탭 */}
      <section className="tab">
        <ul>
          <li>
            <button
              type="button"
              className={activeTab === "post" ? "active" : ""}
              onClick={() => setActiveTab("post")}
            >
              Post
            </button>
          </li>
          <li>
            <button
              type="button"
              className={activeTab === "live" ? "active" : ""}
              onClick={() => setActiveTab("live")}
            >
              Live Talk
            </button>
          </li>
          <li>
            <button
              type="button"
              className={activeTab === "vote" ? "active" : ""}
              onClick={() => setActiveTab("vote")}
            >
              Vote
            </button>
          </li>
        </ul>
      </section>

      {/* ✅ 여기만 바뀜 */}
      <section className="community-content">
        {activeTab === "post" && (
          <div className="postBox">
            <div className="searchBox">
              <div className="searchInner">
                <div className="search">
                  <input 
                    type="text" 
                    placeholder="검색어를 입력하세요." 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <img 
                    src={searchIcon} 
                    alt="search" 
                    onClick={handleSearch} 
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
            <CommunityPostPg searchTerm={searchTerm} />
          </div>
        )}

        {activeTab === "live" && (
          <div className="liveBox">
            <CommunityLivePg />
          </div>
        )}

        {activeTab === "vote" && (
          <div className="voteBox">
            <CommunityVotePg />
          </div>
        )}
      </section>
    </>
  );
}
