import axios from "axios";
import * as actions from "../apiActions";
import apiKey from "../../apiKey";

const api = ({ dispatch }) => (next) => async (action) => {
  //console.log("SDFSDF");

  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { query, id, onSuccess, onError, onStart } = action.payload;
  if (onStart) dispatch({ type: onStart });
  //console.log(onSuccess);
  try {
    let response = null;
    if (onSuccess === "data/singleDataRecieved") {
      //console.log(id);
      response = await axios.request({
        baseURL: "http://www.omdbapi.com/",
        params: {
          i: id,
          apikey: apiKey.API,
        },
      });
    } else {
      response = await axios.request({
        baseURL: "http://www.omdbapi.com/",
        params: {
          s: query,
          apikey: apiKey.API,
        },
      });
    }
    //console.log(response.data);
    //setTimeout(()=> console.log("timeout"),5000)
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
export default api;
