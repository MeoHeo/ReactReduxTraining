const user = {
    email: '123@gmail.com',
    pass: '123'
}
export function checkUserInfo (email, pass) {
    if (email === user.email && pass === user.pass) {
        return true
    } else {
        return false
    }
}