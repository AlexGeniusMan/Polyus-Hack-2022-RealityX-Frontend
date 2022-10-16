import {baseURL} from "./api";
import axios from "axios";
import {StatDataType} from '../types/Types'

export const logsApi = {
    getLogs() {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        return axios.get<StatDataType[]>(baseURL + `api/app/statistics?oversize=50`,{
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
