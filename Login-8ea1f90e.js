import{_ as p,r as g,a as M,j as s,u as Te,b as se,o as oe,c as ne,F as ae,d as K,e as Fe,C as _e}from"./index-08b3c4ee.js";import{c as Se,a as ze,u as Ie,h as Y,r as U,b as Me,d as Ve,m as He,e as te,f as ie,g as w,i as Be,j as Q,k as O,l as J,s as $,n as we,o as We,p as W,q as le,F as Ne,t as F,v as Ee,w as Ue,x as Oe,y as C,T as X,z as Je,A as Ae,B as Ge,C as b,D as V,E as qe,G as Ke,I as Ye,H as Qe,J as Xe,K as _,L as S,M as H,N as ce,O as Ze,P as er,Q as rr}from"./ColorShemeToggle-0a32d943.js";const sr=Se(),or=sr,nr=["component","direction","spacing","divider","children","className","useFlexGap"],ar=ze(),tr=or("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function ir(e){return Ie({props:e,name:"MuiStack",defaultTheme:ar})}function lr(e,r){const a=g.Children.toArray(e).filter(Boolean);return a.reduce((n,i,t)=>(n.push(i),t<a.length-1&&n.push(g.cloneElement(r,{key:`separator-${t}`})),n),[])}const cr=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],dr=({ownerState:e,theme:r})=>{let a=p({display:"flex",flexDirection:"column"},Y({theme:r},U({values:e.direction,breakpoints:r.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=Me(r),i=Object.keys(r.breakpoints.values).reduce((l,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(l[c]=!0),l),{}),t=U({values:e.direction,base:i}),o=U({values:e.spacing,base:i});typeof t=="object"&&Object.keys(t).forEach((l,c,v)=>{if(!t[l]){const m=c>0?t[v[c-1]]:"column";t[l]=m}}),a=Ve(a,Y({theme:r},o,(l,c)=>e.useFlexGap?{gap:Q(n,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${cr(c?t[c]:e.direction)}`]:Q(n,l)}}))}return a=He(r.breakpoints,a),a};function pr(e={}){const{createStyledComponent:r=tr,useThemeProps:a=ir,componentName:n="MuiStack"}=e,i=()=>w({root:["root"]},l=>Be(n,l),{}),t=r(dr);return g.forwardRef(function(l,c){const v=a(l),u=te(v),{component:m="div",direction:x="column",spacing:h=0,divider:f,children:y,className:P,useFlexGap:k=!1}=u,j=M(u,nr),D={direction:x,spacing:h,useFlexGap:k},R=i();return s.jsx(t,p({as:m,ownerState:D,ref:c,className:ie(R.root,P)},j,{children:f?lr(y,f):y}))})}function ur(e){return O("MuiFormHelperText",e)}J("MuiFormHelperText",["root"]);const gr=["children","component","slots","slotProps"],mr=()=>w({root:["root"]},ur,{}),vr=$("div",{name:"JoyFormHelperText",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e})=>({"--Icon-fontSize":"calc(var(--FormHelperText-lineHeight) * 1em)",display:"flex",alignItems:"center",gap:"2px",fontFamily:e.vars.fontFamily.body,fontSize:`var(--FormHelperText-fontSize, ${e.vars.fontSize.sm})`,lineHeight:`var(--FormHelperText-lineHeight, ${e.vars.lineHeight.sm})`,color:`var(--FormHelperText-color, ${e.vars.palette.text.tertiary})`,margin:"var(--FormHelperText-margin, 0px)",[`.${we.root} + &`]:{"--FormHelperText-margin":"0px"},[`.${We.error} &`]:{"--Icon-color":"currentColor"}})),xr=g.forwardRef(function(r,a){const n=W({props:r,name:"JoyFormHelperText"}),{children:i,component:t,slots:o={},slotProps:d={}}=n,l=M(n,gr),c=g.useRef(null),v=le(c,a),u=g.useContext(Ne),m=u==null?void 0:u.setHelperText;g.useEffect(()=>(m==null||m(c.current),()=>{m==null||m(null)}),[m]);const x=mr(),h=p({},l,{component:t,slots:o,slotProps:d}),[f,y]=F("root",{ref:v,elementType:vr,externalForwardedProps:h,ownerState:n,additionalProps:{as:t,id:u==null?void 0:u["aria-describedby"]},className:x.root});return s.jsx(f,p({},y,{children:i}))}),z=xr;function hr(e){return O("MuiLinearProgress",e)}J("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);const fr=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"];let de=e=>e,Z,ee;const yr=Ee(Z||(Z=de`
  0% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }

  25% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  50% {
    left: var(--_LinearProgress-progressLeft);
    width: var(--LinearProgress-progressMinWidth);
  }

  75% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  100% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }
