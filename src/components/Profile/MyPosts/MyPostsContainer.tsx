import { addPost, postsType, updateNewPostText } from '../../../redux/profile-slice';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-toolkit';



type StatePropsType = {
  posts: Array<postsType>
  newPostText: string
} 


const mapStateToProps = (state: AppStateType): StatePropsType=>{
    return{
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect<StatePropsType, {}, {}, AppStateType>(mapStateToProps)(MyPosts);


// const MyPostsContainer = connect <StatePropsType, DispatchPropsType, AppStateType>(mapStateToProps, { AddPostAC,unptAC })(MyPosts);



export default MyPostsContainer;