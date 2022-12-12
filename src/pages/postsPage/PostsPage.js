import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/postsSlice";
import Post from "../../components/post/Post";
import Wall from "../../components/wall/Wall";

const PostsPage = () => {
  const dispatch = useDispatch();
  const {posts,post} = useSelector(state=>state.postsReducer);
  const {preloader} = useSelector(state => state.preloaderReducer);
  const {error} = useSelector(state => state.errorReducer);
  useEffect(()=>{
    dispatch(getPosts());
  },[]);
  return(
    <div>
      <h1>Main page</h1>
      <Wall symbol='='/>
        <h2>title:<br/>{post.title}</h2>
        <p>body:<br/>{post.body}</p>
      <Wall symbol='='/>
      {
        preloader
          ?<p>loading...</p>
          :error
            ?<div>{error}</div>
            :posts.slice(0,10).map(post => <Post post={post} key={post.id}/>)
      }
    </div>
  )
}
export default PostsPage;