import { bannerTemplateParameters } from '../template-parameters';
import { createImage } from '@resoc/create-img';
import { TwitterClient } from 'twitter-api-client';
import { initTwitterClient } from './utils';

(async () => {
  const twitterClient = initTwitterClient();

  const parameters = await bannerTemplateParameters(twitterClient);

  await createImage(
    'resoc-templates/banner/resoc.manifest.json',
    parameters,
    { width: 1800, height: 600 },
    'twitter-banner.png'
  );
})();
