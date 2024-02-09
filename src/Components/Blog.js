import React from "react";
import { NavLink } from "react-router-dom";
import publi from "../Data/publi";;
const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {publi.map((posts) => {
          return (
            <li key={posts.id}>
              <NavLink to={`/publi/${posts.id}`}>{posts.titulo}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
