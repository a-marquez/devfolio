(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return v}));var a=n("mwIZ"),r=n.n(a),l=n("q1tI"),i=n.n(l),c=n("eNIv"),s=n("6uTu"),o=n("STHm"),m=function(e){var t=e.about;return i.a.createElement(o.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},i.a.createElement("p",null,t)))},u=n("Wbzz"),p=n("hbLQ"),d=function(e){var t=e.posts;return i.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return i.a.createElement(p.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},k=function(e){var t=e.experience;return t.length?i.a.createElement(o.a,{title:"Experience"},t.map((function(e){return i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},E=function(e){var t=e.projects;return t.length?i.a.createElement(o.a,{title:"Past Work"},t.map((function(e){return i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},f=function(e){var t=e.projects;return t.length?i.a.createElement(o.a,{title:"Projects"},t.map((function(e){return i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},g=function(e){var t=e.skills;return i.a.createElement(o.a,{title:"Skills"},t.map((function(e){return i.a.createElement(p.a,{key:e.name,name:e.name,description:e.description})})))},h=n("ivnd"),v=(t.default=function(e){var t=e.data,n=r()(t,"site.siteMetadata.about",!1),a=r()(t,"site.siteMetadata.work",!1),l=r()(t,"site.siteMetadata.projects",!1),o=t.allMarkdownRemark.edges,u=r()(t,"site.siteMetadata.experience",!1),p=r()(t,"site.siteMetadata.skills",!1),v=!o||!o.length;return console.log(t),i.a.createElement(s.a,null,i.a.createElement(h.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:v}),n&&i.a.createElement(m,{about:n}),p&&p.length&&i.a.createElement(g,{skills:p}),a&&a.length&&i.a.createElement(E,{projects:a}),l&&l.length&&i.a.createElement(f,{projects:l}),!v&&i.a.createElement(d,{posts:o}),u&&u.length&&i.a.createElement(k,{experience:u}))},"16311448")}}]);
//# sourceMappingURL=component---src-pages-index-jsx-70e93e8ad426cdb1f6e3.js.map