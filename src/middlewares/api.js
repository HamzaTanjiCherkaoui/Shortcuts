const log = ({ dispatch, getState }) => (next) => (action) => {
    
    console.log("YEY API");
    next(action);

}
export default log; 