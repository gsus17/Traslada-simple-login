import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, catchError, map } from 'rxjs/operators';
import {
  TrackingGetBasesAction,
  TrackingGetPositionsAction,
  TrackingGetBasesErrorAction,
  TrackingGetBasesSuccesAction,
  TrackingGetPositionsSuccessAction,
  TrackingGetPositionsErrorAction
} from './tracking-map.actions';
import { SuppliersApiService } from 'src/api/suppliers/suppliers.service';
import { TrackingApiService } from 'src/api/tracking/tracking.service';
import { MarkerUI } from '../entities/marker-ui';

export interface TrackingStateModel {
  basesList: any[];
  positions: any[];
  filter: any;
  markerList: MarkerUI;
}

@State<TrackingStateModel>({
  name: 'tracking',
  defaults: {
    basesList: [],
    positions: [],
    markerList: null,
    filter: {
      activityId: [],
      holderId: null,
      ownerId: [],
      status: [],
      viewport: null
    }
  }
})
export class TrackingState {

  @Selector()
  static basesList(state: TrackingStateModel) {
    return state.basesList;
  }

  constructor(
    private suppliersApiService: SuppliersApiService,

    private trackingApiService: TrackingApiService) { }

  @Action(TrackingGetBasesAction)
  trackingGetBasesAction({ dispatch }: StateContext<TrackingStateModel>) {
    return this.suppliersApiService.getBases()
      .pipe(
        tap((response) => dispatch(new TrackingGetBasesSuccesAction(response))),
        catchError((error) => dispatch(new TrackingGetBasesErrorAction(error))));
  }

  @Action(TrackingGetBasesSuccesAction)
  trackingGetBasesSuccesAction({ patchState }: StateContext<TrackingStateModel>, payload) {
    patchState({
      basesList: payload.response
    });
  }

  @Action(TrackingGetBasesErrorAction)
  trackingGetBasesErrorAction({ dispatch }: StateContext<TrackingStateModel>, payload) {
    console.log('Error', payload.error);
  }

  @Action(TrackingGetPositionsAction)
  trackingGetPositionsAction({ dispatch, getState }: StateContext<TrackingStateModel>) {
    const { filter } = getState();
    return this.trackingApiService.getTrackingPositionsDataByFilter(filter)
      .pipe(
        map((data: any) => {
          const list: any[] = [];
          data
            .forEach((item: string) => {
              const newData: any[] = item.split('|');

              const dateToFix: string = newData[0];
              const idxLimit: number = dateToFix.indexOf('Z');
              const dateFixed: string = dateToFix.slice(0, idxLimit);
              const position = {
                date: new Date(dateFixed),
                serverDate: newData[10],
                holderId: newData[1],
                activityId: newData[2],
                ownerId: newData[3],
                status: newData[4],
                position: {
                  accuracy: parseFloat(newData[8]),
                  heading: null,
                  lat: newData[6],
                  lng: newData[7],
                  speed: parseFloat(newData[9]),
                }
              };

              list.push(position);
            });

          return list;
        }),
        tap((response) => dispatch(new TrackingGetPositionsSuccessAction(response))),
        catchError((error) => dispatch(new TrackingGetPositionsErrorAction(error))));
  }

  @Action(TrackingGetPositionsSuccessAction)
  trackingGetPositionsSuccessAction({ patchState }: StateContext<TrackingStateModel>, payload) {
    patchState({
      positions: payload.response
    });
  }

  @Action(TrackingGetPositionsErrorAction)
  trackingGetPositionsErrorAction({ dispatch }: StateContext<TrackingStateModel>, payload) {
    console.log('Error', payload.error);
  }
}
