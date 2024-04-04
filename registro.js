function cadastro(){
    
    const login = document.getElementById('email').value;
    const nome = document.getElementById('name').value;
    const validEmail = /\S+@\S+\.\S+/.test(login);

    if(validEmail && nome.length > 1){
        alert('Cadastrado com Sucesso');
        location.href= "./tela-registro.html";
    }else{
        alert('Incoreto');
    }
}

