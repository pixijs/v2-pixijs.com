"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["894"],{91491:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>p});var a=JSON.parse('{"id":"examples/advanced/star-warp","title":"Star Warp","description":"","source":"@site/versioned_docs/version-7.x/examples/advanced/star-warp.mdx","sourceDirName":"examples/advanced","slug":"/examples/advanced/star-warp","permalink":"/7.x/examples/advanced/star-warp","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"7.x","sidebarPosition":2,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":2,"custom_edit_url":null,"title":"Star Warp"},"sidebar":"examplesSidebar","previous":{"title":"Scratch Card","permalink":"/7.x/examples/advanced/scratch-card"},"next":{"title":"Mouse Trail","permalink":"/7.x/examples/advanced/mouse-trail"}}'),s=n("85893"),r=n("50065"),i=n("43076"),d=n("99883");let o={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:2,custom_edit_url:null,title:"Star Warp"},p=void 0,c={},l=[];function h(e){return(0,s.jsx)(i.N,{files:{"index.js":"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\n// Get the texture for star.\nconst starTexture = PIXI.Texture.from('https://pixijs.com/assets/star.png');\n\nconst starAmount = 1000;\nlet cameraZ = 0;\nconst fov = 20;\nconst baseSpeed = 0.025;\nlet speed = 0;\nlet warpSpeed = 0;\nconst starStretch = 5;\nconst starBaseSize = 0.05;\n\n// Create the stars\nconst stars = [];\n\nfor (let i = 0; i < starAmount; i++)\n{\n    const star = {\n        sprite: new PIXI.Sprite(starTexture),\n        z: 0,\n        x: 0,\n        y: 0,\n    };\n\n    star.sprite.anchor.x = 0.5;\n    star.sprite.anchor.y = 0.7;\n    randomizeStar(star, true);\n    app.stage.addChild(star.sprite);\n    stars.push(star);\n}\n\nfunction randomizeStar(star, initial)\n{\n    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;\n\n    // Calculate star positions with radial random coordinate so no star hits the camera.\n    const deg = Math.random() * Math.PI * 2;\n    const distance = Math.random() * 50 + 1;\n\n    star.x = Math.cos(deg) * distance;\n    star.y = Math.sin(deg) * distance;\n}\n\n// Change flight speed every 5 seconds\nsetInterval(() =>\n{\n    warpSpeed = warpSpeed > 0 ? 0 : 1;\n}, 5000);\n\n// Listen for animate update\napp.ticker.add((delta) =>\n{\n    // Simple easing. This should be changed to proper easing function when used for real.\n    speed += (warpSpeed - speed) / 20;\n    cameraZ += delta * 10 * (speed + baseSpeed);\n    for (let i = 0; i < starAmount; i++)\n    {\n        const star = stars[i];\n\n        if (star.z < cameraZ) randomizeStar(star);\n\n        // Map star 3d position to 2d with really simple projection\n        const z = star.z - cameraZ;\n\n        star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;\n        star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;\n\n        // Calculate star scale & rotation.\n        const dxCenter = star.sprite.x - app.renderer.screen.width / 2;\n        const dyCenter = star.sprite.y - app.renderer.screen.height / 2;\n        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);\n        const distanceScale = Math.max(0, (2000 - z) / 2000);\n\n        star.sprite.scale.x = distanceScale * starBaseSize;\n        // Star is looking towards center so that y axis is towards center.\n        // Scale the star depending on how fast we are moving, what the stretchfactor is\n        // and depending on how far away it is from the center.\n        star.sprite.scale.y\n            = distanceScale * starBaseSize\n            + (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;\n        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;\n    }\n});\n"},dependencies:{"pixi.js":d.npm}})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},99883:function(e){e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);