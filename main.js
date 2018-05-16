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
$('#code1').click(function(){
    $('#containeritem').css($('#code1 .attribut').text(),$('#code1 .value').text());
});
$('#code2').click(function(){
    $('#containeritem').css($('#code2 .attribut').text(),$('#code2 .value').text());
});
$('#code3').click(function(){
    $('#containeritem').css($('#code3 .attribut').text(),$('#code3 .value').text());
});
$('#code4').click(function(){
    $('#containeritem').css($('#code4 .attribut').text(),$('#code4 .value').text());
});
$('#code5').click(function(){
    $('#containeritem').css($('#code5 .attribut').text(),$('#code5 .value').text());
});
$('#code6').click(function(){
    $('#containeritem').css($('#code6 .attribut').text(),$('#code6 .value').text());
});
$('#code7').click(function(){
    $('#containeritem').css($('#code7 .attribut').text(),$('#code7 .value').text());
});
$('#code8').click(function(){
    $('#containeritem').css($('#code8 .attribut').text(),$('#code8 .value').text());
});
$('#code9').click(function(){
    $('#containeritem').css($('#code9 .attribut').text(),$('#code9 .value').text());
});
/*$('#flex').mouseleave(function(){
    $('#flex').css('width','100%');
    $('#grid').css('width','100%');
});*/