import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// add menu
export const AddMenuApi = async (reqBody) =>{
    return await commonApi("POST" ,`${serverUrl}/addmenu`,reqBody,"")
}

export const GetMenuApi = async () => {
    return await commonApi("GET", `${serverUrl}/getmenus`, {}, "");
};
export const GetMenuItemByIdApi = async (id) => {
    return await commonApi("GET", `${serverUrl}/getmenuitems/${id}`, {}, "");
};
