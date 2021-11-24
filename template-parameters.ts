import { ParamValues } from "@resoc/core";

export const bannerTemplateParameters = async (): Promise<ParamValues> => {
  return {
    followerCount: '456321'
  }
};

export const profilePictureTemplateParameters = async (): Promise<ParamValues> => {
  return {
    borderColor: '#074490'
  }
};
