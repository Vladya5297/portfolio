export const isTouchScreen = (): boolean => {
    return window.matchMedia('(pointer: coarse) and (hover: none').matches;
};
