import {baseURL} from "./api";
import axios from "axios";
import {AnalyzeFullnessDataType, LogsDataType} from '../types/Types'

type LogsDataResponseType = {
    data: LogsDataType[]
    fullness: AnalyzeFullnessDataType[]
    is_oversize: boolean
}

export const logsApi = {
    getLogs(class1: string, class2: string, class3: string, class4: string, class5: string, class6: string, class7: string) {
        const accessToken = 'Bearer ' + localStorage.getItem('access')
        return axios.get<LogsDataResponseType>(baseURL + `api/app/statistics?oversize=50&class_1=${class1}&class_2=${class2}&class_3=${class3}&class_4=${class4}&class_5=${class5}&class_6=${class6}&class_7=${class7}`,{
            headers: {
                'Authorization': `${accessToken}`
            }
        })
            .then((response) => response.data)
    },
}
