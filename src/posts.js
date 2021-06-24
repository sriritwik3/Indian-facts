import React from "react";
import Post from "./post";

const Posts = ({ posts }) => {
  // const newFacts = facts.slice();
  return (
    <section>
      <div className="title">
        <h2> Everything @India🇮🇳 </h2> <div className="underline"> </div>
      </div>
      <div>
        {console.log(typeof posts, posts)}
        {posts.map((fact) => {
          return <Post key={fact.id} {...fact} />;
        })}
        {/* {/* {console.log(newFacts)} */}
      </div>
    </section>
  );
};

export default Posts;
