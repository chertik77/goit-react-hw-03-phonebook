import{u as i,a as u,j as e}from"./index-3588c0a1.js";const p=()=>{const r=i(),[n]=u(),o=async t=>{t.preventDefault();const{name:l,email:s,password:a}=t.target.elements;try{await n({name:l.value,email:s.value,password:a.value}),r("/contacts")}catch(d){console.log(d)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{class:"relative flex flex-col bg-purple-900 h-112 w-100 overflow-hidden rounded-lg shadow-lg",children:[e.jsxs("form",{class:"flex flex-col space-y-3 p-6",onSubmit:o,children:[e.jsx("label",{for:"chk",class:"text-white text-2xl font-bold justify-center flex cursor-pointer transition-all duration-500",children:"Log in"}),e.jsx("input",{class:"w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md",type:"email",name:"email",placeholder:"Email",required:!0}),e.jsx("input",{class:"w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md",type:"password",name:"pswd",placeholder:"Password",required:!0}),e.jsx("button",{class:"w-2/3 h-10 mt-4 mb-10 text-white bg-purple-700 text-sm font-bold border-none rounded-md cursor-pointer transition-all duration-200 hover:bg-purple-800 mx-auto",children:"Log in"})]}),e.jsxs("form",{class:"flex flex-col space-y-3 p-6 bg-gray-200 rounded-lg transition-all duration-800",children:[e.jsx("label",{for:"chk",class:"text-purple-700 text-2xl font-bold justify-center flex cursor-pointer transition-all duration-500",children:"Register"}),e.jsx("input",{class:"w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md",type:"text",name:"txt",placeholder:"Username",required:!0}),e.jsx("input",{class:"w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md",type:"email",name:"email",placeholder:"Email",required:!0}),e.jsx("input",{class:"w-full h-10 text-sm bg-gray-200 p-2 mt-4 border-none outline-none rounded-md",type:"password",name:"pswd",placeholder:"Password",required:!0}),e.jsx("button",{class:"w-2/3 h-10 mt-4 mb-10 text-white bg-purple-700 text-sm font-bold border-none rounded-md cursor-pointer transition-all duration-200 hover:bg-purple-800 mx-auto",children:"Register"})]})]})})};export{p as default};