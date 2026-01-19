// src/pages/community/CommunityPostPg.jsx
import React, { useState, useEffect } from "react";
import data from "../../assets/data/community/communityPostData.json"; // ✅ 경로 확인
import FeedCard from "../../components/community/FeedCard";
import WritBtn from "../../components/community/WritBtn";


export default function CommunityPostPg({ searchTerm }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 1. Get default data from JSON
    const initialPosts = data.posts ?? [];

    // 2. Load posts from localStorage
    const savedPosts = localStorage.getItem("f1_community_posts");

    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      
      // 3. Separate User Custom Posts
      //    - Filter out legacy dummy user (@ MyUser)
      //    - Filter out "restored" posts (p_restored_...)
      //    - Filter out any post that conflicts with default IDs (p_0001...p_0011) -> We will re-add fresh defaults
      const customPosts = parsedPosts.filter(p => 
          p.author?.nickname !== "@ MyUser" && 
          !String(p.id).startsWith("p_restored_") &&
          !initialPosts.some(init => init.id === p.id)
      );
      
      // 4. Merge: Custom Posts + Default Posts
      //    (Assuming new posts are at top, defaults at bottom)
      const mergedPosts = [...customPosts, ...initialPosts];

      setPosts(mergedPosts);
      
      // 5. Update localStorage with the clean list
      localStorage.setItem("f1_community_posts", JSON.stringify(mergedPosts));

    } else {
      // No saved data, just load defaults
      setPosts(initialPosts);
      localStorage.setItem("f1_community_posts", JSON.stringify(initialPosts));
    }
  }, []);

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((p) => p.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("f1_community_posts", JSON.stringify(updatedPosts));
  };

  // Filter posts based on searchTerm
  const filteredPosts = posts.filter(post => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      const titleMatch = post.title?.toLowerCase().includes(term);
      const contentMatch = post.content?.toLowerCase().includes(term);
      return titleMatch || contentMatch;
  });

  return (
    <section style={{ background: "#080808", minHeight: "100%" }}>
      <div style={{ maxWidth: 430, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <FeedCard key={post.id} post={post} onDelete={handleDeletePost} />
            ))
        ) : (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '300px', 
                color: '#767676', 
                fontSize: '16px',
                fontFamily: 'Pretendard, Roboto, sans-serif'
            }}>
                해당 게시글이 없습니다.
            </div>
        )}
      </div>
      <WritBtn />
    </section>
  );
}
