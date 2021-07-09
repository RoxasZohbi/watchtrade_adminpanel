import { updateProfilePost,userBidListingGet } from "../Services/UserBidPanelService";

export async function updateProfile(data) {
    let body = {
       firstName:data.firstName,
       lastName:data.lastName,
       mobile:data.mobile,
       email:data.email
    }
    return await updateProfilePost(body);
}
export async function userBidListing(userId) {

    return await userBidListingGet(userId);
}