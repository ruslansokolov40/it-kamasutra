import s from "./Post.module.css";

const Post = (props) => {
  // console.log(props.messege);
  // debugger;

  return (
    <div className={s.item}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200" />
      {props.message}
      <div>
        <span>Likes </span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
