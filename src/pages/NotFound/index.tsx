import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 data-testid="not-found">Not Found</h1>
      <Link to="/">GO TO PAGE ONE</Link>
    </>
  );
}

export default NotFound;
