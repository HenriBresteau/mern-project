import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((result) => {
        dispatch({ type: GET_USER, payload: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((result) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const updateBio = (userId, bio)=>{
    return(dispatch)=>{
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}api/user/`+ userId,
            data: {bio}
        })
        .then((result) => {
            dispatch({type: UPDATE_BIO, payload: bio})
        }).catch((err) => {
            console.log(err);
        });
    }
}