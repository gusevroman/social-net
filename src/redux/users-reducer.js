const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 0,
            photoUrl: "https://i.pinimg.com/236x/0c/65/bf/0c65bf2aa3ff35cb2ca908b229844205--emoticon-smiley.jpg",
            followed: "true", fullName: 'Goooose', status: "I'm captain",
            location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 1,
            photoUrl: "https://i.pinimg.com/originals/d9/fc/60/d9fc60a472b78b7ed1a797d12eae0d19.jpg",
            followed: "false", fullName: 'Wolf', status: "running",
            location: { city: 'Riga', country: 'Russia' }
        },
        {
            id: 2,
            photoUrl: "https://i.pinimg.com/originals/9a/e3/06/9ae306f9e8fc656be596399de1ac2ac9.jpg",
            followed: "false", fullName: 'Martlet', status: "Major Pain",
            location: { city: "Rome", country: 'Italy' }
        },
        {
            id: 3,
            photoUrl: "https://s-media-cache-ak0.pinimg.com/originals/28/1e/b0/281eb0031d2286c031d9ff01ff18e543.jpg",
            followed: "true", fullName: 'Pepper', status: "Soldjer",
            location: { city: 'Warsawa', country: 'Poland' }
        },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (userID) => ({ type: SET_USERS, userID });

export default usersReducer;