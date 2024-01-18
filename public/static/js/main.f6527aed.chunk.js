(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,s){},135:function(e,t,s){},136:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),n=s(49),c=s.n(n);class i{getData(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const n="/api"+e,c={method:t,headers:{"Content-Type":"application/json",charset:"utf-8"}};if(null!==s&&(c.body=JSON.stringify(s)),r){const e=btoa("".concat(a.username,":").concat(a.password));c.headers.Authorization="Basic ".concat(e)}return fetch(n,c)}async getAllCourse(){const e=await this.getData("/courses","GET",null);if(200===e.status)return e.json().then((e=>e));if(400===e.status)return e.json().then((e=>e.errors));throw new Error}async createCourse(e,t,s){const r=await this.getData("/courses","POST",e,!0,{username:t,password:s});if(201===r.status)return[];if(400===r.status)return r.json().then((e=>e.error));throw new Error}async getCourse(e){const t=await this.getData("/courses/".concat(e),"GET",null);if(200===t.status)return t.json().then((e=>e));throw new Error}async updateCourse(e,t,s,r){const a=await this.getData("/courses/".concat(e),"PUT",t,!0,{username:s,password:r});if(204===a.status)return null;if(400===a.status)return a.json().then((e=>e.error));throw new Error}async deleteCourse(e,t,s){const r=await this.getData("/courses/".concat(e),"DELETE",null,!0,{username:t,password:s});if(204===r.status)return null;if(400===r.status)return r.json().then((e=>e.message));throw new Error}async createUser(e){const t=await this.getData("/users","POST",e);if(201===t.status)return[];if(400===t.status)return t.json().then((e=>e.error));throw new Error}async getUser(e,t){const s=await this.getData("/users","GET",null,!0,{username:e,password:t});if(200===s.status)return s.json().then((e=>e));if(401===s.status)return null;throw new Error}}var o=s(23),l=s.n(o),h=s(0);const d=a.a.createContext();class u extends r.Component{constructor(){super(),this.getCourses=async()=>(await this.data.getAllCourse()).course,this.getCourse=async e=>(await this.data.getCourse(e)).course[0],this.updateCourse=async(e,t)=>{const{authenticatedUser:s}=this.state;return await this.data.updateCourse(e,t,s.user.emailAddress,s.password)},this.signIn=async(e,t)=>{const s=await this.data.getUser(e,t);return null!==s&&(s.password=t,this.setState((()=>({authenticatedUser:s}))),l.a.set("user",JSON.stringify(s),{expires:1})),s},this.signOut=()=>{this.setState({authenticatedUser:null}),l.a.remove("user")},this.data=new i,this.state={authenticatedUser:l.a.getJSON("user")||null,currentPassword:""}}render(){const{authenticatedUser:e}=this.state,t={authenticatedUser:e,data:this.data,actions:{updateCourse:this.updateCourse,getCourses:this.getCourses,getCourse:this.getCourse,signIn:this.signIn,signOut:this.signOut}};return Object(h.jsx)(d.Provider,{value:t,children:this.props.children})}}const j=d.Consumer;function m(e){return function(t){return Object(h.jsx)(d.Consumer,{children:s=>Object(h.jsx)(e,{...t,context:s})})}}var p=s(3),b=s(2);var x=e=>{const{context:t}=e,s=t.authenticatedUser;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"wrap header--flex",children:[Object(h.jsx)("h1",{className:"header--logo",children:Object(h.jsx)(p.b,{to:"/",children:"Courses"})}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"header--signedout",children:s?Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("li",{children:"Hello, ".concat(s.user.firstName)}),Object(h.jsx)("li",{children:Object(h.jsx)(p.b,{to:"/signout",children:"Sign Out"})})]}):Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("li",{children:Object(h.jsx)(p.b,{to:"/signup",children:"Sign Up"})}),Object(h.jsx)("li",{children:Object(h.jsx)(p.b,{to:"/signin",children:"Sign In"})})]})})})]})})};class O extends a.a.Component{constructor(){super(),this.getAllCourses=async()=>{const{context:e}=this.props,t=await e.actions.getCourses().catch((e=>{console.error(e),this.props.history.push("/error")}));null!==t&&this.setState((()=>({courses:t})))},this.state={courses:[]}}componentDidMount(){this.getAllCourses()}render(){const{courses:e}=this.state,t=e.map((e=>Object(h.jsx)(a.a.Fragment,{children:Object(h.jsxs)(p.b,{className:"course--module course--link",to:"/courses/".concat(e.id),children:[Object(h.jsx)("h2",{className:"course--label",children:"Course"}),Object(h.jsx)("h3",{className:"course--title",children:e.title})]})},e.id)));return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap main--grid",children:[t,Object(h.jsx)(p.b,{className:"course--module course--add--module",to:"/courses/create",children:Object(h.jsxs)("span",{className:"course--add--title",children:[Object(h.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add",children:Object(h.jsx)("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})}),"New Course"]})})]})})}}var g=s(34),N=s.n(g);class C extends a.a.Component{constructor(){super(),this.getCourse=async()=>{const{context:e}=this.props,{id:t}=this.props.match.params,s=await e.actions.getCourse(t);if(s){const t=await s.associatedUser;this.setState((()=>({data:s,user:t,paragraphs:s.description,materials:null!==s.materialsNeeded?s.materialsNeeded:null,currentUser:e.authenticatedUser,errors:{}})))}else this.props.history.push("/notfound")},this.delete=()=>{const{currentUser:e}=this.state,{id:t}=this.props.match.params,{context:s}=this.props;console.log(e.user.emailAddress),s.data.deleteCourse(t,e.user.emailAddress,e.password).then((e=>{null!==e?this.props.history.push("/forbidden"):this.props.history.push("/")})).catch((e=>{console.error(e),this.props.history.push("/error")}))},this.state={data:{},user:{},currentUser:{}}}componentDidMount(){this.getCourse()}render(){const{data:e,user:t}=this.state,{context:s}=this.props,r=s.authenticatedUser;return Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"actions--bar",children:null!==r&&r.user.emailAddress===t.emailAddress?Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)(p.b,{className:"button",to:"/courses/".concat(e.id,"/update"),children:"Update Course"}),Object(h.jsx)("button",{className:"button",onClick:this.delete,children:"Delete Course"}),Object(h.jsx)(p.b,{className:"button button-secondary",to:"/courses",children:"Return to List"})]}):Object(h.jsx)("div",{className:"wrap",children:Object(h.jsx)(p.b,{className:"button button-secondary",to:"/courses",children:"Return to List"})})}),Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Course Detail"}),Object(h.jsx)("form",{children:Object(h.jsxs)("div",{className:"main--flex",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"course--detail--title",children:"Course"}),Object(h.jsx)("h4",{className:"course--name",children:e.title}),Object(h.jsx)("p",{children:"By ".concat(t.firstName," ").concat(t.lastName)}),Object(h.jsx)(N.a,{source:e.description})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"course--detail--title",children:"Estimated Time"}),Object(h.jsx)("p",{children:null!==e.estimatedTime?e.estimatedTime:null}),Object(h.jsx)("h3",{className:"course--detail--title",children:"Materials Needed"}),Object(h.jsx)("ul",{className:"course--detail--list",children:Object(h.jsx)(N.a,{source:e.materialsNeeded})})]})]})})]})]})}}class w extends a.a.Component{constructor(){super(),this.getCourse=async()=>{const{context:e}=this.props,{id:t}=this.props.match.params,s=await e.actions.getCourse(t);if(void 0===s)this.props.history.push("/notfound");else{const t=await s.associatedUser,r=e.authenticatedUser;t.id===r.user.id?this.setState((()=>({courseTitle:s.title,courseAuthor:"".concat(t.firstName," ").concat(t.lastName),courseDescription:s.description,estimatedTime:s.estimatedTime,materialsNeeded:s.materialsNeeded,user:t}))):this.props.history.push("/forbidden")}},this.change=e=>{const t=e.target.name,s=e.target.value;this.setState((()=>({[t]:s})))},this.submit=e=>{e.preventDefault();const{courseTitle:t,courseDescription:s,estimatedTime:r,materialsNeeded:a,user:n}=this.state,{id:c}=this.props.match.params,{context:i}=this.props,o={id:c,title:t,description:s,estimatedTime:r,materialsNeeded:a,userId:n.id};i.actions.updateCourse(c,o).then((e=>{null!==e?this.setState({errors:e}):this.props.history.push("/courses/".concat(c))})).catch((e=>{console.error(e),this.props.history.push("/error")}))},this.cancel=e=>{e.preventDefault();const{id:t}=this.props.match.params,{from:s}=this.props.location.state||{from:{pathname:"/courses/".concat(t)}};this.props.history.push(s)},this.state={courseTitle:"",courseAuthor:"",courseDescription:"",estimatedTime:"",materialsNeeded:"",user:{},errors:[]}}componentDidMount(){this.getCourse()}render(){const{courseTitle:e,courseAuthor:t,courseDescription:s,estimatedTime:r,materialsNeeded:a}=this.state;return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Update Course"}),this.state.errors.length>0?Object(h.jsx)(f,{errors:this.state.errors}):null,Object(h.jsxs)("form",{onSubmit:this.submit,children:[Object(h.jsxs)("div",{className:"main--flex",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"courseTitle",children:"Course Title"}),Object(h.jsx)("input",{onChange:this.change,id:"courseTitle",name:"courseTitle",type:"text",value:e}),Object(h.jsx)("label",{htmlFor:"courseAuthor",children:"Course Author"}),Object(h.jsx)("input",{disabled:"disabled",id:"courseAuthor",name:"courseAuthor",type:"text",value:t}),Object(h.jsx)("label",{htmlFor:"courseDescription",children:"Course Description"}),Object(h.jsx)("textarea",{onChange:this.change,id:"courseDescription",name:"courseDescription",value:s})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(h.jsx)("input",{onChange:this.change,id:"estimatedTime",name:"estimatedTime",type:"text",value:r}),Object(h.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(h.jsx)("textarea",{onChange:this.change,id:"materialsNeeded",name:"materialsNeeded",type:"text",value:a})]})]}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Update Course"}),Object(h.jsx)("button",{className:"button button-secondary",onClick:this.cancel,children:"Cancel"})]})]})})}}function f(e){let{errors:t}=e,s=null;return t.length&&(s=Object(h.jsxs)("div",{className:"validation--errors",children:[Object(h.jsx)("h3",{children:"Validation Error"}),Object(h.jsx)("ul",{children:t.map(((e,t)=>Object(h.jsx)("li",{children:e},t)))})]})),s}class v extends a.a.Component{constructor(){super(),this.getUser=()=>{const{context:e}=this.props,t=e.authenticatedUser;this.setState((()=>({user:t,userName:"".concat(t.user.firstName," ").concat(t.user.lastName)})))},this.change=e=>{const t=e.target.name,s=e.target.value;this.setState((()=>({[t]:s})))},this.submit=e=>{e.preventDefault();const{context:t}=this.props,{courseTitle:s,courseDescription:r,estimatedTime:a,materialsNeeded:n,user:c}=this.state,i={title:s,description:r,estimatedTime:a,materialsNeeded:n,userId:c.user.id};t.data.createCourse(i,c.user.emailAddress,c.password).then((e=>{e.length>0?this.setState({errors:e}):this.props.history.push("/courses")})).catch((e=>{console.error(e),this.props.history.push("/error")}))},this.cancel=e=>{e.preventDefault(),this.props.history.push("/")},this.state={courseTitle:"",courseDescription:"",estimatedTime:"",materialsNeeded:"",errors:[],user:{},userName:""}}componentDidMount(){this.getUser()}render(){const{userName:e}=this.state;return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Create Course"}),this.state.errors.length>0?Object(h.jsxs)("div",{className:"validation--errors",children:[Object(h.jsx)("h3",{children:"Validation Error"}),Object(h.jsx)("ul",{children:this.state.errors.map(((e,t)=>Object(h.jsx)("li",{children:e},t)))})]}):null,Object(h.jsxs)("form",{onSubmit:this.submit,children:[Object(h.jsxs)("div",{className:"main--flex",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"courseTitle",children:"Course Title"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"courseTitle",name:"courseTitle"}),Object(h.jsx)("label",{htmlFor:"courseAuthor",children:"Course Author"}),Object(h.jsx)("input",{disabled:"disabled",type:"text",id:"courseAuthor",name:"courseAuthor",value:e}),Object(h.jsx)("label",{htmlFor:"courseDescription",children:"Course Description"}),Object(h.jsx)("textarea",{onChange:this.change,type:"text",id:"courseDescription",name:"courseDescription"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"estimatedTime",name:"estimatedTime"}),Object(h.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(h.jsx)("textarea",{onChange:this.change,type:"text",id:"materialsNeeded",name:"materialsNeeded"})]})]}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Create Course"}),Object(h.jsx)("button",{className:"button button-secondary",onClick:this.cancel,children:"Cancel"})]})]})})}}class y extends a.a.Component{constructor(){super(),this.change=e=>{const t=e.target.name,s=e.target.value;this.setState((()=>({[t]:s})))},this.submit=e=>{e.preventDefault();const{context:t}=this.props,{firstName:s,lastName:r,email:a,password:n,confirmPassword:c}=this.state;if(n.normalize()===c.normalize()){const e={firstName:s,lastName:r,emailAddress:a,password:n};console.log(e),t.data.createUser(e).then((e=>{e.length?(console.log(e),this.setState({errors:e})):(t.actions.signIn(a,n),this.props.history.push("/"))})).catch((e=>{console.error(e),this.props.history.push("/error")}))}else alert("Password and Confirmed Password does not match")},this.cancel=e=>{e.preventDefault(),this.props.history.push("/")},this.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:"",errors:[]}}render(){return Object(h.jsxs)("div",{className:"form--centered",children:[Object(h.jsx)("h2",{children:"Sign Up"}),this.state.errors.length?Object(h.jsx)(T,{errors:this.state.errors}):null,Object(h.jsxs)("form",{onSubmit:this.submit,children:[Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"firstName",name:"firstName"}),Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"lastName",name:"lastName"}),Object(h.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"email",name:"email"}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{onChange:this.change,type:"password",id:"password",name:"password"}),Object(h.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(h.jsx)("input",{onChange:this.change,type:"password",id:"confirmPassword",name:"confirmPassword"}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Sign Up"}),Object(h.jsx)("button",{className:"button button-secondary",onClick:this.cancel,children:"Cancel"})]}),Object(h.jsxs)("p",{children:["Already have a user account? Click here to ",Object(h.jsx)(p.b,{to:"/signin",children:"sign in!"})]})]})}}function T(e){let{errors:t}=e,s=null;return t.length&&(s=Object(h.jsxs)("div",{className:"validation--errors",children:[Object(h.jsx)("h3",{children:"Validation Error"}),Object(h.jsx)("ul",{children:t.map(((e,t)=>Object(h.jsx)("li",{children:e},t)))})]})),s}class D extends a.a.Component{constructor(){super(),this.change=e=>{const t=e.target.name,s=e.target.value;this.setState((()=>({[t]:s})))},this.submit=e=>{e.preventDefault();const{context:t}=this.props,{emailAddress:s,password:r}=this.state,{from:a}=this.props.location.state||{from:{pathname:"/courses"}};t.actions.signIn(s,r).then((e=>{null===e?this.setState((()=>({errors:["Sign in was unsucessful"]}))):this.props.history.push(a)})).catch((e=>{console.error(e),this.props.history.push("/error")}))},this.cancel=e=>{e.preventDefault(),this.props.history.push("/")},this.state={emailAddress:"",password:"",errors:[]}}render(){return Object(h.jsxs)("div",{className:"form--centered",children:[Object(h.jsx)("h2",{children:"Sign In"}),this.state.errors.length>0?Object(h.jsx)(S,{errors:this.state.errors}):null,Object(h.jsxs)("form",{onSubmit:this.submit,children:[Object(h.jsx)("label",{htmlFor:"emailAddress",children:"Email Address"}),Object(h.jsx)("input",{onChange:this.change,type:"text",id:"emailAddress",name:"emailAddress"}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{onChange:this.change,type:"password",id:"password",name:"password"}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Sign In"}),Object(h.jsx)("button",{className:"button button-secondary",onClick:this.cancel,children:"Cancel"})]}),Object(h.jsxs)("p",{children:["Don't have a user account? Click here to ",Object(h.jsx)(p.b,{to:"/signup",children:"sign up!"})]})]})}}function S(e){let{errors:t}=e,s=null;return t.length&&(s=Object(h.jsxs)("div",{className:"validation--errors",children:[Object(h.jsx)("h3",{children:"Error"}),Object(h.jsx)("ul",{children:t.map(((e,t)=>Object(h.jsx)("li",{children:e},t)))})]})),s}var A=e=>{const{context:t}=e;return Object(r.useEffect)((()=>t.actions.signOut())),Object(h.jsx)(b.a,{to:"/courses"})};var U=e=>{let{component:t,...s}=e;return Object(h.jsx)(j,{children:e=>Object(h.jsx)(b.b,{...s,render:s=>e.authenticatedUser?Object(h.jsx)(t,{...s}):Object(h.jsx)(b.a,{to:{pathname:"/signin",state:{from:s.location}}})})})};var E=e=>Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Error"}),Object(h.jsx)("p",{children:"Sorry! We just encountered an unexpected error."})]})});var F=e=>Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Not Found"}),Object(h.jsx)("p",{children:"Sorry! We couldn't find the page you're looking for."})]})});var P=e=>Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("h2",{children:"Forbidden"}),Object(h.jsx)("p",{children:"Oh oh! You can't access this page."})]})});const k=m(x),I=m(O),M=m(C),J=m(w),B=m(v),L=m(y),z=m(D),G=m(A);var V=function(){return Object(h.jsx)(p.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{exact:!0,path:"/",children:Object(h.jsx)(b.a,{to:"/courses"})}),Object(h.jsx)(b.b,{exact:!0,path:"/courses",component:I}),Object(h.jsx)(U,{exact:!0,path:"/courses/create",component:B}),Object(h.jsx)(U,{path:"/courses/:id/update",component:J}),Object(h.jsx)(b.b,{exact:!0,path:"/courses/:id",component:M}),Object(h.jsx)(b.b,{exact:!0,path:"/signup",component:L}),Object(h.jsx)(b.b,{exact:!0,path:"/signin",component:z}),Object(h.jsx)(b.b,{exact:!0,path:"/signout",component:G}),Object(h.jsx)(b.b,{exact:!0,path:"/error",component:E}),Object(h.jsx)(b.b,{exact:!0,path:"/forbidden",component:P}),Object(h.jsx)(b.b,{component:F})]})]})})};s(134),s(135);c.a.render(Object(h.jsx)(u,{children:Object(h.jsx)(V,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.f6527aed.chunk.js.map