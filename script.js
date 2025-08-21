let options = ["piedra", "papel", "tijera"];

function play(user) {
    // Validamos si el usuario eligió algo
    if (user) {
        user = user.toLowerCase();
    } else {
        document.getElementById("resultado").innerHTML = "No ingresaste ninguna opción.";
        return;
    }

    let random = Math.floor(Math.random() * 3);
    let pc = options[random];

    let result = "";

    switch (user + "-" + pc) {
        case "piedra-tijera":
        case "papel-piedra":
        case "tijera-papel":
            result = "¡Ganaste! 😎";
            break;

        case "piedra-papel":
        case "papel-tijera":
        case "tijera-piedra":
            result = "Perdiste 😢";
            break;

        default:
            result = "Empate 😐";
    }

    document.getElementById("resultado").innerHTML =
        "Usted eligió: " + user + "<br>" +
        "La computadora eligió: " + pc + "<br>" +
        "Resultado: " + result;
}
