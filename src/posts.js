import React from "react";
import Post from "./post";

const Posts = ({ posts }) => {
  // const newFacts = facts.slice();
  return (
    <section>
      <div className="title">
        <h2>Anything about India </h2> <div className="underline"> </div>
      </div>
      <div>
        {posts.map((fact) => {
          return <Post key={fact.id} {...fact} />;
        })}
        {/* {/* {console.log(newFacts)} */}
      </div>
    </section>
  );
};

export default Posts;
