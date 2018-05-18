console.log($('.code .value').text());
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


// Quand j appuie sur le code....
 
/*$('#code0').click(function(){
    $('#containeritem').css($('#code0 .attribut').text(),$('#code0 .value').text());
});*/
$('.btncode').click(function(){
    $('#containeritem').css($(this).children('span.property').text(), $(this).children('span.value').text());

});

