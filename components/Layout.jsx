import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomeLayout from '../layouts/Home/index.jsx';
import SponsorsLayout from '../layouts/Sponsors/index.jsx';
import BlogLayout from '../layouts/Blog/index.jsx';
import PostLayout from '../layouts/Post/index.jsx';
import PageNotFoundLayout from '../layouts/PageNotFound/index.jsx';
import '../styles/index.css';

// TODO(avivkeller): Give these components proper exports
import DefaultLayout from '../node_modules/@doc-kit/generator-react/src/html/ui/components/Layout/index.jsx';

const LAYOUTS = {
  home: HomeLayout,
  sponsors: SponsorsLayout,
  blog: BlogLayout,
  post: PostLayout,
  404: PageNotFoundLayout,
};

export default function Layout(props) {
  const Component = LAYOUTS[props.metadata.layout] ?? DefaultLayout;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Component {...props} />
    </>
  );
}