`)),br=e=>{const{determinate:r,color:a,variant:n,size:i}=e,t={root:["root",r&&"determinate",a&&`color${C(a)}`,n&&`variant${C(n)}`,i&&`size${C(i)}`]};return w(t,hr,{})},Pr=$("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(e,r)=>r.root})(({ownerState:e,theme:r})=>{var a,n,i,t;return p({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},e.size==="sm"&&{"--LinearProgress-thickness":"4px"},e.size==="md"&&{"--LinearProgress-thickness":"6px"},e.size==="lg"&&{"--LinearProgress-thickness":"8px"},e.thickness&&{"--LinearProgress-thickness":`${e.thickness}px`},!e.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},(a=r.variants[e.variant])==null?void 0:a[e.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},e.variant==="soft"&&{backgroundColor:r.variants.soft.neutral.backgroundColor,color:(n=r.variants.solid)==null?void 0:n[e.color].backgroundColor},e.variant==="solid"&&{backgroundColor:(i=r.variants.softHover)==null?void 0:i[e.color].backgroundColor,color:(t=r.variants.solid)==null?void 0:t[e.color].backgroundColor})},({ownerState:e})=>e.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:Ue(ee||(ee=de`
          &::before {
            animation: ${0}
              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);
          }
        `),yr),({ownerState:e,theme:r})=>{const{borderRadius:a,height:n}=Oe({theme:r,ownerState:e},["borderRadius","height"]);return p({},a!==void 0&&{"--LinearProgress-radius":a},n!==void 0&&{"--LinearProgress-thickness":n})}),kr=g.forwardRef(function(r,a){const n=W({props:r,name:"JoyLinearProgress"}),{children:i,className:t,component:o,color:d="primary",size:l="md",variant:c="soft",thickness:v,determinate:u=!1,value:m=u?0:25,style:x,slots:h={},slotProps:f={}}=n,y=M(n,fr),P=p({},n,{component:o,color:d,size:l,variant:c,thickness:v,value:m,determinate:u,instanceSize:r.size}),k=br(P),j=p({},y,{component:o,slots:h,slotProps:f}),[D,R]=F("root",{ref:a,className:ie(k.root,t),elementType:Pr,externalForwardedProps:j,ownerState:P,additionalProps:p({as:o,role:"progressbar",style:p({},{"--LinearProgress-percent":m},x)},typeof m=="number"&&u&&{"aria-valuenow":Math.round(m)})});return s.jsx(D,p({},R,{children:i}))}),jr=kr;function Cr(e){return O("MuiLink",e)}const Lr=J("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]),re=Lr,$r=["color","textColor","variant"],Dr=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],Rr=e=>{const{level:r,color:a,variant:n,underline:i,focusVisible:t,disabled:o}=e,d={root:["root",a&&`color${C(a)}`,o&&"disabled",t&&"focusVisible",r,i&&`underline${C(i)}`,n&&`variant${C(n)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return w(d,Cr,{})},Tr=$("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})(({ownerState:e})=>{var r;return p({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((r=e.sx)==null?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),Fr=$("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(e,r)=>r.endDecorator})(({ownerState:e})=>{var r;return p({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((r=e.sx)==null?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),_r=$("a",{name:"JoyLink",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var a,n,i,t,o,d,l;return[p({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},r.level&&r.level!=="inherit"&&e.typography[r.level],r.level==="inherit"&&{font:"inherit"},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{"@media (hover: hover)":{textDecorationLine:"underline"}}},r.underline==="always"&&{textDecoration:"underline"},r.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:e.vars.radius.xs,padding:0,cursor:"pointer",textDecorationColor:`var(--variant-outlinedBorder, rgba(${(a=e.vars.palette[r.color])==null?void 0:a.mainChannel} / var(--Link-underlineOpacity, 0.72)))`},r.variant?p({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!r.nesting&&{marginInline:"-0.25em"}):{color:`var(--variant-plainColor, rgba(${(n=e.vars.palette[r.color])==null?void 0:n.mainChannel} / 1))`,[`&.${re.disabled}`]:{pointerEvents:"none",color:`var(--variant-plainDisabledColor, rgba(${(i=e.vars.palette[r.color])==null?void 0:i.mainChannel} / 0.6))`}},{userSelect:r.component==="button"?"none":void 0,MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},r.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${e.focus.selector}`]:{"&::after":e.focus.default}}:{position:"relative",[e.focus.selector]:e.focus.default}),r.variant&&p({},(t=e.variants[r.variant])==null?void 0:t[r.color],{"&:hover":{"@media (hover: hover)":(o=e.variants[`${r.variant}Hover`])==null?void 0:o[r.color]},"&:active":(d=e.variants[`${r.variant}Active`])==null?void 0:d[r.color],[`&.${re.disabled}`]:(l=e.variants[`${r.variant}Disabled`])==null?void 0:l[r.color]})]}),Sr=g.forwardRef(function(r,a){const n=W({props:r,name:"JoyLink"}),{color:i="primary",textColor:t,variant:o}=n,d=M(n,$r),l=g.useContext(X),c=g.useContext(Je),v=te(p({},d,{color:t})),{children:u,disabled:m=!1,onBlur:x,onFocus:h,level:f="body-md",overlay:y=!1,underline:P="hover",endDecorator:k,startDecorator:j,component:D,slots:R={},slotProps:ge={}}=v,me=M(v,Dr),ve=l||c?r.level||"inherit":f,{isFocusVisibleRef:G,onBlur:xe,onFocus:he,ref:fe}=Ae(),[ye,q]=g.useState(!1),be=le(a,fe),Pe=T=>{xe(T),G.current===!1&&q(!1),x&&x(T)},ke=T=>{he(T),G.current===!0&&q(!0),h&&h(T)},B=p({},v,{color:i,disabled:m,focusVisible:ye,underline:P,variant:o,level:ve,overlay:y,nesting:l}),N=Rr(B),E=p({},me,{component:D,slots:R,slotProps:ge}),[je,Ce]=F("root",{additionalProps:{onBlur:Pe,onFocus:ke},ref:be,className:N.root,elementType:_r,externalForwardedProps:E,ownerState:B}),[Le,$e]=F("startDecorator",{className:N.startDecorator,elementType:Tr,externalForwardedProps:E,ownerState:B}),[De,Re]=F("endDecorator",{className:N.endDecorator,elementType:Fr,externalForwardedProps:E,ownerState:B});return s.jsx(X.Provider,{value:!0,children:s.jsxs(je,p({},Ce,{children:[j&&s.jsx(Le,p({},$e,{children:j})),Ge(u,["Skeleton"])?g.cloneElement(u,{variant:u.props.variant||"inline"}):u,k&&s.jsx(De,p({},Re,{children:k}))]}))})}),zr=Sr,Ir=pr({createStyledComponent:$("div",{name:"JoyStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>W({props:e,name:"JoyStack"})}),L=Ir,Mr=()=>s.jsx(b,{component:"footer",sx:{py:3},children:s.jsxs(V,{level:"body-xs",textAlign:"center",children:["© PhoneBook ",new Date().getFullYear()]})});var A={},Vr=Ke;Object.defineProperty(A,"__esModule",{value:!0});var pe=A.default=void 0,Hr=Vr(qe()),Br=s,wr=(0,Hr.default)((0,Br.jsx)("path",{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12zm3 6H6v-.43c0-.6.36-1.15.92-1.39.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39V18zm1-9h-2V4h2v5zm4.25 7.5h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75z"}),"BadgeRounded");pe=A.default=wr;const Wr=()=>s.jsxs(b,{component:"header",sx:{py:3,display:"flex",alignItems:"left",justifyContent:"space-between"},children:[s.jsxs(b,{sx:{gap:2,display:"flex",alignItems:"center"},children:[s.jsx(Ye,{variant:"soft",color:"primary",size:"sm",children:s.jsx(pe,{})}),s.jsx(V,{level:"title-lg",children:"PhoneBook"})]}),s.jsx(Qe,{})]}),Nr=()=>s.jsx(b,{sx:e=>({height:"100%",position:"fixed",right:0,top:0,bottom:0,left:"clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",transition:"background-image var(--Transition-duration), left var(--Transition-duration) !important",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",backgroundColor:"background.level1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",[e.getColorSchemeSelector("dark")]:{backgroundImage:"url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)"}})}),I=Xe(s.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined"),ue=({error:e,type:r})=>r==="login"?e&&s.jsx("small",{className:"p-error",children:"You have entered email or password incorrect, please try again."}):e&&s.jsx("small",{className:"p-error",children:"A user with the same email already exists, please try again."}),Er=()=>{const[e,{isLoading:r,error:a}]=Te(),{reset:n,control:i,register:t,formState:{errors:o,isValid:d}}=se({mode:"onChange",resolver:oe(ne(["email","loginpassword"]))});return s.jsxs(ae,{control:i,autoComplete:"on",onSubmit:async({data:{email:l,loginpassword:c}})=>{await e({email:l,password:c}),n()},children:[s.jsxs(_,{error:!!(o!=null&&o.email),children:[s.jsx(S,{children:"Email"}),s.jsx(H,{type:"email",name:"email",...t("email"),autoComplete:"email"}),(o==null?void 0:o.email)&&s.jsxs(z,{children:[s.jsx(I,{}),o.email.message]})]}),s.jsxs(_,{error:!!(o!=null&&o.loginpassword),children:[s.jsx(S,{children:"Password"}),s.jsx(H,{type:"password",name:"password",...t("loginpassword"),autoComplete:"current-password"}),(o==null?void 0:o.loginpassword)&&s.jsxs(z,{children:[s.jsx(I,{}),o.loginpassword.message]})]}),s.jsxs(L,{sx:{mt:2,gap:2},children:[s.jsx(ue,{error:a,type:"login"}),s.jsx(ce,{type:"submit",fullWidth:!0,loading:r,disabled:!d,children:"Sign in"})]})]})},Ur=g.forwardRef(({onChange:e,value:r,...a},n)=>{const[i,t]=g.useState(r||"");g.useEffect(()=>{t(r||"")},[r]);const o=l=>{const c=l.target.value;t(c),e(c)},d=K(i);return s.jsxs(L,{spacing:.5,sx:{"--hue":Math.min(i.length*10,120)},children:[s.jsx(H,{type:"password",value:i,onChange:o,ref:n,...a,autoComplete:"current-password"}),s.jsx(jr,{determinate:!0,size:"sm",value:K(i),sx:{bgcolor:"background.level3",color:"hsl(var(--hue) 80% 40%)"}}),s.jsxs(V,{level:"body-xs",sx:{alignSelf:"flex-end",color:"hsl(var(--hue) 80% 30%)"},children:[d===25&&"Very weak - add numbers, caps, or symbols",d===50&&"Weak - try adding uppercase letters or special characters",d===75&&"Strong - try adding special characters for extra security",d===100&&"Very strong - your password is secure"]})]})}),Or=()=>{const[e,{isLoading:r,error:a}]=Fe(),{reset:n,control:i,register:t,formState:{errors:o,isValid:d}}=se({mode:"onChange",resolver:oe(ne(["name","email","signuppassword"]))});return s.jsxs(ae,{autoComplete:"on",control:i,onSubmit:async({data:{name:l,email:c,signuppassword:v}})=>{await e({name:l,email:c,password:v}),n()},children:[s.jsxs(_,{error:!!(o!=null&&o.name),children:[s.jsx(S,{children:"Name"}),s.jsx(H,{type:"text",...t("name"),autoComplete:"given-name"}),(o==null?void 0:o.name)&&s.jsxs(z,{children:[s.jsx(I,{}),o.name.message]})]}),s.jsxs(_,{error:!!(o!=null&&o.email),children:[s.jsx(S,{children:"Email"}),s.jsx(H,{type:"email",...t("email"),autoComplete:"email"}),(o==null?void 0:o.email)&&s.jsxs(z,{children:[s.jsx(I,{}),o.email.message]})]}),s.jsxs(_,{error:!!(o!=null&&o.signuppassword),children:[s.jsx(S,{children:"Password"}),s.jsx(_e,{name:"signuppassword",control:i,render:({field:l})=>s.jsx(Ur,{...l})}),(o==null?void 0:o.signuppassword)&&s.jsxs(z,{children:[s.jsx(I,{}),o.signuppassword.message]})]}),s.jsxs(L,{sx:{mt:2,gap:2},children:[s.jsx(ue,{error:a,type:"signup"}),s.jsx(ce,{type:"submit",fullWidth:!0,loading:r,disabled:!d,children:"Sign up"})]})]})},Jr=()=>{const[e,r]=g.useState(!1);return s.jsxs(b,{component:"main",sx:{my:"auto",py:2,pb:5,display:"flex",flexDirection:"column",gap:2,width:400,maxWidth:"100%",mx:"auto",borderRadius:"sm","& form":{display:"flex",flexDirection:"column",gap:2}},children:[s.jsx(L,{sx:{mb:2,gap:4},children:s.jsxs(L,{sx:{gap:1},children:[s.jsx(V,{level:"h3",children:e?"Sign up":"Sign in"}),s.jsxs(V,{level:"body-sm",children:[e?"Have an account?":"New to PhoneBook?"," ",s.jsx(zr,{level:"title-sm",onClick:()=>r(!e),children:e?"Sign in!":"Sign up!"})]})]})}),s.jsx(L,{sx:{mt:2,gap:4},children:e?s.jsx(Or,{}):s.jsx(Er,{})})]})},qr=()=>s.jsxs(Ze,{defaultMode:"system",disableTransitionOnChange:!0,children:[s.jsx(er,{}),s.jsx(rr,{styles:{":root":{"--Collapsed-breakpoint":"769px","--Cover-width":"50vw","--Form-maxWidth":"800px","--Transition-duration":"0.4s"}}}),s.jsx(b,{sx:e=>({width:"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",transition:"width var(--Transition-duration)",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",position:"relative",zIndex:1,display:"flex",justifyContent:"flex-end",backdropFilter:"blur(12px)",backgroundColor:"rgba(255 255 255 / 0.2)",[e.getColorSchemeSelector("dark")]:{backgroundColor:"rgba(19 19 24 / 0.4)"}}),children:s.jsxs(b,{sx:{display:"flex",flexDirection:"column",minHeight:"100dvh",width:"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",maxWidth:"100%",px:2},children:[s.jsx(Wr,{}),s.jsx(Jr,{}),s.jsx(Mr,{})]})}),s.jsx(Nr,{})]});export{qr as default};
