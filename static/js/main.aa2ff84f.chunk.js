(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{270:function(e,n,t){e.exports=t(558)},275:function(e,n,t){},283:function(e,n){},285:function(e,n){},296:function(e,n){},298:function(e,n){},324:function(e,n){},326:function(e,n){},327:function(e,n){},332:function(e,n){},334:function(e,n){},340:function(e,n){},342:function(e,n){},361:function(e,n){},373:function(e,n){},376:function(e,n){},395:function(e,n){},397:function(e,n){},558:function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),s=t(54),i=t.n(s),o=(t(275),t(7)),u=t(251),l=t(3),d=t.n(l),m=t(10),p=t(8),f=t(13),b=t(91),g=c.a.createContext(),v=function(){var e=c.a.useContext(g);if(!e)throw new Error("You must call useRealmApp() inside of a <RealmAppProvider />");return e},k=function(e){var n=e.appId,t=e.children,a=c.a.useState(new b.a(n)),r=Object(f.a)(a,2),s=r[0],i=r[1];c.a.useEffect((function(){i(new b.a(n))}),[n]);var o=c.a.useState(s.currentUser),u=Object(f.a)(o,2),l=u[0],v=u[1];function k(){return(k=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.logIn(n);case 2:v(s.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=s.currentUser)||void 0===n?void 0:n.logOut();case 2:v(s.currentUser);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=Object(m.a)(Object(m.a)({},s),{},{currentUser:l,logIn:function(e){return k.apply(this,arguments)},logOut:function(){return h.apply(this,arguments)}});return c.a.createElement(g.Provider,{value:j},t)},h=t(9),j=t(46),E=t.n(j),O=t(65),x=t.n(O),w=t(95),y=t(254),T=t.n(y),C=["children"],P=h.a.div(a||(a=Object(o.a)(["\n  padding: 8px;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n"])));function S(e){var n=e.children,t=Object(w.a)(e,C);return c.a.createElement(T.a,t,c.a.createElement(P,null,n))}var I,M,U,_,D,A,F,$=t(24),z=t(156),R=t.n(z),L=t(255),q=t.n(L);function N(){return c.a.createElement(q.a,{size:"15px",margin:"3px",color:$.uiColors.gray.dark2})}function B(){var e=v(),n=c.a.useState("login"),t=Object(f.a)(n,2),a=t[0],r=t[1],s=c.a.useState(""),i=Object(f.a)(s,2),o=i[0],u=i[1],l=c.a.useState(""),g=Object(f.a)(l,2),k=g[0],h=g[1],j=c.a.useState({}),O=Object(f.a)(j,2),w=O[0],y=O[1];c.a.useEffect((function(){u("sampleemail@example.com"),h("password"),y({})}),[a]);var T=c.a.useState(!1),C=Object(f.a)(T,2),P=C[0],S=C[1],I=function(){var n=Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),y((function(e){return Object(m.a)(Object(m.a)({},e),{},{password:null})})),n.prev=2,n.next=5,e.logIn(b.b.emailPassword(o,k));case 5:n.next=11;break;case 7:n.prev=7,n.t0=n.catch(2),W(n.t0,y),S(!1);case 11:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=Object(p.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=R.a.isEmail(o),y((function(e){return Object(m.a)(Object(m.a)({},e),{},{password:null})})),!t){n.next=16;break}return n.prev=3,n.next=6,e.emailPasswordAuth.registerUser(o,k);case 6:return n.next=8,I();case 8:return n.abrupt("return",n.sent);case 11:n.prev=11,n.t0=n.catch(3),W(n.t0,y);case 14:n.next=17;break;case 16:y((function(e){return Object(m.a)(Object(m.a)({},e),{},{email:"Email is invalid."})}));case 17:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(){return n.apply(this,arguments)}}();return c.a.createElement(Z,null,P?c.a.createElement(N,null):c.a.createElement(Y,null,c.a.createElement(ne,null,c.a.createElement(ee,null,"login"===a?"Log In":"Register an Account")),c.a.createElement(ne,null,c.a.createElement(x.a,{type:"email",label:"Email",placeholder:"your.email@example.com",onChange:function(e){y((function(e){return Object(m.a)(Object(m.a)({},e),{},{email:null})})),u(e.target.value)},value:o,state:w.email?"error":R.a.isEmail(o)?"valid":"none",errorMessage:w.email})),c.a.createElement(ne,null,c.a.createElement(x.a,{type:"password",label:"Password",placeholder:"pa55w0rd",onChange:function(e){h(e.target.value)},value:k,state:w.password?"error":w.password?"valid":"none",errorMessage:w.password})),"login"===a?c.a.createElement(E.a,{variant:"primary",onClick:function(){return I()}},"Log In"):c.a.createElement(E.a,{variant:"primary",onClick:function(){return M()}},"Register"),c.a.createElement(H,null,c.a.createElement(K,null,"login"===a?"Don't have an account?":"Already have an account?"),c.a.createElement(X,{onClick:function(e){e.preventDefault(),r((function(e){return"login"===e?"register":"login"}))}},"login"===a?"Register one now.":"Log in instead."))))}function W(e,n){var t=function(e){var n,t=e.message.split(":"),a=t[t.length-1].trimStart();if(!a)return{status:"",message:""};var r=Object(u.a)(/(.+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]\(status ([0-9][0-9][0-9])/,{message:1,status:2}),c=a.match(r),s=null!==(n=null===c||void 0===c?void 0:c.groups)&&void 0!==n?n:{},i=s.status,o=s.message;return{status:i,message:o}}(e),a=t.status;switch(t.message||a){case"invalid username":n((function(e){return Object(m.a)(Object(m.a)({},e),{},{email:"Invalid email address."})}));break;case"invalid username/password":case"invalid password":case"401":n((function(e){return Object(m.a)(Object(m.a)({},e),{},{password:"Incorrect password."})}));break;case"name already in use":case"409":n((function(e){return Object(m.a)(Object(m.a)({},e),{},{email:"Email is already registered."})}));break;case"password must be between 6 and 128 characters":case"400":n((function(e){return Object(m.a)(Object(m.a)({},e),{},{password:"Password must be between 6 and 128 characters."})}))}}var G,J,Q,V,Y=Object(h.a)(S)(I||(I=Object(o.a)(["\n  width: 420px;\n"]))),H=h.a.div(M||(M=Object(o.a)(["\n  margin-top: 8px;\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n"]))),K=h.a.span(U||(U=Object(o.a)(["\n  line-height: 18px;\n"]))),X=h.a.button(_||(_=Object(o.a)(["\n  background: none;\n  border: none;\n  font-size: 12px;\n  font-weight: bold;\n  color: ",";\n  cursor: pointer;\n"])),$.uiColors.green.dark2),Z=h.a.div(D||(D=Object(o.a)(["\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n"])),$.uiColors.gray.light2),ee=h.a.h1(A||(A=Object(o.a)(["\n  margin: 0;\n  font-size: 32px;\n"]))),ne=h.a.div(F||(F=Object(o.a)(["\n  margin-bottom: 16px;\n"]))),te=t(33),ae=t(570),re=t(67),ce=t(93),se=t(45),ie=t(571);function oe(e){return{addTask:fe(e),updateTask:be(e),deleteTask:ge(e)}}var ue,le=Object(re.a)(G||(G=Object(o.a)(["\n  mutation AddTask($task: TaskInsertInput!) {\n    addedTask: insertOneTask(data: $task) {\n      _id\n      _partition\n      name\n      status\n    }\n  }\n"]))),de=Object(re.a)(J||(J=Object(o.a)(["\n mutation UpdateTask($taskId: ObjectId!, $updates: TaskUpdateInput!) {\n    updatedTask: updateOneTask(query: { _id: $taskId }, set: $updates) {\n      _id\n      _partition\n      name\n      status\n    }\n  }\n"]))),me=Object(re.a)(Q||(Q=Object(o.a)(["\nmutation DeleteTask($taskId: ObjectId!) {\n    deletedTask: deleteOneTask(query: { _id: taskId }) {\n      _id\n      _partition\n      name\n      status\n    }\n  }\n"]))),pe=Object(re.a)(V||(V=Object(o.a)(["\n  fragment TaskFields on Task {\n    _id\n    _partition\n    status\n    name\n  }\n"])));function fe(e){var n=Object(ie.a)(le,{update:function(e,n){var t=n.data.addedTask;e.modify({fields:{tasks:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(Object(ce.a)(n),[e.writeFragment({data:t,fragment:pe})])}}})}}),t=Object(f.a)(n,1)[0];return function(){var n=Object(p.a)(d.a.mark((function n(a){var r,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t({variables:{task:Object(m.a)({_id:new se.b,_partition:e.partition,status:"Open"},a)}});case 2:return r=n.sent,c=r.addedTask,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}function be(e){var n=Object(ie.a)(de),t=Object(f.a)(n,1)[0];return function(){var e=Object(p.a)(d.a.mark((function e(n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{taskId:n._id,updates:a}});case 2:return r=e.sent,c=r.updatedTask,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function ge(e){var n=Object(ie.a)(me),t=Object(f.a)(n,1)[0];return function(){var e=Object(p.a)(d.a.mark((function e(n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{taskID:n._id}});case 2:return a=e.sent,r=a.deletedTask,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}var ve=function(e){var n=function(e){var n,t=Object(ae.a)(Object(re.a)(ue||(ue=Object(o.a)(["\n      query GetAllTasksForProject($partition: String!) {\n        tasks(query: { _partition: $partition }) {\n          _id\n          name\n          status\n        }\n      }\n    "]))),{variables:{partition:e.partition}}),a=t.data,r=t.loading,c=t.error;if(c)throw new Error("Failed to fetch tasks: ".concat(c.message));return{tasks:null!==(n=null===a||void 0===a?void 0:a.tasks)&&void 0!==n?n:[],loading:r}}(e),t=n.tasks,a=n.loading,r=oe(e),c=r.addTask;return{loading:a,tasks:t,updateTask:r.updateTask,addTask:c}};var ke=t(259),he=t.n(ke);function je(e){var n=e.status;return c.a.createElement(he.a,{variant:xe(n)},we(n))}var Ee,Oe,xe=function(e){switch(e){case"Open":return"blue";case"InProgress":return"yellow";case"Complete":return"green";default:return"gray"}},we=function(e){if("InProgress"===e){var n=String.fromCharCode(160);return"In".concat(n,"Progress")}return e};function ye(e){var n=e.task;return c.a.createElement(Pe,null,c.a.createElement(Se,null,n.name),c.a.createElement(je,{status:n.status}))}var Te,Ce,Pe=h.a.div(Ee||(Ee=Object(o.a)(["\n  display: flex;\n  width: 100%;\n"]))),Se=h.a.span(Oe||(Oe=Object(o.a)(["\n  flex-grow: 1;\n"]))),Ie=t(118),Me=t.n(Ie),Ue=h.a.div((function(e){return Object(te.css)(Te||(Te=Object(o.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: center;\n    gap: 8px;\n    margin-top: 8px;\n  "])),"row"===e.direction?"row":"column")})),_e=t(260),De=t.n(_e);function Ae(e){var n=e.from,t=e.to;return c.a.createElement(ze,null,c.a.createElement(je,{status:n}),c.a.createElement(De.a,null),c.a.createElement(je,{status:t}))}var Fe,$e,ze=h.a.div(Ce||(Ce=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"])));var Re=Object(h.a)(E.a)(Fe||(Fe=Object(o.a)(["\n  height: 100%;\n"]))),Le=h.a.div($e||($e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 0;\n  gap: 8px;\n"])));function qe(e){var n=e.project,t=e.task,a=e.unselectTask,r=function(e){var n=oe(e).updateTask;return function(e){var t=e.task,a=e.fromStatus,r=e.toStatus,s=e.children;return c.a.createElement(Re,{onClick:function(){return n(t,{status:r})}},c.a.createElement(Le,null,s,c.a.createElement(Ae,{from:a,to:r})))}}(n);return c.a.createElement(Me.a,{open:Boolean(t),setOpen:a},t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ye,{task:t}),c.a.createElement(Ue,{direction:"row"},"Open"===t.status&&c.a.createElement(r,{task:t,fromStatus:"Open",toStatus:"InProgress"},"Start Progress"),"InProgress"===t.status&&c.a.createElement(c.a.Fragment,null,c.a.createElement(r,{task:t,fromStatus:"InProgress",toStatus:"Open"},"Stop Progress"),c.a.createElement(r,{task:t,fromStatus:"InProgress",toStatus:"Complete"},"Complete Task")),"Complete"===t.status&&c.a.createElement(r,{task:t,fromStatus:"Complete",toStatus:"InProgress"},"Resume Task"))))}var Ne,Be,We,Ge,Je,Qe,Ve,Ye,He,Ke,Xe=t(153),Ze=t.n(Xe),en=t(261),nn=t.n(en),tn=t(154),an=t.n(tn);function rn(e){var n=e.isEditingPermissions,t=e.setIsEditingPermissions,a=function(){var e=c.a.useState(null),n=Object(f.a)(e,2),t=n[0],a=n[1],r=c.a.useState(null),s=Object(f.a)(r,2),i=s[0],o=s[1],u=v().currentUser.functions,l=u.addTeamMember,m=u.removeTeamMember,b=u.getMyTeamMembers,g=function(){b().then(a)};return c.a.useEffect(g,[]),{teamMembers:t,errorMessage:i,addTeamMember:function(){var e=Object(p.a)(d.a.mark((function e(n,t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n,t);case 2:if(a=e.sent,!(r=a.error)){e.next=9;break}return o(r),e.abrupt("return",{error:r});case 9:g();case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),removeTeamMember:function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n);case 2:g();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}(),r=a.teamMembers,s=a.errorMessage,i=a.addTeamMember,o=a.removeTeamMember;return c.a.createElement(Me.a,{open:n,setOpen:t,size:"small"},c.a.createElement(vn,null,c.a.createElement(bn,null,"Team Members"),c.a.createElement(gn,null,"These users can add, read, and modify tasks in your project. Check the Read-Only Member option if you only want them to view your project and its tasks."),c.a.createElement(gn,null,"Add a new user by email:"),c.a.createElement(cn,{addTeamMember:i,errorMessage:s}),c.a.createElement(kn,null,(null===r||void 0===r?void 0:r.length)?r.map((function(e){return c.a.createElement(hn,{key:e._id},c.a.createElement(jn,null,c.a.createElement(En,null,e.name),c.a.createElement(an.a,{"aria-label":"remove-team-member-button",className:"remove-team-member-button",onClick:Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o(e.name);case 2:case"end":return n.stop()}}),n)})))},c.a.createElement(Ze.a,null))))})):c.a.createElement(gn,null,"No team members"))))}function cn(e){var n=e.addTeamMember,t=e.errorMessage,a=c.a.useState(""),r=Object(f.a)(a,2),s=r[0],i=r[1],o=c.a.useState(!1),u=Object(f.a)(o,2),l=u[0],m=u[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(pn,null,c.a.createElement(fn,null,c.a.createElement(x.a,{type:"email","aria-labelledby":"team member email address",placeholder:"some.email@example.com",state:t?"error":"none",errorMessage:null!==t&&void 0!==t?t:"Foo",onChange:function(e){i(e.target.value)},value:s}))),c.a.createElement(pn,null,c.a.createElement(fn,null,c.a.createElement(dn,{label:"Read-Only Member (Can View tasks but not Add tasks)",value:l,onChange:function(){m(!l)}}))),c.a.createElement(pn,null,c.a.createElement(mn,{disabled:!s,onClick:Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(s,l);case 2:(null===(t=e.sent)||void 0===t?void 0:t.error)||(i(""),m(!1));case 4:case"end":return e.stop()}}),e)}))),styles:{height:"36px"}},c.a.createElement(nn.a,null),"Add User")))}var sn,on,un,ln,dn=function(e){var n=e.label,t=e.value,a=e.onChange;return c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:t,onChange:a}),n)},mn=Object(h.a)(E.a)(Ne||(Ne=Object(o.a)(["\n  height: 36px;\n  display: flex;\n  justify-content: right;\n"]))),pn=h.a.div(Be||(Be=Object(o.a)(["\n  display: flex;\n  align-items: end;\n"]))),fn=h.a.div(We||(We=Object(o.a)(["\n  flex-grow: 1;\n  margin-bottom: 15px;\n"]))),bn=h.a.h2(Ge||(Ge=Object(o.a)(["\n  margin: 0;\n  font-size: 24px;\n"]))),gn=h.a.p(Je||(Je=Object(o.a)(["\n  margin: 8px 2px;\n"]))),vn=h.a.div(Qe||(Qe=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),kn=h.a.ul(Ve||(Ve=Object(o.a)(["\n  list-style: none;\n  padding: 8px 0;\n  margin: 0;\n"]))),hn=h.a.li((function(e){return Object(te.css)(Ye||(Ye=Object(o.a)(["\n    padding: 8px 12px;\n    border-radius: 8px;\n    :hover {\n      background: ",";\n    }\n  "])),$.uiColors.gray.light2)})),jn=h.a.div(He||(He=Object(o.a)(["\n  display: flex;\n  align-items: center;\n"]))),En=h.a.div(Ke||(Ke=Object(o.a)(["\n  flex-grow: 1;\n  padding: 8px 0;\n"])));function On(e){var n=e.currentProject,t=e.isEditingPermissions,a=e.setIsEditingPermissions;return c.a.createElement(xn,null,n&&c.a.createElement(wn,{currentProject:n}),c.a.createElement(rn,{isEditingPermissions:t,setIsEditingPermissions:a}))}var xn=h.a.div(sn||(sn=Object(o.a)(["\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  grid-area: main;\n  background: ",";\n"])),$.uiColors.gray.light2);function wn(e){var n,t=e.currentProject,a=ve(t),r=a.tasks,s=a.addTask,i=a.loading,o=c.a.useState(null),u=Object(f.a)(o,2),l=u[0],m=u[1],b=(n=l,r.find((function(e){return e._id===n}))),g=function(){var e=v();if(!e.currentUser)throw new Error("Cannot list projects if there is no logged in user.");return e.currentUser.customData.canWritePartitions}().includes(t.partition),k=function(e){var n=e.addTask,t=c.a.useState(null),a=Object(f.a)(t,2),r=a[0],s=a[1];return{draftTask:r,createDraftTask:function(){s({name:""})},deleteDraftTask:function(){s(null)},setDraftTaskName:function(e){s({name:e})},submitDraftTask:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(r);case 2:s(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}({addTask:s}),h=k.draftTask,j=k.createDraftTask,O=k.deleteDraftTask,w=k.setDraftTaskName,y=k.submitDraftTask;return i?c.a.createElement(N,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(Un,null,0===r.length?c.a.createElement(Dn,null,c.a.createElement("h1",null,"No Tasks"),c.a.createElement("p",null,"Click the button below to add a task to this project")):r.map((function(e){return c.a.createElement(_n,{key:e._id},c.a.createElement(S,{style:g?{cursor:"pointer"}:{cursor:"default"},onClick:function(){return g&&m(e._id)}},c.a.createElement(ye,{task:e})))})),h?c.a.createElement(_n,null,c.a.createElement(S,null,c.a.createElement(x.a,{type:"text","aria-labelledby":"task description",placeholder:"Do the dishes",onChange:function(e){w(e.target.value)},value:h.name}),c.a.createElement(Ue,null,c.a.createElement(E.a,{variant:"primary",disabled:!h.name,onClick:function(){y()}},"Add"),c.a.createElement(E.a,{variant:"danger",onClick:function(){O()}},"Cancel")))):c.a.createElement(_n,null,g&&c.a.createElement(S,null,c.a.createElement(E.a,{onClick:function(){return j()}},"Add Task")))),c.a.createElement(qe,{project:t,task:b,unselectTask:m}))}var yn,Tn,Cn,Pn,Sn,In,Mn,Un=h.a.ul(on||(on=Object(o.a)(["\n  list-style-type: none;\n  padding-left: 0;\n  width: 400px;\n"]))),_n=h.a.li(un||(un=Object(o.a)(["\n  :not(:first-of-type) {\n    margin-top: 8px;\n  }\n"]))),Dn=h.a.div(ln||(ln=Object(o.a)(["\n  line-height: 24px;\n  letter-spacing: 0px;\n  text-align: center;\n  font-size: 16px;\n"])));function An(e){var n=e.currentProject,t=e.setCurrentProject,a=e.setIsEditingPermissions,r=function(){var e=v();if(!e.currentUser)throw new Error("Cannot list projects if there is no logged in user.");return e.currentUser.customData.memberOf}(),s=v();return c.a.createElement(Fn,null,c.a.createElement(S,null,c.a.createElement($n,null,"Projects"),c.a.createElement(zn,null,r.map((function(e){return c.a.createElement(Rn,{key:e.partition,onClick:function(){return t(e)},isSelected:e.partition===(null===n||void 0===n?void 0:n.partition)},e.name)}))),c.a.createElement(Ln,{user:s.currentUser,handleLogout:function(){s.logOut()},handleEditPermissions:function(){a(!0)}})))}var Fn=h.a.div(yn||(yn=Object(o.a)(["\n  display: flex;\n  background: ",";\n  flex-direction: column;\n  padding: 40px;\n"])),$.uiColors.gray.light2),$n=h.a.h2(Tn||(Tn=Object(o.a)(["\n  margin: 0;\n  padding: 8px;\n"]))),zn=h.a.ul(Cn||(Cn=Object(o.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),Rn=h.a.li((function(e){return Object(te.css)(Pn||(Pn=Object(o.a)(["\n    padding: 8px 12px;\n    border-radius: 8px;\n    background: ",";\n    :hover {\n      background: ",";\n    }\n  "])),e.isSelected&&$.uiColors.green.light2,!e.isSelected&&$.uiColors.gray.light1)}));function Ln(e){var n=e.user,t=e.handleLogout,a=e.handleEditPermissions;return c.a.createElement(Wn,null,c.a.createElement(Gn,null,n.profile.email),c.a.createElement(Jn,{onClick:a},"Manage My Project"),c.a.createElement(Jn,{onClick:t},"Log Out"))}var qn,Nn,Bn,Wn=h.a.div(Sn||(Sn=Object(o.a)(["\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n"]))),Gn=h.a.div(In||(In=Object(o.a)(["\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 4px;\n"]))),Jn=h.a.button(Mn||(Mn=Object(o.a)(["\n  background: none;\n  border: none;\n  padding: 4px;\n  color: #069;\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n"])),$.uiColors.green.dark2);function Qn(){var e=v(),n=c.a.useState(e.currentUser.customData.memberOf[0]),t=Object(f.a)(n,2),a=t[0],r=t[1],s=c.a.useState(!1),i=Object(f.a)(s,2),o=i[0],u=i[1];return c.a.createElement(Vn,null,c.a.createElement(An,{css:Yn,currentProject:a,setCurrentProject:r,setIsEditingPermissions:u}),c.a.createElement(On,{css:Hn,currentProject:a,isEditingPermissions:o,setIsEditingPermissions:u}))}var Vn=h.a.div(qn||(qn=Object(o.a)(["\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vh;\n  display: grid;\n  grid-template-columns: "," calc(100vw - ",');\n  grid-template-rows: 1fr;\n  grid-template-areas: "sidebar main";\n'])),"420px","420px"),Yn=Object(te.css)(Nn||(Nn=Object(o.a)(["\n  grid-area: sidebar;\n"]))),Hn=Object(te.css)(Bn||(Bn=Object(o.a)(["\n  grid-area: sidebar;\n"]))),Kn=t(568),Xn=t(569),Zn=t(567),et=t(566),nt=function(e){var n=new Kn.a({uri:"https://realm.mongodb.com/api/client/v2.0/app/".concat(e.id,"/graphql"),fetch:function(e){function n(n,t){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(){var n=Object(p.a)(d.a.mark((function n(t,a){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.currentUser){n.next=2;break}throw new Error("Must be logged in to use the GraphQL API");case 2:return n.next=4,e.currentUser.refreshCustomData();case 4:return a.headers.Authorization="Bearer ".concat(e.currentUser.accessToken),n.abrupt("return",fetch(t,a));case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}),t=new Xn.a;return new Zn.a({link:n,cache:t})};function tt(e){var n=e.children,t=v(),a=c.a.useState(nt(t)),r=Object(f.a)(a,2),s=r[0],i=r[1];return c.a.useEffect((function(){i(nt(t))}),[t]),c.a.createElement(et.a,{client:s},n)}var at=function(e){var n=e.children;return v().currentUser?n:c.a.createElement(B,null)};function rt(){return c.a.createElement(k,{appId:"tasktracker-fuwvi"},c.a.createElement(at,null,c.a.createElement(tt,null,c.a.createElement(Qn,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[270,1,2]]]);
//# sourceMappingURL=main.aa2ff84f.chunk.js.map