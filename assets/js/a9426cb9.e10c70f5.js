"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["1879"],{39441:function(e,i,t){t.r(i),t.d(i,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"examples/basic/simple-plane","title":"Simple Plane","description":"","source":"@site/versioned_docs/version-7.x/examples/basic/simple-plane.mdx","sourceDirName":"examples/basic","slug":"/examples/basic/simple-plane","permalink":"/7.x/examples/basic/simple-plane","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":6,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":6,"custom_edit_url":null,"title":"Simple Plane"},"sidebar":"examplesSidebar","previous":{"title":"Particle Container","permalink":"/7.x/examples/basic/particle-container"},"next":{"title":"Slots","permalink":"/7.x/examples/advanced/slots"}}'),s=t("85893"),a=t("50065"),l=t("43076"),p=t("99883");let r={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:6,custom_edit_url:null,title:"Simple Plane"},o=void 0,d={},c=[];function u(e){return(0,s.jsx)(l.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://pixijs.com/assets/bg_grass.jpg').then((texture) =>\n{\n    const plane = new PIXI.SimplePlane(texture, 10, 10);\n\n    plane.x = 100;\n    plane.y = 100;\n\n    app.stage.addChild(plane);\n\n    // Get the buffer for vertice positions.\n    const buffer = plane.geometry.getBuffer('aVertexPosition');\n\n    // Listen for animate update\n    let timer = 0;\n\n    app.ticker.add(() =>\n    {\n        // Randomize the vertice positions a bit to create movement.\n        for (let i = 0; i < buffer.data.length; i++)\n        {\n            buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;\n        }\n        buffer.update();\n        timer++;\n    });\n});\n"},dependencies:{"pixi.js":p.npm}})}function m(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);