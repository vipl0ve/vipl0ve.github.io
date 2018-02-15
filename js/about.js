$(document).ready(function () {
    closeAll();         
});

var closeAll = function(){
    $('.aboutHeads').css('display','none');
};

var viewDetails = function(args){
    if(args === 'area-of-expertise'){
        if($('#area-of-expertise').css('display') == 'none'){
            closeAll();
            $('#area-of-expertise').css('display','block');
        }
        else if($('#area-of-expertise').css('display') == 'block'){
        closeAll();
       }
    }
    if(args === 'accomplishment'){
        if($('#accomplishment').css('display') == 'none'){
            closeAll();
            $('#accomplishment').css('display','block');
        }
        else if($('#accomplishment').css('display') == 'block'){
        closeAll();
       }
    }
    if(args === 'gallap-signature'){
        if($('#gallap-signature').css('display') == 'none'){
            closeAll();
            $('#gallap-signature').css('display','block');
        }
        else if($('#gallap-signature').css('display') == 'block'){
        closeAll();
       }
    }
    if(args === 'interest'){
        if($('#interest').css('display') == 'none'){
            closeAll();
            $('#interest').css('display','block');
        }
        else if($('#interest').css('display') == 'block'){
        closeAll();
       }
    }

};