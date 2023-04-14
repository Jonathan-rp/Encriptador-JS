function encriptar() {
    let text = document.getElementById("textoUsuario");
    text = text.value;
    text = text
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    document.getElementById("textoProcesado").value = text;
}

function desencriptar() {
    let text = document.getElementById("textoUsuario");
    text = text.value;
    text = text
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    document.getElementById("textoProcesado").value = text;
}

function copiar() {
    let copiarTexto = document.getElementById("textoProcesado");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiarTexto.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + copiarTexto.value;
}
