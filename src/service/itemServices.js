import axios from "axios";

const getNew = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API}/user-nftify`,
    {
      params: {
        limit: "8",
        sortField: "sellorder.createdAt",
        sortType: "-1",
        status: "2,4",
      },
    }
  );
  // get array of items
  // console.log(response.data.data.records);
  return response.data.data.records;
};

// ?limit=8&sortField=name&sortType=1&status=1
const getComingSoon = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API}/user-nftify`,
    {
      params: {
        limit: "8",
        sortField: "name",
        sortType: "1",
        status: "1",
      },
    }
  );
  return response.data.data.records;
};

const getHighlight = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API}/user-nftify/highlight/list`,
    {
      params: {
        objectIds: `60e3ca3980ba6406a0841983, 60da99f200b1370fbe8e97fb, 60da967500b1370fbe8e97ef`,
      },
    }
  );
  return response.data.data.records;
};

const getAll = async () => {
  return Promise.all([getNew(), getComingSoon(), getHighlight()])
    .then((res) => {
      // console.log("response", res);
      const [newItems, comingsoonItems, highlightItems] = res;
      return {
        items: {
          new: newItems,
          comingsoon: comingsoonItems,
          highlight: highlightItems,
        },
      };
    })
    .catch()
    .finally();
};

const itemServices = { getAll };

export default itemServices;
