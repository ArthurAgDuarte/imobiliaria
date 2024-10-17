const formulario = document.querySelector('#formCadastro');
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault
    cadastrarUsuario()
})


function cadastrarUsuario(){
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(
        {
            nome: formulario.nome.value,
            email: formulario.email.value,
            senha: formulario.senha.value
        }
    );
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Usuário cadastrado com sucesso!')
}