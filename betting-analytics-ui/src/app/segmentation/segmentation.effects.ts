import { Actions, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class SegmentationEffect {
    constructor(
        private actions$: Actions
    ){}

    // addMember$: Observable<Action> = createEffect(() => {

    // })
}