import * as constants from "../utils/constants";

export const apiRequest = async (params: string) => {
  return (
    await fetch(`${constants.URL}/${params}&apikey=${constants.API_KEY}`)
  ).json();
};
