import {baseURL} from "./api";
import axios from "axios";
import {LogsDataType} from '../types/Types'

type LogsDataResponseType = {
    data: LogsDataType[]
}

export const logsApi = {
    getLogs() {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        return axios.get<LogsDataResponseType>(baseURL + `api/app/statistics?oversize=50`,{
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
