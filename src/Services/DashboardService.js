import { PostAsync, GetAsync, PutAsync, DeleteAsync } from "./api";

export async function DashboardPost(body) {
  return await PostAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard`, body, true);
}
export async function DashboardPut(id, body) {
  return await PutAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard/PutDashboard?id=${id}`, body, true);
}

export async function DashboardDataGet(pageNumber, pageSize) {
  return await GetAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard/GetAllDashboards?pageNumber=${pageNumber}&pageSize=${pageSize}`, true);
}
export async function DashboardDataGetById(id) {
  return await GetAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard/GetDashboardById?id=${id}`, true);
}
export async function deleteDashboardRecord(id) {
  return await DeleteAsync(`${process.env.REACT_APP_BASE_URL}/DeleteDashboard?id=${id}`, true);
}
