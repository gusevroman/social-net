const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 0, message: 'How do you do'},
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Bla-lallo'}
    ],
    dialogs: [
        {
            id: 0,
            name: 'Goooose',
            avatarImg: 'https://2.bp.blogspot.com/-RJysC3ecYlk/T_5a913d7XI/AAAAAAAAAtw/z-_ZOkNDtTQ/s1600/smiley03.jpg'
        },
        {
            id: 1,
            name: 'Wolf',
            avatarImg: 'https://101clipart.com/wp-content/uploads/06/Basketball%20Player%20Dribbling%20Clipart%2028.jpg'
        },
        {
            id: 2,
            name: 'Martlet',
            avatarImg: 'https://s-media-cache-ak0.pinimg.com/236x/f1/dc/bd/f1dcbdb9b9fa390074856fb3b99e58bf.jpg'
        },
        {
            id: 4,
            name: 'Pepper',
            avatarImg: 'https://fscomps.fotosearch.com/compc/CSP/CSP715/basketball-player-cartoon-dribbling-clipart__k7153641.jpg'
        },
        {
            id: 5,
            name: 'Squirrel',
            avatarImg: 'https://i.pinimg.com/originals/08/f5/8c/08f58c2995a7173033c38c2e58979c72.jpg'
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }

        default:
            return state;
    }
};


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;