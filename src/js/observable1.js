const { Observable } = rxjs;

window.addEventListener("load", () => {
    const input = document.querySelector("#input1");
    const output = document.querySelector("#output1");

    const observable = new Observable((observer) => {
        const changingOutput = (e) => {
            let output = e.target.value.split("").reverse().join("");
            if (e.target.value === "error") observer.error("Ingresaste Error");
            if (e.target.value === "complete") observer.complete();
            observer.next(output);
        };
        input.addEventListener("keyup", changingOutput);
        input.addEventListener("blur", changingOutput);

        return () => {
            input.removeEventListener("keyup", changingOutput);
            input.removeEventListener("blur", changingOutput);
            input.value = "";
            input.readOnly = true;
            output.textContent = "Espejito rebotin";
        };
    });

    const next = (a) => (output.textContent = a);
    const complete = () => console.log("Ingresaste complete antes de tiempo");
    const error = (error) => console.log(error);

    const handler = {
        next,
        complete,
        error,
    };
    const sub = observable.subscribe(handler);

    setTimeout(() => {
        console.log("Se terminó el tiempo");
        sub.unsubscribe();
    }, 30000);
});
