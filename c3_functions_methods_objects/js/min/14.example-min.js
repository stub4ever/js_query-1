!function(){function e(e){var t,n,r,a,u,d,m;return t=new Date(e.getTime()+6048e5),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],n=d[t.getDay()],r=t.getDate(),a=m[t.getMonth()],u=t.getFullYear(),o="Offer expires next ",o+=n+" <br />("+r+" "+a+" "+u+")"}var t={name:"Park",roomRate:240,discount:15,offerPrice:function(){var e=this.roomRate*((100-this.discount)/100);return e}},n,r,a;n=document.getElementById("hotelName"),r=document.getElementById("roomRate"),a=document.getElementById("specialRate"),n.textContent=t.name,r.textContent="$"+t.roomRate.toFixed(2),a.textContent="$"+t.offerPrice();var o,u,d;u=new Date,d=document.getElementById("offerEnds"),d.innerHTML=e(u)}();