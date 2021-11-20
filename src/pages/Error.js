import { Link } from "react-router-dom";
import pageNotFoundImg from "../images/illustrations/page-not-found.png";

function Error() {
  return (
    <section className="error-page">
      <img src={pageNotFoundImg} alt="" />
      <h1>Page Not Found</h1>
      <button>
        <Link to="/">Back to Homepage</Link>{" "}
      </button>
    </section>
  );
}

export default Error;
