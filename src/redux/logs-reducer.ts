import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorNotify, errorsHandler, infoNotify} from '../utils/utils'
import {authActions, AuthActionsType} from './auth-reducer'
import {logsApi} from '../api/logs-api'
import {AnalyzeFullnessDataType, LogsDataType, TableClassesValueType} from '../types/Types'

export type InitialStateType = typeof initialState
let initialState = {
    logs: [] as LogsDataType[],
    fullness: [] as AnalyzeFullnessDataType[],
    class_data: {} as any,
    classes: [
        {
            min: '110',
            max: '999',
        },
        {
            min: '100',
            max: '110',
        },
        {
            min: '90',
            max: '100',
        },
        {
            min: '70',
            max: '80',
        },
        {
            min: '60',
            max: '70',
        },
        {
            min: '50',
            max: '60',
        },
        {
            min: '0',
            max: '50',
        },
    ] as TableClassesValueType[],
    oversize: '500' as string,
}

const logsReducer = (state = initialState, action: LogsActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/STAT/GET_STAT':
            return {
                ...state,
                logs: action.payload.data,
                fullness: action.payload.fullness,
                class_data: action.payload.class_data,
            }
        case 'PH/LOGS/CHANGE_CLASSES':
            return {
                ...state,
                classes: action.payload.classes,
            }
        case 'PH/STAT/CHANGE_OVERSIZE':
            return {
                ...state,
                oversize: action.payload.oversize,
            }
        default:
            return state;
    }
}

export type LogsActionsType = InferActionsTypes<typeof logsActions>

export const logsActions = {
    statReceived: (data: LogsDataType[], fullness: AnalyzeFullnessDataType[], class_data: any) =>
        ({type: 'PH/STAT/GET_STAT', payload: {data, fullness, class_data}} as const),
    changeClasses: (classes: TableClassesValueType[]) =>
        ({type: 'PH/LOGS/CHANGE_CLASSES', payload: {classes}} as const),
    changeOversize: (oversize: string) =>
        ({type: 'PH/STAT/CHANGE_OVERSIZE', payload: {oversize}} as const),
}

type ThunkType = BaseThunkType<LogsActionsType | AuthActionsType>

export const getLogs = (oversize: string,class1: string, class2: string, class3: string, class4: string, class5: string, class6: string, class7: string): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await logsApi.getLogs(oversize,class1,class2,class3,class4,class5,class6,class7)
            console.log('getLogs', data)
            if(data.is_oversize) errorNotify('Обнаружен негабарит')
            dispatch(logsActions.statReceived(data.data, data.fullness, data.class_data))

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('getLogs', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default logsReducer;
