export default function modal(){
    const containerModal = document.querySelector('[data-modal="container"]');
    const btnAbrir = document.querySelector('[data-modal="abrir"]');
    const btnFechar = document.querySelector('[data-modal="fechar"]');



    btnAbrir.addEventListener('click', (e)=>{
        containerModal.classList.add('ativo')
        
    })

    btnFechar.addEventListener('click', (e)=>{
        e.preventDefault;
        containerModal.classList.remove('ativo');

    })

}