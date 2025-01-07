"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["8982"],{17093:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>u,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"examples/textures/render-texture-basic","title":"Render Texture Basic","description":"","source":"@site/docs/examples/textures/render-texture-basic.mdx","sourceDirName":"examples/textures","slug":"/examples/textures/render-texture-basic","permalink":"/8.x/examples/textures/render-texture-basic","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":1,"custom_edit_url":null,"title":"Render Texture Basic"},"sidebar":"examplesSidebar","previous":{"title":"Texture Rotate","permalink":"/8.x/examples/textures/texture-rotate"},"next":{"title":"Render Texture Advanced","permalink":"/8.x/examples/textures/render-texture-advanced"}}'),r=t("85893"),a=t("50065"),s=t("43076");let o={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:1,custom_edit_url:null,title:"Render Texture Basic"},d=void 0,u={},l=[];function p(e){return(0,r.jsx)(s.N,{files:{"index.js":"import { Application, Assets, Container, RenderTexture, SCALE_MODES, Sprite } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ background: '#1099bb', resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    const container = new Container();\n\n    app.stage.addChild(container);\n\n    // Load the bunny texture\n    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');\n\n    for (let i = 0; i < 25; i++)\n    {\n        const bunny = new Sprite(texture);\n\n        bunny.x = (i % 5) * 30;\n        bunny.y = Math.floor(i / 5) * 30;\n        bunny.rotation = Math.random() * (Math.PI * 2);\n        container.addChild(bunny);\n    }\n\n    const rt = RenderTexture.create({\n        width: 300,\n        height: 300,\n        scaleMode: SCALE_MODES.LINEAR,\n        resolution: 1,\n    });\n\n    const sprite = new Sprite(rt);\n\n    sprite.x = 450;\n    sprite.y = 60;\n    app.stage.addChild(sprite);\n\n    /*\n     * All the bunnies are added to the container with the addChild method\n     * when you do this, all the bunnies become children of the container, and when a container moves,\n     * so do all its children.\n     * This gives you a lot of flexibility and makes it easier to position elements on the screen\n     */\n    container.x = 100;\n    container.y = 60;\n\n    app.ticker.add(() =>\n    {\n        app.renderer.render(container, { renderTexture: rt });\n    });\n})();\n"}})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);