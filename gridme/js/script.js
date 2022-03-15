var gridMe = document.querySelector('#edit #sidebar .snav');

var gridTable = document.createElement('div');
gridTable.classList.add('gridtable','d-none');

var bodyGrid = document.createElement('div');
bodyGrid.classList.add('bodygrid','d-none');

var gridBtn = document.createElement('li');
gridBtn.innerHTML = '<li><a href="#" class="grid-btn">Add Grid</a></li>';



var closeGridTable = document.createElement('div');
closeGridTable.innerHTML = '<div class="closegridtable">X</div>';

var gridnow = document.createElement('div');

gridnow.innerHTML = '<div class="gridtable-container ">'

+'<a href="#" class="item-gridme col-12-0 "><h4>12 columns</h4></a>'
+'<a href="#" class="item-gridme col-6-6"><h4>6-6 columns</h4></a>'
+'<a href="#" class="item-gridme col-4-4-4"><h4>4-4-4 columns</h4></a>'
+'<a href="#" class="item-gridme col-3-3-3-3"><h4>3-3-3-3 columns</h4></a>'
+'<a href="#" class="item-gridme col-4-8"> <h4>4-8 columns</h4></a>'
+'<a href="#" class="item-gridme col-3-9"><h4>3-9 columns</h4></a>'
+'<a href="#" class="item-gridme col-2-10"><h4>2-10 columns</h4></a>'
+'<a href="#" class="item-gridme col-8-4"> <h4>8-4 columns</h4></a>'
+'<a href="#"  class="item-gridme col-9-3"><h4>9-3 columns</h4></a>'
+'<a href="#"  class="item-gridme col-10-2"><h4>10-2 columns</h4></a>'

+'</div>';

//sidebar after

gridMe.after(gridTable)
gridMe.after(bodyGrid);
gridMe.append(gridBtn);
document.querySelector('.gridtable').appendChild(closeGridTable);
document.querySelector('.gridtable').appendChild(gridnow);


CKEDITOR.config.contentsCss = ['plugins/gridme/css/style.css', 'plugins/gridme/css/gridmestyle.css','plugins/gridme/css/marginme.css'];

document.querySelector('.grid-btn').addEventListener(
'click',
function (){
	console.log('dziala');
event.preventDefault();
document.querySelector('.gridtable').classList.toggle('d-none');
document.querySelector('.bodygrid').classList.toggle('d-none');

});


//close


document.querySelector('.closegridtable').addEventListener('click',
function(){
	document.querySelector('.gridtable').classList.toggle('d-none');
	document.querySelector('.bodygrid').classList.toggle('d-none');
	
})


var idContentmore = document.querySelector('#post-content');


/// now its the magic!


document.querySelector('.col-12-0').addEventListener('click',function(){
	event.preventDefault();
		   		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-12"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div></div>&nbsp;');	
console.log('use 12-0');
});


$('.col-6-6').click(function(){
	event.preventDefault();
	
		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 6-6');
});


$('.col-4-4-4').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-4-4');
});



$('.col-3-3-3-3').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 3-3-3-3');
});


$('.col-4-8').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-8');
});

$('.col-3-9').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-9"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 3-9');
});


$('.col-2-10').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-2"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-10"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 2-10');
});


$('.col-8-4').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 8-4');
});


$('.col-9-3').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-9"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 9-3');
});




$('.col-10-2').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-10"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-2"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 10-2');
});


/// with image

$('.col-6-6-img-l').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 6-6');
});


$('.col-6-6-img-l-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 6-6');
});




$('.col-6-6-img-r').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 6-6-img-r');
});

  

$('.col-6-6-img-r-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 6-6-img-r');
});

  

$('.col-4-4-4-img').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-4-4');
});
  
  
 $('.col-3-3-3-3-img').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 3-3-3-3-img');
});
 
 
 
$('.col-4-8-img-l').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-8');
}); 

 
$('.col-4-8-img-l-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-8');
}); 


$('.col-8-4-img-r').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 8-4');
});

$('.col-8-4-img-r-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 8-4');
});







