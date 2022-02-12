import ACTypes from "../types";

export const createUserAC = (data) => {
  return { type: ACTypes.CREATE_USER, payload: { user: data } };
};
