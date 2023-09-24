import React from "react";

interface FeedProps {
  feed: {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
  };
}

const Feed: React.FC<FeedProps> = ({ feed }) => {
  const { id, caption, media_type, media_url } = feed;
  let post: JSX.Element;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          controls
          playsInline
        />
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img width="200" height="200" id={id} src={media_url} alt={caption} />
      );
      break;
    default:
      post = (
        <img width="200" height="200" id={id} src={media_url} alt={caption} />
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
