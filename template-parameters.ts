import { ParamValues } from "@resoc/core";
import { TwitterClient } from 'twitter-api-client';

export const bannerTemplateParameters = async (twitterClient: TwitterClient): Promise<ParamValues> => {
  const user  = await twitterClient.accountsAndUsers.usersShow({ screen_name: '@ph_bernard' });

  return {
    followerCount: user.followers_count.toString()
  }
};

export const profilePictureTemplateParameters = async (twitterClient: TwitterClient): Promise<ParamValues> => {
  return {
    borderColor: '#074490'
  }
};
