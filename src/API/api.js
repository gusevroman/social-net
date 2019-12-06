import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "04d48590-fdcf-4be2-9071-775597fde248"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users&page=${currentPage}&count=${pageSize}')
            .then(response => {
                return response.data;
            });
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userID) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userID)
    }
};

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID);
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};