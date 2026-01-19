// src/components/community/FeedCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedCard.css";


// 이미지 동적 로딩 (Vite Glob)
const images = import.meta.glob('/src/assets/img/community/post/*.{png,jpg,jpeg,svg}', { eager: true });

function getAssetSrc(path) {
  if (!path) return "";
  const mod = images[path];
  // eager: true 이므로 mod 자체가 모듈이거나, mod.default가 경로일 수 있음
  return mod?.default || mod || path;
}

export default function FeedCard({ post, onDelete }) {
  if (!post) return null;
  const navigate = useNavigate();

  const { title, content, author, createdAt, media, poll, stats } = post;
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isChat, setIsChat] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isBook, setIsBook] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  /* Delete Confirmation Logic */
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Check if post is one of the default system posts (p_0001 to p_0011)
  const systemPostIds = [
      "p_0001", "p_0002", "p_0003", "p_0004", "p_0005", 
      "p_0006", "p_0007", "p_0008", "p_0009", "p_0010", "p_0011"
  ];
  const isProtected = systemPostIds.includes(post.id) || String(post.id).startsWith("p_restored_");

  return (
    <article className="feedCard">
      {/* title */}
      <h3 className="feedTitle">{title}</h3>

      {/* meta row */}
      <div className="metaRow">
        <img className="avatar" src={author.avatar} alt="" />
        <div className="metaInfo">
          <span className="nickname">{author.nickname}</span>
          <p className="dot">·</p>
          <span className="time">{createdAt}</span>
        </div>


        {/* Hide follow button for me */}
        {author.nickname !== "@ Fanner1_98" && (
          <button 
            className="followBtn"
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        )}
      </div>

      {/* body */}
      <p className="feedBody">{content}</p>

      {/* content block */}
      {post.type === "poll" && poll && <PollBlock poll={poll} />}
      {post.type !== "poll" && media?.length > 0 && <MediaBlock media={media} />}

      {/* actions (아이콘은 고정, 값만 변경) */}
      <div className="actionRow">
        <div className="actionLeft">
          <div className="actionItem" onClick={() => setIsLiked(!isLiked)} style={{ cursor: 'pointer' }}>
            <span className={`icon heart ${isLiked ? "on" : ""}`} />
            <span className="count">{stats.like + (isLiked ? 1 : 0)}</span>
          </div>
          <div className="actionItem" onClick={() => setIsChat(!isChat)} style={{ cursor: 'pointer' }}>
            <span className={`icon chat ${isChat ? "on" : ""}`} />
            <span className="count">{stats.comment}</span>
          </div>
        </div>
        <div className="actionRight">
          <span className={`icon share ${isShare ? "on" : ""}`} onClick={() => setIsShare(!isShare)} style={{ cursor: 'pointer' }} />
          <span className={`icon book ${isBook ? "on" : ""}`} onClick={() => setIsBook(!isBook)} style={{ cursor: 'pointer' }} />
          {author.nickname === "@ Fanner1_98" && (
            <img 
              src={getAssetSrc("/src/assets/img/community/post/icon_more.svg")} 
              alt="more" 
              style={{ width: 24, height: 24, cursor: 'pointer' }} 
              onClick={() => setIsMoreMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* comments */}
      {post.comments && post.comments.length > 0 && (
        <div className={`commentSection ${isChat ? "open" : ""}`}>
          {post.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}

      {/* More Menu Overlay */}
      {isMoreMenuOpen && (
        <div className="more-overlay" onClick={() => setIsMoreMenuOpen(false)}>
            <div 
                className="more-menu" 
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => {
                    e.currentTarget.dataset.startY = e.touches[0].clientY;
                }}
                onTouchEnd={(e) => {
                    const startY = parseFloat(e.currentTarget.dataset.startY);
                    const endY = e.changedTouches[0].clientY;
                    if (endY - startY > 50) { // Swipe down threshold
                        setIsMoreMenuOpen(false);
                    }
                }}
            >
                <div className="more-handle"></div>
                <div className="more-actions">
                    <button className="more-action-btn" onClick={() => { 
                        setIsMoreMenuOpen(false);
                        navigate('/community/post/write', { state: { post } });
                    }}>
                        <img src={getAssetSrc("/src/assets/img/community/post/icon_edit.svg")} alt="edit" />
                        수정하기
                    </button>
                    <button 
                        className="more-action-btn" 
                        onClick={() => { 
                            if (!isProtected) {
                                setShowDeleteConfirm(true); 
                                setIsMoreMenuOpen(false); 
                            }
                        }}
                        style={{ color: isProtected ? '#767676' : '#EAEAEA' }} // Dim color if protected
                        disabled={isProtected}
                    >
                        <img 
                            src={getAssetSrc("/src/assets/img/community/post/icon_delete.svg")} 
                            alt="delete" 
                            style={{ opacity: isProtected ? 0.3 : 1 }}
                        />
                        삭제하기
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Custom Delete Confirmation Overlay */}
      {showDeleteConfirm && (
        <div className="delete-confirm-overlay">
            <div className="delete-confirm-box">
                <div className="delete-icon-wrapper">
                    <img src={getAssetSrc("/src/assets/img/community/post/icon_delete.svg")} alt="trash" />
                </div>
                <p>삭제하시겠습니까?</p>
                <div className="delete-btn-group">
                    <button className="btn-cancel" onClick={() => setShowDeleteConfirm(false)}>취소</button>
                    <button className="btn-delete" onClick={() => { onDelete(post.id); setShowDeleteConfirm(false); }}>삭제</button>
                </div>
            </div>
        </div>
      )}
    </article>
  );
}

function CommentItem({ comment }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="commentItem">
      <div className="commentGroup">
        <img
          className={`commentAvatar ${comment.isReply ? "small" : ""}`}
          src={getAssetSrc(comment.author.avatar)}
          alt=""
        />
        <div className="commentContent">
          <div className="commentHeader">
            <span className="commentNick">{comment.author.nickname}</span>
            <p className="dot">·</p>
            <span className="commentTime">{comment.createdAt}</span>
          </div>
          <p className={`commentText ${comment.isReply ? "small" : ""}`}>{comment.content}</p>
          <button className="replyBtn">답글달기</button>
        </div>
      </div>
      <button className="commentLikeBtn" onClick={() => setIsLiked(!isLiked)}>
        <span className={`icon heart small ${isLiked ? "on" : ""}`} />
      </button>
    </div>
  );
}

function MediaBlock({ media }) {
  const video = media.find((m) => m.kind === "youtube");
  if (video) {
    return (
      <div className="mediaVideo">
        <iframe
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px" }}
        ></iframe>
      </div>
    );
  }

  const imgs = media.filter((m) => m.kind === "image");

  // 1장
  if (imgs.length === 1) {
    return (
      <div className="mediaSingle">
        <img src={getAssetSrc(imgs[0].url)} alt="" />
        <div className="mediaOverlay" />
      </div>
    );
  }

  // 2장/3장/4장 이상은 레이아웃 컴포넌트에서 처리(데이터 X)
  return (
    <div className={`mediaGrid count-${Math.min(imgs.length, 3)}`}>
      {imgs.slice(0, 3).map((it, idx) => (
        <div className="mediaCell" key={idx}>
          <img src={getAssetSrc(it.url)} alt="" />
          <div className="mediaOverlay" />
          {idx === 2 && imgs.length > 3 ? (
            <div className="moreOverlay">+{imgs.length - 3}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function PollBlock({ poll }) {
  const total = poll.options.reduce((s, o) => s + (o.count ?? 0), 0) || 1;

  return (
    <div className="pollBox">
      <div className="pollHeader">
        <div className="pollTitle">
          <span className="icon chart" />
          <span>투표</span>
        </div>
        <div className="pollMeta">
          {total}명 참여 · 복수 선택 불가
        </div>
      </div>
      {poll.options.map((o) => {
        const pct = Math.round(((o.count ?? 0) / total) * 100);
        const voted = poll.userVotedOptionId === o.id;
        return (
          <div className="pollItem" key={o.id}>
            <div className="pollBar">
              <div className="pollFill" style={{ width: `${pct}%` }} />
            </div>
            <span className="pollLabelOption">
               <span className={`pollRadio ${voted ? "on" : ""}`} />
               {o.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
