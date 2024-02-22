import font from '../assets/space-invaders.woff';

export const GAME_FONT_NAME = 'SpaceInvaders';
new FontFace(GAME_FONT_NAME, `url(${font})`).load()
    .then(result => {
        document.fonts.add(result);
        return result;
    }).catch(() => null);

export const GAME_SCENE = {
    INIT: 'init_scene',
    RUN: 'run_scene',
    END: 'end_scene',
    PAUSE: 'pause_scene',
} as const;
