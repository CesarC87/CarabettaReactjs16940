(this["webpackJsonpcesar-carabetta"]=this["webpackJsonpcesar-carabetta"]||[]).push([[0],{27:function(e,t,c){e.exports={card:"Card_card__izz9I",title:"Card_title__1aLrd",titleDiv:"Card_titleDiv__4oZCT",descriptionDiv:"Card_descriptionDiv__rS5Ue",imageContainer:"Card_imageContainer__3pFlM",image:"Card_image__3IBwX",description:"Card_description__2eEDG",price:"Card_price__O3oub",button:"Card_button__1zMip",hr:"Card_hr__2nAwj"}},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},75:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var a,i,n,r,s,l=c(0),o=c.n(l),C=c(30),j=c.n(C),d=(c(65),c(66),c(17)),b=c(15),u=c(31),h=c(12),m=c(2),O=Object(l.createContext)(),x=function(e){var t=e.children,c=Object(l.useState)([]),a=Object(h.a)(c,2),i=a[0],n=a[1];return Object(m.jsx)(O.Provider,{value:{cart:i,addItem:function(e){var t=i.find((function(t){return t.id===e.id}));n(t?i.map((function(c){return c.id===t.id?e:c})):[].concat(Object(u.a)(i),[e]))},deleteItem:function(e){n(i.filter((function(t){return t.id!==e.id}))),console.log(i)},clearCart:function(){n([])}},children:t})},p=(c(68),c(38)),f=c(42),v=(c(99),f.a.initializeApp({apiKey:"AIzaSyBRGgiGxIkfHKTxIaA285A_rB-JDW0LWfY",authDomain:"carabettareactjs16940.firebaseapp.com",projectId:"carabettareactjs16940",storageBucket:"carabettareactjs16940.appspot.com",messagingSenderId:"561131477339",appId:"1:561131477339:web:71fb6b1e5d0343ce46a27e"})),g=function(){return f.a.firestore(v)},N=["title","titleId"];function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var c,a,i=function(e,t){if(null==e)return{};var c,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)c=n[a],t.indexOf(c)>=0||(i[c]=e[c]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)c=n[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(i[c]=e[c])}return i}function V(e,t){var c=e.title,o=e.titleId,C=_(e,N);return l.createElement("svg",H({width:300,height:100,viewBox:"0 0 300 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},C),c?l.createElement("title",{id:o},c):null,a||(a=l.createElement("path",{d:"M91 44.8039C95 47.1133 95 52.8868 91 55.1962L34 88.1051C30 90.4145 25 87.5278 25 82.909L25 17.091C25 12.4722 30 9.58548 34 11.8949L91 44.8039Z",fill:"#1CAE8B"})),i||(i=l.createElement("circle",{cx:49,cy:50,r:27,fill:"white"})),n||(n=l.createElement("g",{filter:"url(#filter0_d_22:6)"},l.createElement("path",{d:"M120.667 41.84H112.827V62H109.947V41.84H102.107V39.28H120.667V41.84ZM159.479 41.84H151.639V62H148.759V41.84H140.919V39.28H159.479V41.84ZM208.853 39.408H211.573L214.581 47.312L217.621 39.408H220.341L216.405 49.296L220.309 58.672L227.989 39.28H231.125L221.621 62H219.125L214.613 51.28L210.069 62H207.573L198.101 39.28H201.205L208.917 58.672L212.789 49.296L208.853 39.408Z",fill:"#1CAE8B"}),l.createElement("path",{d:"M130.787 62.32C129.123 62.32 127.651 61.9253 126.371 61.136C125.112 60.3253 124.131 59.2693 123.427 57.968C122.723 56.6453 122.371 55.216 122.371 53.68C122.371 52.1227 122.723 50.6933 123.427 49.392C124.152 48.0693 125.144 47.0133 126.403 46.224C127.683 45.4133 129.144 45.008 130.787 45.008C132.451 45.008 133.912 45.4133 135.171 46.224C136.451 47.0133 137.443 48.0693 138.147 49.392C138.872 50.6933 139.235 52.1227 139.235 53.68C139.235 55.216 138.872 56.6453 138.147 57.968C137.443 59.2693 136.461 60.3253 135.203 61.136C133.944 61.9253 132.472 62.32 130.787 62.32ZM125.251 53.712C125.251 54.864 125.496 55.9093 125.987 56.848C126.499 57.7867 127.171 58.5333 128.003 59.088C128.835 59.6213 129.763 59.888 130.787 59.888C131.811 59.888 132.739 59.6107 133.571 59.056C134.424 58.5013 135.096 57.7547 135.587 56.816C136.099 55.856 136.355 54.8 136.355 53.648C136.355 52.496 136.099 51.4507 135.587 50.512C135.096 49.5733 134.424 48.8267 133.571 48.272C132.739 47.7173 131.811 47.44 130.787 47.44C129.763 47.44 128.835 47.728 128.003 48.304C127.171 48.8587 126.499 49.6053 125.987 50.544C125.496 51.4827 125.251 52.5387 125.251 53.712ZM176.799 62H173.983V52.656C173.983 50.9493 173.674 49.6693 173.055 48.816C172.458 47.9627 171.594 47.536 170.463 47.536C169.738 47.536 169.002 47.728 168.255 48.112C167.53 48.496 166.89 49.0187 166.335 49.68C165.781 50.32 165.375 51.0667 165.119 51.92V62H162.303V38.64H165.119V48.88C165.781 47.6853 166.677 46.7467 167.807 46.064C168.959 45.36 170.197 45.008 171.519 45.008C172.842 45.008 173.887 45.3173 174.655 45.936C175.423 46.5547 175.967 47.3973 176.287 48.464C176.629 49.5093 176.799 50.6933 176.799 52.016V62ZM188.57 62.32C186.906 62.32 185.434 61.9253 184.154 61.136C182.874 60.3467 181.872 59.2907 181.146 57.968C180.421 56.6453 180.058 55.2053 180.058 53.648C180.058 52.0693 180.421 50.6293 181.146 49.328C181.872 48.0267 182.874 46.9813 184.154 46.192C185.456 45.4027 186.938 45.008 188.602 45.008C190.288 45.008 191.749 45.4133 192.986 46.224C194.245 47.0133 195.216 48.0587 195.898 49.36C196.602 50.64 196.954 52.0267 196.954 53.52C196.954 53.9893 196.933 54.352 196.89 54.608H183.034C183.12 55.696 183.418 56.6667 183.93 57.52C184.464 58.352 185.146 59.0133 185.978 59.504C186.81 59.9733 187.706 60.208 188.666 60.208C189.69 60.208 190.65 59.952 191.546 59.44C192.464 58.928 193.093 58.256 193.434 57.424L195.866 58.096C195.333 59.3333 194.405 60.3467 193.082 61.136C191.76 61.9253 190.256 62.32 188.57 62.32ZM182.938 52.656H194.33C194.245 51.568 193.936 50.608 193.402 49.776C192.869 48.944 192.186 48.2933 191.354 47.824C190.522 47.3547 189.605 47.12 188.602 47.12C187.621 47.12 186.714 47.3547 185.882 47.824C185.05 48.2933 184.368 48.944 183.834 49.776C183.322 50.608 183.024 51.568 182.938 52.656ZM240.943 62.32C239.279 62.32 237.807 61.9253 236.527 61.136C235.268 60.3253 234.287 59.2693 233.583 57.968C232.879 56.6453 232.527 55.216 232.527 53.68C232.527 52.1227 232.879 50.6933 233.583 49.392C234.308 48.0693 235.3 47.0133 236.559 46.224C237.839 45.4133 239.3 45.008 240.943 45.008C242.607 45.008 244.068 45.4133 245.327 46.224C246.607 47.0133 247.599 48.0693 248.303 49.392C249.028 50.6933 249.391 52.1227 249.391 53.68C249.391 55.216 249.028 56.6453 248.303 57.968C247.599 59.2693 246.618 60.3253 245.359 61.136C244.1 61.9253 242.628 62.32 240.943 62.32ZM235.407 53.712C235.407 54.864 235.652 55.9093 236.143 56.848C236.655 57.7867 237.327 58.5333 238.159 59.088C238.991 59.6213 239.919 59.888 240.943 59.888C241.967 59.888 242.895 59.6107 243.727 59.056C244.58 58.5013 245.252 57.7547 245.743 56.816C246.255 55.856 246.511 54.8 246.511 53.648C246.511 52.496 246.255 51.4507 245.743 50.512C245.252 49.5733 244.58 48.8267 243.727 48.272C242.895 47.7173 241.967 47.44 240.943 47.44C239.919 47.44 238.991 47.728 238.159 48.304C237.327 48.8587 236.655 49.6053 236.143 50.544C235.652 51.4827 235.407 52.5387 235.407 53.712ZM261.635 47.76C260.227 47.7813 258.979 48.144 257.891 48.848C256.825 49.5307 256.067 50.48 255.619 51.696V62H252.803V45.296H255.427V49.168C256.003 48.016 256.761 47.088 257.699 46.384C258.659 45.6587 259.662 45.2533 260.707 45.168C260.921 45.168 261.102 45.168 261.251 45.168C261.401 45.168 261.529 45.1787 261.635 45.2V47.76ZM264.492 38.64H267.308V57.68C267.308 58.5973 267.436 59.1627 267.692 59.376C267.948 59.5893 268.258 59.696 268.62 59.696C269.068 59.696 269.495 59.6533 269.9 59.568C270.306 59.4613 270.647 59.3547 270.924 59.248L271.372 61.552C270.903 61.744 270.348 61.904 269.708 62.032C269.068 62.16 268.503 62.224 268.012 62.224C266.924 62.224 266.06 61.9147 265.42 61.296C264.802 60.6773 264.492 59.8133 264.492 58.704V38.64ZM272.497 53.68C272.497 52.1013 272.817 50.6613 273.457 49.36C274.118 48.0373 275.014 46.9813 276.145 46.192C277.297 45.4027 278.609 45.008 280.081 45.008C281.425 45.008 282.63 45.36 283.697 46.064C284.763 46.768 285.595 47.6213 286.193 48.624V38.64H289.009V58.8C289.009 59.4613 289.307 59.8027 289.905 59.824V62C289.371 62.0853 288.955 62.128 288.657 62.128C288.102 62.128 287.611 61.936 287.185 61.552C286.779 61.168 286.577 60.7413 286.577 60.272V58.864C285.915 59.9307 285.03 60.7733 283.921 61.392C282.811 62.0107 281.659 62.32 280.465 62.32C278.929 62.32 277.553 61.9253 276.337 61.136C275.142 60.3253 274.203 59.2693 273.521 57.968C272.838 56.6453 272.497 55.216 272.497 53.68ZM286.193 56.144V51.344C285.937 50.6187 285.521 49.968 284.945 49.392C284.369 48.7947 283.718 48.3253 282.993 47.984C282.289 47.6213 281.585 47.44 280.881 47.44C279.793 47.44 278.833 47.7387 278.001 48.336C277.19 48.9333 276.55 49.712 276.081 50.672C275.633 51.632 275.409 52.6453 275.409 53.712C275.409 54.8213 275.654 55.8453 276.145 56.784C276.657 57.7227 277.35 58.48 278.225 59.056C279.099 59.6107 280.07 59.888 281.137 59.888C281.819 59.888 282.523 59.728 283.249 59.408C283.974 59.0667 284.614 58.608 285.169 58.032C285.723 57.456 286.065 56.8267 286.193 56.144Z",fill:"black"}))),r||(r=l.createElement("path",{d:"M42.5384 41.645H40.4559V47H39.6909V41.645H37.6084V40.965H42.5384V41.645ZM44.9456 43.2175C44.5716 43.2232 44.2401 43.3195 43.9511 43.5065C43.6678 43.6878 43.4666 43.94 43.3476 44.263V47H42.5996V42.563H43.2966V43.5915C43.4496 43.2855 43.6508 43.039 43.9001 42.852C44.1551 42.6593 44.4214 42.5517 44.6991 42.529C44.7558 42.529 44.8039 42.529 44.8436 42.529C44.8833 42.529 44.9173 42.5318 44.9456 42.5375V43.2175ZM45.339 45.7165C45.339 45.4332 45.4183 45.1895 45.577 44.9855C45.7413 44.7758 45.9652 44.6143 46.2485 44.501C46.5318 44.3877 46.8605 44.331 47.2345 44.331C47.4328 44.331 47.6425 44.348 47.8635 44.382C48.0845 44.4103 48.28 44.4557 48.45 44.518V44.195C48.45 43.855 48.348 43.5887 48.144 43.396C47.94 43.1977 47.651 43.0985 47.277 43.0985C47.0333 43.0985 46.7982 43.1438 46.5715 43.2345C46.3505 43.3195 46.1153 43.4442 45.866 43.6085L45.594 43.0815C45.883 42.8832 46.172 42.7358 46.461 42.6395C46.75 42.5375 47.0503 42.4865 47.362 42.4865C47.9287 42.4865 48.3763 42.6452 48.705 42.9625C49.0337 43.2742 49.198 43.7105 49.198 44.2715V46.15C49.198 46.3257 49.2773 46.4163 49.436 46.422V47C49.3623 47.0113 49.2972 47.0198 49.2405 47.0255C49.1895 47.0312 49.147 47.034 49.113 47.034C48.9373 47.034 48.8042 46.9858 48.7135 46.8895C48.6285 46.7932 48.5803 46.6912 48.569 46.5835L48.552 46.303C48.3593 46.5523 48.1072 46.745 47.7955 46.881C47.4838 47.017 47.175 47.085 46.869 47.085C46.5743 47.085 46.3108 47.0255 46.0785 46.9065C45.8462 46.7818 45.6648 46.6175 45.5345 46.4135C45.4042 46.2038 45.339 45.9715 45.339 45.7165ZM48.229 46.031C48.297 45.9517 48.3508 45.8723 48.3905 45.793C48.4302 45.708 48.45 45.6372 48.45 45.5805V45.028C48.0873 44.8863 47.7133 44.8155 47.328 44.8155C46.9483 44.8155 46.6395 44.892 46.4015 45.045C46.1692 45.1923 46.053 45.3963 46.053 45.657C46.053 45.7987 46.0898 45.9375 46.1635 46.0735C46.2428 46.2038 46.3562 46.3115 46.5035 46.3965C46.6565 46.4815 46.8435 46.524 47.0645 46.524C47.2968 46.524 47.5178 46.4787 47.7275 46.388C47.9372 46.2917 48.1043 46.1727 48.229 46.031ZM51.5279 47L49.7854 42.563H50.5674L51.9614 46.286L53.3554 42.563H54.0864L52.3439 47H51.5279ZM56.649 47.085C56.207 47.085 55.816 46.9802 55.476 46.7705C55.136 46.5608 54.8697 46.2803 54.677 45.929C54.4844 45.5777 54.388 45.1952 54.388 44.7815C54.388 44.3622 54.4844 43.9797 54.677 43.634C54.8697 43.2883 55.136 43.0107 55.476 42.801C55.8217 42.5913 56.2155 42.4865 56.6575 42.4865C57.1052 42.4865 57.4934 42.5942 57.822 42.8095C58.1564 43.0192 58.4142 43.2968 58.5955 43.6425C58.7825 43.9825 58.876 44.3508 58.876 44.7475C58.876 44.8722 58.8704 44.9685 58.859 45.0365H55.1785C55.2012 45.3255 55.2805 45.5833 55.4165 45.81C55.5582 46.031 55.7395 46.2067 55.9605 46.337C56.1815 46.4617 56.4195 46.524 56.6745 46.524C56.9465 46.524 57.2015 46.456 57.4395 46.32C57.6832 46.184 57.8504 46.0055 57.941 45.7845L58.587 45.963C58.4454 46.2917 58.1989 46.5608 57.8475 46.7705C57.4962 46.9802 57.0967 47.085 56.649 47.085ZM55.153 44.518H58.179C58.1564 44.229 58.0742 43.974 57.9325 43.753C57.7909 43.532 57.6095 43.3592 57.3885 43.2345C57.1675 43.1098 56.9239 43.0475 56.6575 43.0475C56.3969 43.0475 56.156 43.1098 55.935 43.2345C55.714 43.3592 55.5327 43.532 55.391 43.753C55.255 43.974 55.1757 44.229 55.153 44.518ZM59.7245 40.795H60.4725V45.8525C60.4725 46.0962 60.5065 46.2463 60.5745 46.303C60.6425 46.3597 60.7247 46.388 60.821 46.388C60.94 46.388 61.0533 46.3767 61.161 46.354C61.2687 46.3257 61.3593 46.2973 61.433 46.269L61.552 46.881C61.4273 46.932 61.28 46.9745 61.11 47.0085C60.94 47.0425 60.7898 47.0595 60.6595 47.0595C60.3705 47.0595 60.141 46.9773 59.971 46.813C59.8067 46.6487 59.7245 46.4192 59.7245 46.1245V40.795ZM32.0236 58.32V59H27.9266V52.965H31.9471V53.645H28.6916V55.6H31.5221V56.2375H28.6916V58.32H32.0236ZM33.2856 54.563L34.4586 56.195L34.5266 56.331L34.6031 56.195L35.7676 54.563H36.6006L34.9601 56.79L36.6091 59H35.7761L34.6031 57.3765L34.5266 57.249L34.4586 57.3765L33.2856 59H32.4526L34.1016 56.79L32.4611 54.563H33.2856ZM39.7005 59.085C39.3378 59.085 39.0148 58.9943 38.7315 58.813C38.4482 58.6317 38.2243 58.4022 38.06 58.1245V60.8105H37.312V54.563H37.975V55.396C38.1507 55.124 38.3802 54.9058 38.6635 54.7415C38.9468 54.5715 39.2557 54.4865 39.59 54.4865C39.896 54.4865 40.1765 54.5488 40.4315 54.6735C40.6865 54.7982 40.9075 54.9682 41.0945 55.1835C41.2815 55.3988 41.426 55.6453 41.528 55.923C41.6357 56.195 41.6895 56.4812 41.6895 56.7815C41.6895 57.2008 41.6045 57.5862 41.4345 57.9375C41.2702 58.2888 41.0378 58.5693 40.7375 58.779C40.4372 58.983 40.0915 59.085 39.7005 59.085ZM39.471 58.439C39.7657 58.439 40.0207 58.3597 40.236 58.201C40.4513 58.0423 40.6185 57.8355 40.7375 57.5805C40.8622 57.3255 40.9245 57.0592 40.9245 56.7815C40.9245 56.4812 40.8565 56.2063 40.7205 55.957C40.5902 55.7077 40.4088 55.5093 40.1765 55.362C39.9498 55.209 39.692 55.1325 39.403 55.1325C39.2273 55.1325 39.0403 55.1778 38.842 55.2685C38.6493 55.3592 38.4793 55.481 38.332 55.634C38.1903 55.7813 38.0997 55.9457 38.06 56.127V57.3935C38.1847 57.6882 38.3745 57.9375 38.6295 58.1415C38.8902 58.3398 39.1707 58.439 39.471 58.439ZM44.5714 59.085C44.1294 59.085 43.7384 58.9802 43.3984 58.7705C43.0584 58.5608 42.7921 58.2803 42.5994 57.929C42.4067 57.5777 42.3104 57.1952 42.3104 56.7815C42.3104 56.3622 42.4067 55.9797 42.5994 55.634C42.7921 55.2883 43.0584 55.0107 43.3984 54.801C43.7441 54.5913 44.1379 54.4865 44.5799 54.4865C45.0276 54.4865 45.4157 54.5942 45.7444 54.8095C46.0787 55.0192 46.3366 55.2968 46.5179 55.6425C46.7049 55.9825 46.7984 56.3508 46.7984 56.7475C46.7984 56.8722 46.7927 56.9685 46.7814 57.0365H43.1009C43.1236 57.3255 43.2029 57.5833 43.3389 57.81C43.4806 58.031 43.6619 58.2067 43.8829 58.337C44.1039 58.4617 44.3419 58.524 44.5969 58.524C44.8689 58.524 45.1239 58.456 45.3619 58.32C45.6056 58.184 45.7727 58.0055 45.8634 57.7845L46.5094 57.963C46.3677 58.2917 46.1212 58.5608 45.7699 58.7705C45.4186 58.9802 45.0191 59.085 44.5714 59.085ZM43.0754 56.518H46.1014C46.0787 56.229 45.9966 55.974 45.8549 55.753C45.7132 55.532 45.5319 55.3592 45.3109 55.2345C45.0899 55.1098 44.8462 55.0475 44.5799 55.0475C44.3192 55.0475 44.0784 55.1098 43.8574 55.2345C43.6364 55.3592 43.4551 55.532 43.3134 55.753C43.1774 55.974 43.0981 56.229 43.0754 56.518ZM49.9759 55.2175C49.6019 55.2232 49.2704 55.3195 48.9814 55.5065C48.698 55.6878 48.4969 55.94 48.3779 56.263V59H47.6299V54.563H48.3269V55.5915C48.4799 55.2855 48.681 55.039 48.9304 54.852C49.1854 54.6593 49.4517 54.5517 49.7294 54.529C49.786 54.529 49.8342 54.529 49.8739 54.529C49.9135 54.529 49.9475 54.5318 49.9759 54.5375V55.2175ZM50.7178 53.73V52.795H51.4658V53.73H50.7178ZM50.7178 59V54.563H51.4658V59H50.7178ZM54.6402 59.085C54.1982 59.085 53.8072 58.9802 53.4672 58.7705C53.1272 58.5608 52.8609 58.2803 52.6682 57.929C52.4756 57.5777 52.3792 57.1952 52.3792 56.7815C52.3792 56.3622 52.4756 55.9797 52.6682 55.634C52.8609 55.2883 53.1272 55.0107 53.4672 54.801C53.8129 54.5913 54.2067 54.4865 54.6487 54.4865C55.0964 54.4865 55.4846 54.5942 55.8132 54.8095C56.1476 55.0192 56.4054 55.2968 56.5867 55.6425C56.7737 55.9825 56.8672 56.3508 56.8672 56.7475C56.8672 56.8722 56.8616 56.9685 56.8502 57.0365H53.1697C53.1924 57.3255 53.2717 57.5833 53.4077 57.81C53.5494 58.031 53.7307 58.2067 53.9517 58.337C54.1727 58.4617 54.4107 58.524 54.6657 58.524C54.9377 58.524 55.1927 58.456 55.4307 58.32C55.6744 58.184 55.8416 58.0055 55.9322 57.7845L56.5782 57.963C56.4366 58.2917 56.1901 58.5608 55.8387 58.7705C55.4874 58.9802 55.0879 59.085 54.6402 59.085ZM53.1442 56.518H56.1702C56.1476 56.229 56.0654 55.974 55.9237 55.753C55.7821 55.532 55.6007 55.3592 55.3797 55.2345C55.1587 55.1098 54.9151 55.0475 54.6487 55.0475C54.3881 55.0475 54.1472 55.1098 53.9262 55.2345C53.7052 55.3592 53.5239 55.532 53.3822 55.753C53.2462 55.974 53.1669 56.229 53.1442 56.518ZM61.5492 59H60.8012V56.518C60.8012 56.0477 60.7275 55.7048 60.5802 55.4895C60.4385 55.2685 60.2204 55.158 59.9257 55.158C59.7217 55.158 59.5177 55.209 59.3137 55.311C59.1154 55.413 58.9369 55.5518 58.7782 55.7275C58.6252 55.8975 58.5147 56.0958 58.4467 56.3225V59H57.6987V54.563H58.3787V55.515C58.5544 55.2033 58.8065 54.954 59.1352 54.767C59.4695 54.58 59.8322 54.4865 60.2232 54.4865C60.5689 54.4865 60.8352 54.5687 61.0222 54.733C61.2149 54.8917 61.3509 55.1127 61.4302 55.396C61.5095 55.6737 61.5492 55.991 61.5492 56.348V59ZM64.6759 59.085C64.2339 59.085 63.8429 58.9802 63.5029 58.7705C63.1629 58.5552 62.8966 58.2718 62.7039 57.9205C62.5112 57.5692 62.4149 57.1867 62.4149 56.773C62.4149 56.3537 62.5084 55.9712 62.6954 55.6255C62.8824 55.2798 63.1459 55.005 63.4859 54.801C63.8259 54.5913 64.2197 54.4865 64.6674 54.4865C65.1037 54.4865 65.4834 54.5857 65.8064 54.784C66.1351 54.9767 66.3787 55.2373 66.5374 55.566L65.8064 55.7955C65.6931 55.5858 65.5344 55.4243 65.3304 55.311C65.1264 55.192 64.8997 55.1325 64.6504 55.1325C64.3784 55.1325 64.1291 55.2033 63.9024 55.345C63.6814 55.4867 63.5057 55.6822 63.3754 55.9315C63.2451 56.1752 63.1799 56.4557 63.1799 56.773C63.1799 57.0847 63.2451 57.368 63.3754 57.623C63.5114 57.8723 63.6899 58.0707 63.9109 58.218C64.1376 58.3653 64.3869 58.439 64.6589 58.439C64.8346 58.439 65.0017 58.4078 65.1604 58.3455C65.3247 58.2832 65.4664 58.201 65.5854 58.099C65.7101 57.9913 65.7951 57.8752 65.8404 57.7505L66.5714 57.9715C66.4411 58.2945 66.2031 58.5608 65.8574 58.7705C65.5174 58.9802 65.1236 59.085 64.6759 59.085ZM69.3409 59.085C68.8989 59.085 68.5079 58.9802 68.1679 58.7705C67.8279 58.5608 67.5616 58.2803 67.3689 57.929C67.1763 57.5777 67.0799 57.1952 67.0799 56.7815C67.0799 56.3622 67.1763 55.9797 67.3689 55.634C67.5616 55.2883 67.8279 55.0107 68.1679 54.801C68.5136 54.5913 68.9074 54.4865 69.3494 54.4865C69.7971 54.4865 70.1853 54.5942 70.5139 54.8095C70.8483 55.0192 71.1061 55.2968 71.2874 55.6425C71.4744 55.9825 71.5679 56.3508 71.5679 56.7475C71.5679 56.8722 71.5623 56.9685 71.5509 57.0365H67.8704C67.8931 57.3255 67.9724 57.5833 68.1084 57.81C68.2501 58.031 68.4314 58.2067 68.6524 58.337C68.8734 58.4617 69.1114 58.524 69.3664 58.524C69.6384 58.524 69.8934 58.456 70.1314 58.32C70.3751 58.184 70.5423 58.0055 70.6329 57.7845L71.2789 57.963C71.1373 58.2917 70.8908 58.5608 70.5394 58.7705C70.1881 58.9802 69.7886 59.085 69.3409 59.085ZM67.8449 56.518H70.8709C70.8483 56.229 70.7661 55.974 70.6244 55.753C70.4828 55.532 70.3014 55.3592 70.0804 55.2345C69.8594 55.1098 69.6158 55.0475 69.3494 55.0475C69.0888 55.0475 68.8479 55.1098 68.6269 55.2345C68.4059 55.3592 68.2246 55.532 68.0829 55.753C67.9469 55.974 67.8676 56.229 67.8449 56.518Z",fill:"black"})),s||(s=l.createElement("defs",null,l.createElement("filter",{id:"filter0_d_22:6",x:98.1065,y:38.64,width:195.798,height:31.68,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),l.createElement("feOffset",{dy:4}),l.createElement("feGaussianBlur",{stdDeviation:2}),l.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),l.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),l.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_22:6"}),l.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_22:6",result:"shape"})))))}var y=l.forwardRef(V),M=(c.p,c(28)),w=function(){var e=Object(l.useContext)(O).cart;return Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("div",{className:"navContainer1",children:Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)(y,{})})}),Object(m.jsxs)("div",{className:"navContainer2",children:[Object(m.jsx)(d.b,{to:"/category/paquetes",children:Object(m.jsxs)("div",{className:"navContainer2__item",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"fluent:luggage-20-regular"}),Object(m.jsx)("label",{children:"Paquetes"})]})}),Object(m.jsx)(d.b,{to:"/category/vuelos",children:Object(m.jsxs)("div",{className:"navContainer2__item",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"iconoir:airplane"}),Object(m.jsx)("label",{children:"Vuelos"})]})}),Object(m.jsx)(d.b,{to:"/category/alojamientos",children:Object(m.jsxs)("div",{className:"navContainer2__item",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"bx:bx-hotel"}),Object(m.jsx)("label",{children:"Alojamientos"})]})}),Object(m.jsx)(d.b,{to:"/category/vuelos",children:Object(m.jsxs)("div",{className:"navContainer2__item",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"ic:outline-local-activity"}),Object(m.jsx)("label",{children:"Actividades"})]})}),Object(m.jsx)(d.b,{to:"/",children:Object(m.jsxs)("div",{className:"navContainer2__item",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"clarity:car-line"}),Object(m.jsx)("label",{children:"Autos"})]})}),Object(m.jsxs)(d.b,{to:"/Cart",className:"toCart",children:[Object(m.jsx)(M.a,{className:"navContainer2__item--icono",icon:"ant-design:shopping-cart-outlined"}),0!==e.length&&Object(m.jsx)("span",{className:"h5 mx-1",children:e.length})]})]})]})},L=c(10),k=c(101),Z=(c(75),function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(k.a,{children:[Object(m.jsxs)(k.a.Item,{interval:1e3,children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:"First slide"})}),Object(m.jsxs)(k.a.Caption,{children:[Object(m.jsx)("h3",{children:"Vol\xe1 por el mundo!"}),Object(m.jsx)("p",{children:"Disfrut\xe1 las mejores ofertas y cuotas sin inter\xe9s!"})]})]}),Object(m.jsxs)(k.a.Item,{interval:1e3,children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1470214203634-e436a8848e23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80",alt:"Second slide"})}),Object(m.jsxs)(k.a.Caption,{className:"captionEsp",children:[Object(m.jsx)("h3",{children:"Alojate en los mejores Hoteles, caba\xf1as y m\xe1s!"}),Object(m.jsx)("p",{children:"El mundo es tu hogar"})]})]}),Object(m.jsxs)(k.a.Item,{children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1516817153573-7b617832a471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:"Third slide"})}),Object(m.jsxs)(k.a.Caption,{className:"captionEsp2",children:[Object(m.jsx)("h3",{children:"Las mejores actividades para disfrutar en familia"}),Object(m.jsx)("p",{children:"Asistencia al viajero las 24hs"})]})]})]})})}),I=c(1),S=c(4),E=c(8),A=c(9),D=c(59),B=c.n(D),F=c(27),T=c.n(F),q=function(e){var t=e.title,c=e.description,a=e.image,i=e.price,n=e.productId;return Object(m.jsx)("div",{children:Object(m.jsx)(d.b,{style:{textDecoration:"none",color:"inherit"},to:"/product/".concat(n),children:Object(m.jsxs)("div",{className:T.a.card,children:[Object(m.jsx)("div",{className:T.a.titleDiv,children:Object(m.jsx)("h3",{className:T.a.title,children:t})}),Object(m.jsx)("div",{className:T.a.imageContainer,children:Object(m.jsx)("img",{className:T.a.image,src:a,alt:t})}),Object(m.jsx)("div",{className:T.a.descriptionDiv,children:Object(m.jsx)("p",{className:T.a.description,children:c})}),Object(m.jsx)("hr",{className:T.a.hr}),Object(m.jsxs)("p",{className:T.a.price,children:["$ ",i]}),Object(m.jsx)("button",{className:T.a.button,children:"Ver detalle"})]})})})};c(91);function z(e){var t=e.className,c=e.style,a=e.onClick;return Object(m.jsx)("div",{className:t,style:Object(L.a)(Object(L.a)({},c),{},{display:"block"}),onClick:a})}function G(e){var t=e.className,c=e.style,a=e.onClick;return Object(m.jsx)("div",{className:t,style:Object(L.a)(Object(L.a)({},c),{},{display:"block"}),onClick:a})}var W=function(e){Object(E.a)(c,e);var t=Object(A.a)(c);function c(){return Object(I.a)(this,c),t.apply(this,arguments)}return Object(S.a)(c,[{key:"render",value:function(e){var t,c={dots:!0,infinite:!0,slidesToShow:5,slidesToScroll:2,nextArrow:Object(m.jsx)(z,{}),prevArrow:Object(m.jsx)(G,{})};return Object(m.jsxs)("div",{className:"CustomArrowsContainer",children:[Object(m.jsx)("h4",{className:"h4Slider",children:"Eleg\xed tu experiencia"}),Object(m.jsx)(B.a,Object(L.a)(Object(L.a)({},c),{},{children:null===(t=this.props.data)||void 0===t?void 0:t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(q,{title:e.title,description:e.description,image:e.image,productId:e.id,price:e.price},e.id)})}))}))]})}}]),c}(l.Component),P=function(e){e.greeting;var t=o.a.useState([]),c=Object(h.a)(t,2),a=c[0],i=c[1],n=o.a.useState(!1),r=Object(h.a)(n,2),s=r[0],l=r[1],C=o.a.useState(null),j=Object(h.a)(C,2),d=j[0],b=j[1];return o.a.useEffect((function(){var e=g().collection("products");l(!0),e.get().then((function(e){console.log(e),e.empty?console.log("No hay productos para mostrar"):i(e.docs.map((function(e){return Object(L.a)({id:e.id},e.data())})))})).catch((function(e){return b(e)})).finally((function(){return l(!1)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"carouselContainerHome",children:Object(m.jsx)(Z,{})}),s&&Object(m.jsx)("p",{children:"Cargando..."}),d&&Object(m.jsxs)("p",{children:["Ha habido un error: ",d.status," ",d.statusText]}),Object(m.jsx)(W,{data:a})]})},R=(c(92),c(93),function(e){var t=e.initialStock,c=e.onAdd,a=e.dirToCart,i=Object(l.useState)(t),n=Object(h.a)(i,2),r=n[0],s=n[1],o=Object(l.useState)(1),C=Object(h.a)(o,2),j=C[0],b=C[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"masMenos",children:[Object(m.jsx)("button",{onClick:function(){j>0&&(b(j-1),s(r+1))},className:"btnMenos",children:Object(m.jsx)(M.a,{icon:"carbon:subtract-alt"})}),Object(m.jsx)("p",{id:"clicks",children:j}),Object(m.jsx)("button",{onClick:function(){r>0&&(b(j+1),s(r-1))},className:"btnMas",children:Object(m.jsx)(M.a,{icon:"carbon:add-alt"})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return c(j)},className:"btn-agregar",children:"Agregar"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:["Stock Disponible: ",r," "]})}),Object(m.jsx)("div",{children:a&&Object(m.jsx)(d.b,{to:"/cart",children:Object(m.jsx)("button",{children:"Finalizar Compra"})})})]})}),U=(c(94),function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(k.a,{children:[Object(m.jsxs)(k.a.Item,{interval:1e3,children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://media.istockphoto.com/photos/serene-young-man-watching-plane-before-departure-picture-id619394704?b=1&k=20&m=619394704&s=170667a&w=0&h=uIWCqUwzR4WRxTa3FNqoN24egoK1FMg0AysHC4WfG1c=",alt:"First slide"})}),Object(m.jsxs)(k.a.Caption,{children:[Object(m.jsx)("h3",{children:"First slide label"}),Object(m.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(m.jsxs)(k.a.Item,{interval:500,children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI=",alt:"Second slide"})}),Object(m.jsxs)(k.a.Caption,{children:[Object(m.jsx)("h3",{children:"Second slide label"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(m.jsxs)(k.a.Item,{children:[Object(m.jsx)("div",{className:"img-wrapper-carousel",children:Object(m.jsx)("img",{className:"d-block w-100",src:"https://media.istockphoto.com/photos/medical-mask-suitcase-with-sun-hat-camera-passport-airplane-ticket-picture-id1251305801?b=1&k=20&m=1251305801&s=170667a&w=0&h=3tnrNbghQ0ZB8aRMyL63SiAmNZJvPTWIUtnCMCAsfLo=",alt:"Third slide"})}),Object(m.jsxs)(k.a.Caption,{children:[Object(m.jsx)("h3",{children:"Third slide label"}),Object(m.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})}),J=function(e){var t=e.product,c=Object(l.useContext)(O).addItem,a=Object(l.useState)([]),i=Object(h.a)(a,2),n=(i[0],i[1]),r=Object(l.useState)(!1),s=Object(h.a)(r,2),o=s[0],C=s[1];return Object(m.jsx)("div",{children:Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"ItemDetailCards",children:[Object(m.jsxs)("div",{className:"ItemDetailCards__izq",children:[Object(m.jsx)("span",{className:"ItemDetailCards__izq--title",children:t.title}),Object(m.jsx)(U,{})]}),Object(m.jsxs)("div",{className:"ItemDetailCards__der",children:[Object(m.jsx)("p",{className:"ItemDetailCards__der--description",children:t.description2}),Object(m.jsxs)("span",{children:["$",t.price]}),o?Object(m.jsx)(d.b,{to:"/cart",children:Object(m.jsx)("button",{className:"btn-finalizar",children:"Finalizar compra"})}):Object(m.jsx)(R,{initialStock:20,onAdd:function(e){n(e),C(!0),c(Object(L.a)(Object(L.a)({},t),{},{counter:e}))},dirToCart:o})]})]},t.id)})})},Y=function(){var e=o.a.useState([]),t=Object(h.a)(e,2),c=t[0],a=t[1],i=o.a.useState(!1),n=Object(h.a)(i,2),r=n[0],s=n[1],l=o.a.useState(null),C=Object(h.a)(l,2),j=C[0],d=C[1],u=Object(b.f)().id;return o.a.useEffect((function(){s(!0),g().collection("products").doc(u).get().then((function(e){e.exists?a(Object(L.a)({id:e.id},e.data())):console.log("No hay productos a mostrar")})).catch((function(e){return d(e)})).finally((function(){return s(!1)}))}),[u]),Object(m.jsxs)("div",{children:[r&&Object(m.jsx)("p",{children:"Cargando..."}),j&&Object(m.jsxs)("p",{children:["Ha habido un error: ",j.status," ",j.statusText]}),Object(m.jsx)(J,{product:c})]})},K=function(){var e=o.a.useState([]),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(b.f)().category,n=o.a.useState(!1),r=Object(h.a)(n,2),s=r[0],l=r[1],C=o.a.useState(null),j=Object(h.a)(C,2),d=j[0],u=j[1];return o.a.useEffect((function(){var e=g().collection("products").where("category","==",i);l(!0),e.get().then((function(e){console.log(e),e.empty?(console.log("No hay productos para mostrar"),a([])):a(e.docs.map((function(e){return Object(L.a)({id:e.id},e.data())})))})).catch((function(e){return u(e)})).finally((function(){return l(!1)}))}),[i]),Object(m.jsxs)(m.Fragment,{children:[s&&Object(m.jsx)("p",{children:"Cargando..."}),d&&Object(m.jsxs)("p",{children:["Ha habido un error: ",d.status," ",d.statusText]}),Object(m.jsx)(W,{data:c})]})},$=(c(95),function(){var e=Object(l.useContext)(O),t=e.cart,c=e.deleteItem,a=e.clearCart,i={buyer:{name:"C\xe9sar",phone:123456,email:"hola@quetal.com"},items:[{item:"Paris",quantity:2},{item:"Madrid",quantitiy:3}],total:15e3};return 0===t.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"h2Vacio",children:"Carrito vac\xedo"}),Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)("button",{className:"btnVolver",children:"Volver"})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"cartTitle",children:Object(m.jsx)("h3",{children:"Tu carrito:"})}),Object(m.jsxs)("div",{className:"cartContainer",children:[Object(m.jsx)("div",{className:"cartList",children:t.map((function(e){return Object(m.jsxs)("div",{className:"checkOut",children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("span",{children:e.counter}),Object(m.jsxs)("span",{children:["$",e.counter*e.price]}),Object(m.jsx)("button",{onClick:function(){return c(e)},className:"btnEliminar",children:"Eliminar Item"})]},e.id)}))}),Object(m.jsxs)("div",{className:"cartCheckout",children:[Object(m.jsx)("button",{onClick:function(){g().collection("orders").add(i).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:"btnFinalizar",children:"Finalizar compra"}),Object(m.jsx)("button",{onClick:a,className:"btnClear",children:"Limpiar Carrito"})]})]})]})}),Q=(c(96),function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("div",{className:"footer__redes",children:[Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)(p.b,{})}),Object(m.jsx)(d.b,{to:"/",children:Object(m.jsx)(p.d,{})})]}),Object(m.jsx)("div",{className:"footerbottom__der",children:"\xa9 ToTheWorld | By C\xe9sar Carabetta"})]})});c(52),c(53);var X=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(x,{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)(w,{})}),Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{exact:!0,path:"/",component:P}),Object(m.jsx)(b.a,{exact:!0,path:"/product/:id",component:Y}),Object(m.jsx)(b.a,{exact:!0,path:"/category/:category",component:K}),Object(m.jsx)(b.a,{exact:!0,path:"/Cart",component:$})]}),Object(m.jsx)(Q,{})]})})})};c(97);j.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.82898423.chunk.js.map