import IDispatch from './IDispatch';
import IGetState from './IGetState';

type IAsyncAction<TArgs extends any[] = [], TReturnActionData = void> = (...args: TArgs) =>
  (dispatch: IDispatch, getState: IGetState) => TReturnActionData;

export default IAsyncAction;