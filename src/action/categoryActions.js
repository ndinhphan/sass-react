export const CATEGORY_INIT = "CATEGORY_INIT";
export const CATEGORY_GET = "CATEGORY_GET";
export const categoryInitialize = () => ({
  type: CATEGORY_INIT,
});

export const categoryGet = (params) => ({
  type: CATEGORY_GET,
  data: {
    params,
  },
});
