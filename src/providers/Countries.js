import { BASE_URL } from "./Helper"

const getAllCountries = async () => {
    try{
        const response = await fetch(`${BASE_URL}/countries`);
        const responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        alert(error)
    }
}

export {
    getAllCountries
}