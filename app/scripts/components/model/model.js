import {sendPublicRequest} from "../../../../server/clientImpl";
import regeneratorRuntime from "regenerator-runtime";

export const getAllProducts = async () => {
    try {
        const res = sendPublicRequest("http://127.0.0.1:3035/", 'GET');
        return JSON.parse(await res);
    } catch (e) {
        return {}
    }
};
