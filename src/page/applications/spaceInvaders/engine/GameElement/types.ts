export type Position = {
    x: number;
    y: number;
};

export type Size = {
    width: number;
    height: number;
};

export type Speed = {
    speedX: number;
    speedY: number;
};

export type Bounds = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

/** `[x, y, width, height]` */
export type Rect = [
    Position['x'],
    Position['y'],
    Size['width'],
    Size['height']
];

export type Style = {
    backgroundColor: string;
    borderWidth: number;
    borderColor: string;
    fontSize: number;
    fontWeight: number;
    fontFamily: string;
    color: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    fitText: boolean;
};
