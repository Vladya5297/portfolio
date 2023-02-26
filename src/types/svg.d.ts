declare module '*.svg' {
    import type React from 'react';

    const component: React.FC<React.SVGProps<SVGSVGElement>>;
    export default component;
}
