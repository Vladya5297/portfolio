type Coords = {
    x: number;
    y: number;
};

export const getEventCoords = (event: MouseEvent | TouchEvent): Coords => {
    const target = event.target as HTMLCanvasElement;
    const rect = target.getBoundingClientRect();

    let offsetX: number;
    let offsetY: number;

    if ('offsetX' in event && 'offsetY' in event) {
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    } else {
        const touch = event.changedTouches[0];
        offsetX = touch.clientX - rect.x;
        offsetY = touch.clientY - rect.y;
    }

    const initialWidth = target.width;
    const initialHeight = target.height;

    const scaleX = rect.width / initialWidth;
    const scaleY = rect.height / initialHeight;

    const x = offsetX / scaleX;
    const y = offsetY / scaleY;

    return {x, y};
};
