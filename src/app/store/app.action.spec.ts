import { provideMockStore } from '@ngrx/store/testing';
import { FetchUserData, AppActionType, FetchUserDataSuccess, FetchUserDataError, IsLoggedIn } from './app.actions';

describe('Activity Actions', () => {
    beforeEach(() => {
        provideMockStore({
            initialState: {
                appModel: {
                    data: [],
                    isLoggedIn: false,
                    requestBody: {},
                    id: 1
                }
            }
        });
    });
    it('should create actions', () => {
        expect(new FetchUserData()).toEqual({
            type: AppActionType.FETCH_USER_DATA,
        });
    });

    it('should create actions', () => {
        expect(new FetchUserDataSuccess([])).toEqual({
            type: AppActionType.FETCH_USER_DATA_SUCCESS, payload: []
        });
    });

    it('should create actions', () => {
        expect(new FetchUserDataError([])).toEqual({
            type: AppActionType.FETCH_USER_DATA_ERROR, error: []
        });
    });

    it('should create actions', () => {
        expect(new IsLoggedIn(true)).toEqual({
            type: AppActionType.IS_LOGGED_IN, isLoggedIn: true
        });
    });
});