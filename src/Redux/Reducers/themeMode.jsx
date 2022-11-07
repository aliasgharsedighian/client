const themeModeReducer = (state=true , action)=>{
    switch(action.type){
        case 'LIGHT-MODE' :
            return state=true;
        case 'DARK-MODE' :
            return state=false;
        default:
            return state;
    }
}
export default themeModeReducer;