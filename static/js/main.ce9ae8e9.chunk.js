(this["webpackJsonppokentin-cards"]=this["webpackJsonppokentin-cards"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"name":"Pokentin","types":["Fire"],"subtype":"Basic","evolvesFrom":"Lotad","ability":{"name":"Flying fire","text":"Fire appears above the opponent\'s Pok\xe9mon and it crashes into it. It burns it and inflicts it 40 damages.","type":"Ability"},"hp":"90","retreatCost":["Colorless"],"attacks":[{"cost":["Fire","Fire","Fire","Colorless"],"name":"Vampire flame","text":"A flame appears and goes right in the opponent\'s Pok\xe9mon. It steals him 50HP and gives it to himself.","damage":"50"}],"resistances":[{"type":"Grass","value":"-20"}],"weaknesses":[{"type":"Water","value":"\xd72"}],"category":"Flying Pokeball  Pok\xe9mon","description":"It fly around volcanoes hoping for a tasty treat.","height":"50cm","weight":"1kg"}')},,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),s=t.n(c),l=(t(11),t(2));t(12);function o(e){var a=e.name;return r.a.createElement("div",{className:"card__type card__type--".concat(a.toLowerCase())})}function i(e){var a=e.type,t=e.name,n=e.text;return r.a.createElement("div",{className:"card__ability"},r.a.createElement("div",{className:"card__ability--header"},r.a.createElement("div",{className:"card__ability--type"},a),r.a.createElement("div",{className:"card__ability--name"},t)),r.a.createElement("div",{className:"card__ability--text"},n))}function m(e){var a=e.cost,t=void 0===a?[]:a;return t&&t.length?r.a.createElement("div",{className:"card__attack--cost"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"card__attack--cost-type card__type--".concat(e.toLowerCase())})}))):null}function u(e){var a=e.cost,t=e.name,n=e.damage,c=e.text;return r.a.createElement("div",{className:"card__attack"},r.a.createElement("div",{className:"card__attack--header"},r.a.createElement(m,{cost:a}),r.a.createElement("div",{className:"card__attack--name"},t),r.a.createElement("div",{className:"card__attack--damage"},n)),c&&r.a.createElement("div",{className:"card__attack--text"},c))}function d(e){var a=e.subtype,t=e.name,n=e.hp,c=e.types;return r.a.createElement("header",{className:"card__header"},r.a.createElement("div",{className:"card__subtype"},r.a.createElement("span",{className:"card__subtype--pill"},a)),r.a.createElement("div",{className:"card__name"},t),r.a.createElement("div",{className:"card__hp"},r.a.createElement("span",{className:"card__hp--text"},"HP"),r.a.createElement("span",{className:"card__hp--value"},n)),r.a.createElement("div",{className:"card__types"},c.map((function(e){return r.a.createElement(o,{key:e,name:e})}))))}function v(e){var a=e.category,t=e.height,n=e.weight;return r.a.createElement("div",{className:"card__general"},r.a.createElement("div",{className:"card__general--image"}),r.a.createElement("div",{className:"card__general--info"},a," height: ",t," weight: ",n,"."))}function p(e){var a=e.ability,t=e.attacks,n=a?"card__body card__body--with-ability":"card__body";return r.a.createElement("div",{className:n},a&&r.a.createElement(i,a),t&&t.map((function(e,a){return r.a.createElement(u,Object.assign({key:a},e))})))}function _(e){var a=e.element,t=e.type;e.className;return r.a.createElement("div",{className:"card__footer--item"},t," ",a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card__type-small card__type--".concat(a.type.toLowerCase())}),r.a.createElement("div",{className:"card__footer--value"},a.value)))}function f(e){var a=e.weaknesses,t=e.resistances,n=e.retreatCost,c=a&&a.length>=1&&a[0],s=t&&t.length>=1&&t[0];return r.a.createElement("div",{className:"card__footer"},r.a.createElement(_,{type:"weakness",element:c}),r.a.createElement(_,{type:"resistance",element:s}),r.a.createElement("div",{className:"card__footer--item"},"retreat"," ",n&&n.length>0&&n.map((function(e,a){return r.a.createElement("div",{key:a,className:"card__type-small card__type--".concat(e.toLowerCase())})}))))}function g(e){var a=e.types,t="card ".concat(a[0].toLowerCase());return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"card__container"},r.a.createElement(d,{subtype:e.subtype,name:e.name,hp:e.hp,types:a}),r.a.createElement(v,{category:e.category,height:e.height,weight:e.weight}),r.a.createElement(p,{ability:e.ability,attacks:e.attacks}),r.a.createElement(f,{weaknesses:e.weaknesses,resistances:e.resistances,retreatCost:e.retreatCost}),r.a.createElement("div",{className:"card__description"},e.description)))}var E=t(1);t(13);function h(e){var a=e.id,t=e.label,n=e.value,c=e.long,s=e.row,l=e.onChange,o=c?"textarea":"input";return s=s||3,r.a.createElement("div",{className:"field field__".concat(a)},r.a.createElement("label",{htmlFor:a},t),r.a.createElement(o,{id:a,name:a,type:"text",onChange:function(e){return l(e.target.value)},value:n,rows:c?s:void 0}))}var y=["colorless","darkness","dragon","fairy","fighting","fire","grass","lightning","metal","psychic","water"];function k(e){if(!(e.length<=0))return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}function b(e){var a=e.id,t=(e.label,e.value),n=e.onChange;return r.a.createElement("div",{className:"field field__".concat(a)},r.a.createElement("label",{htmlFor:a},"Type"),r.a.createElement("select",{name:a,id:a,value:t,onChange:n},y.map((function(e){return r.a.createElement("option",{key:e,value:e},k(e))}))))}var N=function(e,a){switch(a.type){case"UPDATE":var t=Object(E.a)({},e);return function e(a,t,n){if(void 0===a||0===t.length)throw new Error("set function was misused");1===t.length?a[t[0]]=n:e(a[t[0]],t.slice(1),n)}(t,a.path,a.value),t;case"UPDATE_TYPES":if(0===a.value.length)return e;var n=a.value[0],r=e.attacks.map((function(e){return Object(E.a)({},e,{cost:e.cost.map((function(e){return"colorless"===e.toLowerCase()?"colorless":n}))})}));return Object(E.a)({},e,{types:a.value,attacks:r});case"UPDATE_ATTACK_COST_ALL":if(a.index>e.attacks.length)return e;var c=e.attacks.map((function(t,n){return n!==a.index?t:Object(E.a)({},t,{cost:Array.from({length:a.value},(function(a){return e.types[0]}))})}));return Object(E.a)({},e,{attacks:c});case"UPDATE_ATTACK_COST_COLORLESS":if(a.index>e.attacks.length)return e;var s=e.attacks.map((function(t,n){if(n!==a.index)return t;for(var r=Object(E.a)({},t),c=r.cost,s=c.length,l=0;l<s;l++)c[l]=s-a.value-l>0?e.types[0]:"colorless";return r}));return Object(E.a)({},e,{attacks:s});default:return e}};function w(e){var a=e.initialData,t=e.onChange,c=Object(n.useReducer)(N,a),s=Object(l.a)(c,2),o=s[0],i=s[1],m=function(e){return function(a){return i({type:"UPDATE",path:e,value:a})}},u=function e(a){return function(t){return 0===t.length?a:e(a[t[0]])(t.slice(1))}}(o),d=function(e,a,t,n){return r.a.createElement(h,{id:e.join("-"),label:t||e.map((function(e){return k(e.toString())})).join(" "),value:u(e),onChange:m(e),long:a,row:n})};Object(n.useEffect)((function(){t(Object(E.a)({},a,{},o))}),[a,o,t]);var v=o.attacks[0].cost,p={total:v.length,colorless:v.filter((function(e){return"colorless"===e.toLowerCase()})).length};return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"group"},d(["name"]),d(["hp"],!1,"HP"),r.a.createElement(b,{id:"types",label:"Type",value:o.types[0].toLowerCase(),onChange:function(e){return i({type:"UPDATE_TYPES",value:[e.target.value]})}})),r.a.createElement("div",{className:"group"},d(["category"]),d(["height"]),d(["weight"])),r.a.createElement("div",{className:"group"},d(["ability","name"]),d(["ability","text"],!0)),r.a.createElement("div",{className:"group"},d(["attacks",0,"name"],!1,"Attacks Name"),d(["attacks",0,"text"],!0,"Attacks Text"),r.a.createElement("div",{className:"field field__attacks-0-cost"},r.a.createElement("label",{htmlFor:"cost-all"},"Cost "),r.a.createElement("select",{name:"cost-all",id:"cost-all",value:p.total,onChange:function(e){i({type:"UPDATE_ATTACK_COST_ALL",index:0,value:parseInt(e.target.value)})}},Array.from({length:5},(function(e,a){return r.a.createElement("option",{key:a,value:a},a)}))),r.a.createElement("label",{htmlFor:"cost-colorless"},"inc. normal "),r.a.createElement("select",{name:"cost-colorless",id:"cost-colorless",value:p.colorless,onChange:function(e){i({type:"UPDATE_ATTACK_COST_COLORLESS",index:0,value:parseInt(e.target.value)})}},Array.from({length:0===p.total?0:p.total+1},(function(e,a){return r.a.createElement("option",{key:a,value:a},a)})))),d(["attacks",0,"damage"],!1,"Attacks Damage")),r.a.createElement("div",{className:"group"},d(["description"],!0,"Description",2)))}var C=t(3);t(14);var A=function(){var e=Object(n.useState)(C),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement(g,t),r.a.createElement(w,{initialData:C,onChange:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ce9ae8e9.chunk.js.map