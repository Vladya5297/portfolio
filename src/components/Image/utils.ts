type Params = {
    width: number;
    height: number;
    maxWidth?: number;
    maxHeight?: number;
};

type SizeParams = {
    maxWidth: number | undefined;
    maxHeight: number | undefined;
    aspectRatio: string;
};

export const getSizeParams = ({
    width,
    height,
    maxWidth,
    maxHeight,
}: Params): SizeParams => {
    const aspectRatio = `${width} / ${height}`;

    if (maxWidth && maxHeight) {
        return {maxWidth, maxHeight, aspectRatio};
    }

    const ratio = width / height;

    if (maxWidth) {
        return {
            maxWidth,
            maxHeight: maxWidth / ratio,
            aspectRatio,
        };
    }

    if (maxHeight) {
        return {
            maxWidth: maxHeight * ratio,
            maxHeight,
            aspectRatio,
        };
    }

    return {
        maxWidth: undefined,
        maxHeight: undefined,
        aspectRatio,
    };
};
