(this.webpackJsonplifestyle_frontend=this.webpackJsonplifestyle_frontend||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),o=n.n(s),c=(n(29),n(14)),i=n(1),l=n(2),u=n(4),p=n(3),h=n(5),d=(n(30),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).HandleSubmit=function(e){e.preventDefault(),n.props.onLogin(n.props.username,n.props.password),n.props.onredirect()},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.HandleSubmit},r.a.createElement("h1",{className:"loginHeader"},"login"),r.a.createElement("br",null),r.a.createElement("label",{className:"name"},"name:"),r.a.createElement("input",{className:"nameInput",type:"text",value:this.props.username,onChange:this.props.HandleChangeUserName}),r.a.createElement("label",{className:"password"},"password:"),r.a.createElement("input",{className:"passwordInput",type:"password",value:this.props.password,onChange:this.props.HandleChangePassword}),r.a.createElement("button",{className:"subby",type:"submit"},"Submit"))}}]),t}(r.a.Component)),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).HandleSubmit=function(e){e.preventDefault(),n.props.onCreateUser(n.props.username,n.props.password),n.props.setDisplay()},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.HandleSubmit},r.a.createElement("h2",null,"create User"),r.a.createElement("br",null),r.a.createElement("label",null,"name:",r.a.createElement("input",{type:"text",value:this.props.username,onChange:this.props.HandleChangeUserName})),r.a.createElement("br",null),r.a.createElement("label",null,"password:",r.a.createElement("input",{type:"password",value:this.props.password,onChange:this.props.HandleChangePassword})),r.a.createElement("input",{type:"submit",value:"Create User"}))}}]),t}(r.a.Component),g=(n(31),n(11)),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={display:!1,redirect:!1,username:"",password:""},n.HandleChangeUserName=function(e){n.setState({username:e.target.value})},n.HandleChangePassword=function(e){n.setState({password:e.target.value})},n.handleClick=function(e){"createUser"===e.target.innerText?n.setState({display:!0}):n.setState({display:!1})},n.setDisplay=function(){n.setState({display:!1})},n.redirect=function(){n.setState({redirect:!0})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!0===this.state.redirect?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"bar"},r.a.createElement("h1",{onClick:this.handleClick},"Login"),r.a.createElement("h1",{className:"blinking",onClick:this.handleClick},"createUser")),r.a.createElement("div",{className:"form"},this.state.display?r.a.createElement(m,{username:this.state.username,password:this.state.password,HandleChangePassword:this.HandleChangePassword,HandleChangeUserName:this.HandleChangeUserName,onCreateUser:this.props.onCreateUser,setDisplay:this.setDisplay}):r.a.createElement(d,{username:this.state.username,password:this.state.password,HandleChangePassword:this.HandleChangePassword,HandleChangeUserName:this.HandleChangeUserName,onLogin:this.props.onLogin,onredirect:this.redirect})))}}]),t}(r.a.Component),f=(n(37),n(10)),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return localStorage.token?r.a.createElement("div",{className:"nav"},r.a.createElement(f.b,{to:"/"},"home"),r.a.createElement(f.b,{to:"/budget"},"budget"),r.a.createElement(f.b,{to:"/workout"},"workout"),r.a.createElement(f.b,{to:"/foodplease"},"Recipe look-up"),r.a.createElement("button",{onClick:function(){return e.props.logout()}},"logout")):r.a.createElement(g.a,{to:"/login"})}}]),t}(r.a.Component),E=(n(38),n(23)),O=n.n(E),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={income:0,expense:0,saving:.5,invest:.5},n.handleIncome=function(e){n.setState({income:e.target.value})},n.handleExpense=function(e){n.setState({expense:e.target.value})},n.handleSaving=function(e){n.setState({saving:e.target.value})},n.handleInvest=function(e){n.setState({invest:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.firstTime?n.props.toggle(!1):n.props.toggle(),n.props.handleCreate(n.state.income,n.state.expense,n.state.saving,n.state.invest)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"budgetForm",onSubmit:this.handleSubmit},r.a.createElement("label",null,"income:",r.a.createElement("input",{type:"integer",value:this.state.income,onChange:this.handleIncome})),r.a.createElement("br",null),r.a.createElement("label",null,"expense:",r.a.createElement("input",{type:"integer",value:this.state.expense,onChange:this.handleExpense})),r.a.createElement("br",null),r.a.createElement("label",null,"save:",r.a.createElement("select",{value:this.state.saving,onChange:this.handleSaving},r.a.createElement("option",{value:.5},"5%"),r.a.createElement("option",{value:.1},"10%"),r.a.createElement("option",{value:.15},"15%"))),r.a.createElement("br",null),r.a.createElement("label",null,"invest:",r.a.createElement("select",{value:this.state.invest,onChange:this.handleInvest},r.a.createElement("option",{value:.5},"5%"),r.a.createElement("option",{value:.1},"10%"),r.a.createElement("option",{value:.15},"15%"))),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"create budget"}))}}]),t}(r.a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={render:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.toggle);var t=this.props.budget.income-this.props.budget.expenses-this.props.budget.savings-this.props.budget.investment;return r.a.createElement("div",{className:"budget"},r.a.createElement(O.a,{data:[{title:"expenses $".concat(this.props.budget.expenses),value:this.props.budget.expenses,color:"#E38627"},{title:"savings  $".concat(this.props.budget.savings),value:this.props.budget.savings,color:"#C13C37"},{title:"investments  $".concat(this.props.budget.investment),value:this.props.budget.investment,color:"#6A2135"},{title:"remaining $".concat(t),value:t,color:"#ffffff"}]}),r.a.createElement("div",{className:"raw-data"},"income: ",this.props.budget.income," ",r.a.createElement("br",null),"expense: ",this.props.budget.expenses," ",r.a.createElement("br",null),"savings: ",this.props.budget.savings.toFixed(2)," ",r.a.createElement("br",null),"investments: ",this.props.budget.investment.toFixed(2)," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.props.delete},"delete budget"),r.a.createElement("button",{onClick:function(){return e.props.toggle()}},"open edit budget")),this.props.edit?r.a.createElement(j,{toggle:this.props.toggle,handleCreate:this.props.handleCreate}):null)}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={edit:!0},n.toggleEdit=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!1===!e&&(console.log("hi"),n.setState({edit:!0})),n.setState({edit:!n.state.edit})},n.createBudget=function(e,t,a,r){var s={income:e,expenses:t,savings:a,investment:r};return n.props.addBudget(s)},n.deleteBudget=function(){var e=n.props.currentUser.budgets[0].id;fetch("http://localhost:3000/budgets/".concat(e),{method:"DELETE",headers:{"content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){204===e.status&&n.props.removeBudget()}))},n.editbudget=function(e,t,a,r){var s=n.props.currentUser.budgets[0].id;fetch("http://localhost:3000/budgets/".concat(s),{method:"PUT",headers:{"content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify({budget:{income:e,expenses:t,savings:a,investment:r,user_id:n.props.currentUser.id}})}).then((function(e){return e.json()})).then((function(e){n.props.addBudget(e)}))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!1===this.props.loggedIn?r.a.createElement(g.a,{to:"/login"}):r.a.createElement("div",null,this.state.edit?r.a.createElement(j,{toggle:this.toggleEdit,firstTime:!0,handleCreate:this.createBudget}):r.a.createElement(y,{edit:this.state.edit,toggle:this.toggleEdit,budget:this.props.budgets[0],delete:this.deleteBudget,handleCreate:this.editbudget}))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Welcome Home: ",this.props.currentUser.username)}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"datecheck",value:function(){return(new Date).getDate%2===0?0:1}},{key:"render",value:function(){return r.a.createElement("div",null,"cardio"===this.props.plan?r.a.createElement("div",null,this.props.cardio[this.datecheck()].name):r.a.createElement("div",null,this.props.strength[this.datecheck()].name))}}]),t}(r.a.Component),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={plan:"strength"},n.componentDidMount=function(){fetch("http://localhost:3000/exercises",{method:"GET",headers:{"content-type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({strength:[e[0],e[1]],cardio:[e[2],e[3]]})}))},n.handleSubmit=function(e){n.setState({plan:e.target.value})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:this.handleSubmit,value:this.state.plan},r.a.createElement("option",{value:"strength"},"strength"),r.a.createElement("option",{value:"cardio"},"cardio")),this.state.strength?r.a.createElement(S,{plan:this.state.plan,strength:this.state.strength,cardio:this.state.cardio}):null)}}]),t}(r.a.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"ingredients",value:function(){return this.props.recipe.ingredientLines.map((function(e,t){return r.a.createElement("li",{key:t},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{color:"orange"}},this.props.recipe.label,r.a.createElement("img",{alt:"recipe img",src:this.props.recipe.image}),r.a.createElement("ul",null,this.ingredients()),r.a.createElement("a",{href:this.props.recipe.url},"full recipe"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.props.reset},"search again"),r.a.createElement("a",{href:"https://www.edamam.com"},r.a.createElement("img",{id:"edamam-badge",alt:"api attribution",src:"https://developer.edamam.com/images/transparent.png"})))}}]),t}(r.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("input",{type:"text",value:this.props.value,onChange:this.props.handleChange}),r.a.createElement("input",{type:"submit",value:"enter 'A' food"}))}}]),t}(r.a.Component);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.value;fetch("https://api.edamam.com/search?app_id=113f70b5&app_key=50f3b2cd9a026789b545b2e3fdd8f05f&q=".concat(t)).then((function(e){return e.json()})).then((function(e){return n.setState({recipe:N({},e.hits[Math.floor(5*Math.random())].recipe)})}))},n.reset=function(){n.setState({recipe:""})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.recipe?r.a.createElement(U,{recipe:this.state.recipe,background:this.props.background,reset:this.reset}):r.a.createElement(x,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,value:this.state.value}))}}]),t}(r.a.Component);n(39);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={key:"",currentUser:{},loggedIn:!1},n.addBudget=function(e){n.setState((function(t){return A({},t,{currentUser:A({},t.currentUser,{budgets:[A({},e)]})})}))},n.removeBudget=function(){n.setState((function(e){return A({},e,{currentUser:A({},e.currentUser,{budgets:[]})})}))},n.onCreateUser=function(e,t){fetch("http://localhost:3000/users",{method:"POST",headers:{"content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:e,password:t}})}).then((function(e){return e.json()})).then((function(e){return n.setState({currentUser:A({},e)})}))},n.onLogin=function(e,t){fetch("http://localhost:3000/login",{method:"POST",headers:{"content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:{username:e,password:t}})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.jwt),n.setState({loggedIn:!0,currentUser:A({},e.user)})}))},n.logout=function(){n.setState({loggedIn:!1}),localStorage.token=""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement("div",{style:this.state.style},r.a.createElement(v,{loggedIn:this.state.loggedIn,logout:this.logout}),r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{currentUser:e.state.currentUser})}}),r.a.createElement(g.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(b,{onLogin:e.onLogin,onCreateUser:e.onCreateUser})}}),r.a.createElement(g.b,{exact:!0,path:"/budget",render:function(){return r.a.createElement(C,{removeBudget:e.removeBudget,addBudget:e.addBudget,loggedIn:e.state.loggedIn,budgets:e.state.currentUser.budgets,currentUser:e.state.currentUser})}}),r.a.createElement(g.b,{exact:!0,path:"/workout",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(g.b,{exact:!0,path:"/foodplease",render:function(){return r.a.createElement(D,{background:e.background})}})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1a9c2f58.chunk.js.map