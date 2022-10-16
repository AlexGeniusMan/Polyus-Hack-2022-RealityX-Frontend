import {baseURL} from "./api";
import axios from "axios";

export const classesApi = {
    setClassesParams(value: {min: number, max: number}[]) {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        const data = new FormData()
        data.append('parametr', JSON.stringify(value))

        return axios.post<any>(baseURL + `api/app/statistics?oversize=50`, data, {
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
