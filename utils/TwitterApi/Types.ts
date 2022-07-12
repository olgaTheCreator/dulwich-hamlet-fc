export type TweetAuthor = {
  url: string;
  username: string;
  profile_image_url: string;
  id: string;
  name: string;
};
export type PublicMetrics = {
  like_count: number;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
};

export type Attachments = {
  media_keys: string[];
};

export type Media = Array<{
  height: number;
  media_key: string;
  type: string;
  url: string;
  width: number;
}>;

export interface TweetData {
  author_id: string;
  public_metrics: PublicMetrics;
  attachments?: Attachments;
  created_at: string;
  id: string;
  text: string;
  author: TweetAuthor;
  media: Media;
}
