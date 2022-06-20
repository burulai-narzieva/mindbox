import { RootState } from '../store/reducers';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useTypedSelector:  TypedUseSelectorHook<RootState> = useSelector