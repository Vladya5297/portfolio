import type {EntityState} from '@reduxjs/toolkit';
import type {Brand} from 'utility-types';

export type WindowId = Brand<string, 'windowId'>;

export type Position = {
    x: number;
    y: number;
};

export type Size = {
    width: number;
    height: number;
};

export type Window = {
    id: WindowId;
    title: string;
    image: string;
    isOpened: boolean;
    isMinimized: boolean;
    position: Position;
    size: Size;
};

export type WindowsState = {
    active: WindowId | null;
    queue: WindowId[];
} & EntityState<Window>;

export type AddWindowPayload = {
    id: WindowId;
    title: string;
    image: string;
};

export type SetupPositionPayload = {
    id: WindowId;
    position: Position;
};

export type SetupSizePayload = {
    id: WindowId;
    size: Size;
};
