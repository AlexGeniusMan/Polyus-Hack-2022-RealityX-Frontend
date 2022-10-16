import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorNotify, errorsHandler, infoNotify} from '../utils/utils'
import {authActions, AuthActionsType} from './auth-reducer'
import {logsApi} from '../api/logs-api'
import {AnalyzeFullnessDataType, LogsDataType, TableClassesValueType} from '../types/Types'

export type InitialStateType = typeof initialState
let initialState = {
    logs: [] as LogsDataType[],
    fullness: [] as AnalyzeFullnessDataType[],
    classes: [
        {
            min: '250',
            max: '999',
        },
        {
            min: '150',
            max: '250',
        },
        {
            min: '100',
            max: '150',
        },
        {
            min: '80',
            max: '100',
        },
        {
            min: '70',
            max: '80',
        },
        {
            min: '40',
            max: '70',
        },
        {
            min: '0',
            max: '40',
        },
    ] as TableClassesValueType[],
}

const logsReducer = (state = initialState, action: LogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/STAT/GET_STAT':
            return {
                ...state,
                logs: action.payload.data,
                fullness: action.payload.fullness,
            }
        case 'PH/STAT/CHANGE_CLASSES':
            return {
                ...state,
                classes: action.payload.classes,
            }
        default:
            return state;
    }
}

export type LogsActionsType = InferActionsTypes<typeof logsActions>

export const logsActions = {
    statReceived: (data: LogsDataType[], fullness: AnalyzeFullnessDataType[]) =>
        ({type: 'PH/STAT/GET_STAT', payload: {data, fullness}} as const),
    changeClasses: (classes: TableClassesValueType[]) =>
        ({type: 'PH/STAT/CHANGE_CLASSES', payload: {classes}} as const),
}

type ThunkType = BaseThunkType<LogsActionsType | AuthActionsType>

export const getLogs = (class1: string, class2: string, class3: string, class4: string, class5: string, class6: string, class7: string): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await logsApi.getLogs(class1,class2,class3,class4,class5,class6,class7)
            console.log('getLogs', data)
            if(data.is_oversize) errorNotify('Обнаружен негабарит')
            dispatch(logsActions.statReceived(data.data, data.fullness))

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('getLogs', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default logsReducer;
