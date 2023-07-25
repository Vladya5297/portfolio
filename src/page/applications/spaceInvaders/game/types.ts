import type {Bullet} from '../entities/bullet';
import type {Invader} from '../entities/invader';
import type {Player} from '../entities/player';

export type Sprite = HTMLImageElement;

export type Context = {
    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
};

export type Controls = {
    rightPressed: boolean;
    leftPressed: boolean;
};

export type Runtime = {
    invaders: Set<Invader>;
    player: Player;
    bullet: Bullet | null;
    controls: Controls;
    score: number;
    gameover: boolean;
};

export type RafHandler = (ctx: Context, runtime: Runtime) => void;

type Unload = () => void;

export type Setup = (ctx: Context, runtime: Runtime) => Unload;

export type Module = {
    setup: Setup;
    raf: RafHandler[];
};
