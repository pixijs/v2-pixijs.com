"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["8232"],{25362:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>p,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"examples/basic/mesh-plane","title":"Mesh Plane","description":"","source":"@site/docs/examples/basic/mesh-plane.mdx","sourceDirName":"examples/basic","slug":"/examples/basic/mesh-plane","permalink":"/8.x/examples/basic/mesh-plane","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":5,"custom_edit_url":null,"title":"Mesh Plane"},"sidebar":"examplesSidebar","previous":{"title":"Blend Modes","permalink":"/8.x/examples/basic/blend-modes"},"next":{"title":"Render Group","permalink":"/8.x/examples/basic/render-group"}}'),i=n("85893"),s=n("50065"),r=n("43076");let p={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:5,custom_edit_url:null,title:"Mesh Plane"},o=void 0,l={},d=[];function c(e){return(0,i.jsx)(r.N,{files:{"index.js":"import { Application, Assets, MeshPlane } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ background: '#1099bb', resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    // Load the grass texture\n    const texture = await Assets.load('https://pixijs.com/assets/bg_grass.jpg');\n\n    // Create a simple grass plane and add it to the stage\n    const plane = new MeshPlane({ texture, verticesX: 10, verticesY: 10 });\n\n    plane.x = 100;\n    plane.y = 100;\n\n    app.stage.addChild(plane);\n\n    // Get the buffer for vertex positions.\n    const { buffer } = plane.geometry.getAttribute('aPosition');\n\n    // Listen for animate update\n    let timer = 0;\n\n    app.ticker.add(() =>\n    {\n        // Randomize the vertice positions a bit to create movement.\n        for (let i = 0; i < buffer.data.length; i++)\n        {\n            buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;\n        }\n        buffer.update();\n        timer++;\n    });\n})();\n"}})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);