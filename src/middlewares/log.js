const log =(on) => ({ dispatch, getState }) => (next) => (action) => {  
    
    if(on){
        console.log("action =>",action);
        console.log("state =>",getState());
    }
    next(action);

}
export default log; 
