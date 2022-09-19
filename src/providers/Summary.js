import { BASE_URL } from "./Helper"

const getAllSummary = async () => {
    try{
        const response = await fetch(BASE_URL);
        const responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        alert(error)
    }
}

const getSummaryByCountry = async (country) => {
    try{
        const response = await fetch(`${BASE_URL}/countries/${country}`);
        const responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        alert(error)
    }
}

export {
    getAllSummary,
    getSummaryByCountry
}