export default function galeria(){
    // galeria

const fotoGrande = document.querySelector(".product__single-wrapper-gallery-picture img");

const fotoThumbs = document.querySelectorAll(".product__single-wrapper-gallery-thumbs img");




fotoThumbs.forEach((img, index)=>{
    img.addEventListener("click", trocaFoto); 
});


function trocaFoto(evento){
  fotoThumbs.forEach((item)=>{
        item.classList.remove("ativo")
    });
    const dataFoto = evento.target.dataset.foto;
    this.classList.add("ativo");
    fotoGrande.src= dataFoto;
}

}