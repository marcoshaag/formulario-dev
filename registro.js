function cadastro(){
    
    var login = document.getElementById('email').value;
    var nome = document.getElementById('name').value;

    if(login > '' && nome > ''){
        alert('Sucesso');
        location.href= "segunda-tela.html";
    }else{
        alert('Incoreto');
    }
}