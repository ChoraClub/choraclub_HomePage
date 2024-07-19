export const DB_NAME =
  process.env.NODE_ENV == "development"
    ? process.env.DEV_DB
    : process.env.PROD_DB;

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_LOCAL_BASE_URL
    : process.env.NEXT_PUBLIC_HOSTED_BASE_URL;


export const defaultPreviewImageURL =
  "https://gateway.lighthouse.storage/ipfs/QmZmWxpdhQZnag8HZtwZPLR5wtK2jjfgsTBMpNpmijtZ5x";
export const framePreviewImageURL =
  "https://gateway.lighthouse.storage/ipfs/QmfRpe1iT5tA6NZV7jtvWAkRmCN8F1R8xsPEeANQz93tZq";