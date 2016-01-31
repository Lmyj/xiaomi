window.onload = function(){
	var $ = function(id){
		return document.getElementById(id);
	};
	var $$= function(na){
		return document.getElementsByClassName(na);
	};
	// --------------Banner图轮播---------------
	var lunbo = $$('lunbo'),
		dianHua = $$('dianhua'),
		jpg = $('jpg'),
		jpgList = $('jpg-list'),
		jpgDian = $('jpg-dian'),
		huaDong1 = document.querySelector('#jpg .jpg-zuo'),
		huaDong2 = document.querySelector('#jpg .jpg-you');
	var timerId,
		current = 0,next = 1,kaiguan = true;
	jpg.onmousedown = function(e){
		e.preventDefault();
	};
	var cutJpg = function(){
		lunbo[current].setAttribute('class','lunbo');
		lunbo[next].setAttribute('class','lunbo show');
		dianHua[current].setAttribute('class','dianhua');
		dianHua[next].setAttribute('class','dianhua hov');
		current = next;
		next++;
		if(next == lunbo.length){next = 0;};
	};
	timerId = setInterval(cutJpg,1000);
	for (var i=0;i<dianHua.length;i++) {
		dianHua[i].onclick = function(){
			clearInterval(timerId);
			dianHua[current].setAttribute('class','dianhua');
			this.setAttribute('class','dianhua hov');
			lunbo[current].setAttribute('class','lunbo');
			lunbo[this.getAttribute('index')].setAttribute('class','lunbo show');
			current = this.getAttribute('index');
			kaiguan = false;
		};
	}
	jpgList.onmouseover = function(){
		clearInterval(timerId);
	};
	jpgList.onmouseout = function(){
		if(kaiguan){
			timerId = setInterval(cutJpg,2000);
		}
	};
	// -------------------待优化------------------------
	huaDong1.onclick = function(){
		kaiguan = false;
		clearInterval(timerId);
		lunbo[current].setAttribute('class','lunbo');
		dianHua[current].setAttribute('class','dianhua');
		if( current == 0){
			jpgList.lastElementChild.setAttribute('class','lunbo show');
			jpgDian.lastElementChild.setAttribute('class','dianhua hov');
			current = jpgList.lastElementChild.getAttribute('indx');
			return;
		}
		lunbo[current].previousElementSibling.setAttribute('class','lunbo show');
	    dianHua[current].previousElementSibling.setAttribute('class','dianhua hov');
	    current = lunbo[current].previousElementSibling.getAttribute('indx') ;
	};
	huaDong2.onclick = function(){
		kaiguan = false;
		clearInterval(timerId);
		lunbo[current].setAttribute('class','lunbo');
		dianHua[current].setAttribute('class','dianhua');
		if( current == 3){
			jpgList.firstElementChild.setAttribute('class','lunbo show');
			jpgDian.firstElementChild.setAttribute('class','dianhua hov');
			current = jpgList.firstElementChild.getAttribute('indx');
			return;
		}
		lunbo[current].nextElementSibling.setAttribute('class','lunbo show');
	    dianHua[current].nextElementSibling.setAttribute('class','dianhua hov');
	    current = lunbo[current].nextElementSibling.getAttribute('indx') ;
	};



	// var timerId,index,lunBo,fanLunbo,
	// 	lunNum=1,weiTuo=0;	
	// // console.log(jpg);
	// jpg.onmousedown = function(e){
	// 	e.preventDefault();
	// };
	// lunbo[0].style.display = 'block';
	// dianHua[0].style.background = 'white';
	// lunBo = function(){
	// 	lunbo[weiTuo].style.display = 'none';
	// 	lunbo[lunNum].style.display = 'block';
	// 	dianHua[weiTuo].style.background = '#999999';
	// 	dianHua[lunNum].style.background = 'white';
	// 	weiTuo = lunNum;
	// 	lunNum++;
	// 	if(lunNum==lunbo.length){
	// 		lunNum=0;
	// 	}
	// 	for(var i=0;i<dianHua.length;i++){
	// 		dianHua[i].index = i;
	// 			dianHua[i].onmouseover = function(e){
	// 			dianHua[this.index].style.background = 'white';
	// 		};
	// 		dianHua[i].onmouseout = function(){
	// 			if(this.index==weiTuo){return;}
	// 			dianHua[this.index].style.background = '#999999';
	// 		}
	// 	}
	// };
	// timerId = setInterval(lunBo,2000);
	
	// for(var i=0;i<dianHua.length;i++){
	// 	dianHua[i].index = i;
	// 	dianHua[i].onclick = function(e){
	// 		console.log(weiTuo,this.index);
	// 		clearInterval(timerId);
	// 		dianHua[weiTuo].style.background = '#999999';
	// 		if(weiTuo==this.index){
	// 			return;
	// 		}
	// 		dianHua[this.index].style.background = 'white';		
	// 		lunbo[weiTuo].style.display = 'none';
	// 		lunbo[this.index].style.display = 'block';
	// 		weiTuo = this.index;
	// 	};	
	// }	
	// jpg.onmouseover = function(e){
	// 	var isThis = e.target.getAttribute('class');
	// 	if(isThis=='iconfont jpg-zuo'||isThis=='iconfont jpg-you'){
	// 		clearInterval(timerId);
	// 	}
	// };
	// huaDong1.onclick = function(e){		
	// 	console.log(weiTuo,lunNum);
	// 	dianHua[weiTuo].style.background = '#999999';
	// 	dianHua[weiTuo].previousElementSibling.style.background = 'white';		
	// 	lunbo[weiTuo].style.display = 'none';
	// 	lunbo[weiTuo].previousElementSibling.style.display = 'block';
	// 	weiTuo = previousElementSibling;
	// 	if(!previousElementSibling){
	// 			previousElementSibling = lunbo.length-1;
	// 		}
	// 	};
	// 	huaDong2.onclick = function(){
	// 		dianHua[weiTuo].style.background = '#999999';
	// 		dianHua[lunNum].style.background = 'white';		
	// 		lunbo[weiTuo].style.display = 'none';
	// 		lunbo[lunNum].style.display = 'block';
	// 		weiTuo = lunNum;
	// 		lunNum++;
	// 		if(lunNum==lunBo.length){
	// 			lunNum = 0;
	// 		}
	// 	};
};
