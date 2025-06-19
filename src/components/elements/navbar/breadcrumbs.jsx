import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .replace('-', ' ')
    .replace('%', ' ')
    .replace(/[0-9]/g, '')
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div key={crumb} className="flex gap-4 items-center">
          <Link to={currentLink}>{crumb}</Link>
          <div>/</div>
        </div>
      );
    });

  return <div className="flex gap-4 text-black text-xs font-semibold capitalize">{crumbs}</div>;
};

export default Breadcrumbs;
