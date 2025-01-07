"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["6693"],{96930:function(i,n,e){e.r(n),e.d(n,{default:()=>f,frontMatter:()=>c,metadata:()=>a,assets:()=>p,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"examples/graphics/simple","title":"Simple","description":"","source":"@site/docs/examples/graphics/simple.mdx","sourceDirName":"examples/graphics","slug":"/examples/graphics/simple","permalink":"/8.x/examples/graphics/simple","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":0,"custom_edit_url":null,"title":"Simple"},"sidebar":"examplesSidebar","previous":{"title":"Web Font","permalink":"/8.x/examples/text/web-font"},"next":{"title":"Advanced","permalink":"/8.x/examples/graphics/advanced"}}'),s=e("85893"),r=e("50065"),t=e("43076");let c={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:0,custom_edit_url:null,title:"Simple"},l=void 0,p={},o=[];function h(i){return(0,s.jsx)(t.N,{files:{"index.js":"import { Application, Graphics } from 'pixi.js';\n\n(async () =>\n{\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ antialias: true, resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    const graphics = new Graphics();\n\n    // Rectangle\n    graphics.rect(50, 50, 100, 100);\n    graphics.fill(0xde3249);\n\n    // Rectangle + line style 1\n    graphics.rect(200, 50, 100, 100);\n    graphics.fill(0x650a5a);\n    graphics.stroke({ width: 2, color: 0xfeeb77 });\n\n    // Rectangle + line style 2\n    graphics.rect(350, 50, 100, 100);\n    graphics.fill(0xc34288);\n    graphics.stroke({ width: 10, color: 0xffbd01 });\n\n    // Rectangle 2\n    graphics.rect(530, 50, 140, 100);\n    graphics.fill(0xaa4f08);\n    graphics.stroke({ width: 2, color: 0xffffff });\n\n    // Circle\n    graphics.circle(100, 250, 50);\n    graphics.fill(0xde3249, 1);\n\n    // Circle + line style 1\n    graphics.circle(250, 250, 50);\n    graphics.fill(0x650a5a, 1);\n    graphics.stroke({ width: 2, color: 0xfeeb77 });\n\n    // Circle + line style 2\n    graphics.circle(400, 250, 50);\n    graphics.fill(0xc34288, 1);\n    graphics.stroke({ width: 10, color: 0xffbd01 });\n\n    // Ellipse + line style 2\n    graphics.ellipse(600, 250, 80, 50);\n    graphics.fill(0xaa4f08, 1);\n    graphics.stroke({ width: 2, color: 0xffffff });\n\n    // Draw a shape\n    graphics.moveTo(50, 350);\n    graphics.lineTo(250, 350);\n    graphics.lineTo(100, 400);\n    graphics.lineTo(50, 350);\n    graphics.fill(0xff3300);\n    graphics.stroke({ width: 4, color: 0xffd900 });\n\n    // Draw a rounded rectangle\n    graphics.roundRect(50, 440, 100, 100, 16);\n    graphics.fill(0x650a5a, 0.25);\n    graphics.stroke({ width: 2, color: 0xff00ff });\n\n    // Draw star\n    graphics.star(360, 370, 5, 50);\n    graphics.fill(0x35cc5a);\n    graphics.stroke({ width: 2, color: 0xffffff });\n\n    // Draw star 2\n    graphics.star(280, 510, 7, 50);\n    graphics.fill(0xffcc5a);\n    graphics.stroke({ width: 2, color: 0xfffffd });\n\n    // Draw star 3\n    graphics.star(470, 450, 4, 50);\n    graphics.fill(0x55335a);\n    graphics.stroke(4, 0xffffff);\n\n    // Draw polygon\n    const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];\n\n    graphics.poly(path);\n    graphics.fill(0x3500fa);\n\n    app.stage.addChild(graphics);\n})();\n"}})}function f(i={}){let{wrapper:n}={...(0,r.a)(),...i.components};return n?(0,s.jsx)(n,{...i,children:(0,s.jsx)(h,{...i})}):h(i)}}}]);