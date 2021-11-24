require('dotenv').config();

import { TwitterClient } from "twitter-api-client";

export const initTwitterClient = (): TwitterClient => {
  const twitterApiKey = process.env.TWITTER_API_KEY;
  const twitterApiSecret = process.env.TWITTER_API_SECRET;
  const twitterAccessToken = process.env.TWITTER_ACCESS_TOKEN;
  const twitterAccessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
  if (!twitterApiKey || !twitterApiSecret) {
    throw "Twitter credentials are not configured";
  }

  return new TwitterClient({
    apiKey: twitterApiKey,
    apiSecret: twitterApiSecret,
    accessToken: twitterAccessToken,
    accessTokenSecret: twitterAccessTokenSecret
  });
};
