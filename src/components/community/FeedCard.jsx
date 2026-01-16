const mockFeedData = {
  "posts": [
    {
      "id": "p_0001",
      "title": "F1 굿즈 교환 원합니다.",

      "metaRow": {
        "profile": {
          "userId": "u_001",
          "nickname": "Fanner1_98",
          "avatarUrl": "/img/avatars/u_001.png"
        },
        "time": {
          "createdAt": "2026-01-14T16:55:00+09:00"
        },
        "followButton": {
          "visible": true,
          "isFollowing": false
        }
      },

      "bodyText": "본문txt\n줄바꿈도 가능",

      "contentBlocks": [
        {
          "type": "media",
          "items": [
            {
              "kind": "image",
              "url": "/img/posts/p_0001_1.png",
              "ratio": 0.75
            }
          ]
        }
      ],

      "actions": {
        "likeCount": 5,
        "commentCount": 3,
        "shareCount": 0,
        "bookmarkCount": 0,
        "isLiked": false,
        "isBookmarked": false
      }
    }
  ]
};

const FeedCard = () => {
    const post = mockFeedData.posts[0];
    return (
        <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#ddd', borderRadius: '50%', marginRight: '10px', overflow: 'hidden' }}>
                    <img src={post.metaRow.profile.avatarUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                    <div style={{ fontWeight: 'bold' }}>{post.metaRow.profile.nickname}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{post.metaRow.time.createdAt}</div>
                </div>
            </div>

            {/* Title & Body */}
            <h3 style={{ margin: '0 0 10px' }}>{post.title}</h3>
            <p style={{ whiteSpace: 'pre-line', marginBottom: '10px' }}>{post.bodyText}</p>

            {/* Media */}
            {post.contentBlocks.map((block, index) => (
                <div key={index}>
                    {block.items.map((item, i) => (
                        <img key={i} src={item.url} alt="post content" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FeedCard;
