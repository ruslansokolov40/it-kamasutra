import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";




const MyPosts = (props) => {
  // debugger;
   let postsElements = props.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostsElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  } 

  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText} />
         </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
