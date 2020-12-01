export interface IActionNoData<TActionType> {
  type: TActionType;
}

export interface IActionData<TActionType, TActionPayload> extends IActionNoData<TActionType> {
  payload: TActionPayload;
}