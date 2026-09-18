//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {

        
        code.value = code.value.replace(/\D/g, "");

        
        if (code.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            
            if (code.value !== "") {
                code.value = "";
            }
            
            else if (index > 0) {
                codes[index - 1].focus();
                codes[index - 1].value = "";
            }
        }
    });
});