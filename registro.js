function cadastro(){
    
    var login = document.getElementById('email').value;
    var nome = document.getElementById('name').value;

    if(login > '' && nome > ''){
        alert('Sucesso');
        location.href= "tela-registro.html";
    }else{
        alert('Incoreto');
    }
}