import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Link to="/cards">Cards</Link>
      </div>
    </div>
  );
};
