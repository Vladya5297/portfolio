type Coords = {
    x: number;
    y: number;
};

export const getEventCoords = (event: MouseEvent): Coords => {
    const target = event.target as HTMLCanvasElement;
    const rect = target.getBoundingClientRect();

    const initialWidth = target.width;
    const initialHeight = target.height;

    const scaleX = rect.width / initialWidth;
    const scaleY = rect.height / initialHeight;

    const x = event.offsetX / scaleX;
    const y = event.offsetY / scaleY;

    return {x, y};
};
