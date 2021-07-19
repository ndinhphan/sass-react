export const ITEM_GET = "ITEM_GET";
export const ITEM_GET_HIGHLIGHT = "ITEM_GET_HIGHLIGHT";

export const itemGetNew = (params) => ({
  type: ITEM_GET,
  data: {
    type: "new",
    params,
  },
});

export const itemGetComingSoon = (params) => ({
  type: ITEM_GET,
  data: {
    type: "comingsoon",
    params,
  },
});

export const itemGetHighlight = (params) => ({
  type: ITEM_GET_HIGHLIGHT,
  data: {
    params,
  },
});
