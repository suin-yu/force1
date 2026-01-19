// Imports
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CommunityPostWritePg.css";

// Icons
import iconPhoto from "../../assets/img/community/post/icon_photo.svg"; 
import iconVote from "../../assets/img/community/post/icon_chart2.svg"; 
import iconClose from "../../assets/img/community/post/icon_close.svg";

// Helper for dynamic loading (copied from FeedCard logic or just simple path usage)
// Since we are just displaying what was saved, passing the URL path is enough. 
// However, to use the glob map logic, we might need to duplicate it or move to a utility.
// For now, let's assume raw paths work if they are absolute/relative public paths, 
// OR use the same glob logic if they are asset paths.
// Let's create a simple function or component if needed.
const images = import.meta.glob('/src/assets/img/community/post/*.{png,jpg,jpeg,svg}', { eager: true });
function getAssetSrc(path) {
  if (!path) return "";
  const mod = images[path];
  return mod?.default || mod || path;
}

export default function CommunityPostWritePg() {
  const navigate = useNavigate();
  const location = useLocation();
  const editPost = location.state?.post;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    if (editPost) {
        setTitle(editPost.title);
        setContent(editPost.content);
        setMediaList(editPost.media || []);
    }
  }, [editPost]);

  const handleClose = () => {
    navigate(-1);
  };

  const handleRegister = () => {
    if (!title.trim() || !content.trim()) {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    const savedPosts = localStorage.getItem("f1_community_posts");
    let posts = savedPosts ? JSON.parse(savedPosts) : [];

    if (editPost) {
        // Update existing post
        posts = posts.map(p => {
            if (p.id === editPost.id) {
                return {
                    ...p,
                    title,
                    content,
                    media: mediaList, // Update media if modified (though currently no add/remove logic)
                    // Optional: update updatedAt
                };
            }
            return p;
        });
    } else {
        // Create new post
        const newPost = {
            id: `p_${Date.now()}`,
            type: "text",
            board: "free",
            title: title,
            content: content,
            author: {
                id: "u_me",
                nickname: "@ Fanner1_98", 
                avatar: "/src/assets/img/community/post/Fanner1_98.png",
                badge: "Ferrari" 
            },
            createdAt: "방금 전",
            visibility: "public",
            tags: [],
            media: mediaList,
            links: [],
            meta: {},
            stats: { like: 0, comment: 0, view: 0 },
            isLiked: false,
            isBookmarked: false,
            comments: []
        };
        posts.unshift(newPost);
    }

    localStorage.setItem("f1_community_posts", JSON.stringify(posts));
    navigate(-1);
  };

  return (
    <div className="post-write-container">
      {/* Header */}
      <header className="post-write-header">
        <button className="close-btn" onClick={handleClose}>
            <img src={iconClose} alt="Close" />
        </button>
        <div className="header-actions">
          <button className="draft-btn">임시저장</button>
          <button className="register-btn" onClick={handleRegister}>등록</button>
        </div>
      </header>

      {/* Body */}
      <main className="post-write-body">
        <input 
            type="text" 
            className="title-input" 
            placeholder="제목을 입력하세요." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <div className="divider"></div>
        <textarea 
            className="content-textarea" 
            placeholder="F1에대한 이야기를 자유롭게 작성해주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
        ></textarea>
        
        {/* Media Preview */}
        {mediaList.length > 0 && (
            <div className="media-preview-container">
                {mediaList.map((item, index) => (
                    <div key={index} className="media-preview-item">
                        <img src={getAssetSrc(item.url)} alt={`attachment-${index}`} />
                    </div>
                ))}
            </div>
        )}
      </main>

      {/* Footer / Toolbar */}
      <footer className="post-write-footer">
        <button className="tool-btn">
            <img src={iconPhoto} alt="Photo" />
            <span>사진</span>
        </button>
        <button className="tool-btn">
             <img src={iconVote} alt="Vote" />
            <span>투표</span>
        </button>
      </footer>
    </div>
  );
}
