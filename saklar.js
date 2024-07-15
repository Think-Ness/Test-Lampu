function saklar(action, lamp) {
    let toggle = document.getElementById("default-toggle")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle.checked) {
        lampu1.src = "assets/images/on.gif"

    } else {
        lampu1.src = "assets/images/EE.png"

    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif"
    } else {
        lampu2.src = "assets/images/off.gif"
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif"
    } else {
        lampu3.src = "assets/images/off.gif"
    }

    console.log('Testing', toggle.checked);



    // if (action == "on") {
    //     if (lamp == 1) {
    //         lampu1.src = "assets/images/on.gif"
    //     }
    //     if (lamp == 2) {
    //         lampu2.src = "assets/images/on.gif"
    //     }
    //     if (lamp == 3) {
    //         lampu3.src = "assets/images/on.gif"
    //     }
    // }
    // if (action == "off") {
    //     if (lamp == 1) {
    //         lampu1.src = "assets/images/off.gif"
    //     }
    //     if (lamp == 2) {
    //         lampu2.src = "assets/images/off.gif"
    //     }
    //     if (lamp == 3) {
    //         lampu3.src = "assets/images/off.gif"
    //     }
    // }

    return lampu1;

}