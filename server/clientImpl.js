import regeneratorRuntime from "regenerator-runtime";

export const sendPublicRequest = async (url, method) => {
    const requestOptions = {
        method: method,
        redirect: 'follow'
    };

    return await fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => {
            return data
        })
        .catch(error => console.log('error', error));

}
