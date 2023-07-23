type Params = {
    x: number;
    y: number;
    width: number;
    height: number;
};

type Bounds = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

export const getBounds = ({x, y, width, height}: Params): Bounds => ({
    top: y,
    bottom: y + height,
    left: x,
    right: x + width,
});
