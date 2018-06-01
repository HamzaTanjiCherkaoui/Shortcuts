const log = ({ dispatch, getState }) => (next) => (action) => {
    
    console.log(action);
    next(action);

}
export default log; 