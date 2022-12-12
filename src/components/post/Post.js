import React from "react";
import Wall from "../wall/Wall";
import {useDispatch} from "react-redux";
import {onePostInfo} from "../../store/postsSlice";

const Post = ({post}) => {
  const dispatch = useDispatch();
  return(
    <div>
      <h3>title:<br/>{post.title}</h3>
      <button onClick={()=>dispatch(onePostInfo(post))}>get info</button>
      <Wall/>
    </div>
  )
}

export default Post;