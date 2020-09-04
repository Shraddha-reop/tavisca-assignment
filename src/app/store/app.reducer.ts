import { AppModelState } from '../models/appModel.model';
import { AppAction, AppActionType } from './app.actions';

export function appReducer(state: AppModelState = new AppModelState(), action: AppAction): AppModelState {
    switch (action.type) {
        case AppActionType.FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case AppActionType.IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            };
            case AppActionType.SAVE_SHARED_LINKS_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default: {
            return state;
        }
    }
}