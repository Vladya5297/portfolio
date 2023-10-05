import {createStateContext} from '~/utils/createStateContext';

const {Provider, useGet, useSet} = createStateContext<HTMLElement | null>(null);

export const RootProvider = Provider;
export const useSetRoot = useSet;
export const useGetRoot = useGet;
