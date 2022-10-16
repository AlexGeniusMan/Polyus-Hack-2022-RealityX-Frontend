import {baseURL} from "./api";
import axios from "axios";
import {LogsDataType} from '../types/Types'

export const settingsApi = {
    setMinimalOversize(value: string) {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        const data = new FormData()
        data.append('parametr', value)

        return axios.post<any>(baseURL + `api/app/statistics?oversize=50`, data, {
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
