import React from "react";
import publi from "../Data/publi";
import { Navigate, useParams } from "react-router-dom";

const Post = () => {
  const {id} = useParams ();
  return (
  <>
  {publi[id -1] ? 
      <div>
          <h1>{publi[id -1].titulo}</h1>
          <p>{publi[id -1].texto}</p>
      </div>
  :
      <Navigate replace to='/'/>
  }
  </>
    );
}

export default Post;