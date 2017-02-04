import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('doing a app hot accept')
        const NextApp = require<RequireImport>('./app').default
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
