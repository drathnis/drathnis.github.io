
    function ColorChanged() {
        var address = "http://24.194.17.176"
        alert(newaddress)
		var data = [];
        var Color = $(this).val()
        var id = this.id;
        var info=["0","0","0","0"]
        var tl,tr,bl,br;
        if (this.id == "cpick_T_id"){
            $('[name=colpick_ALL]').val("#000000")
            $('[name=colpick_TL]').val($(this).val())
            $('[name=colpick_TR]').val($(this).val())
        }
        else if(this.id == "cpick_B_id"){
            $('[name=colpick_ALL]').val("#000000")
            $('[name=colpick_BL]').val($(this).val())
            $('[name=colpick_BR]').val($(this).val())
        }
        else if(this.id == "cpick_ALL_id"){

            $('[name=colpick_T]').val($(this).val())
            $('[name=colpick_B]').val($(this).val())
            $('[name=colpick_TL]').val($(this).val())
            $('[name=colpick_TR]').val($(this).val())
            $('[name=colpick_BL]').val($(this).val())
            $('[name=colpick_BR]').val($(this).val())
        }
        tl = $('[name=colpick_TL]').val();
        tr = $('[name=colpick_TR]').val();
        bl = $('[name=colpick_BL]').val();
        br = $('[name=colpick_BR]').val();
		
		data.push(tl);
		data.push(tr);
		data.push(bl);
		data.push(br);
		
        var originalURL = "http://24.194.17.176/set4x4";
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
    function RUNATPAGELOAD(){
        var ttt = document.getElementsByClassName('input-color-value');
        for (i=0;i<ttt.length;i++){
            ttt[i].addEventListener('change', ColorChanged, false);
        }
    }
    window.onload = RUNATPAGELOAD;
