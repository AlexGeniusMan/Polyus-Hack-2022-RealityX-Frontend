import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorsHandler} from "../utils/utils";
import {authActions, AuthActionsType} from './auth-reducer'
import {logsApi} from '../api/logs-api'
import {LogsDataType} from '../types/Types'
import {settingsApi} from '../api/settings-api'

export type InitialStateType = typeof initialState
let initialState = {
    oversizeValue: 250
}

const settingsReducer = (state = initialState, action: LogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/SETTINGS/SET_OVERSIZE_VALUE':
            return {
                ...state,
                oversizeValue: action.payload.oversizeValue
            }
        default:
            return state;
    }
}

export type LogsActionsType = InferActionsTypes<typeof statActions>

export const statActions = {
    valueReceived: (oversizeValue: number) =>
        ({type: 'PH/SETTINGS/SET_OVERSIZE_VALUE', payload: {oversizeValue}} as const),
}

type ThunkType = BaseThunkType<LogsActionsType | AuthActionsType>

export const setOversizeValue = (oversizeValue: string): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await settingsApi.setMinimalOversize(oversizeValue)
            console.log('setOversizeValue', data)
            dispatch(statActions.valueReceived(data))

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('setOversizeValue', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default settingsReducer;
