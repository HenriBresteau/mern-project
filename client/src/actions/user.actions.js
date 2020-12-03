import axios from 'axios'

export const GET_USER = "GET_USER";
export const getUser = (uid)=>{
    return(dispatch) =>{
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
        .then((result) => {
            dispatch({ type: GET_USER, payload: result.data})
        }).catch((err) => {
            console.log(err);
        });
}}