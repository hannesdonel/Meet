(this["webpackJsonpgo-out-with-me"]=this["webpackJsonpgo-out-with-me"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"b":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-events","c":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/token","a":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"}')},28:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(22),c=n.n(r),s=(n(28),n(4)),i=n(5),u=n(7),l=n(6),d=(n(29),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).toggleShow=function(){return!1===e.state.show?e.setState({show:!0}):e.setState({show:!1})},e.state={show:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.show;return Object(d.jsx)("div",{className:"event",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"event__summary",children:t.summary}),Object(d.jsx)("li",{className:"event__location",children:t.location}),Object(d.jsxs)("li",{className:"event__date",children:["Start:",t.start.dateTime," ","- Time Zone:",t.start.timeZone]}),!0===n&&Object(d.jsx)("p",{className:"event__details",children:t.description}),!1===n&&Object(d.jsx)("button",{type:"button",className:"event__show-more-button",onClick:function(){return e.toggleShow()},children:"Show details"}),!0===n&&Object(d.jsx)("button",{type:"button",className:"event__show-less-button",onClick:function(){return e.toggleShow()},children:"Hide details"})]})})}}]),n}(a.Component),p=function(e){var t=e.events;return Object(d.jsx)("ul",{className:"event-list",children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})},m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));e.setState({query:t,suggestions:n,showSuggestions:!0})},e.handleSuggestionClick=function(t){(0,e.props.updateEvents)(t),e.setState({query:t,showSuggestions:!1})},e.state={query:"",suggestions:[],showSuggestions:void 0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,o=t.showSuggestions;return Object(d.jsxs)("div",{className:"city-search",children:[Object(d.jsx)("input",{type:"text",className:"city-search__input",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"city-search__suggestions",style:o?{}:{display:"none"},children:[a.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:"city-search__button",onClick:function(){return e.handleSuggestionClick(t)},onKeyDown:function(){return e.handleSuggestionClick(t)},children:t})},t)})),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:"city-search__all-button",onClick:function(){return e.handleSuggestionClick("")},onKeyDown:function(){return e.handleSuggestionClick("")},children:Object(d.jsx)("b",{children:"See all cities"})})},"all")]})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleInputChange=function(t){e.setState({numberOfEvents:t})},e.state={numberOfEvents:32},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(d.jsxs)("select",{id:"number-of-events__input",name:"number-of-events__input",className:"number-of-events__input",defaultValue:"32",onChange:function(t){return e.handleInputChange(t.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"4",children:"4"}),Object(d.jsx)("option",{value:"8",children:"8"}),Object(d.jsx)("option",{value:"12",children:"12"}),Object(d.jsx)("option",{value:"16",children:"16"}),Object(d.jsx)("option",{value:"20",children:"20"}),Object(d.jsx)("option",{value:"24",children:"24"}),Object(d.jsx)("option",{value:"28",children:"28"}),Object(d.jsx)("option",{value:"32",children:t}),Object(d.jsx)("option",{value:"all",children:"all"})]})}}]),n}(a.Component),f=n(3),b=n.n(f),j=n(8),g=n(23),w=n(13),O=n.n(w),x=n(9),y=n.n(x),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(10),_=function(){var e="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname);window.history.pushState&&window.location.pathname||(e="".concat(window.location.protocol,"//").concat(window.location.host)),window.history.pushState("","",e)},T=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},C=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("".concat(S.c,"/").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,o=a.access_token,localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,o,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=22;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=21;break}return e.next=17,O.a.get(S.a);case 17:return r=e.sent,c=r.data.authUrl,window.location.href=c,e.abrupt("return",window.location.href);case 21:return e.abrupt("return",C(o));case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return y.a.done(),e.abrupt("return",k);case 4:return e.next=6,N();case 6:return t=e.sent,_(),n="".concat(S.b,"/").concat(t),e.next=11,O.a.get(n);case 11:return(a=e.sent).data&&(o=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),y.a.done(),e.abrupt("return",a.data.events);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(n(51),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).updateEvents=function(t){E().then((function(n){var a=""===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e.state={events:[],locations:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,E().then((function(t){e.mounted&&e.setState({events:t,locations:T(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{locations:n,updateEvents:this.updateEvents}),Object(d.jsx)(v,{}),Object(d.jsx)(p,{events:t})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[52,1,2]]]);
//# sourceMappingURL=main.9a9216c5.chunk.js.map