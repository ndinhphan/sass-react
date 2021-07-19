import { get } from "./api.js";

const getItems = async (params) => {
  const response = await get(`/user-nftify`, params);
  return response;
};

const getHighlight = async (params) => {
  // console.log("gethighlight params", params);
  const response = await get(`/user-nftify/highlight/list`, params);
  return response;
};

const itemServices = { getHighlight, getItems };

export default itemServices;
