
var colorpickers=[];


function toHex(d) {
	if(d<10)
    {
    	return d
    }

    
    if(d==10)
    {
    	return 'a'
    }
    if(d==11)
    {
    	return 'b'
    }
    if(d==12)
    {
    	return 'c'
    }

    if(d==13)
    {
    	return 'd'
    }
    if(d==14)
    {
    	return 'e'
    }
    if(d>=15)
    {
    	return 'f'
    }
}


function GetOptions() {
    var data = [];
    var speeds = [];
    var boxes = 0
    
    var speed = 0
    
    
        
	var bT=$("[name=BoxT]").is(":checked");  
    var b1=$("[name=Box1]").is(":checked");
    var b2=$("[name=Box2]").is(":checked");
    var b3=$("[name=Box3]").is(":checked");
    var b4=$("[name=Box4]").is(":checked");
    var bB=$("[name=BoxB]").is(":checked");
    

    

    speeds[0] = $('[name=speedTL]').val()
    speeds[1] = $('[name=speedTR]').val()
    speeds[2] = $('[name=speedBL]').val()
    speeds[3] = $('[name=speedBR]').val()
    speeds[4] = $('[name=speedT]').val()
    speeds[5] = $('[name=speedB]').val()
    
    
    var speed = toHex(speeds[0])
    for(i =1; i<6;i++)
    {
    
    speed = speed + toHex(speeds[i])
    
    }
    
  
    if(b1 == true){
    boxes=boxes|1;
    }
    if(b2 == true){
    boxes=boxes|2;
    }
    if(b3 == true){
    boxes=boxes|4;
    }
    if(b4 == true){
    boxes=boxes|8;
    }
    
    
    if(bT == true){
    	boxes=boxes|16;
    }
    if(bB == true){
    	boxes=boxes|32;
    }


    
    data.push(boxes)
    
    data.push($('[name=tL_Color_1]').val())
    data.push($('[name=tL_Color_2]').val())
    data.push($('[name=tR_Color_1]').val())
    data.push($('[name=tR_Color_2]').val())
    data.push($('[name=bL_Color_1]').val())
    data.push($('[name=bL_Color_2]').val())
    data.push($('[name=bR_Color_1]').val())
    data.push($('[name=bR_Color_2]').val())
    
	data.push($('[name=t_Color_1]').val())
	data.push($('[name=t_Color_2]').val())
	data.push($('[name=b_Color_1]').val())
	data.push($('[name=b_Color_2]').val())

      
    data.push(speed)
    
    alert(data)
    
    var originalURL = newaddress.ip+"/modes";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
    
    
    
    $.ajax({
    url: queryURL,
    method: "POST",
    data: {data: JSON.stringify(data)},
    // this headers section is necessary for CORS-anywhere
    headers: {
    "x-requested-with": "xhr" 
    }
    }).done(function(response) {
    console.log('CORS anywhere response', response);
    }).fail(function(jqXHR, textStatus) { 
    console.error(textStatus)
    })
	
	
}

function preset(id){
	
	//off
	if(id=="preset1_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			colorBoxes[i].value = '#000000';	
		}
	}
	//r/g
	if(id=="preset2_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			if(i%2)
				colorBoxes[i].value = randomColor(15,0,0,15,0,0);
			else
				colorBoxes[i].value = randomColor(0,15,0,0,15,0);			
		}
	}
	//b/g
	if(id=="preset3_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			if(i%2)
				colorBoxes[i].value = randomColor(0,0,15,0,0,15);	
			else
				colorBoxes[i].value = randomColor(0,15,0,0,15,0);			
		}
	}
	//r/b
	if(id=="preset4_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			if(i%2)
				colorBoxes[i].value = randomColor(15,0,0,15,0,0);
			else
				colorBoxes[i].value = randomColor(0,0,15,0,0,15);			
		}
	}

	if(id=="preset5_btn"){
		alert("Nothing")	
	}
	//reds
	if(id=="preset6_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			colorBoxes[i].value = randomColor(5,0,0,15,0,0);
		}
	}
	//greens
	if(id=="preset7_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			colorBoxes[i].value = randomColor(0,5,0,0,15,0);
		}
	}
	//blues
	if(id=="preset8_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			colorBoxes[i].value = randomColor(0,0,5,0,0,15);
		}
	}

	//random
	if(id=="preset9_btn"){
		for (i = 0; i < colorBoxes.length; i++) {
			colorBoxes[i].value = randomColor(0,0,0,15,15,15);
		}

	}
	
}


function randomColor(rmin,gmin,bmin,rmax,gmax,bmax)
{
	var colorstr='#'
	var count = 0
	
	for (c = 0; c < 2; c++) {
		var digit = Math.floor((Math.random() * rmax) + rmin);
		colorstr = colorstr + toHex(digit)		
	}

	for (c = 0; c < 2; c++) {
		var digit = Math.floor((Math.random() * gmax) + gmin);
		colorstr = colorstr + toHex(digit)		
	}
	for (c = 0; c < 2; c++) {
		var digit = Math.floor((Math.random() * bmax) + bmin);
		colorstr = colorstr + toHex(digit)		
	}


	
	return colorstr
}


var checkboxes

function optionChanged(e) {

    var selected = this.id
	
	if(selected == checkboxes[0].id)
	{			
 		$('[name=Box1]').prop("checked", false);
 		$('[name=Box2]').prop("checked", false);		
 	}
 	else if(selected == checkboxes[5].id)
	{			
 		$('[name=Box3]').prop("checked", false);
 		$('[name=Box4]').prop("checked", false);		
 	}

	else if(selected == checkboxes[1].id || selected == checkboxes[2].id)
	{			
 		$('[name=BoxT]').prop("checked", false);	
 	}
 	else if(selected == checkboxes[3].id || selected == checkboxes[4].id)
	{			
 		$('[name=BoxB]').prop("checked", false);	
 	}



}

function test()
{
	alert(this.id)
}

var colorBoxes

function PageLoad() {
	
	checkboxes = document.getElementsByClassName('CB')
	var preset_btn = document.getElementsByClassName('Preset')
	colorBoxes = document.getElementsByClassName('option-color-value')

	
	
	
	for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', optionChanged, false);
    }
	
	
	for (i = 0; i < preset_btn.length; i++) {
        
 		preset_btn[i].addEventListener('click', function(){ preset(this.id); }, false);

    }


}

window.onload = PageLoad;

