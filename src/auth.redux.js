const loginIn = true
const logOut = false
export function auth(state={isAuth:false,user:'dapao'},action) {
    switch (action.type) {
        case loginIn:
            return {...state,isAuth: true}
        case logOut:
            return {...state,isAuth: false}
        default:
            return state
    }
}
export function login() {
    return {type:loginIn}
}
export function logout() {
    return {type:logOut}
}