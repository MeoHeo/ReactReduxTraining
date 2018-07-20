import * as Types from '.././constant';
import * as fakeApi from '../fakeApi/api';
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}
export function changeLeaveType(newBalance) {
    return function (dispatch) {
        dispatch({
            type: Types.UPDATE_BALANCE,
            newBalance
        })
    }
}
export function changeLoginStatus(status) {
    return function (dispatch) {
        dispatch({
            type: Types.UPDATE_LOGIN_STATUS,
            status
        })
    }
}
export function changeUserInfo(user) {
    return function (dispatch) {
        dispatch({
            type: Types.UPDATE_USER,
            user
        })
    }
}

export function checkUserInfo(user) {
    return function (dispatch) {
        let isUser = fakeApi.checkUserInfo(user.email, user.pass);
        dispatch({
            type: Types.CHECK_USER_INFO,
            isUser: isUser
        })
    }
}
