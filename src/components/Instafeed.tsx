import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Feed from "./Feed";
import Container from "./Container";

interface InstafeedProps {
  token: string;
  limit: number;
}

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
}

const Instafeed: React.FC<InstafeedProps> = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState<InstagramPost[]>([]);
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    fetchInstagramPost();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <div className="text-white px-20 bg-black">
      <h1>Instagram Feed</h1>
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default Instafeed;
