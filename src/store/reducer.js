const initialAuthState = {
    isAuthenticate: false,
    userName: '',
    email: ''
};

const authReducer = (state=initialAuthState, action) => {
    switch(action.type) {
        case 'AUTH_SUCCESS':
            return {...state, isAuthenticate: true };
        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.userName
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'LOGOUT_USER':
            return {
                ...initialAuthState
            };
        default:
            return initialAuthState
    }
};

export default authReducer;