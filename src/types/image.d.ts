declare module '*.svg' {
    import type React from 'react';

    const component: React.FC<React.SVGProps<SVGSVGElement>>;
    export default component;
}

declare module '*.png' {
    const value: string;
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
