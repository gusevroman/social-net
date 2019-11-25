const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: 'Where are you, baby?', likesCount: 12 },
        { id: 1, message: 'What-s time?', likesCount: 8 },
        { id: 2, message: 'Are you ready?', likesCount: 4 },
        { id: 3, message: 'It\'s sound good', likesCount: 31 }
    ],
    newPostText: 'Yo!'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: state.newPostText, likeCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
);

export default profileReducer;