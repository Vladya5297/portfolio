declare module '*.svg' {
    import type React from 'react';

    const component: React.FC<React.SVGProps<SVGSVGElement>>;
    export default component;
}

declare module '*.png' {
    const value: {
        src: string;
        srcSet: string;
        placeholder: string | undefined;
        images: {path: string; width: number; height: number}[];
        width: number;
        height: number;
        toString: () => string;
    };

    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}
