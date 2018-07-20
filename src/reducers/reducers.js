import * as ActionTypes from '../constant'
const initialState = {
    leaveType: {
        annual: {
            type: 'Annual',
            total: 12,
            remaining: 12,
            leave: 0,
        },
        compensation: {
            type: 'Compensation',
            total: 12,
            remaining: 12,
            leave: 0,
        }
    },
    isLogin: false,
    user: {
        email: '',
        pass: ''
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_BALANCE:
            {
                return Object.assign({}, state, {
                    leaveType: action.newBalance
                });
            }
        case ActionTypes.UPDATE_LOGIN_STATUS:
            {
                return Object.assign({}, state, {
                    isLogin: action.status
                });
            }
        case ActionTypes.UPDATE_USER:
            {
                return Object.assign({}, state, {
                    user: action.user
                });
            }
        case ActionTypes.CHECK_USER_INFO:
            {
                return Object.assign({}, state, {
                    isUser: action.isUser
                });
            }

        default:
            return state
    }
}