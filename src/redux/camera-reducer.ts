import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {errorsHandler} from "../utils/utils";
import {authActions, AuthActionsType} from './auth-reducer'
import {cameraAPI} from '../api/camera-api'

export type InitialStateType = typeof initialState
let initialState = {

}

const cameraReducer = (state = initialState, action: CameraActionsType):InitialStateType  => {
    switch (action.type) {
        case 'PH/CAMERA/GET_STREAM':
            return {
                ...state,
            }


        default:
            return state;
    }
}

export type CameraActionsType = InferActionsTypes<typeof cameraActions>

export const cameraActions = {
    streamReceived: () =>
        ({type: 'PH/CAMERA/GET_STREAM', payload: {}} as const),
}

type ThunkType = BaseThunkType<CameraActionsType | AuthActionsType>

export const getStream = (): ThunkType => {
    return async(dispatch) => {
        dispatch(authActions.toggleIsFetching(true))
        try {
            let data = await cameraAPI.getStream()
            console.log('getStream', data)
            debugger
            dispatch(cameraActions.streamReceived())

            dispatch(authActions.toggleIsFetching(false))
        } catch (e:any) {
            console.error('getStream', e.response);
            errorsHandler(e, dispatch)
            dispatch(authActions.toggleIsFetching(false))
        }
    }
}

export default cameraReducer;
