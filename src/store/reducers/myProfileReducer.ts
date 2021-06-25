import { PostType } from "../../types/types"

enum MyProfileActionTypes{
  POST_ADD = "POST_ADD",
  POST_DELETE = "POST_DELETE"
}

interface MyProfileInterface{
  posts: PostType[],
  loading?: boolean,
  error?: null | string
}

interface PostAddAction {
  type: MyProfileActionTypes.POST_ADD,
  payload: PostType
}

interface PostDeleteAction {
  type: MyProfileActionTypes.POST_DELETE,
  payload: {
    id: number
  }
}

type MyProfileAction = PostAddAction | PostDeleteAction

const initialState : MyProfileInterface = {
  posts: [],
}

export const myProfileReducer = (state = initialState, action: MyProfileAction) : MyProfileInterface => {
  switch (action.type) {
    case MyProfileActionTypes.POST_ADD :
      const newPost = action.payload
      state.posts.push(newPost)
      return {
        ...state
      }

    case MyProfileActionTypes.POST_DELETE:
      const {id} = action.payload
      const newPosts = state.posts.filter(post => post.id !== id)
      return{
        ...state,
        posts: newPosts
      }

    default :
      return state
  }
}