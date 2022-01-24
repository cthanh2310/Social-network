import * as constantsVariable from './constants';

const reducer = (state, action)=>{
    const {CURRENT_USER, GET_ALL_POSTS, CREATE_ONE_POST, UPDATE_ONE_POST, DELETE_ONE_POST} = constantsVariable;
    switch(action.type) {
        case CURRENT_USER:
            return {...state, user: action.payload};
        case GET_ALL_POSTS:
            return {...state, posts: action.payload};
        case CREATE_ONE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case UPDATE_ONE_POST:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? { ...post, ...action.payload } : post)
            }
        case DELETE_ONE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload._id),
            }
        default:
            return state;
    }
}
export default reducer;