import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


   let postsElements = props.posts
  .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostsElement = React.createRef();

  let addPost = () => {

    props.dispatch({type: 'ADD-POST'});   //!!!!!!!!!!!!!!!!
  } 

  let onPostChange = () => {
    let text = newPostsElement.current.value;


    // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});  // !!!!!!!!!!!!!!!
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action); 
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
            <button onClick={addPost}>Add post</button>
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
