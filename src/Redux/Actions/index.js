// addToCart redux
export const addToCart = (nr)=>{
    return {
        type: 'INCREMENT' ,
        payload: nr
    }
}

// login and logout redux
export const login =()=>{
    return {
        type: 'SIGN-IN'
    }
}
export const logout = ()=>{
    return {
        type: 'SIGN-OUT'
    }
}

//theme lightMode or darkMode
export const lightMode =()=>{
    return{
        type: 'LIGHT-MODE'
    }
}
export const darkMode = ()=>{
    return {
        type: 'DARK-MODE'
    }
}