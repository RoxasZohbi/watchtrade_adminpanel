
import Cookie from 'universal-cookie';
import localForage from 'localforage';

export function isAuthenticated() {
    var isAuthenticated = false;

    var cookie = new Cookie();
    var userCookie = cookie.get("user");
    if (userCookie) {
        var accessToken = userCookie.accessToken;
        if (accessToken)
            isAuthenticated = true;
    }

    return isAuthenticated;
}

export function deleteUserCookie() {

    var cookie = new Cookie();
    var userCookie = cookie.remove("user");
}

export function getUserCookie() {
    var cookie = new Cookie();
    var userCookie = cookie.get("user");
    console.log('userCokk', userCookie);
    if (!userCookie) {
        userCookie = {};
    }

    return userCookie;
}
export async function getUserToken() {
    let accessToken = await localForage.getItem('accessToken');
    let details = JSON.parse(accessToken)
    // var cookie = new Cookie();
    // var userCookie = cookie.get("user");
    // console.log('userCokk',userCookie);
    if (!details) {
        details = {};
    }

    return details;
}

export function redirectToLogin() {
    window.location.href = "/#/login";
}
