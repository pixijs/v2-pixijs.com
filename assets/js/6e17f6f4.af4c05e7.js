"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["6129"],{84349:function(e,i,t){t.r(i),t.d(i,{default:()=>f,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"examples/filters-basic/displacement-map-flag","title":"Displacement Map Flag","description":"","source":"@site/versioned_docs/version-7.x/examples/filters-basic/displacement-map-flag.mdx","sourceDirName":"examples/filters-basic","slug":"/examples/filters-basic/displacement-map-flag","permalink":"/7.x/examples/filters-basic/displacement-map-flag","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":3,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":3,"custom_edit_url":null,"title":"Displacement Map Flag"},"sidebar":"examplesSidebar","previous":{"title":"Displacement Map Crawlies","permalink":"/7.x/examples/filters-basic/displacement-map-crawlies"},"next":{"title":"Mouse Blending","permalink":"/7.x/examples/filters-advanced/mouse-blending"}}'),n=t("85893"),a=t("50065"),p=t("43076"),l=t("99883");let r={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:3,custom_edit_url:null,title:"Displacement Map Flag"},d=void 0,o={},c=[];function m(e){return(0,n.jsx)(p.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\napp.stage.eventMode = 'static';\n\nconst container = new PIXI.Container();\n\napp.stage.addChild(container);\n\nconst flag = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/flag.png');\n\ncontainer.addChild(flag);\nflag.x = 100;\nflag.y = 100;\n\nconst displacementSprite = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/displacement_map_repeat.jpg');\n// Make sure the sprite is wrapping.\n\ndisplacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;\nconst displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\ndisplacementFilter.padding = 10;\n\ndisplacementSprite.position = flag.position;\n\napp.stage.addChild(displacementSprite);\n\nflag.filters = [displacementFilter];\n\ndisplacementFilter.scale.x = 30;\ndisplacementFilter.scale.y = 60;\n\napp.ticker.add(() =>\n{\n    // Offset the sprite position to make vFilterCoord update to larger value.\n    // Repeat wrapping makes sure there's still pixels on the coordinates.\n    displacementSprite.x++;\n    // Reset x to 0 when it's over width to keep values from going to very huge numbers.\n    if (displacementSprite.x > displacementSprite.width)\n    {\n        displacementSprite.x = 0;\n    }\n});\n"},dependencies:{"pixi.js":l.npm}})}function f(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);