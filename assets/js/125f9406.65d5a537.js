"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["1886"],{36231:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>p,contentTitle:()=>l});var i=JSON.parse('{"id":"examples/mesh-and-shaders/instanced-geometry","title":"Instanced Geometry","description":"","source":"@site/versioned_docs/version-7.x/examples/mesh-and-shaders/instanced-geometry.mdx","sourceDirName":"examples/mesh-and-shaders","slug":"/examples/mesh-and-shaders/instanced-geometry","permalink":"/7.x/examples/mesh-and-shaders/instanced-geometry","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":8,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":8,"custom_edit_url":null,"title":"Instanced Geometry"},"sidebar":"examplesSidebar","previous":{"title":"Shared Shader","permalink":"/7.x/examples/mesh-and-shaders/shared-shader"},"next":{"title":"Merging Geometry","permalink":"/7.x/examples/mesh-and-shaders/merging-geometry"}}'),s=t("85893"),a=t("50065"),o=t("43076"),r=t("99883");let d={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:8,custom_edit_url:null,title:"Instanced Geometry"},l=void 0,c={},p=[];function m(e){return(0,s.jsx)(o.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst geometry = new PIXI.Geometry().addAttribute('aVPos', [-100, 0, 100, 0, 0, -150]);\n\ngeometry.instanced = true;\ngeometry.instanceCount = 5;\n\nconst positionSize = 2;\nconst colorSize = 3;\nconst buffer = new PIXI.Buffer(new Float32Array(geometry.instanceCount * (positionSize + colorSize)));\n\ngeometry.addAttribute('aIPos', buffer, positionSize, false, PIXI.TYPES.FLOAT, 4 * (positionSize + colorSize), 0, true);\ngeometry.addAttribute(\n    'aICol',\n    buffer,\n    colorSize,\n    false,\n    PIXI.TYPES.FLOAT,\n    4 * (positionSize + colorSize),\n    4 * positionSize,\n    true,\n);\n\nfor (let i = 0; i < geometry.instanceCount; i++)\n{\n    const instanceOffset = i * (positionSize + colorSize);\n\n    buffer.data[instanceOffset + 0] = i * 80;\n    buffer.data[instanceOffset + 2] = Math.random();\n    buffer.data[instanceOffset + 3] = Math.random();\n    buffer.data[instanceOffset + 4] = Math.random();\n}\n\nconst shader = PIXI.Shader.from(\n    `\n    precision mediump float;\n    attribute vec2 aVPos;\n    attribute vec2 aIPos;\n    attribute vec3 aICol;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec3 vCol;\n\n    void main() {\n        vCol = aICol;\n\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVPos + aIPos, 1.0)).xy, 0.0, 1.0);\n    }`,\n\n    `precision mediump float;\n\n    varying vec3 vCol;\n\n    void main() {\n        gl_FragColor = vec4(vCol, 1.0);\n    }\n\n`,\n);\n\nconst triangles = new PIXI.Mesh(geometry, shader);\n\ntriangles.position.set(400, 300);\n\napp.stage.addChild(triangles);\n\napp.ticker.add((delta) =>\n{\n    triangles.rotation += 0.01;\n});\n"},dependencies:{"pixi.js":r.npm}})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);