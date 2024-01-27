import '@pixi/spine-pixi';

import { Application, Assets } from 'pixi.js';
import { SpineBoy } from './SpineBoy';

// Asynchronous IIFE
(async () =>
{
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    // Load the assets.
    await Assets.load([
        {
            alias: 'spineSkeleton',
            src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pro.skel',
        },
        {
            alias: 'spineAtlas',
            src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pma.atlas',
        },
        {
            alias: 'sky',
            src: 'http://localhost:3000/assets/tutorials/spineboy-adventure/sky.png',
        },
        {
            alias: 'background',
            src: 'http://localhost:3000/assets/tutorials/spineboy-adventure/background.png',
        },
        {
            alias: 'midground',
            src: 'http://localhost:3000/assets/tutorials/spineboy-adventure/midground.png',
        },
        {
            alias: 'platform',
            src: 'http://localhost:3000/assets/tutorials/spineboy-adventure/platform.png',
        },
    ]);

    /** -- INSERT CODE HERE -- */
})();
