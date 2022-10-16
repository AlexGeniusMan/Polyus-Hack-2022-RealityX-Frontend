import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorNotify, errorsHandler, infoNotify} from '../utils/utils'
import {authActions, AuthActionsType} from './auth-reducer'
import {logsApi} from '../api/logs-api'
import {AnalyzeFullnessDataType, LogsDataType} from '../types/Types'

export type InitialStateType = typeof initialState
let initialState = {
    logs: [] as LogsDataType[],
    fullness: [] as AnalyzeFullnessDataType[],
}

const logsReducer = (state = initialState, action: LogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/STAT/GET_STAT':
            return {
                ...state,
                logs: action.payload.data,
                fullness: action.payload.fullness,
            }
        default:
            return state;
    }
}

export type LogsActionsType = InferActionsTypes<typeof statActions>

export const statActions = {
    statReceived: (data: LogsDataType[], fullness: AnalyzeFullnessDataType[]) =>
        ({type: 'PH/STAT/GET_STAT', payload: {data, fullness}} as const),
}

type ThunkType = BaseThunkType<LogsActionsType | AuthActionsType>

export const getLogs = (): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await logsApi.getLogs()
            console.log('getLogs', data)
            if(data.is_oversize) errorNotify('Обнаружен негабарит')
            dispatch(statActions.statReceived(data.data, data.fullness))

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('getLogs', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default logsReducer;
