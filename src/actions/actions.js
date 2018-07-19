import * as Types from '.././constant';
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