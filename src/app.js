import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import Loading from "./loading";
import Posts from "./posts";
import Faq from "./faq";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const url =
  "https://raw.githubusercontent.com/sriritwik3/users-api-server/master/db.json";

const MenuButton = ({ location }) => {
  if (location === "/") {
    return (
      <Link to="/faq">
        <button className="menu-btn">
          <BsFillQuestionSquareFill></BsFillQuestionSquareFill>
        </button>
      </Link>
    );
  }
  return (
    <Link to="/">
      <button className="menu-btn">
        <IoHome></IoHome>
      </button>
    </Link>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data.facts);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (data.length !== 0)
    return (
      <>
        <MenuButton location={location.pathname} />
        <main>
          <Switch>
            <Route
              path="/"
              render={(props) => <Posts {...props} posts={data} />}
              exact
            />
            <Route path="/faq" component={Faq} />
          </Switch>
        </main>
      </>
    );
  else return <h1>BE HAPPY MAMA</h1>;
};

export default App;
