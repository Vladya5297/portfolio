import type {Bullet} from '../entities/bullet';
import type {Invader} from '../entities/invader';
import type {Player} from '../entities/player';
import type {Button} from '../entities/button';
import type {Text} from '../entities/text';

export type Sprite = HTMLImageElement;

export type Context = {
    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
};

export type Controls = {
    rightPressed: boolean;
    leftPressed: boolean;
    buttons: Button[];
};

export type Score = {
    value: number;
    text: Text;
};

export type Runtime = {
    invaders: Set<Invader>;
    player: Player;
    bullet: Bullet | null;
    controls: Controls;
    score: Score;
    gameover: boolean;
};

export type RafHandler = (ctx: Context, runtime: Runtime) => void;

export type Unload = () => void;

export type Setup = (ctx: Context, runtime: Runtime) => Unload | void;

export type Module = {
    setup?: Setup;
    raf: RafHandler[];
};
