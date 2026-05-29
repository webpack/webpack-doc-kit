import DefaultLayout from '@node-core/doc-kit/src/generators/web/ui/components/Layout/index.jsx';
import '../styles/theme.css';

export default function Layout(props) {
  return (
    <>
      <DefaultLayout {...props} />
    </>
  );
}
