cmenu.find('img').bind('click',function(event){
    var action = $(this).parent().attr('data-action');
    var target = $(this).parent().attr('data-target');
    if (target == "_new") {
        window.open(action);
    } else {
        location.href=action;
    }
 });