import * as Constants from "../utils/constants";

export const apiRequest = async (params: string) => {
  return (
    await fetch(`${Constants.URL}/?${params}&apikey=${Constants.API_KEY}`)
  ).json();
};
