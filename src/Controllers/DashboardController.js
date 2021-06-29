import { DashboardPost, DashboardDataGet, DashboardPut, DashboardDataGetById, deleteDashboardRecord } from "../Services/DashboardService";

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
export async function getDashboardDetailAll() {

    return await DashboardDataGet();
}
export async function getDashboardDetailById(id) {

    return await DashboardDataGetById(id);
}

export async function deleteRecordDashboardDetail(id) {

    return await deleteDashboardRecord(id);
}
