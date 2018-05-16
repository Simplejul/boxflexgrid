
// Agrandir Flex
$('#flex').click(function(){//Fonction qui marcherai sur un appui de bouton et etendrai la box au max de sa taille. 
    $('#grid').css('width','0');
    $('#flex').css('width','100%');
});
    
    
// Agrandir Grid
$('#grid').click(function(){
    $('#flex').css('width','0');
    $('#grid').css('width','100%');
});


// Remettre Flex/Grid à 50-50
$('.clickto').click(function(){
    $('#flex').css('width','100%');
    $('#grid').css('width','100%');
});

/*$('#flex').mouseleave(function(){
    $('#flex').css('width','100%');
    $('#grid').css('width','100%');
});*/