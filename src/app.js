import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Posts from "./posts";

const url =
  "https://raw.githubusercontent.com/sriritwik3/users-api-server/master/db.json";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
  console.log(data);
  if (data.length !== 0)
    return (
      <main>
        <Posts posts={data}></Posts>
      </main>
    );
  else return <h1>BE HAPPY MAMA</h1>;
};

export default App;
