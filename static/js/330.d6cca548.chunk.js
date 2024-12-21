"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[330],{8739:function(i,e,t){t.d(e,{Z:function(){return c}});var s=t(7022),o=t(9743),a=t(2677),u=t.p+"static/media/background.768ad9d2833cd895dee7.jpg",r=t(184),c=function(i){var e=i.title;return(0,r.jsxs)("div",{className:"image-container",children:[(0,r.jsx)("img",{src:u,alt:"Product-bg"}),(0,r.jsx)("div",{className:"overlay",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)("h2",{children:e})})})})})]})}},5434:function(i,e,t){t.d(e,{Z:function(){return m}});var s=t(2677),o=t(7689),a=t(1087),u=t(9085),r=t(9434),c=t(9597),n=t(184),m=function(i){var e=i.title,t=i.productItem,m=(0,r.I0)(),d=(0,o.s0)(),l=function(){d("/shop/".concat(t.id))},p=function(i){m((0,c.Xq)({product:i,num:1})),u.Am.success("Product has been added to cart!")};return(0,n.jsxs)(s.Z,{md:3,sm:5,xs:10,className:"product mtop",children:["Big Discount"===e?(0,n.jsxs)("span",{className:"discount",children:[t.discount,"% Off"]}):null,(0,n.jsx)("img",{loading:"lazy",onClick:function(){return l()},src:t.imgUrl,alt:""}),(0,n.jsx)("div",{className:"product-like",children:(0,n.jsx)("ion-icon",{name:"heart-outline"})}),(0,n.jsxs)("div",{className:"product-details",children:[(0,n.jsx)("h3",{onClick:function(){return l()},children:t.productName}),(0,n.jsxs)("div",{className:"rate",children:[(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"})]}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsxs)("h4",{style:{fontFamily:"serif"},children:["Tk:",t.price]}),(0,n.jsx)(a.rU,{"aria-label":"Go to Cart Page",to:"/cart",className:"buy-btn",onClick:function(){return p(t)},children:"Buy Now"}),(0,n.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return p(t)},children:(0,n.jsx)("ion-icon",{name:"add"})})]})]})]})}},9135:function(i,e,t){var s=t(9743),o=t(2791),a=t(5434),u=t(184),r=function(i){var e=i.productItems;return(0,o.useEffect)((function(){}),[e]),0===e.length?(0,u.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,u.jsx)(s.Z,{className:"justify-content-center",children:e.map((function(i){return(0,u.jsx)(a.Z,{title:null,productItem:i},i.id)}))})};e.Z=(0,o.memo)(r)},76:function(i,e,t){var s=t(2791);e.Z=function(){(0,s.useEffect)((function(){window.scrollTo(0,0)}),[])}},1030:function(i,e,t){t.r(e),t.d(e,{default:function(){return x}});var s=t(9439),o=t(2791),a=t(8739),u=t(7022),r=t(9135),c=t(447),n=t(7689),m=t(9743),d=t(2677),l=t(9434),p=t(9085),g=t(9597),b=t(184),q=function(i){var e=i.selectedProduct,t=(0,l.I0)(),a=(0,o.useState)(1),r=(0,s.Z)(a,2),c=r[0],n=r[1];return(0,b.jsx)("section",{className:"product-page",children:(0,b.jsx)(u.Z,{children:(0,b.jsxs)(m.Z,{className:"justify-content-center",children:[(0,b.jsx)(d.Z,{md:6,children:(0,b.jsx)("img",{style:{height:450,width:650},loading:"lazy",src:null===e||void 0===e?void 0:e.imgUrl,alt:""})}),(0,b.jsxs)(d.Z,{md:6,children:[(0,b.jsx)("h2",{children:null===e||void 0===e?void 0:e.productName}),(0,b.jsxs)("div",{className:"rate",children:[(0,b.jsxs)("div",{className:"stars",children:[(0,b.jsx)("i",{className:"fa fa-star"}),(0,b.jsx)("i",{className:"fa fa-star"}),(0,b.jsx)("i",{className:"fa fa-star"}),(0,b.jsx)("i",{className:"fa fa-star"}),(0,b.jsx)("i",{className:"fa fa-star"})]}),(0,b.jsxs)("span",{children:[null===e||void 0===e?void 0:e.avgRating," ratings"]})]}),(0,b.jsxs)("div",{className:"info",children:[(0,b.jsxs)("span",{className:"price",children:["$",null===e||void 0===e?void 0:e.price]}),(0,b.jsxs)("span",{children:["category:",null===e||void 0===e?void 0:e.category]})]}),(0,b.jsx)("p",{children:null===e||void 0===e?void 0:e.shortDesc}),(0,b.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:c,onChange:function(i){n(i.target.value)}}),(0,b.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(i,e){t((0,g.Xq)({product:i,num:e})),p.Am.success("Product has been added to cart!")}(e,c)},children:"Add To Cart"})]})]})})})},v=function(i){var e=i.selectedProduct,t=(0,o.useState)("desc"),a=(0,s.Z)(t,2),r=a[0],c=a[1];return(0,b.jsx)("section",{className:"product-reviews",children:(0,b.jsxs)(u.Z,{children:[(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{style:{color:"desc"===r?"black":"#9c9b9b"},onClick:function(){return c("desc")},children:"Description"}),(0,b.jsxs)("li",{style:{color:"rev"===r?"black":"#9c9b9b"},onClick:function(){return c("rev")},children:["Reviews (",null===e||void 0===e?void 0:e.reviews.length,")"]})]}),"desc"===r?(0,b.jsx)("p",{children:null===e||void 0===e?void 0:e.description}):(0,b.jsx)("div",{className:"rates",children:null===e||void 0===e?void 0:e.reviews.map((function(i){return(0,b.jsxs)("div",{className:"rate-comment",children:[(0,b.jsx)("span",{children:"Jhon Doe"}),(0,b.jsxs)("span",{children:[i.rating," (rating)"]}),(0,b.jsx)("p",{children:i.text})]},i.rating)}))})]})})},f=t(76),x=function(){var i=(0,n.UO)().id,e=(0,o.useState)(c.RB.filter((function(e){return parseInt(e.id)===parseInt(i)}))[0]),t=(0,s.Z)(e,2),m=t[0],d=t[1],l=(0,o.useState)([]),p=(0,s.Z)(l,2),g=p[0],x=p[1];return(0,o.useEffect)((function(){window.scrollTo(0,0),d(c.RB.filter((function(e){return parseInt(e.id)===parseInt(i)}))[0]),x(c.RB.filter((function(i){return i.category===(null===m||void 0===m?void 0:m.category)&&i.id!==(null===m||void 0===m?void 0:m.id)})))}),[m,i]),(0,f.Z)(),(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)(a.Z,{title:null===m||void 0===m?void 0:m.productName}),(0,b.jsx)(q,{selectedProduct:m}),(0,b.jsx)(v,{selectedProduct:m}),(0,b.jsxs)("section",{className:"related-products",children:[(0,b.jsx)(u.Z,{children:(0,b.jsx)("h3",{children:"You might also like"})}),(0,b.jsx)(r.Z,{productItems:g})]})]})}},447:function(i,e,t){t.d(e,{cd:function(){return f},H_:function(){return h},RB:function(){return j},Bz:function(){return x}});var s=t.p+"static/media/ceowomen30.241151e6fcf2081fcac6.png",o=t.p+"static/media/ceowomen50.8f13716127ddfbf9c734.png",a=t.p+"static/media/starrynight30.d13702cb02f7120f666a.png",u=t.p+"static/media/starrynight50.7e8a6d3ba15ff8458597.jpeg",r=t.p+"static/media/muna30.268985a0cf21b1bb2c5a.jpeg",c=t.p+"static/media/muna50.cc82d644e32d556b9a0d.png",n=t.p+"static/media/ceoman30.9b4023dce8fcac2ad476.png",m=t.p+"static/media/ceoman50.9394a59128e853f7c587.png",d=t.p+"static/media/swagger30.e94f6a8cd548433e8eff.png",l=t.p+"static/media/swagger50.4be9e5e394430fa3f628.png",p=t.p+"static/media/topg30.ba1c1b168744d0932b29.png",g=t.p+"static/media/topg50.7e61a7dc07eb03654b67.png",b=t.p+"static/media/combomen.73aac08feab80fd2322d.png",q=t.p+"static/media/combowomen.abd514dcb0744afcda57.png",v=t(184),f=[{id:1,title:"We make scents, not sense",desc:"Every scent tells a story\u2014let yours be unforgettable with Shauqh Luxury.",cover:o}],x=[{icon:(0,v.jsx)("ion-icon",{name:"car"}),title:"Fast Delivery",subtitle:"Fast delivery countrywide",bg:"#fdefe6"},{icon:(0,v.jsx)("ion-icon",{name:"card"}),title:"Safe Payment",subtitle:"We accept cash on delivery.",bg:"#ceebe9"},{icon:(0,v.jsx)("ion-icon",{name:"shield-half-outline"}),title:"Authenticity",subtitle:"We ensure product authenticity as customer desires.",bg:"#e2f2b2"},{icon:(0,v.jsx)("ion-icon",{name:"headset"}),title:" Return Guarantee",subtitle:"You can return your product if it doesn't meet your requirement",bg:"#d6e5fb"}],h=[{id:"01",productName:"Starry Night(50ml) ",imgUrl:u,category:"women",price:1500,discount:50,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.5},{id:"02",productName:"CEO WOMAN(50ml)",imgUrl:o,category:"women",price:1500,discount:20,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"03",productName:"Ethereal Muna(50ml)",imgUrl:c,category:"women",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7}],j=[{id:"01",productName:"Ceo Woman(30ml) ",imgUrl:s,category:"women",price:1500,discount:50,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.5},{id:"02",productName:"Starry Swagger(30ml)",imgUrl:d,category:"men",price:1500,discount:20,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"03",productName:"Ethereal Muna(30ml)",imgUrl:r,category:"women",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"04",productName:"Ceo Man(30ml)",imgUrl:n,category:"men",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"05",productName:"Starry Night(30ml)",imgUrl:a,category:"women",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"06",productName:"Top-G(30ml)",imgUrl:p,category:"men",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"07",productName:"Ceo Woman(50ml) ",imgUrl:o,category:"women",price:1500,discount:50,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.5},{id:"08",productName:"Starry Swagger(50ml)",imgUrl:l,category:"men",price:1500,discount:20,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"09",productName:"Ethereal Muna(50ml)",imgUrl:c,category:"women",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"10",productName:"Ceo Man(50ml)",imgUrl:m,category:"men",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"11",productName:"Starry Night(50ml)",imgUrl:u,category:"women",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"12",productName:"Top-G(50ml)",imgUrl:g,category:"chair",price:1500,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"12",productName:"Combo Pack For Men (6ml x 3)",imgUrl:b,category:"combo",price:1099,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"12",productName:"Combo Pack For Women (6ml x 3)",imgUrl:q,category:"combo",price:1099,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7}]}}]);
//# sourceMappingURL=330.d6cca548.chunk.js.map