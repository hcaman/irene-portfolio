import * as React from 'react';

import Seo from '../components/seo';
import NotFound from '../components/notfound';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <NotFound />
  </>
);

export default NotFoundPage;
