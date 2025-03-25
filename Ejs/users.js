const ejs = require('ejs');

let users = [1,2,3,4];
let data = 12;
// console.log(ejs);
// let template = ejs.compile(str, data);

// console.log(Object.entries(ejs));
// console.log(ejs.Template);
// console.log(ejs.VERSION);
// console.log(ejs.cache);
// console.log(ejs.clearCache());
// console.log(ejs.closeDelimiter);
// console.log(ejs.delimiter);

// let output = template(data);

// console.log(output);


/*
let user = {
    "name": "Someone"
};
let s = `<% if (user) { %>
  <h2><%= user %></h2>
  <h2><%= data %></h2>
<% } %>`;


let output = ejs.render(s, {user: user, data: "something"});
console.log(output);
*/

//ejs.compile
/*
let user = {
    "name": "Someone"
};

let s =`<% if (user) { %>
<h2><%= user %></h2>
<h2><%= data %></h2>
<% } %>`;

let fn = ejs.compile(s); //fn is function
let output = fn({user: user.name, data: "Something"});
console.log(output);
*/

//renderFile
/*
ejs.renderFile('./Demo.ejs', {users: users, data: "Some data..."}, (error, str) => {
    if(error){
        console.log(error.message);
    }
    else{
        console.log(str);
    }
});
*/