import {makeImage} from '../../utils/makeImage';

const image = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="53" fill="white"><path fill="#fff" d="M0 26.9818V53h100V26.9818h-7.8431v-7.7091h-32.353V7.70909h-6.8627V0h-5.8824v7.70909h-6.8627V19.2727H7.84314v7.7091H0Z"/></svg>';

export const sprites = {
    player: makeImage(image),
};
