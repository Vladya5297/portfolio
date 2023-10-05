import {Fullscreen, FullscreenProvider} from './components/Fullscreen';
import {RootProvider} from './RootContext';
import {Content} from './components/Content';

export const Page = () => {
    return (
        <RootProvider>
            <FullscreenProvider>
                <Content />
                <Fullscreen />
            </FullscreenProvider>
        </RootProvider>
    );
};
