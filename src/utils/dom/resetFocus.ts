export const resetFocus = () => {
    const element = document.activeElement as HTMLElement | null;
    if (!element) return;
    element.blur();
};
