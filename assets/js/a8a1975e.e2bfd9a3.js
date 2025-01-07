"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["3872"],{23126:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>a,assets:()=>p,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"examples/assets/background","title":"Background","description":"","source":"@site/versioned_docs/version-7.x/examples/assets/background.mdx","sourceDirName":"examples/assets","slug":"/examples/assets/background","permalink":"/7.x/examples/assets/background","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":3,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":3,"custom_edit_url":null,"title":"Background"},"sidebar":"examplesSidebar","previous":{"title":"Multiple","permalink":"/7.x/examples/assets/multiple"},"next":{"title":"Bundle","permalink":"/7.x/examples/assets/bundle"}}'),n=t("85893"),i=t("50065"),r=t("43076"),o=t("99883");let d={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:3,custom_edit_url:null,title:"Background"},l=void 0,p={},c=[];function u(e){return(0,n.jsx)(r.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\n// Add the assets to load\nPIXI.Assets.add('flowerTop', 'https://pixijs.com/assets/flowerTop.png');\nPIXI.Assets.add('eggHead', 'https://pixijs.com/assets/eggHead.png');\n\n// Allow the assets to load in the background\nPIXI.Assets.backgroundLoad(['flowerTop', 'eggHead']);\n\n// If the background load hasn't loaded this asset yet, calling load forces this asset to load now.\nPIXI.Assets.load('eggHead').then((texture) =>\n{\n    // auxiliar flag for toggling the texture\n    let isEggHead = true;\n\n    // create a new Sprite from the resolved loaded texture\n    const character = new PIXI.Sprite(texture);\n\n    character.anchor.set(0.5);\n    character.x = app.screen.width / 2;\n    character.y = app.screen.height / 2;\n    character.eventMode = 'static';\n    character.cursor = 'pointer';\n\n    app.stage.addChild(character);\n\n    character.on('pointertap', async () =>\n    {\n        isEggHead = !isEggHead;\n        // These promise are already resolved in the cache.\n        character.texture = await PIXI.Assets.load(isEggHead ? 'eggHead' : 'flowerTop');\n    });\n});\n"},dependencies:{"pixi.js":o.npm}})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);