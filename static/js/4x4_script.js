    function ColorChanged() {
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
        $.ajax({
            url: "http://24.194.15.104/",
            type: 'POST',
            data: {
                tl: tl, tr:tr, bl:bl, br:br
            }
        });
        alert("Done");
    }
    function RUNATPAGELOAD(){
        alert("Start! v.04");
        var ttt = document.getElementsByClassName('input-color-value');
        for (i=0;i<ttt.length;i++){
            ttt[i].addEventListener('change', ColorChanged, false);
        }
    }
    window.onload = RUNATPAGELOAD;
