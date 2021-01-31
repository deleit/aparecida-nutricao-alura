var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelectorAll("table");

tabela.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event) {
        var alvoDoEvento = event.target;
        var paiDoAlvo = alvoDoEvento.parentNode;
        
        if (alvoDoEvento.tagName == 'TD') {
            paiDoAlvo.classList.add("fade-out");
            setTimeout(function() {
                paiDoAlvo.remove();
            }, 500);
        }
    });
});