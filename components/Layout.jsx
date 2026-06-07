import DefaultLayout from '@node-core/doc-kit/src/generators/web/ui/components/Layout/index.jsx';
import HomeLayout from '../layouts/Home/index.jsx';
import '../styles/index.css';

const LAYOUTS = {
  home: HomeLayout,
};

export default function Layout(props) {
  const Component = LAYOUTS[props.metadata.layout] ?? DefaultLayout;

  return <Component {...props} />;
}
