import { DashboardPost, DashboardDataGet, DashboardPut, DashboardDataGetById, deleteBlotterRecord } from "../Services/DashboardService";

export async function DashboardCall(data) {
    let body = {
       
    }
    return await DashboardPost(body);
}
export async function DashboardUpdateCall(id, data) {
    let body = {
    
    }
    return await DashboardPut(id, body);
}
export async function getDashboardDetailAll(pageNumber, pageSize) {

    return await DashboardDataGet(pageNumber, pageSize);
}
export async function getDashboardDetailById(id) {

    return await DashboardDataGetById(id);
}

export async function deleteRecordDashboardDetail(id) {

    return await deleteDashboardRecord(id);
}
