type ReducerFunction<TStateChunk, TActionData> = (state: TStateChunk, action: TActionData) => TStateChunk;

export default ReducerFunction;