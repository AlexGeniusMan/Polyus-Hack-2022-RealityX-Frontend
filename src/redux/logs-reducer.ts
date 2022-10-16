import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorsHandler} from "../utils/utils";
import {authActions, AuthActionsType} from './auth-reducer'
import {logsApi} from '../api/logs-api'
import {StatDataType} from '../types/Types'

export type InitialStateType = typeof initialState
let initialState = {
    data: [] as StatDataType[]
}

const logsReducer = (state = initialState, action: LogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/STAT/GET_STAT':
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state;
    }
}

export type LogsActionsType = InferActionsTypes<typeof statActions>

export const statActions = {
    statReceived: (data: StatDataType[]) =>
        ({type: 'PH/STAT/GET_STAT', payload: {data}} as const),
}

type ThunkType = BaseThunkType<LogsActionsType | AuthActionsType>

export const getLogs = (): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await logsApi.getLogs()
            console.log('getLogs', data)
            dispatch(statActions.statReceived(data))

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('getLogs', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default logsReducer;
