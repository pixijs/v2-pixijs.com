"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["6087"],{77155:function(e,i,t){t.r(i),t.d(i,{default:()=>x,frontMatter:()=>p,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"examples/events/click","title":"Click","description":"","source":"@site/versioned_docs/version-7.x/examples/events/click.mdx","sourceDirName":"examples/events","slug":"/examples/events/click","permalink":"/7.x/examples/events/click","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":0,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":0,"custom_edit_url":null,"title":"Click"},"sidebar":"examplesSidebar","previous":{"title":"Dynamic","permalink":"/7.x/examples/graphics/dynamic"},"next":{"title":"Interactivity","permalink":"/7.x/examples/events/interactivity"}}'),s=t("85893"),o=t("50065"),r=t("43076"),a=t("99883");let p={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:0,custom_edit_url:null,title:"Click"},l=void 0,c={},d=[];function u(e){return(0,s.jsx)(r.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\n// Scale mode for all textures, will retain pixelation\nPIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;\n\nconst sprite = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');\n\n// Set the initial position\nsprite.anchor.set(0.5);\nsprite.x = app.screen.width / 2;\nsprite.y = app.screen.height / 2;\n\n// Opt-in to interactivity\nsprite.eventMode = 'static';\n\n// Shows hand cursor\nsprite.cursor = 'pointer';\n\n// Pointers normalize touch and mouse (good for mobile and desktop)\nsprite.on('pointerdown', onClick);\n\n// Alternatively, use the mouse & touch events:\n// sprite.on('click', onClick); // mouse-only\n// sprite.on('tap', onClick); // touch-only\n\napp.stage.addChild(sprite);\n\nfunction onClick()\n{\n    sprite.scale.x *= 1.25;\n    sprite.scale.y *= 1.25;\n}\n"},dependencies:{"pixi.js":a.npm}})}function x(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);