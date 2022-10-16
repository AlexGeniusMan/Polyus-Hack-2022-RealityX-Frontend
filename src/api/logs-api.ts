import {baseURL} from "./api";
import axios from "axios";
import {LogsDataType} from '../types/Types'

export const logsApi = {
    getLogs() {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        return axios.get<LogsDataType[]>(baseURL + `api/app/statistics?oversize=50`,{
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
