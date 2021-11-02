import { ADD_ITEM_INFORM } from "../constatns/todo_type";
import axios from "axios";

export const getUser = (name_user) => async (dispatch) => {
  const res_country = await axios.get(
    `https://api.nationalize.io/?name=${name_user}`
  );
  const res_male = await axios.get(
    `https://api.nationalize.io/?name=${name_user}`
  );
  const country_user = res_country.data.data;
  const male_user = res_male.data.data;
  dispatch({
    type: "ADD_ITEM_INFORM",
    payload: {
      name: name_user,
      male: male_user,
      country: country_user,
    },
  });
};
