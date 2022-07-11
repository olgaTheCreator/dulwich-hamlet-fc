export const getTimeline = async () => {
  const queryParams = new URLSearchParams({
    expansions: "author_id,attachments.media_keys",
    "tweet.fields": "attachments,author_id,public_metrics,created_at,id,text",
    "user.fields": "id,name,profile_image_url,protected,url,username,verified",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics",
    max_results: "5",
  });

  const response = await fetch(
    `https://api.twitter.com/2/users/137097968/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_AUTH_BEARER}`,
      },
    }
  );

  const tweets = await response.json();
  console.log(tweets);
  const media = tweets.includes.media;
  const author = tweets.includes.users[0];

  return tweets.data.map((tweet) => {
    const singleTweet = {
      ...tweet,
      author: author,
      media:
        tweet?.attachments?.media_keys.map((key) =>
          media.find((media) => media.media_key === key)
        ) || [],
    };
    return singleTweet;
  });
};

// return (
//   tweets.data.reduce((allTweets, tweet) => {
//     const tweetWithAuthor = {
//       ...tweet,
//       media:
//         tweet?.attachments?.media_keys.map((key) =>
//           tweets.includes.media.find((media) => media.media_key === key)
//         ) || [],
//     };

//     return [tweetWithAuthor, ...allTweets];
//   }, []) || [] // If the Twitter API key isn't set, don't break the build
// );
