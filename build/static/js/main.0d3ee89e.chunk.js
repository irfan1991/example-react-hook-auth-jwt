(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),s=a(10),o=a(3),i=a(4),u=a(19),m=a(13),d=a(12),h=a(6),p=a(17),g=(a(48),a(90),a(5)),b=a.n(g),f="https://node-js-jwt-irfan.herokuapp.com/api/auth/",v=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"login",value:function(e,t){return b.a.post(f+"signin",{username:e,password:t}).then(function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data})}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return b.a.post(f+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),E=a(35),N=a.n(E),j=a(27),O=a.n(j),k=a(36),y=a.n(k),C=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required !")},w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(u.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(u.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(u.a)(n)),n.state={username:"",password:"",loading:!1,message:""},n}return Object(i.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?v.login(this.state.username,this.state.password).then(function(){t.props.history.push("/profile"),window.location.reload()},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile",className:"profile-img-card"}),r.a.createElement(N.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[C]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(O.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[C]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("spa",null,"Login"))),this.state.message&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)),r.a.createElement(y.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component),S=a(82),U=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required !")},A=function(e){if(!Object(S.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not valid email !")},P=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This username must be between 3 and 20 characters.")},x=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This password must be between 6 and 40 characters.")},T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleRegister=n.handleRegister.bind(Object(u.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(u.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(u.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(u.a)(n)),n.state={username:"",password:"",email:"",successful:!1,message:""},n}return Object(i.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&v.register(this.state.username,this.state.email,this.state.password).then(function(e){t.setState({message:e.data.message,successful:!0})},function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile",className:"profile-img-card"}),r.a.createElement(N.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[U,P]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(O.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[U,A]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(O.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[U,x]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up")),this.state.message&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},this.state.message)),r.a.createElement(y.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentUser:v.getCurrentUser()},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username))),r.a.createElement("p",null,r.a.createElement("strong",null,"Token : ")," ",e.accessToken.substring(0,20),"..."," ",e.accessToken.substr(e.accessToken.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null," Id : "),e.id),r.a.createElement("p",null,r.a.createElement("strong",null," Email : "),e.email),r.a.createElement("p",null,r.a.createElement("strong",null," Authorities : "),r.a.createElement("ul",null,e.roles&&e.roles.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))}}]),a}(n.Component);function D(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken,"Content-type":"application/json",Accept:"application/json"}:{}}var L="https://node-js-jwt-irfan.herokuapp.com/api/test/",M=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getPublicContent",value:function(){return b.a.get(L+"all")}},{key:"getUserBoard",value:function(){return b.a.get(L+"user",{headers:D()})}},{key:"getModeratorBoard",value:function(){return b.a.get(L+"mod",{headers:D()})}},{key:"getAdminBoard",value:function(){return b.a.get(L+"admin",{headers:D()})}}]),e}()),R="https://node-js-jwt-irfan.herokuapp.com/api",F=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getAll",value:function(){return b.a.get(R+"/article",{headers:D()})}},{key:"getPublished",value:function(){return b.a.get(R+"/article/published")}},{key:"get",value:function(e){return b.a.get("".concat(R,"/article/").concat(e),{headers:D()})}},{key:"getUser",value:function(e){return b.a.get("".concat(R,"/article/user/").concat(e),{headers:D()})}},{key:"create",value:function(e){return b.a.post("".concat(R,"/article"),e,{headers:D()})}},{key:"update",value:function(e,t){return b.a.put("".concat(R,"/article/").concat(e),t,{headers:D()})}},{key:"delete",value:function(e){return b.a.delete("".concat(R,"/article/").concat(e),{headers:D()})}},{key:"deleteUser",value:function(e){return b.a.delete("".concat(R,"/article/user/").concat(e),{headers:D()})}},{key:"deleteAll",value:function(){return b.a.delete("".concat(R,"/article"),{headers:D()})}},{key:"findByTitle",value:function(e){return b.a.get("".concat(R,"/article?title=").concat(e),{headers:D()})}}]),e}()),I=a(83),_=a.n(I),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={content:"",error:null,isLoaded:!1,items:[]},n.header=[{title:"ID",prop:"id",sortable:!0,filterable:!0},{title:"User Name",prop:"username",sortable:!0,filterable:!0},{title:"Title",prop:"title",sortable:!0,filterable:!0},{title:"Description",prop:"description",sortable:!0,filterable:!0},{title:"Published Date",prop:"createdAt",sortable:!0,filterable:!0}],n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.getPublicContent().then(function(t){e.setState({content:t.data})},function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}),F.getPublished().then(function(t){e.setState({isLoaded:!0,items:t.data})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.content,a=e.error,n=e.isLoaded,l=e.items;return a?r.a.createElement("div",null,"Error: ",a.message):n?(console.log(l),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,t.message))),r.a.createElement(_.a,{tableHeaders:this.header,tableBody:l,keyName:"userTable",rowsPerPage:20,rowsPerPageOption:[20,25,30,40],initialSort:{prop:"username",isAscending:!0}}))):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.getModeratorBoard().then(function(t){e.setState({content:t.data})},function(t){e.setState({content:t.response&&t.response.data&&t.data.message||t.message||t.toString()})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,this.state.content.message))))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.getAdminBoard().then(function(t){e.setState({content:t.data})},function(t){e.setState({content:t.response&&t.response.data&&t.data.message||t.message||t.toString()})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,this.state.content.message))))}}]),a}(n.Component),W=a(8),Y=function(){var e=Object(n.useState)([]),t=Object(W.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(W.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(-1),d=Object(W.a)(m,2),h=d[0],p=d[1],g=Object(n.useState)(""),b=Object(W.a)(g,2),f=b[0],E=b[1];Object(n.useEffect)(function(){N()},[]);var N=function(){F.getUser(v.getCurrentUser().id).then(function(e){l(e.data),console.log(e.data)}).catch(function(e){console.log(e)})};return r.a.createElement("div",{className:"list row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",value:f,onChange:function(e){var t=e.target.value;E(t)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){F.findByTitle(f).then(function(e){l(e.data),console.log(e.data)}).catch(function(e){console.log(e)})}},"Search")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Articles List"),r.a.createElement("ul",{className:"list-group"},a&&a.map(function(e,t){return r.a.createElement("li",{className:"list-group-item "+(t===h?"active":""),onClick:function(){return function(e,t){p(t),u(e)}(e,t)},key:t},e.title)})),r.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){F.deleteUser(v.getCurrentUser().id).then(function(e){console.log(e.data),N(),u(null),p(-1)}).catch(function(e){console.log(e)})}},"Remove All")),r.a.createElement("div",{className:"col-md-6"},i?r.a.createElement("div",null,r.a.createElement("h4",null,"Article"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Title:"))," ",i.title),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Description:"))," ",i.description),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Status:"))," ",i.published?"Published":"Pending"),r.a.createElement(s.b,{to:"/article/"+i.id,className:"badge badge-warning"},"Edit")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"Please click on a Article..."))))},$=a(29),z=a(25),G=function(e){var t=Object(n.useState)({id:null,title:"",description:"",published:!1}),a=Object(W.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),o=Object(W.a)(s,2),i=o[0],u=o[1];Object(n.useEffect)(function(){var t;t=e.match.params.id,F.get(t).then(function(e){c(e.data),console.log(e.data)}).catch(function(e){console.log(e)})},[e.match.params.id]);var m=function(e){var t=e.target,a=t.name,n=t.value;c(Object(z.a)(Object(z.a)({},l),{},Object($.a)({},a,n)))},d=function(e){var t={id:l.id,title:l.title,description:l.description,published:e};F.update(l.id,t).then(function(t){c(Object(z.a)(Object(z.a)({},l),{},{published:e})),console.log(t.data)}).catch(function(e){console.log(e)})};return r.a.createElement("div",null,l?r.a.createElement("div",{className:"edit-form"},r.a.createElement("h4",null,"Article"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:l.title,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",value:l.description,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("strong",null,"Status:")),l.published?"Published":"Pending")),l.published?r.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return d(!1)}},"UnPublish"):r.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return d(!0)}},"Publish"),r.a.createElement("button",{className:"badge badge-danger mr-2",onClick:function(){F.delete(l.id).then(function(t){console.log(t.data),e.history.push("/article")}).catch(function(e){console.log(e)})}},"Delete"),r.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:function(){F.update(l.id,l).then(function(e){console.log(e.data),u("The article was updated successfully!")}).catch(function(e){console.log(e)})}},"Update"),r.a.createElement("p",null,i)):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"Please click on a Article...")))},K=function(){var e={id:null,title:"",description:"",published:!1,userId:v.getCurrentUser().id},t=Object(n.useState)(e),a=Object(W.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(W.a)(s,2),i=o[0],u=o[1],m=function(e){var t=e.target,a=t.name,n=t.value;c(Object(z.a)(Object(z.a)({},l),{},Object($.a)({},a,n)))};return r.a.createElement("div",{className:"submit-form"},i?r.a.createElement("div",null,r.a.createElement("h4",null,"You submitted successfully!"),r.a.createElement("button",{className:"btn btn-success",onClick:function(){c(e),u(!1)}},"Add")):r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:l.title,onChange:m,name:"title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:l.description,onChange:m,name:"description"})),r.a.createElement("button",{onClick:function(){var e={title:l.title,description:l.description,userId:v.getCurrentUser().id};F.create(e).then(function(e){c({id:e.data.id,title:e.data.title,description:e.data.description,published:e.data.published}),u(!0),console.log(e.data)}).catch(function(e){console.log(e)})},className:"btn btn-success"},"Submit")))},Q=Object(n.createContext)(),V=Q.Provider,X=function(e){return function(t){Object(m.a)(n,t);var a=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={globalcounter:0},e.dispatch=function(t){if("ADD_COUNTER"===t.type)return e.setState({globalcounter:e.state.globalcounter+1})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(V,{value:{state:this.state,dispatch:this.dispatch}},r.a.createElement(e,this.props))}}]),n}(n.Component)},Z=Q.Consumer,ee=function(e){return function(t){Object(m.a)(n,t);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(Z,null,function(a){return r.a.createElement(e,Object.assign({},t.props,a))})}}]),n}(n.Component)},te=ee(function(e){var t=Object(n.useState)(0),a=Object(W.a)(t,2),l=a[0];a[1];return Object(n.useEffect)(function(){return document.title="Title Change: ".concat(l),function(){document.title="React App"}}),r.a.createElement("div",{className:"container"},console.log(e),r.a.createElement("p",null,"Nilai saya saat ini adalah : ",e.state.globalcounter," "),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.dispatch({type:"ADD_COUNTER"})}},"Update Nilai"))}),ae=(a(209),function(e,t){var a=new FormData;return a.append("file",e),b.a.post("https://node-js-jwt-irfan.herokuapp.com/upload",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})}),ne=function(){return b.a.get("https://node-js-jwt-irfan.herokuapp.com/files")},re=ee(function(e){var t=Object(n.useState)(void 0),a=Object(W.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(void 0),o=Object(W.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)(0),d=Object(W.a)(m,2),h=d[0],p=d[1],g=Object(n.useState)(""),b=Object(W.a)(g,2),f=b[0],v=b[1],E=Object(n.useState)([]),N=Object(W.a)(E,2),j=N[0],O=N[1];Object(n.useEffect)(function(){ne().then(function(e){O(e.data)})},[]);return r.a.createElement("div",null,i&&r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":h,"aria-valuemin":"0","aria-valuemax":"100",style:{width:h+"%"}},h,"%")),r.a.createElement("label",{className:"btn btn-default"},r.a.createElement("input",{type:"file",onChange:function(e){c(e.target.files)}})),r.a.createElement("button",{className:"btn btn-success",disabled:!l,onClick:function(){var e=l[0];p(0),u(e),ae(e,function(e){p(Math.round(100*e.loaded/e.total))}).then(function(e){return v(e.data.message),ne()}).then(function(e){O(e.data)}).catch(function(){p(0),v("Couldt not upload the file"),u(void 0)}),c(void 0)}},"Upload"),r.a.createElement("div",{className:"alert alert-light",role:"alert"},f),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"List of Files"),r.a.createElement("ul",{className:"list-group list-group-flush"},j&&j.map(function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},console.log(e),r.a.createElement("a",{target:"_blank",href:e.url},e.name))}))),r.a.createElement("hr",null),r.a.createElement("h4",null,e.state.globalcounter))}),le=X(function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(u.a)(n)),n.state={showAdminBoard:!1,showModeratorBoard:!1,currentUser:void 0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=v.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){v.logout(),window.location.href="/"}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showModeratorBoard,n=e.showAdminBoard;return r.a.createElement(s.a,{history:p.a},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Simple App"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/home",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/hook",className:"nav-link"},"Hooks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/upload",className:"nav-link"},"Upload")),n&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/admin",className:"nav-link"},"Admin Board")),a&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/mod",className:"nav-link"},"Moderator Board")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/article",className:"nav-link"},"Articles")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/add",className:"nav-link"},"Add"))),t?r.a.createElement("div",{className:"navbar-nav pull-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/profile",className:"nav-link"},t.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/",className:"nav-link",onClick:this.logOut},"Logut"))):r.a.createElement("div",{className:"navbar-nav  pull-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/register",className:"nav-link"},"Sign Up")))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:["/","/home"],component:J}),r.a.createElement(h.a,{exact:!0,path:"/hook",component:te}),r.a.createElement(h.a,{exact:!0,path:"/upload",component:re}),r.a.createElement(h.a,{exact:!0,path:"/login",component:w}),r.a.createElement(h.a,{exact:!0,path:"/register",component:T}),r.a.createElement(h.a,{exact:!0,path:"/profile",component:B}),r.a.createElement(h.a,{exact:!0,path:"/mod",component:q}),r.a.createElement(h.a,{exact:!0,path:"/admin",component:H}),r.a.createElement(h.a,{exact:!0,path:"/article",component:Y}),r.a.createElement(h.a,{exact:!0,path:"/add",component:K}),r.a.createElement(h.a,{path:"/article/:id",component:G})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},85:function(e,t,a){e.exports=a(210)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.0d3ee89e.chunk.js.map