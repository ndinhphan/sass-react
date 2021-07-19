import { get } from "./api";

const getCategories = async (params) => {
  // console.log(process.env.REACT_APP_BASE_API);
  // console.log("getcategories params", params);
  const response = await get(`/user-nftify/category/list`, params);
  // console.log("category from service", response.data.data.records);
  return response;
};

const getAll = async () => {
  const response = await getCategories();
  return response;
};

const categoryServices = { getAll, getCategories };

export default categoryServices;
