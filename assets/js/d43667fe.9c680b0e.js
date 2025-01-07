"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["4243"],{60646:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>p});var t=JSON.parse('{"id":"examples/graphics/fill-gradient","title":"Fill Gradient","description":"","source":"@site/docs/examples/graphics/fill-gradient.mdx","sourceDirName":"examples/graphics","slug":"/examples/graphics/fill-gradient","permalink":"/8.x/examples/graphics/fill-gradient","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":6,"custom_edit_url":null,"title":"Fill Gradient"},"sidebar":"examplesSidebar","previous":{"title":"Texture","permalink":"/8.x/examples/graphics/texture"},"next":{"title":"Mesh From Path","permalink":"/8.x/examples/graphics/mesh-from-path"}}'),a=n("85893"),r=n("50065"),l=n("43076");let s={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:6,custom_edit_url:null,title:"Fill Gradient"},p=void 0,o={},c=[];function d(e){return(0,a.jsx)(l.N,{files:{"index.js":"import { Application, FillGradient, Graphics } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ background: '#1099bb', resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    // Create a color array for the linear gradient\n    const colorStops = [0xffffff, 0xff0000, 0x00ff00, 0x0000ff, 0x000000];\n\n    // Create a fill gradient\n    const gradientFill = new FillGradient(0, 0, 150, 150);\n\n    // Add the color stops to the fill gradient\n    colorStops.forEach((number, index) =>\n    {\n        const ratio = index / colorStops.length;\n\n        gradientFill.addColorStop(ratio, number);\n    });\n\n    // Create a fill graphic\n    const graphic1 = new Graphics().roundRect(0, 0, 150, 150, 50).fill(gradientFill);\n\n    // Create a stroke graphic\n    const graphic2 = new Graphics().roundRect(0, 0, 150, 150, 50).stroke({ width: 20, fill: gradientFill });\n\n    graphic1.pivot.set(75, 75);\n    graphic1.x = 150;\n    graphic1.y = 200;\n\n    graphic2.x = 350;\n    graphic2.y = 125;\n\n    app.stage.addChild(graphic1);\n    app.stage.addChild(graphic2);\n\n    let tick = 0;\n\n    // Animate the graphics\n    app.ticker.add(() =>\n    {\n        tick += 0.025;\n        graphic1.rotation += 0.01;\n        graphic2\n            .clear()\n            .roundRect(0, 0, 150, 150, 50)\n            .stroke({ width: Math.sin(tick) * 100, fill: gradientFill });\n    });\n})();\n"}})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);