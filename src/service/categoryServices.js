import axios from "axios";
const getCategories = async () => {
  console.log(process.env.REACT_APP_BASE_API);
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API}/user-nftify/category/list`,
    {
      params: {
        limit: "8",
        offset: "0",
        objectIds:
          "60d29be5f7a197108f06f128, 60d29be5f7a197108f06f129, 60da7f5a00b1370fbe8e977a, 60d29be5f7a197108f06f12e, 60d29be5f7a197108f06f12f",
      },
    }
  );
  console.log("category from service", response.data.data.records);
  return response.data.data.records;
};
const getAll = async () => {
  const response = await getCategories();
  return response;
};

const categoryServices = { getAll };

export default categoryServices;
