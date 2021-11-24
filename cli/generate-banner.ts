require('dotenv').config();

import { bannerTemplateParameters } from '../template-parameters';
import { createImage } from '@resoc/create-img';

(async () => {
  const parameters = await bannerTemplateParameters();

  await createImage(
    'resoc-templates/banner/resoc.manifest.json',
    parameters,
    { width: 1800, height: 600 },
    'twitter-banner.png'
  );
})();
