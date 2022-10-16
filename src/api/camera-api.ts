import {baseURL} from "./api";
import axios from "axios";

export type GetStreamResponseType = {

}

export const cameraAPI = {
    getStream() {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        return axios.get<GetStreamResponseType>(baseURL + `api/app/stream`,{
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
