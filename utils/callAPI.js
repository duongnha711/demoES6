import { URL_API } from "./../constants/config.js"

//refactor
const callAPI = (method, uri, data) => {
    return axios({
        method,//chan phuong // method: method,
        url: `${URL_API}/${uri}`,
        data,//chan phuong// data: data,
    })
}

const getListProduct = () => {
    return axios({
        method: "GET",
        url: `${URL_API}/product`,
    });
};


const addProduct = product => {
    return axios({
        method: "POST",
        url: `${URL_API}/product`,
        data: product,
    })
}

const delProduct = id => {
    return axios({
        method: "DELETE",
        url: `${URL_API}/product/${id}`,
    })
}

const showInfoProduct = id => {
    return axios({
        method: "GET",
        url: `${URL_API}/product/${id}`,
    })
}

const updateProduct = (id, product) => {
    return axios({
        method: "PUT",
        url: `${URL_API}/product/${id}`,
        data: product,
    })
}

export { getListProduct, addProduct, delProduct, showInfoProduct, updateProduct, callAPI }; // khỏi nhúng callAPI bên index