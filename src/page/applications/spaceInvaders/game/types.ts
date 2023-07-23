export type Sprite = HTMLImageElement;

export type Context = {
    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
};

export type Invader = {
    x: number;
    y: number;
    width: number;
    height: number;
    image: Sprite;
};

export type Player = {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    image: Sprite;
};

export type Bullet = {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    color: string;
};

export type Controls = {
    rightPressed: boolean;
    leftPressed: boolean;
};

export type Runtime = {
    invaders: {
        list: Set<Invader>;
        speedX: number;
        speedY: number;
    };
    player: Player;
    bullet: Bullet | null;
    controls: Controls;
};

export type Module = (ctx: Context, runtime: Runtime) => void;

type Unload = () => void;

export type Setup = (ctx: Context, runtime: Partial<Runtime>) => Unload;
