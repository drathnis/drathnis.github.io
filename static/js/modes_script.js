
    function GetOptions() {
        var data = [];

        data.push(document.getElementById("enable_strips_id").value)
        data.push(document.getElementById('left_side_id').value);
        data.push(document.getElementById('right_side_id').value);

        var L_color1 = $('[name=L_Color_1]').val();
        var L_color2 = $('[name=L_Color_2]').val();
        var L_speed = $('[ id=L_Speed_slider]').val();

        var R_color1 = $('[name=R_Color_1]').val();
        var R_color2 = $('[name=R_Color_2]').val();
        var R_speed = $('[ id=R_Speed_slider]').val();

        data.push(L_color1);
        data.push(L_color2);
        data.push(L_speed);

        data.push(R_color1);
        data.push(R_color2);
        data.push(R_speed);
        
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
	
	function preset(val){
		
		if(val==0){
			$('[name=L_Color_1]').val('#FF0000')
			$('[name=L_Color_2]').val('#00FF00')
		}
		if(val==1){
			$('[name=R_Color_1]').val('#FF0000')
			$('[name=R_Color_2]').val('#00FF00')
		}
	}
	
	//Doesnt to anything anymore but leaving it
	//so i can do somthing with it later
    function optionChanged() {
		return;
        var temp = document.getElementById('enable_strips_id');
        var selected_strip = temp.options[temp.selectedIndex].value;

        var yourSelect = document.getElementById(this.id);
        var value = yourSelect.options[yourSelect.selectedIndex].value;
        var id = yourSelect.id;

    }

    function RUNATPAGELOAD() {
        var ttt = document.getElementsByClassName('mode_selector');
        var cb = document.getElementsByClassName('option-color-value');
        for (i = 0; i < cb.length; i++) {
            cb[i].addEventListener('change', test, false);
        }
        for (i = 0; i < ttt.length; i++) {
            ttt[i].addEventListener('change', optionChanged, false);
        }
    }

    window.onload = RUNATPAGELOAD;

