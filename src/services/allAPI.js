import serverURL from "./serverURL"
import commonAPI from "./commonApi"

export const getWeatherAPI =async () =>{
    return await commonAPI("GET",serverURL,"")
}