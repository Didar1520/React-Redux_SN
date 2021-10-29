import React, { ChangeEvent } from 'react';
import { postsType } from '../../../redux/profile-slice';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type StatePropsType = {
  posts: Array<postsType>
  newPostText: string
}



const MyPosts: React.FC<StatePropsType> = (props) => {

  
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    
  return (
    <div>
      My posts
      <div>
       
      </div>
      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts;