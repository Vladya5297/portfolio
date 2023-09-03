export type WallpapersValue = {
    name: string;
    src: string | null;
};

export type WallpapersState = {
    isOpened: boolean;
    value: WallpapersValue;
};
