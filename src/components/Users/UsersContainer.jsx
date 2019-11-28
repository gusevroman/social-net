import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);