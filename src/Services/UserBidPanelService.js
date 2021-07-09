import { PostAsync, GetAsync, PutAsync, DeleteAsync,GetAsyncBody } from "./api";

export async function updateProfilePost(body) {
  return await PostAsync(`${process.env.REACT_APP_BASE_URL}/`, body, true);
}
export async function userBidListingGet(userId) {
  return await GetAsync(`${process.env.REACT_APP_BASE_URL}/web/products?_id=${userId}`, true);
}