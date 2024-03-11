import type {Size} from '../../engine';
import {makeSvgImage} from '../../engine/utils';

export const PLAYER_SIZE: Size = {
    width: 40,
    height: 20,
};

export const PLAYER_SPEED = 200;

export const PLAYER_IMAGE = makeSvgImage(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="53" fill="white"><path fill="#fff" d="M0 26.9818V53h100V26.9818h-7.8431v-7.7091h-32.353V7.70909h-6.8627V0h-5.8824v7.70909h-6.8627V19.2727H7.84314v7.7091H0Z"/></svg>',
);
