(this["webpackJsonpgo-out-with-me"]=this["webpackJsonpgo-out-with-me"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"b":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-events","c":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/token","a":"https://rvnbvpzand.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"}')},30:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(23),s=n.n(r),c=(n(30),n(24)),i=n(1),u=n.n(i),l=n(8),d=n(4),h=n(5),p=n(7),v=n(6),m=(n(33),n(0)),f=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).toggleShow=function(){var e=a.state,t=e.show,n=e.turn;a.setState({turn:!n}),a.setState({show:!t})},a.state={show:!1,turn:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state,a=n.show,o=n.turn;return Object(m.jsx)("div",{className:"event",children:Object(m.jsx)("button",{type:"button",className:"event__window",onClick:function(){return e.toggleShow()},children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:"event__summary",children:t.summary}),Object(m.jsx)("li",{className:"event__location",children:t.location}),Object(m.jsxs)("li",{className:"event__date",children:[Object(m.jsxs)("p",{children:["Date:"," ",t.start.dateTime.slice(0,10)]}),Object(m.jsxs)("p",{children:["Time:"," ",t.start.dateTime.slice(11,16)," ",t.start.timeZone," ",t.start.dateTime.slice(19,26)]})]}),!0===a&&Object(m.jsx)("p",{className:"event__details",children:t.description}),Object(m.jsx)("span",{className:"material-icons event__show-more-button ".concat(o?"":"turn"),onClick:function(){return e.toggleShow()},onKeyDown:function(){return e.toggleShow()},role:"button",tabIndex:0,children:"keyboard_double_arrow_down"})]})})})}}]),n}(a.Component),b=function(e){var t=e.events;return Object(m.jsx)("ul",{className:"event-list",children:t.map((function(e){return Object(m.jsx)("li",{className:"event-list__item",children:Object(m.jsx)(f,{event:e})},e.id)}))})},j=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=a.props.locations.filter((function(t){return t.toUpperCase().includes(e.toUpperCase())}));a.setState({query:e,suggestions:t,showSuggestions:!0})},a.handleSuggestionClick=function(e){(0,a.props.updateEvents)(e),a.setState({query:e,showSuggestions:!1})};var o=a.props.locations;return a.state={query:"",suggestions:o,showSuggestions:void 0},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,o=t.showSuggestions;return Object(m.jsxs)("div",{className:"city-search",children:[Object(m.jsx)("input",{type:"text",className:"city-search__input",placeholder:"Search for cities...",value:n,onChange:function(t){return e.handleInputChange(t.target.value)},onFocus:function(){return e.setState({showSuggestions:!0})},onBlur:function(){return setTimeout((function(){e.setState({showSuggestions:!1})}),10)}}),Object(m.jsxs)("ul",{className:"city-search__suggestions",style:o?{visibility:"visible",opacity:1}:{visibility:"hidden",opacity:0},children:[a.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)("button",{type:"button",className:"city-search__button",onClick:function(){return e.handleSuggestionClick(t)},onKeyDown:function(){return e.handleSuggestionClick(t)},children:t})},t)})),Object(m.jsx)("li",{children:Object(m.jsx)("button",{type:"button",className:"city-search__all-button",onClick:function(){return e.handleSuggestionClick("")},onKeyDown:function(){return e.handleSuggestionClick("")},children:Object(m.jsx)("b",{children:"See all cities"})})},"all")]})]})}}]),n}(a.Component),g=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleInputChange=function(t){(0,e.props.setEventCount)(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"number-of-events",children:Object(m.jsx)("label",{htmlFor:"number-of-events__input",children:Object(m.jsxs)("select",{id:"number-of-events__input",name:"number-of-events__input",className:"number-of-events__input",defaultValue:"32",onChange:function(t){return e.handleInputChange(t.target.value)},children:[Object(m.jsx)("option",{className:"number-of-events__option",value:"1",children:"1"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"2",children:"2"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"4",children:"4"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"8",children:"8"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"12",children:"12"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"16",children:"16"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"20",children:"20"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"24",children:"24"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"28",children:"28"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"32",children:"32"}),Object(m.jsx)("option",{className:"number-of-events__option",value:"0",children:"all"})]})})})}}]),n}(a.Component),w=n(25),x=n(13),O=n.n(x),y=n(9),_=n.n(y),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(10),N=function(){var e="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname);window.history.pushState&&window.location.pathname||(e="".concat(window.location.protocol,"//").concat(window.location.host)),window.history.pushState("","",e)},T=function(e){var t=e.map((function(e){return e.location}));return Object(w.a)(new Set(t))},C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("".concat(S.c,"/").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,o=a.access_token,localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,o,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=22;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=21;break}return e.next=17,O.a.get(S.a);case 17:return r=e.sent,s=r.data.authUrl,window.location.href=s,e.abrupt("return",window.location.href);case 21:return e.abrupt("return",C(o));case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return _.a.done(),e.abrupt("return",k);case 4:return e.next=6,E();case 6:return t=e.sent,N(),n="".concat(S.b,"/").concat(t),e.next=11,O.a.get(n);case 11:return(a=e.sent).data&&(o=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),_.a.done(),e.abrupt("return",a.data.events);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=(n(53),function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).fetchData=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,n=T(t),e.abrupt("return",{events:t,locations:n});case 5:case"end":return e.stop()}}),e)}))),e.setEventCount=function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.currentLocation,t.next=3,e.setState({count:n});case 3:e.updateEvents(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateEvents=function(t){var n=e.state,a=n.count,o=n.allEvents,r=""===t?o:o.filter((function(e){return e.location===t}));if("0"===a)e.setState({currentLocation:t,events:r});else if(0!==a){var s=r.slice(0,a);e.setState({currentLocation:t,events:s})}},e.state={allEvents:[],events:[],locations:[],currentLocation:"",count:32,isLoading:!0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchData().then((function(t){e.setState({allEvents:t.events,events:t.events,locations:t.locations,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations;return e.isLoading?Object(m.jsx)("div",{className:"loader-container",children:Object(m.jsx)("p",{children:"loading..."})}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"search-bar",children:[Object(m.jsx)(j,{locations:n,updateEvents:this.updateEvents}),Object(m.jsx)(g,{setEventCount:this.setEventCount})]}),Object(m.jsx)(b,{events:t})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};c.config("4d140ed88b9a4f5db0deabc742b2398a").install(),s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.8e7ae09b.chunk.js.map