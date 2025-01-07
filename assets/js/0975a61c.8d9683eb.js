"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["9492"],{13235:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>i,assets:()=>h,toc:()=>l,contentTitle:()=>p});var i=JSON.parse('{"id":"examples/graphics/mesh-from-path","title":"Mesh From Path","description":"","source":"@site/docs/examples/graphics/mesh-from-path.mdx","sourceDirName":"examples/graphics","slug":"/examples/graphics/mesh-from-path","permalink":"/8.x/examples/graphics/mesh-from-path","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":7,"custom_edit_url":null,"title":"Mesh From Path"},"sidebar":"examplesSidebar","previous":{"title":"Fill Gradient","permalink":"/8.x/examples/graphics/fill-gradient"},"next":{"title":"Pixel Line","permalink":"/8.x/examples/graphics/pixel-line"}}'),a=t("85893"),s=t("50065"),r=t("43076");let o={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:7,custom_edit_url:null,title:"Mesh From Path"},p=void 0,h={},l=[];function c(e){return(0,a.jsx)(r.N,{files:{"index.js":"import { Application, buildGeometryFromPath, Graphics, GraphicsPath, Mesh, Texture } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({\n        backgroundColor: 'brown',\n        resizeTo: window,\n        antialias: true,\n    });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    const path = new GraphicsPath()\n        .rect(-50, -50, 100, 100)\n        .circle(80, 80, 50)\n        .circle(80, -80, 50)\n        .circle(-80, 80, 50)\n        .circle(-80, -80, 50);\n\n    const geometry = buildGeometryFromPath({\n        path,\n    });\n\n    const meshes = [];\n\n    for (let i = 0; i < 200; i++)\n    {\n        const x = Math.random() * app.screen.width;\n        const y = Math.random() * app.screen.height;\n\n        const mesh = new Mesh({\n            geometry,\n            texture: Texture.WHITE,\n            x,\n            y,\n            tint: Math.random() * 0xffffff,\n        });\n\n        app.stage.addChild(mesh);\n\n        meshes.push(mesh);\n    }\n\n    app.ticker.add(() =>\n    {\n        meshes.forEach((mesh) =>\n        {\n            mesh.rotation += 0.01;\n        });\n    });\n})();\n"}})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);