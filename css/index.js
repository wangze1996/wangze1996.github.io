/*
* @Author: 王泽
* @Date:   2017-12-28 20:21:31
* @Last Modified by:   王泽
* @Last Modified time: 2017-12-28 23:04:52
*/
{
let imgs=document.querySelectorAll(".img_box li"); 
let pages=document.querySelectorAll(".btn_box li");
let banner=document.querySelector(".banner");
let n=0;
pages.forEach(function (ele,index){
	console.log(ele)
	ele.onclick = function(){
		for (var i = 0; i < imgs.length; i++) {
			pages[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}
		this.classList.add("active");
		imgs[index].classList.add("active");
		n=index;
		console.log(index)
	}
})
//自动轮播

function bannerfn(dir="r"){
        if(dir==="r"){
            n++;
            if(n===imgs.length){
                n=0;
            }
        }else if (dir==="l"){
            n--;
            if(n===-1){
                n=imgs.length-1;
            }
        }

        for(var i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
    }
    let t=setInterval(bannerfn,1000);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(bannerfn,1000);
    }
    // 左右箭头
    var left=document.querySelector(".banner-l");
    var right=document.querySelector(".banner-r");
    let flag=true;
    right.onclick=function(){
        if(flag){
            flag=false;
            bannerfn();
        }

    }
    left.onclick=function(){
        if(flag){
            flag=false;
            bannerfn("l");
        }
    }
    imgs.forEach(function(val,index){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}
// 明星单品
{
    let left=document.querySelector(".star-topbox .left");
    let right=document.querySelector(".star-topbox .right");
    let inner=document.querySelector(".star-bot");
    //console.log(inner);
    let starContainer=document.querySelector(".star");
    left.onclick=function(){
        this.classList.remove("active");
        right.classList.add("active");
        inner.style.transform="translateX(0)";
    };
    right.onclick=function(){
        this.classList.remove("active");
        left.classList.add("active");
        inner.style.transform="translateX(-1226px)";
    };
    let n=1;
    function starfn(){
      n++;
        if(n%2===0){
           right.onclick();
        }else {
            left.onclick();
        }
    }
    let t=setInterval(starfn,5000);
    starContainer.onmouseover=function(){
        clearInterval(t);
    }
    starContainer.onmouseout=function(){
        t=setInterval(starfn,5000);
    }
}
