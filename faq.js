const itemsPerguntasRespostas = document.querySelectorAll('.item');
itemsPerguntasRespostas.forEach(function(item){
    item.addEventListener('click', function(){
        const estaAtivo = item.classList.contains('ativo');
        itemsPerguntasRespostas.forEach(function(item){
            item.classList.remove('ativo');
        })
        if(!estaAtivo){            
            item.classList.add('ativo');
        }else{
            item.classList.remove('ativo');
        }
    })
})