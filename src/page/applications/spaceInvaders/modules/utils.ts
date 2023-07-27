export const makeSvgImage = (image: string): HTMLImageElement => {
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(image)}`;
    return img;
};
