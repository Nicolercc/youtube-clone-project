import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section>
      <div className="error-container text-center m-5">
        <h1>oops! page not found</h1>
        <Link to="/" className="btn btn-primary m-4">
          back home
        </Link>
      </div>
    </section>
  );
};
export default Error;
