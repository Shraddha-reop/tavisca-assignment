import { provideMockStore } from '@ngrx/store/testing';
import {
    FetchUserData,
    AppActionType,
    FetchUserDataSuccess,
    FetchUserDataError,
    IsLoggedIn,
    SaveSharedLinks,
    SaveSharedLinksSuccess,
    SaveSharedLinksError,
    DeleteLink,
    DeleteLinkSuccess,
    DeleteLinkError,
    UpdateLink,
    UpdateLinkSuccess,
    UpdateLinkError
} from './app.actions';

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

    it('should create actions', () => {
        const requestBody = {};
        expect(new SaveSharedLinks(requestBody)).toEqual({
            type: AppActionType.SAVE_SHARED_LINKS, requestBody
        });
    });

    it('should create actions', () => {
        expect(new SaveSharedLinksSuccess(null)).toEqual({
            type: AppActionType.SAVE_SHARED_LINKS_SUCCESS, payload: null
        });
    });

    it('should create actions', () => {
        expect(new SaveSharedLinksError({})).toEqual({
            type: AppActionType.SAVE_SHARED_LINKS_ERROR, error: {}
        });
    });

    it('should create actions', () => {
        expect(new DeleteLink(1)).toEqual({
            type: AppActionType.DELETE_LINK, id: 1
        });
    });

    it('should create actions', () => {
        expect(new DeleteLinkSuccess(null)).toEqual({
            type: AppActionType.DELETE_LINK_SUCCESS, payload: null
        });
    });

    it('should create actions', () => {
        expect(new DeleteLinkError(null)).toEqual({
            type: AppActionType.DELETE_LINK_ERROR, error: null
        });
    });

    it('should create actions', () => {
        expect(new UpdateLink(1, {})).toEqual({
            type: AppActionType.UPDATE_LINK, id: 1, requestBody: {}
        });
    });

    it('should create actions', () => {
        expect(new UpdateLinkSuccess(null)).toEqual({
            type: AppActionType.UPDATE_LINK_SUCCESS, payload: null
        });
    });

    it('should create actions', () => {
        expect(new UpdateLinkError(null)).toEqual({
            type: AppActionType.UPDATE_LINK_ERROR, error: null
        });
    });

});