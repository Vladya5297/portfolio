import {random} from '~/utils/random';
import {isNotNil} from '~/utils/toolkit';
import {loadImage} from '~/utils/loadImage';

import {animations as assets} from './constants';
import type {ClippyAnimation} from './types';

const animationPromises = Promise.all<ClippyAnimation | null>(
    assets.map(asset => {
        return loadImage(asset.src)
            .then(() => asset)
            .catch(() => null);
    }),
).then(
    values => values.filter(isNotNil),
);

export const getNewAnimation = async (current: ClippyAnimation) => {
    const animations = await animationPromises;
    const restAnimations = animations.filter(animation => animation !== current);
    const animationIndex = random.int({min: 0, max: restAnimations.length - 1});

    return restAnimations[animationIndex];
};
