import {invoke, isDefined} from '~/utils/toolkit';
import {onKeyDown, onKeyUp} from '~/utils/dom';
import type {OnKeyEventOptions} from '~/utils/dom';
import type {Lambda} from '~/utils/types';

import {GameElement} from '../GameElement';

type MakeSceneCallback = (game: Game, args?: any) => void;

export class Game {
    /* props */

    /** Map of game scenes and their initialization functions. */
    private scenes: Map<string, MakeSceneCallback> = new Map();
    /** Current scene. */
    scene: string | null = null;
    /** List of all game elements. */
    private elements: Set<GameElement> = new Set();
    /** Current `requestAnimationFrame` id */
    private rafId = 0;
    /** Timestamp of last frame */
    private lastFrameTime = performance.now();

    private _canvas: HTMLCanvasElement;
    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    private _context: CanvasRenderingContext2D;
    get context(): CanvasRenderingContext2D {
        return this._context;
    }

    private unsibscribes: Set<Lambda> = new Set();

    /* constructor */
    constructor(canvas: HTMLCanvasElement) {
        canvas.tabIndex = 1;
        canvas.focus();
        this._canvas = canvas;
        this._context = canvas.getContext('2d')!;
    }

    /* computeds */

    /** Width of the game field. */
    get width(): number {
        return this.canvas.width;
    }

    /** Height of the game field. */
    get height(): number {
        return this.canvas.height;
    }

    /* methods */

    /** Register game scene with its initialization function. */
    addScene(name: string, callback: MakeSceneCallback): void {
        this.scenes.set(name, callback);
    }

    /**
     * Set game active scene.
     * Note, you should call clean function manually if needed.
    */
    applyScene(name: string, args?: Record<PropertyKey, unknown>): void {
        const scene = this.scenes.get(name);
        if (!scene) {
            throw new Error(`Game has no scene "${name}". Make sure to add it with "makeScene".`);
        }

        this.scene = name;
        scene(this, args);
    }

    /** Remove record about game scene. */
    deleteScene(name: string): void {
        this.scenes.delete(name);
    }

    /** Register a game element. */
    addElements(value: GameElement | GameElement[]): void {
        const elements = [value].flat();

        elements.forEach(element => {
            this.elements.add(element);
        });
    }

    /** Get game element by its tag. */
    getElement<T extends GameElement = GameElement>(tag: string): T | undefined {
        return Array.from(this.elements).find(element => element.tags.has(tag)) as T;
    }

    /** Get all game elements with provided tag. */
    getElements<T extends GameElement = GameElement>(tag: string): T[] {
        return Array.from(this.elements).filter(element => element.tags.has(tag)) as T[];
    }

    /** Remove record about game element. */
    deleteElement(tag: string): void;
    deleteElement(element: GameElement): void;
    deleteElement(value: GameElement | string): void {
        const element = value instanceof GameElement ? value : this.getElement(value);
        if (!element) return;

        this.elements.delete(element);
        element.destroy();
    }

    /**
     * Remove elements with provided tag.
     * If no tag provided, all elements would be removed.
     */
    deleteElements(tag?: string): void {
        const elements = isDefined(tag)
            ? this.getElements(tag)
            : this.elements;

        elements.forEach(element => {
            element.destroy();
            this.elements.delete(element);
        });
    }

    /** Start game. */
    start(scene: string) {
        this.applyScene(scene);
        this.run();
    }

    /** Process game ticks. */
    run(): void {
        const run = this.run.bind(this);

        const currentFrameTime = performance.now();
        const diff = currentFrameTime - this.lastFrameTime;

        // Lock fps
        if (diff >= 16) {
            this.tick();
            this.lastFrameTime = currentFrameTime;
        }

        this.rafId = requestAnimationFrame(run);
    }

    /** Performs unit of work in game. */
    tick(): void {
        this.context.clearRect(0, 0, this.width, this.height);

        this.elements.forEach(
            element => element.draw(this.context),
        );

        this.elements.forEach(
            element => element.move(),
        );

        this.elements.forEach(
            element => element.checkCollisions(this),
        );
    }

    /** Stop game. */
    stop(): void {
        cancelAnimationFrame(this.rafId);
    }

    /**
     * When the key is pressed, the callback will be invoked.
     * Returns unsubscribe function.
     */
    onKeyDown(key: string, callback: Lambda, options?: OnKeyEventOptions): Lambda {
        const unsubscribe = onKeyDown(key, callback, {...options, target: this.canvas});
        this.unsibscribes.add(unsubscribe);

        return () => {
            unsubscribe();
            this.unsibscribes.delete(unsubscribe);
        };
    }

    /**
     * When the key is released, the callback will be invoked.
     * Returns unsubscribe function.
     */
    onKeyUp(key: string, callback: Lambda, options?: OnKeyEventOptions): Lambda {
        const unsubscribe = onKeyUp(key, callback, {...options, target: this.canvas});
        this.unsibscribes.add(unsubscribe);

        return () => {
            unsubscribe();
            this.unsibscribes.delete(unsubscribe);
        };
    }

    /** Clear all `onKeyUp` and `onKeyDown` listeners. */
    clearEventListeners() {
        this.unsibscribes.forEach(invoke);
        this.unsibscribes.clear();
    }

    /** Clear all registered keyboard events and game elements. */
    clear() {
        this.deleteElements();
        this.clearEventListeners();
    }

    /** Delete the game. */
    destroy() {
        this.stop();
        this.deleteElements();
        this.clearEventListeners();
    }
}
