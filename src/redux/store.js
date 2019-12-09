import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 0, message: 'Where are you, baby?', likesCount: 12 },
                { id: 1, message: 'What-s time?', likesCount: 8 },
                { id: 2, message: 'Are you ready?', likesCount: 4 },
                { id: 3, message: 'It\'s sound good', likesCount: 31 }
            ],
            newPostText: 'Yo!'
        },

        dialogsPage: {
            messages: [
                { id: 0, message: 'How do you do' },
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Bla-lallo' }
            ],
            dialogs: [
                { id: 0, name: 'Goooose', avatarImg: 'https://2.bp.blogspot.com/-RJysC3ecYlk/T_5a913d7XI/AAAAAAAAAtw/z-_ZOkNDtTQ/s1600/smiley03.jpg' },
                { id: 1, name: 'Wolf', avatarImg: 'https://101clipart.com/wp-content/uploads/06/Basketball%20Player%20Dribbling%20Clipart%2028.jpg' },
                { id: 2, name: 'Martlet', avatarImg: 'https://s-media-cache-ak0.pinimg.com/236x/f1/dc/bd/f1dcbdb9b9fa390074856fb3b99e58bf.jpg' },
                { id: 4, name: 'Pepper', avatarImg: 'https://fscomps.fotosearch.com/compc/CSP/CSP715/basketball-player-cartoon-dribbling-clipart__k7153641.jpg' },
                { id: 5, name: 'Squirrel', avatarImg: 'https://i.pinimg.com/originals/08/f5/8c/08f58c2995a7173033c38c2e58979c72.jpg' }
            ],
            newMessageBody: ""
        },
        sidebar: {},
        avatars: [
            { avatarImg0: 'https://2.bp.blogspot.com/-RJysC3ecYlk/T_5a913d7XI/AAAAAAAAAtw/z-_ZOkNDtTQ/s1600/smiley03.jpg' },
            { avatarImg1: 'https://101clipart.com/wp-content/uploads/06/Basketball%20Player%20Dribbling%20Clipart%2028.jpg' },
            { avatarImg2: 'https://s-media-cache-ak0.pinimg.com/236x/f1/dc/bd/f1dcbdb9b9fa390074856fb3b99e58bf.jpg' },
            { avatarImg3: 'https://fscomps.fotosearch.com/compc/CSP/CSP715/basketball-player-cartoon-dribbling-clipart__k7153641.jpg' },
            { avatarImg4: 'https://i.pinimg.com/originals/08/f5/8c/08f58c2995a7173033c38c2e58979c72.jpg' }
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store
window.store = store


/*
https://1.bp.blogspot.com/-RP6Rv-x72Z0/T_5a4VferNI/AAAAAAAAAtI/YJ6oy7TGv1E/s1600/lost_emoticon.png
https://4.bp.blogspot.com/-gV4JzJXVgw4/T_5a89QFKfI/AAAAAAAAAto/rHYNstoifmc/s1600/smiley.jpg
https://2.bp.blogspot.com/-RJysC3ecYlk/T_5a913d7XI/AAAAAAAAAtw/z-_ZOkNDtTQ/s1600/smiley03.jpg
https://i.pinimg.com/236x/0c/65/bf/0c65bf2aa3ff35cb2ca908b229844205--emoticon-smiley.jpg
https://s-media-cache-ak0.pinimg.com/236x/f1/dc/bd/f1dcbdb9b9fa390074856fb3b99e58bf.jpg
https://fscomps.fotosearch.com/compc/CSP/CSP993/caucasian-basketball-player-clipart__k14902790.jpg
https://fscomps.fotosearch.com/compc/CSP/CSP715/basketball-player-cartoon-dribbling-clipart__k7153641.jpg
https://i.pinimg.com/originals/d9/fc/60/d9fc60a472b78b7ed1a797d12eae0d19.jpg
https://i.pinimg.com/originals/9a/e3/06/9ae306f9e8fc656be596399de1ac2ac9.jpg
https://s-media-cache-ak0.pinimg.com/originals/28/1e/b0/281eb0031d2286c031d9ff01ff18e543.jpg
https://images.clipartof.com/small/440599-Royalty-Free-RF-Clip-Art-Illustration-Of-A-Cartoon-Basketball-Boy-Dribbling.jpg
https://101clipart.com/wp-content/uploads/06/Basketball%20Player%20Dribbling%20Clipart%2027.jpg
https://101clipart.com/wp-content/uploads/06/Basketball%20Player%20Dribbling%20Clipart%2028.jpg
http://clipart-library.com/images/6iryq5dMT.gif
https://i.pinimg.com/originals/08/f5/8c/08f58c2995a7173033c38c2e58979c72.jpg
http://clipart-library.com/images/BigAzMp8T.jpg
http://clipart-library.com/images/8TEK6xpTa.jpg
*/
