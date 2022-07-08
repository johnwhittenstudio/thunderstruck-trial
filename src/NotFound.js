import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Seems you wandered off the beaten path</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;