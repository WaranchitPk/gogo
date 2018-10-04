export const getTokenInStorage = () =>{
    return localStorage.getItem('access-token')
};

export const removeTokenINStorage = () =>{
    return localStorage.removeItem('access-token')
};