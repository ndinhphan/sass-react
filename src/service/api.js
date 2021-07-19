import axios from "axios";

const getFullPath = (baseUrl) => {
  return `${process.env.REACT_APP_BASE_API}${baseUrl}`;
};
export const get = async (baseUrl, params) => {
  try {
    return await axios.get(getFullPath(baseUrl), { params });
  } catch (error) {
    console.log("axios get error:", error);
  } finally {
  }
};

export const post = async (baseUrl, params) => {
  try {
    return await axios.post(getFullPath(baseUrl), { params });
  } catch (error) {
    console.log("axios post error:", error);
  } finally {
  }
};
export const put = async (baseUrl, params) => {
  try {
    return await axios.put(getFullPath(baseUrl), { params });
  } catch (error) {
    console.log("axios put error:", error);
  } finally {
  }
};
export const remove = async (baseUrl, params) => {
  try {
    return await axios.delete(getFullPath(baseUrl), { params });
  } catch (error) {
    console.log("axios delete error:", error);
  } finally {
  }
};
