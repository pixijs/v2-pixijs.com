"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["4601"],{20292:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>x,contentTitle:()=>l});var n=JSON.parse('{"id":"examples/sprite/animated-sprite-explosion","title":"Animated Sprite Explosion","description":"","source":"@site/versioned_docs/version-7.x/examples/sprite/animated-sprite-explosion.mdx","sourceDirName":"examples/sprite","slug":"/examples/sprite/animated-sprite-explosion","permalink":"/7.x/examples/sprite/animated-sprite-explosion","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":2,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":2,"custom_edit_url":null,"title":"Animated Sprite Explosion"},"sidebar":"examplesSidebar","previous":{"title":"Texture Swap","permalink":"/7.x/examples/sprite/texture-swap"},"next":{"title":"Animated Sprite Jet","permalink":"/7.x/examples/sprite/animated-sprite-jet"}}'),s=i("85893"),o=i("50065"),a=i("43076"),p=i("99883");let r={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:2,custom_edit_url:null,title:"Animated Sprite Explosion"},l=void 0,d={},x=[];function u(e){return(0,s.jsx)(a.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ autoStart: false, resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://pixijs.com/assets/spritesheet/mc.json').then(() =>\n{\n    // create an array to store the textures\n    const explosionTextures = [];\n    let i;\n\n    for (i = 0; i < 26; i++)\n    {\n        const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);\n\n        explosionTextures.push(texture);\n    }\n\n    for (i = 0; i < 50; i++)\n    {\n        // create an explosion AnimatedSprite\n        const explosion = new PIXI.AnimatedSprite(explosionTextures);\n\n        explosion.x = Math.random() * app.screen.width;\n        explosion.y = Math.random() * app.screen.height;\n        explosion.anchor.set(0.5);\n        explosion.rotation = Math.random() * Math.PI;\n        explosion.scale.set(0.75 + Math.random() * 0.5);\n        explosion.gotoAndPlay((Math.random() * 26) | 0);\n        app.stage.addChild(explosion);\n    }\n\n    // start animating\n    app.start();\n});\n"},dependencies:{"pixi.js":p.npm}})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);