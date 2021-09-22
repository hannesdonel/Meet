(this["webpackJsonpgo-out-with-me"]=this["webpackJsonpgo-out-with-me"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"b":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-events","c":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/token","a":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"}')},28:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(22),s=n.n(r),c=(n(28),n(4)),i=n(5),u=n(7),l=n(6),h=(n(29),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).toggleShow=function(){var e=o.state.show;return o.setState({show:!e})},o.state={show:!1},o}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.show;return Object(h.jsx)("div",{className:"event",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"event__summary",children:t.summary}),Object(h.jsx)("li",{className:"event__location",children:t.location}),Object(h.jsxs)("li",{className:"event__date",children:["Start:",t.start.dateTime," ","- Time Zone:",t.start.timeZone]}),!0===n&&Object(h.jsx)("p",{className:"event__details",children:t.description}),!1===n&&Object(h.jsx)("button",{type:"button",className:"event__show-more-button",onClick:function(){return e.toggleShow()},children:"Show details"}),!0===n&&Object(h.jsx)("button",{type:"button",className:"event__show-less-button",onClick:function(){return e.toggleShow()},children:"Hide details"})]})})}}]),n}(o.Component),p=function(e){var t=e.events;return Object(h.jsx)("ul",{className:"event-list",children:t.map((function(e){return Object(h.jsx)("li",{className:"event-list__item",children:Object(h.jsx)(d,{event:e})},e.id)}))})},m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;Object(c.a)(this,n),(o=t.call(this,e)).handleInputChange=function(e){var t=o.props.locations.filter((function(t){return t.toUpperCase().includes(e.toUpperCase())}));o.setState({query:e,suggestions:t,showSuggestions:!0})},o.handleSuggestionClick=function(e){(0,o.props.updateEvents)(e),o.setState({query:e,showSuggestions:!1})};var a=o.props.locations;return o.state={query:"",suggestions:a,showSuggestions:void 0},o}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,o=t.suggestions,a=t.showSuggestions;return Object(h.jsxs)("div",{className:"city-search",children:[Object(h.jsx)("input",{type:"text",className:"city-search__input",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})},onBlur:function(){return setTimeout((function(){e.setState({showSuggestions:!1})}),10)}}),Object(h.jsxs)("ul",{className:"city-search__suggestions",style:a?{}:{display:"none"},children:[o.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",className:"city-search__button",onClick:function(){return e.handleSuggestionClick(t)},onKeyDown:function(){return e.handleSuggestionClick(t)},children:t})},t)})),Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",className:"city-search__all-button",onClick:function(){return e.handleSuggestionClick("")},onKeyDown:function(){return e.handleSuggestionClick("")},children:Object(h.jsx)("b",{children:"See all cities"})})},"all")]})]})}}]),n}(o.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleInputChange=function(t){(0,e.props.setEventCount)(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("select",{id:"number-of-events__input",name:"number-of-events__input",className:"number-of-events__input",defaultValue:"32",onChange:function(t){return e.handleInputChange(t.target.value)},children:[Object(h.jsx)("option",{className:"number-of-events__option",value:"1",children:"1"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"2",children:"2"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"4",children:"4"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"8",children:"8"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"12",children:"12"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"16",children:"16"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"20",children:"20"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"24",children:"24"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"28",children:"28"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"32",children:"32"}),Object(h.jsx)("option",{className:"number-of-events__option",value:"0",children:"all"})]})}}]),n}(o.Component),f=n(3),b=n.n(f),g=n(8),j=n(23),w=n(13),x=n.n(w),y=n(9),O=n.n(y),_=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(10),S=function(){var e="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname);window.history.pushState&&window.location.pathname||(e="".concat(window.location.protocol,"//").concat(window.location.host)),window.history.pushState("","",e)},N=function(e){var t=e.map((function(e){return e.location}));return Object(j.a)(new Set(t))},C=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,o,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("".concat(k.c,"/").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,a=o.access_token,localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(g.a)(b.a.mark((function e(){var t,n,o,a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=22;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(a=e.sent){e.next=21;break}return e.next=17,x.a.get(k.a);case 17:return r=e.sent,s=r.data.authUrl,window.location.href=s,e.abrupt("return",window.location.href);case 21:return e.abrupt("return",C(a));case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(g.a)(b.a.mark((function e(){var t,n,o,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return O.a.done(),e.abrupt("return",_);case 4:return e.next=6,Z();case 6:return t=e.sent,S(),n="".concat(k.b,"/").concat(t),e.next=11,x.a.get(n);case 11:return(o=e.sent).data&&(a=N(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(a))),O.a.done(),e.abrupt("return",o.data.events);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(n(51),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).setEventCount=function(t){var n=e.state.currentLocation;e.setState({count:t}),e.updateEvents(n)},e.updateEvents=function(t){E().then((function(n){var o=e.state.count,a=""===t?n:n.filter((function(e){return e.location===t}));if("0"===o)e.setState({currentLocation:t,events:a});else if(0!==o){var r=a.slice(0,o);e.setState({currentLocation:t,events:r})}}))},e.state={events:[],locations:[],currentLocation:"",count:32},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t=this.state.count;E().then((function(n){e.mounted&&(n.slice(0,t),e.setState({events:n,locations:N(n)}))}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{locations:n,updateEvents:this.updateEvents}),Object(h.jsx)(v,{setEventCount:this.setEventCount}),Object(h.jsx)(p,{events:t})]})}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.a656b7f8.chunk.js.map