import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.model';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppServiceService } from '../services/app-service.service';
import { AppActionType, FetchUserData, FetchUserDataSuccess, FetchUserDataError, SaveSharedLinks, SaveSharedLinksSuccess, DeleteLink, DeleteLinkSuccess, DeleteLinkError, UpdateLink, UpdateLinkSuccess, UpdateLinkError } from '../store/app.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AppEffects {

    @Effect()
    public userData$ = this.actions$.pipe(
        ofType(AppActionType.FETCH_USER_DATA),
        switchMap((action: FetchUserData) => {
            return this.activityService.fetchLinks().pipe(
                map((obj: any) => new FetchUserDataSuccess(obj)),
                catchError(error => of(new FetchUserDataError(error.status)))
            );
        })
    );

    @Effect()
    public addLinks$ = this.actions$.pipe(
        ofType(AppActionType.SAVE_SHARED_LINKS),
        switchMap((action: SaveSharedLinks) => {
            return this.activityService.addLinks(action.requestBody).pipe(
                map((obj: any) => new SaveSharedLinksSuccess(obj)),
                catchError(error => of(new FetchUserDataError(error.status)))
            );
        })
    );

    @Effect()
    public deleteLink$ = this.actions$.pipe(
        ofType(AppActionType.DELETE_LINK),
        switchMap((action: DeleteLink) => {
            return this.activityService.deleteLink(action.id).pipe(
                map((obj: any) => new DeleteLinkSuccess(obj)),
                catchError(error => of(new DeleteLinkError(error.status)))
            );
        })
    );

    @Effect()
    public updateLink$ = this.actions$.pipe(
        ofType(AppActionType.UPDATE_LINK),
        switchMap((action: UpdateLink) => {
            return this.activityService.updateLink(action.id,action.requestBody).pipe(
                map((obj: any) => new UpdateLinkSuccess(obj)),
                catchError(error => of(new UpdateLinkError(error.status)))
            );
        })
    );
    
    constructor( private store: Store<AppState>,private actions$: Actions, private activityService: AppServiceService,) {}

}