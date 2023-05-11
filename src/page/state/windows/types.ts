import type {EntityState} from '@reduxjs/toolkit';
import type {Brand} from 'utility-types';

export type WindowId = Brand<string, 'windowId'>;

export type Position = {
    x: number;
    y: number;
};

export type Window = {
    id: WindowId;
    title: string;
    image: string;
    isOpened: boolean;
    isMinimized: boolean;
    position: Position;
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
