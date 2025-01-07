"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["717"],{21291:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>p});var i=JSON.parse('{"id":"examples/events/pointer-tracker","title":"Pointer Tracker","description":"","source":"@site/versioned_docs/version-7.x/examples/events/pointer-tracker.mdx","sourceDirName":"examples/events","slug":"/examples/events/pointer-tracker","permalink":"/7.x/examples/events/pointer-tracker","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":6,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":6,"custom_edit_url":null,"title":"Pointer Tracker"},"sidebar":"examplesSidebar","previous":{"title":"Nested Boundary With Projection","permalink":"/7.x/examples/events/nested-boundary-with-projection"},"next":{"title":"Slider","permalink":"/7.x/examples/events/slider"}}'),s=n("85893"),r=n("50065"),a=n("43076"),o=n("99883");let l={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:6,custom_edit_url:null,title:"Pointer Tracker"},p=void 0,c={},d=[];function u(e){return(0,s.jsx)(a.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\n// In this a example, a circle will follow the pointer wherever it\n// moves over the canvas.\n\nconst app = new PIXI.Application({\n    antialias: true,\n    background: '#1099bb',\n});\n\ndocument.body.appendChild(app.view);\n\n// Create the circle\nconst circle = app.stage.addChild(\n    new PIXI.Graphics()\n        .beginFill(0xffffff)\n        .lineStyle({ color: 0x111111, alpha: 0.87, width: 1 })\n        .drawCircle(0, 0, 8)\n        .endFill(),\n);\n\ncircle.position.set(app.screen.width / 2, app.screen.height / 2);\n\n// Enable interactivity!\napp.stage.eventMode = 'static';\n\n// Make sure the whole canvas area is interactive, not just the circle.\napp.stage.hitArea = app.screen;\n\n// Follow the pointer\napp.stage.addEventListener('pointermove', (e) =>\n{\n    circle.position.copyFrom(e.global);\n});\n"},dependencies:{"pixi.js":o.npm}})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);