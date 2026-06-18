import DefaultLayout from '@node-core/doc-kit/src/generators/web/ui/components/Layout/index.jsx';
import HomeLayout from '../layouts/Home/index.jsx';
import SponsorsLayout from '../layouts/Sponsors/index.jsx';
import BlogLayout from '../layouts/Blog/index.jsx';
import PostLayout from '../layouts/Post/index.jsx';
import '../styles/index.css';

const LAYOUTS = {
  home: HomeLayout,
  sponsors: SponsorsLayout,
  blog: BlogLayout,
  post: PostLayout,
};

export default function Layout(props) {
  const Component = LAYOUTS[props.metadata.layout] ?? DefaultLayout;

  return <Component {...props} />;
}