// img grid












///img class

var gridTableImg = document.createElement('div');
gridTableImg.classList.add('gridtableimg','d-none');

var bodyGrid = document.createElement('div');
bodyGrid.classList.add('bodygrid','d-none');

var gridBtnImg = document.createElement('li');
gridBtnImg.innerHTML = '<li><a href="#" class="grid-btnimg">  Add grid with image</a></li>';



var closeGridTableImg = document.createElement('div');
closeGridTableImg.innerHTML = '<div class="closegridtableimg">X</div>';

var gridnowImg = document.createElement('div');

gridnowImg.innerHTML = '<div class="gridtable-container ">'
+'<a href="#" class="item-gridme col-6-6-img-l"><h4>6-6 columns with image left</h4></a>'
+'<a href="#" class="item-gridme col-6-6-img-l-fixed"><h4>6-6 columns with image left (align fixed)</h4></a>'
+'<a href="#" class="item-gridme col-6-6-img-r"><h4>6-6 columns with image right</h4></a>'
+'<a href="#" class="item-gridme col-6-6-img-r-fixed"><h4>6-6 columns with image right (align fixed)</h4></a>'
+'<a href="#" class="item-gridme col-4-4-4-img"><h4>4-4-4 columns with images</h4></a>'
+'<a href="#" class="item-gridme col-3-3-3-3-img"><h4>3-3-3-3 columns with images</h4></a>'
+'<a href="#" class="item-gridme col-4-8-img-l"> <h4>4-8 columns with image left</h4></a>'
+'<a href="#" class="item-gridme col-4-8-img-l-fixed"> <h4>4-8 columns with image left (align fixed)</h4></a>'
+'<a href="#" class="item-gridme col-8-4-img-r"> <h4>8-4 columns with image</h4></a>'
+'<a href="#" class="item-gridme col-8-4-img-r-fixed"> <h4>8-4 columns with image (align fixed)</h4></a>'

+'</div>';

//sidebar after

gridMe.after(gridTableImg)
gridMe.after(bodyGrid);
gridMe.append(gridBtnImg);
document.querySelector('.gridtableimg').appendChild(closeGridTableImg);
document.querySelector('.gridtableimg').appendChild(gridnowImg);


CKEDITOR.config.contentsCss = ['plugins/gridme/css/style.css', 'plugins/gridme/css/gridmestyle.css','plugins/gridme/css/marginme.css'];

document.querySelector('.grid-btnimg').addEventListener(
'click',
function (){
	console.log('dziala');
event.preventDefault();
document.querySelector('.gridtableimg').classList.toggle('d-none');
document.querySelector('.bodygrid').classList.toggle('d-none');

});


//close


document.querySelector('.closegridtableimg').addEventListener('click',
function(){
	document.querySelector('.gridtableimg').classList.toggle('d-none');
	document.querySelector('.bodygrid').classList.toggle('d-none');
	
})



/// with image

$('.col-6-6-img-l').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 6-6');
});


$('.col-6-6-img-l-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 6-6');
});




$('.col-6-6-img-r').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 6-6-img-r');
});

  

$('.col-6-6-img-r-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-6"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-6"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 6-6-img-r');
});

  

$('.col-4-4-4-img').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-4-4');
});
  
  
 $('.col-3-3-3-3-img').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-3"><img src="https://picsum.photos/id/237/640/480"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 3-3-3-3-img');
});
 
 
 
$('.col-4-8-img-l').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-8');
}); 

 
$('.col-4-8-img-l-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+'</div>&nbsp;');	
console.log('use 4-8');
}); 


$('.col-8-4-img-r').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm">'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 8-4');
});

$('.col-8-4-img-r-fixed').click(function(){
	event.preventDefault();
  		    CKEDITOR.instances['post-content'].insertHtml('<div class="row-gm" style="align-items:center;">'+
'<div class="col-gm-8"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies</p></div>'+
'<div class="col-gm-4"><img src="https://picsum.photos/id/237/640/480"></div>'+'</div>&nbsp;');	
console.log('use 8-4');
});



