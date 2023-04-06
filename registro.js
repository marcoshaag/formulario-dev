function cadastro(){
    
    var login = document.getElementById('email').value;
    var nome = document.getElementById('name').value;


    if(login.length > 1 && nome.length > 1){
        alert('Sucesso');
        location.href= "./tela-registro.html";
    }else{
        alert('Incoreto');
    }
}

