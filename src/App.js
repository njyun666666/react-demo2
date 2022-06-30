import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import About1 from "./pages/About/About1/About1";
import About2 from "./pages/About/About2/About2";
import Nav from "./components/Nav/Nav";

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
      children: [
        {
          path: "about1",
          element: <About1 />,
        },
        {
          path: "about2",
          element: <About2 />,
        },
      ],
    },
    {
      path: "about/:id",
      element: <About />,
    },
  ]);
};

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Nav />
      <MainRouter />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="/about/about1" element={<About1 />} />
          <Route path="/about/about2" element={<About2 />} />
        </Route>
        <Route path="about/:id" element={<About />} />
      </Routes> */}
      <hr />
    </div>
  );
};

export default App;
