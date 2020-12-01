import {IActionData, IActionNoData} from './IActionData';

type IAction<TReturnActionData extends IActionNoData<any>, TArgs extends any[] = []> = (...args: TArgs) => TReturnActionData;

export default IAction;