window.setTimeout( function(){
    // check off Specific todos by clicking
    // This add a click on all the ul but when a specific li
    // is clicked within ul then only it will be strike off
    $('ul').on('click','li',function(){
        // This will handle if the line is red or not 
        // line through is neccesaary or not 
        $(this).toggleClass("completed");
    });
    // Click on X to delete
    $('ul').on('click','span',function(e){
        // This will lead us to the parent li
        $(this).parent().fadeOut(1000,function(){
            $(this).remove();
        });
        // This will stop bubbling
        e.stopPropagation();
    });
    // Select the input and extract the 
    $("input[type='text']").keypress(function(key){
        if(key.which === 13){
        // grabing the text from the input
            var todo = $(this).val();
        // need to clear the val
        $(this).val("");
            if (todo.length >= 1){
            // create a new li and append to ul 
                $('ul').append('<li><span><i class="fas fa-trash"></i></span> '+todo+'</li>');
            } 
        }
    });
    $("#inh1").click(function(e){
        $("input[type='text']").fadeToggle(1200);
        e.stopPropagation();
    });
},500);