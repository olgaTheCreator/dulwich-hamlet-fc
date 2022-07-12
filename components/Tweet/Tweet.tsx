import { TweetData } from "../../utils/TwitterApi/Types";
import Image from "next/image";

export const Tweet = ({
  text,
  id,
  author,
  media,
  created_at,
  public_metrics,
}: TweetData) => {
  const authorUrl = `https://twitter.com/${author.username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
  const createdAt = new Date(created_at);

  const formattedText = text
    .replace(/https:\/\/[\n\S]+/g, "")
    .replace("&amp;", "&");
  console.log(authorUrl);
  return (
    <div>
      <a
        // className=""
        href={authorUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt={author.username}
          height={48}
          width={48}
          src={author.profile_image_url}
          // className=""
        />
      </a>
      <a
        href={authorUrl}
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <span className="" title={author.name}>
          {author.name}
        </span>
        <span className="" title={`@${author.username}`}>
          @{author.username}
        </span>
      </a>
    </div>
  );
};
