import {useEffect, useState} from 'react';

import {isNotNil} from '~/utils/toolkit';
import {random} from '~/utils/random';

import image1 from './assets/clippy_1.gif';
import image2 from './assets/clippy_2.gif';
import image3 from './assets/clippy_3.gif';
import image4 from './assets/clippy_4.gif';
import image5 from './assets/clippy_5.gif';
import type {Animation} from './types';

const assets = [
    {src: image1, duration: 1900},
    {src: image2, duration: 4800},
    {src: image3, duration: 6600},
    {src: image4, duration: 3200},
    {src: image5, duration: 4500},
].map(animation => {
    const image = new Image();
    const loaded = new Promise<Animation | null>(resolve => {
        image.onload = () => resolve(animation);
        image.onerror = () => resolve(null);
    });
    image.src = animation.src;

    return loaded;
});

export const useAnimations = () => {
    const [result, setResult] = useState<Animation[]>([]);

    useEffect(() => {
        Promise.all(assets)
            .then(animations => animations.filter(isNotNil))
            .then(setResult);
    }, []);

    return result;
};

export const getNewAnimation = (src: string, animations: Animation[]) => {
    const restAnimations = animations.filter(animation => animation.src !== src);
    const animationIndex = random.int({min: 0, max: restAnimations.length - 1});

    return restAnimations[animationIndex];
};
