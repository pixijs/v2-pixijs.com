"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["3885"],{92996:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>i,assets:()=>p,toc:()=>u,contentTitle:()=>m});var i=JSON.parse('{"id":"examples/mesh-and-shaders/merging-geometry","title":"Merging Geometry","description":"","source":"@site/versioned_docs/version-7.x/examples/mesh-and-shaders/merging-geometry.mdx","sourceDirName":"examples/mesh-and-shaders","slug":"/examples/mesh-and-shaders/merging-geometry","permalink":"/7.x/examples/mesh-and-shaders/merging-geometry","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":8,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":8,"custom_edit_url":null,"title":"Merging Geometry"},"sidebar":"examplesSidebar","previous":{"title":"Instanced Geometry","permalink":"/7.x/examples/mesh-and-shaders/instanced-geometry"},"next":{"title":"Interleaving Geometry","permalink":"/7.x/examples/mesh-and-shaders/interleaving-geometry"}}'),s=t("85893"),a=t("50065"),r=t("43076"),o=t("99883");let d={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:8,custom_edit_url:null,title:"Merging Geometry"},m=void 0,p={},u=[];function l(e){return(0,s.jsx)(r.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst geometry = new PIXI.Geometry()\n    .addAttribute(\n        'aVertexPosition', // the attribute name\n        [\n            -100,\n            -100, // x, y\n            100,\n            -100, // x, y\n            100,\n            100,\n            -100,\n            100,\n        ], // x, y\n        2,\n    ) // the size of the attribute\n    .addAttribute(\n        'aUvs', // the attribute name\n        [\n            0,\n            0, // u, v\n            1,\n            0, // u, v\n            1,\n            1,\n            0,\n            1,\n        ], // u, v\n        2,\n    ) // the size of the attribute\n    .addIndex([0, 1, 2, 0, 2, 3]);\n\nconst geometry2 = new PIXI.Geometry()\n    .addAttribute(\n        'aVertexPosition', // the attribute name\n        [\n            -100 + 100,\n            -100, // x, y\n            100 + 100,\n            -100, // x, y\n            100 + 100,\n            100,\n        ], // x, y\n        2,\n    ) // the size of the attribute\n    .addAttribute(\n        'aUvs', // the attribute name\n        [\n            0,\n            0, // u, v\n            1,\n            0, // u, v\n            1,\n            1,\n        ], // u, v\n        2,\n    ) // the size of the attribute\n    .addIndex([0, 1, 2]);\n\nconst geometry3 = PIXI.Geometry.merge([geometry, geometry2]);\n\nconst shader = PIXI.Shader.from(\n    `\n\n    precision mediump float;\n\n    attribute vec2 aVertexPosition;\n    attribute vec2 aUvs;\n\n    uniform mat3 translationMatrix;\n    uniform mat3 projectionMatrix;\n\n    varying vec2 vUvs;\n\n    void main() {\n\n        vUvs = aUvs;\n        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    }`,\n\n    `precision mediump float;\n\n    varying vec2 vUvs;\n\n    uniform sampler2D uSampler2;\n\n    void main() {\n\n        gl_FragColor = texture2D(uSampler2, vUvs );\n    }\n\n`,\n    {\n        uSampler2: PIXI.Texture.from('https://pixijs.com/assets/bg_scene_rotate.jpg'),\n    },\n);\n\nconst quad = new PIXI.Mesh(geometry3, shader);\n\nquad.position.set(400, 300);\nquad.scale.set(2);\n\napp.stage.addChild(quad);\n\napp.ticker.add((delta) =>\n{\n    quad.rotation += 0.01;\n});\n"},dependencies:{"pixi.js":o.npm}})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);