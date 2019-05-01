$(function(){
    $(".bujo").click(function(){
        var imagen = $(this).attr("src");
        var Titulo = $(this).attr("alt");
        if(imagen == null){
            alert("no hay imagen para mostrar");
        }else{
            $(".pegaImagen").attr("src",imagen);
            $(".pegaTitulo").text(Titulo);
            $("#modalDibujos").modal();
        }
    });
});