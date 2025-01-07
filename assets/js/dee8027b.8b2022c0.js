"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["3229"],{73069:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>p,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"examples/sprite/animated-sprite-explosion","title":"Animated Sprite Explosion","description":"","source":"@site/docs/examples/sprite/animated-sprite-explosion.mdx","sourceDirName":"examples/sprite","slug":"/examples/sprite/animated-sprite-explosion","permalink":"/8.x/examples/sprite/animated-sprite-explosion","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":2,"custom_edit_url":null,"title":"Animated Sprite Explosion"},"sidebar":"examplesSidebar","previous":{"title":"Texture Swap","permalink":"/8.x/examples/sprite/texture-swap"},"next":{"title":"Animated Sprite Jet","permalink":"/8.x/examples/sprite/animated-sprite-jet"}}'),a=n("85893"),s=n("50065"),o=n("43076");let p={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:2,custom_edit_url:null,title:"Animated Sprite Explosion"},r=void 0,l={},d=[];function x(e){return(0,a.jsx)(o.N,{files:{"index.js":"import { AnimatedSprite, Application, Assets, Texture } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ autoStart: false, resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    // Load the animation sprite sheet\n    const texture = await Assets.load('https://pixijs.com/assets/spritesheet/mc.json');\n\n    // Create an array to store the textures\n    const explosionTextures = [];\n    let i;\n\n    for (i = 0; i < 26; i++)\n    {\n        const texture = Texture.from(`Explosion_Sequence_A ${i + 1}.png`);\n\n        explosionTextures.push(texture);\n    }\n\n    // Create and randomly place the animated explosion sprites on the stage\n    for (i = 0; i < 50; i++)\n    {\n        // Create an explosion AnimatedSprite\n        const explosion = new AnimatedSprite(explosionTextures);\n\n        explosion.x = Math.random() * app.screen.width;\n        explosion.y = Math.random() * app.screen.height;\n        explosion.anchor.set(0.5);\n        explosion.rotation = Math.random() * Math.PI;\n        explosion.scale.set(0.75 + Math.random() * 0.5);\n        explosion.gotoAndPlay((Math.random() * 26) | 0);\n        app.stage.addChild(explosion);\n    }\n\n    // Start animating\n    app.start();\n})();\n"}})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);