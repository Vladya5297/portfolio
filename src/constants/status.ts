import type {ValuesType} from 'utility-types';

export const STATUS = {
    DONE: 'done',
    PENDING: 'pending',
    FAILED: 'failed',
} as const;

export type Status = ValuesType<typeof STATUS>;
