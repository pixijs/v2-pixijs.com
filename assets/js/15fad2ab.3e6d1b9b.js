"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([["9589"],{29763:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>p,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"examples/text/web-font","title":"Web Font","description":"","source":"@site/docs/examples/text/web-font.mdx","sourceDirName":"examples/text","slug":"/examples/text/web-font","permalink":"/8.x/examples/text/web-font","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"hide_table_of_contents":true,"hide_edit_this_page":true,"sidebar_position":3,"custom_edit_url":null,"title":"Web Font"},"sidebar":"examplesSidebar","previous":{"title":"From Font","permalink":"/8.x/examples/text/from-font"},"next":{"title":"Simple","permalink":"/8.x/examples/graphics/simple"}}'),o=n("85893"),a=n("50065"),s=n("43076");let p={hide_table_of_contents:!0,hide_edit_this_page:!0,sidebar_position:3,custom_edit_url:null,title:"Web Font"},l=void 0,r={},c=[];function d(e){return(0,o.jsx)(s.N,{files:{"index.js":"import { Application, Text } from 'pixi.js';\n\n// Load them google fonts before starting...\nwindow.WebFontConfig = {\n    google: {\n        families: ['Snippet'],\n    },\n    active()\n    {\n        init();\n    },\n};\n\n/* eslint-disable */\n// include the web-font loader script\n(function () {\n    const wf = document.createElement('script');\n    wf.src = `${\n        document.location.protocol === 'https:' ? 'https' : 'http'\n    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;\n    wf.type = 'text/javascript';\n    wf.async = 'true';\n    const s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(wf, s);\n})();\n/* eslint-enabled */\n\nasync function init() {\n    // Create a new application\n    const app = new Application();\n\n    // Initialize the application\n    await app.init({ background: '#1099bb', resizeTo: window });\n\n    // Append the application canvas to the document body\n    document.body.appendChild(app.canvas);\n\n    // create some white text using the Snippet webfont\n    const textSample = new Text('PixiJS text using the\\ncustom \"Snippet\" Webfont', {\n        fontFamily: 'Snippet',\n        fontSize: 50,\n        fill: 'white',\n        align: 'left',\n    });\n    textSample.position.set(50, 200);\n    app.stage.addChild(textSample);\n}\n"}})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);