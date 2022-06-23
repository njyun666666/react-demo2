import { Link, Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";

const About = () => {
  let { id } = useParams();
  let [searchParams] = useSearchParams();
  let location = useLocation();

  console.log(id);
  console.log(searchParams.get("a"));
  console.log(location);

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>

      <div>
        <Link to="about1">about1</Link> <br />
        <Link to="about2">about2</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default About;
