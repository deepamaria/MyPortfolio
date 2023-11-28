// const body=document.body;
// body.classList.add("body");

// const contact_cont=document.getElementById("contact_container");
// contact_cont.classList.add("contact_container");
// const h2=document.createElement("h2");
// // h2.classList.add(".contact_container h2");
// h2.textContent="Contact";
// contact_cont.appendChild(h2);
const cust_name=document.getElementById("cust_name");
const cust_email=document.getElementById("cust_email");
const cust_msg=document.getElementById("cust_msg");

const send_button=document.getElementById("cust_send");
send_button.classList.add("send");

send_button.addEventListener("click",function(){
cust_name.value="";
cust_email.value="";
cust_msg.value="";

})