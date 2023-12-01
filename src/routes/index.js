// constants
import { routes } from '../utils/routes';

// pages
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Dashboard from '../pages/Dashboard/Dashboard';
import CreateAds from '../pages/CreateAds/CreateAds';
import TextAd from '../pages/TextAd/TextAd';
import MediaAd from '../pages/MediaAd/MediaAd';
import AdsSubmitted from '../pages/AdsSubmitted/AdsSubmitted';

export const navRoutes = [
  {
    name: 'Dashboard',
    path: routes.DASHBOARD,
    documentTitle: 'Dashboard',
  },
  {
    name: 'Create Ads',
    path: routes.CREATE_ADS,
    documentTitle: 'Create Ads',
  },
];

export const pageRoutes = [
  {
    name: 'Dashboard',
    path: routes.DASHBOARD,
    element: <Dashboard />,
  },
  {
    name: 'Home',
    path: routes.HOME,
    element: <Dashboard />,
  },
  {
    name: 'Create Ads',
    path: routes.CREATE_ADS,
    element: <CreateAds />,
  },
  {
    name: 'Create Text Ads',
    path: routes.TEXT_ADS,
    element: <TextAd />,
  },
  {
    name: 'Create Media Ads',
    path: routes.MEDIA_ADS,
    element: <MediaAd />,
  },
  {
    name: 'Ads Submitted Successfully',
    path: routes.ADS_SUBMITTED,
    element: <AdsSubmitted />,
  },
  {
    name: 'Page Not Found',
    path: routes.NOT_FOUND,
    element: <PageNotFound />,
  },
];
