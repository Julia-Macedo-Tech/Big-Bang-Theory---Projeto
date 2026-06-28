// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var foto = sessionStorage.FOTO_USUARIO;

    var b_usuario = document.getElementById("hello");

    if (nome != null && foto != null) {
        if (foto == 0) {
            hello.innerHTML = `<img src="../assets/imgs/sem_foto.png" alt="">
                <p><span id="b_usuario">${nome}</span></p>`;
        } else {
            hello.innerHTML = `<img src="../assets/imgs/${foto}.png" alt="">
                <p><span id="b_usuario">${nome}</span></p>`;
        }

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

