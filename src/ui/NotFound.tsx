import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <p className="notice">
      Page not found. <Link to="/">Home</Link>
    </p>
  );
}
