import IGetState from './IGetState';
import { IActionNoData, IActionData } from './IActionData';

type IAsyncDispatch<TReturnData = void> = (dispatch: IDispatch, getState: IGetState) => TReturnData;
type IDispatch = <TActionType, TActionPayload>(
  actionData: IActionNoData<TActionType> | IActionData<TActionType, TActionPayload> | IAsyncDispatch,
) => any;

export default IDispatch;