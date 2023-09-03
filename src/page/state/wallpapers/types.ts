export type WallpapersValue = {
    name: string;
    src: string | undefined;
    placeholder: string | undefined;
};

export type WallpapersState = {
    isOpened: boolean;
    value: WallpapersValue;
};
