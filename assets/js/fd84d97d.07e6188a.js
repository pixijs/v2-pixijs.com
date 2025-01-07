"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["3837"],{87539:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"guides/components/graphics-pixel-line","title":"Graphics Pixel Line","description":"The pixelLine property is a neat feature of the PixiJS Graphics API that allows you to create lines that remain 1 pixel thick, regardless of scaling or zoom level. As part of the Graphics API, it gives developers all the power PixiJS provides for building and stroking shapes. This feature is especially useful for achieving crisp, pixel-perfect visuals, particularly in retro-style or grid-based games, technical drawing, or UI rendering.","source":"@site/docs/guides/components/graphics-pixel-line.mdx","sourceDirName":"guides/components","slug":"/guides/components/graphics-pixel-line","permalink":"/8.x/guides/components/graphics-pixel-line","draft":false,"unlisted":false,"editUrl":"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/graphics-pixel-line.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"guidesSidebar","previous":{"title":"Graphics","permalink":"/8.x/guides/components/graphics"},"next":{"title":"Interaction","permalink":"/8.x/guides/components/interaction"}}'),r=i("85893"),t=i("50065");i("93862");var a=i("34912");let l={},o="Graphics Pixel Line",c={},d=[{value:"How to use <code>pixelLine</code>?",id:"how-to-use-pixelline",level:2},{value:"Why Use <code>pixelLine</code>?",id:"why-use-pixelline",level:2},{value:"1. <strong>Retro or Pixel Art Games</strong>",id:"1-retro-or-pixel-art-games",level:3},{value:"2. <strong>UI and HUD Elements</strong>",id:"2-ui-and-hud-elements",level:3},{value:"3. <strong>Debugging and Prototyping</strong>",id:"3-debugging-and-prototyping",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"Caveats and Gotchas",id:"caveats-and-gotchas",level:2},{value:"1. <strong>Its 1px thick, thats it!</strong>",id:"1-its-1px-thick-thats-it",level:3},{value:"2. <strong>Hardware may render differently</strong>",id:"2-hardware-may-render-differently",level:3},{value:"4. <strong>Scaling Behavior</strong>",id:"4-scaling-behavior",level:3},{value:"Example: Box with Pixel-Perfect Stroke",id:"example-box-with-pixel-perfect-stroke",level:3},{value:"When to Avoid Using <code>pixelLine</code>",id:"when-to-avoid-using-pixelline",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"graphics-pixel-line",children:"Graphics Pixel Line"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"pixelLine"})," property is a neat feature of the PixiJS Graphics API that allows you to create lines that remain 1 pixel thick, regardless of scaling or zoom level. As part of the Graphics API, it gives developers all the power PixiJS provides for building and stroking shapes. This feature is especially useful for achieving crisp, pixel-perfect visuals, particularly in retro-style or grid-based games, technical drawing, or UI rendering."]}),"\n",(0,r.jsx)(n.p,{children:"In this guide, we'll dive into how this property works, its use cases, and the caveats you should be aware of when using it."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(a.k,{files:{"index.js":"import { Application, Container, Graphics, Text } from 'pixi.js';\n\n/**\n * Creates a grid pattern using Graphics lines\n * @param graphics - The Graphics object to draw on\n * @returns The Graphics object with the grid drawn\n */\nfunction buildGrid(graphics)\n{\n    // Draw 10 vertical lines spaced 10 pixels apart\n    for (let i = 0; i < 11; i++)\n    {\n        // Move to top of each line (x = i*10, y = 0)\n        graphics\n            .moveTo(i * 10, 0)\n            // Draw down to bottom (x = i*10, y = 100)\n            .lineTo(i * 10, 100);\n    }\n\n    // Draw 10 horizontal lines spaced 10 pixels apart\n    for (let i = 0; i < 11; i++)\n    {\n        // Move to start of each line (x = 0, y = i*10)\n        graphics\n            .moveTo(0, i * 10)\n            // Draw across to end (x = 100, y = i*10)\n            .lineTo(100, i * 10);\n    }\n\n    return graphics;\n}\n\n(async () =>\n{\n    // Create and initialize a new PixiJS application\n    const app = new Application();\n\n    await app.init({ antialias: true, resizeTo: window });\n    document.body.appendChild(app.canvas);\n\n    // Create two grids - one with pixel-perfect lines and one without\n    const gridPixel = buildGrid(new Graphics()).stroke({ color: 0xffffff, pixelLine: true, width: 1 });\n\n    const grid = buildGrid(new Graphics()).stroke({ color: 0xffffff, pixelLine: false });\n\n    // Position the grids side by side\n    grid.x = -100;\n    grid.y = -50;\n    gridPixel.y = -50;\n\n    // Create a container to hold both grids\n    const container = new Container();\n\n    container.addChild(grid, gridPixel);\n\n    // Center the container on screen\n    container.x = app.screen.width / 2;\n    container.y = app.screen.height / 2;\n    app.stage.addChild(container);\n\n    // Animation variables\n    let count = 0;\n\n    // Add animation to scale the grids over time\n    app.ticker.add(() =>\n    {\n        count += 0.01;\n        container.scale = 1 + (Math.sin(count) + 1) * 2;\n    });\n\n    // Add descriptive label\n    const label = new Text({\n        text: 'Grid Comparison: Standard Lines (Left) vs Pixel-Perfect Lines (Right)',\n        style: { fill: 0xffffff },\n    });\n\n    // Position label in top-left corner\n    label.position.set(20, 20);\n    label.width = app.screen.width - 40;\n    label.scale.y = label.scale.x;\n    app.stage.addChild(label);\n})();\n"}}),"\n",(0,r.jsxs)(n.h2,{id:"how-to-use-pixelline",children:["How to use ",(0,r.jsx)(n.code,{children:"pixelLine"}),"?"]}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s a simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Create a Graphics object and draw a pixel-perfect line\nlet graphics = new Graphics()\n  .moveTo(0, 0)\n  .lineTo(100, 100)\n  .stroke({ color: 0xff0000, pixelLine: true });\n\n// Add it to the stage\napp.stage.addChild(graphics);\n\n// Even if we scale the Graphics object, the line remains 1 pixel wide\ngraphics.scale.set(2);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, no matter how you transform or zoom the ",(0,r.jsx)(n.code,{children:"Graphics"})," object, the red line will always appear 1 pixel thick on the screen."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"why-use-pixelline",children:["Why Use ",(0,r.jsx)(n.code,{children:"pixelLine"}),"?"]}),"\n",(0,r.jsx)(n.p,{children:"Pixel-perfect lines can be incredibly useful in a variety of scenarios. Here are some common use cases:"}),"\n",(0,r.jsxs)(n.h3,{id:"1-retro-or-pixel-art-games",children:["1. ",(0,r.jsx)(n.strong,{children:"Retro or Pixel Art Games"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Pixel art games rely heavily on maintaining sharp, precise visuals. The ",(0,r.jsx)(n.code,{children:"pixelLine"})," property ensures that lines do not blur or scale inconsistently with other pixel elements."]}),"\n",(0,r.jsx)(n.li,{children:"Example: Drawing pixel-perfect grids for tile-based maps."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"\n// Create a grid of vertical and horizontal lines\nconst grid = new Graphics();\n\n// Draw 10 vertical lines spaced 10 pixels apart\n// Draw vertical lines\nfor (let i = 0; i < 10; i++) {\n    // Move to top of each line (x = i*10, y = 0)\n    grid.moveTo(i * 10, 0)\n        // Draw down to bottom (x = i*10, y = 100)\n        .lineTo(i * 10, 100);\n}\n\n// Draw horizontal lines\nfor (let i = 0; i < 10; i++) {\n    // Move to start of each line (x = 0, y = i*10)\n    grid.moveTo(0, i * 10)\n        // Draw across to end (x = 100, y = i*10)\n        .lineTo(100, i * 10);\n}\n\n// Stroke all lines in white with pixel-perfect width\ngrid.stroke({ color: 0xffffff, pixelLine: true });\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"2-ui-and-hud-elements",children:["2. ",(0,r.jsx)(n.strong,{children:"UI and HUD Elements"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For UI elements such as borders, separators, or underlines, a consistent 1-pixel thickness provides a professional, clean look."}),"\n",(0,r.jsx)(n.li,{children:"Example: Drawing a separator line in a menu or a progress bar border."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Create a separator line that will always be 1 pixel thick\nconst separator = new Graphics()\n    // Start at x=0, y=50\n    .moveTo(0, 50)\n    // Draw a horizontal line 200 pixels to the right\n    .lineTo(200, 50)\n    // Stroke in green with pixel-perfect 1px width\n    .stroke({ color: 0x00ff00, pixelLine: true });\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"3-debugging-and-prototyping",children:["3. ",(0,r.jsx)(n.strong,{children:"Debugging and Prototyping"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use pixel-perfect lines to debug layouts, collision boxes, or grids. Since the lines don\u2019t scale, they offer a consistent reference point during development."}),"\n",(0,r.jsx)(n.li,{children:"Example: Displaying collision boundaries in a physics-based game."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"\n// Create a debug box with pixel-perfect stroke\nconst graphicsBox = new Graphics()\n    .rect(0, 0, 100, 100)\n  .stroke({ color: 0xff00ff, pixelLine: true });\n\n/**\n * Updates the debug box to match the bounds of a given object\n * @param {Container} obj - The object to draw bounds for\n */\nfunction drawDebugBounds(obj) {\n    // Get the bounds of the object\n    let bounds = obj.getBounds().rectangle;\n\n    // Position and scale the debug box to match the bounds\n    // this is faster than using `moveTo` and `lineTo` each frame!\n    graphicsBox.position.set(bounds.x, bounds.y);\n    graphicsBox.scale.set(bounds.width / 100, bounds.height / 100);\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(n.p,{children:["This is achieved under the hood using WebGL or WebGPU's native line rendering methods when ",(0,r.jsx)(n.code,{children:"pixelLine"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Fun fact its actually faster to draw a pixel line than a regular line. This is because of two main factors:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Simpler Drawing Process"}),": Regular lines in PixiJS (when ",(0,r.jsx)(n.code,{children:"pixelLine"})," is ",(0,r.jsx)(n.code,{children:"false"}),") need extra steps to be drawn. PixiJS has to figure out the thickness of the line and create a shape that looks like a line but is actually made up of triangles."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Direct Line Drawing"}),": When using ",(0,r.jsx)(n.code,{children:"pixelLine"}),', we can tell the graphics card "just draw a line from point A to point B" and it knows exactly what to do. This is much simpler and faster than creating and filling shapes.']}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Think of it like drawing a line on paper - ",(0,r.jsx)(n.code,{children:"pixelLine"})," is like using a pen to draw a straight line, while regular lines are like having to carefully color in a thin rectangle. The pen method is naturally faster and simpler!"]}),"\n",(0,r.jsx)(n.h2,{id:"caveats-and-gotchas",children:"Caveats and Gotchas"}),"\n",(0,r.jsxs)(n.p,{children:["While the ",(0,r.jsx)(n.code,{children:"pixelLine"})," property is incredibly useful, there are some limitations and things to keep in mind:"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-its-1px-thick-thats-it",children:["1. ",(0,r.jsx)(n.strong,{children:"Its 1px thick, thats it!"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The line is always 1px thick, there is no way to change this as its using the GPU to draw the line."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"2-hardware-may-render-differently",children:["2. ",(0,r.jsx)(n.strong,{children:"Hardware may render differently"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Different GPUs and graphics hardware may render the line slightly differently due to variations in how they handle line rasterization. For example, some GPUs may position the line slightly differently or apply different anti-aliasing techniques. This is an inherent limitation of GPU line rendering and is beyond PixiJS's control."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"4-scaling-behavior",children:["4. ",(0,r.jsx)(n.strong,{children:"Scaling Behavior"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"While the line thickness remains constant, other properties (e.g., position or start/end points) are still affected by scaling. This can sometimes create unexpected results if combined with other scaled objects. This is a feature not a bug :)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-box-with-pixel-perfect-stroke",children:"Example: Box with Pixel-Perfect Stroke"}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of a filled box with a pixel-perfect stroke. The box itself scales and grows, but the stroke remains 1 pixel wide:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Create a Graphics object and draw a filled box with a pixel-perfect stroke\nlet box = new Graphics()\n    .rect(0, 0, 100, 100)\n    .fill('white')\n    .stroke({ color: 0xff0000, pixelLine: true });\n\n// Add it to the stage\napp.stage.addChild(box);\n\n// Scale the box\nbox.scale.set(2);\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this example, the blue box grows as it scales, but the red stroke remains at 1 pixel thickness, providing a crisp outline regardless of the scaling."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"when-to-avoid-using-pixelline",children:["When to Avoid Using ",(0,r.jsx)(n.code,{children:"pixelLine"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"You want a line that is not 1px thick:"})," Don't use ",(0,r.jsx)(n.code,{children:"pixelLine"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"You want the line to scale:"})," Don't use ",(0,r.jsx)(n.code,{children:"pixelLine"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"pixelLine"})," property is a super useful to have in the PixiJS toolbox for developers looking to create sharp, pixel-perfect lines that remain consistent under transformation. By understanding its strengths and limitations, you can incorporate it into your projects for clean, professional results in both visual and functional elements."]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},34912:function(e,n,i){i.d(n,{k:function(){return t}});var s=i(85893),r=i(76700);function t(e){return(0,s.jsx)(r.M,{height:400,width:700,viewType:"preview",...e})}}}]);