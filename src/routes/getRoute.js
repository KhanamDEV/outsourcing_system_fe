import UrlPattern from "url-pattern";

export const routeList = {
    "HOME" : '/',
    "SIGN_IN" : '/sign-in',
    "FORGET_PASSWORD": '/forget-password',
    "CHANGE_PASSWORD_FORGET": '/change-password'
}

export const getRoute = (name, queryParam  = {}, pathParam = {} ) => {
    return  new UrlPattern(name).stringify(pathParam);
}
