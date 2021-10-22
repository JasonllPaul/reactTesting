import {getAllProducts} from "./components/model/model";
import regeneratorRuntime from "regenerator-runtime";

export const getAllProductsData = async () => {
    let res = await getAllProducts();
    return res;
}

