import {Breakpoints, createBreakpointsHook} from '~/utils/breakpoints';

import {BREAKPOINTS_RANGES} from './constants';

const breakpoints = new Breakpoints(BREAKPOINTS_RANGES);
breakpoints.observe();

export const useBreakpoint = createBreakpointsHook(breakpoints);
