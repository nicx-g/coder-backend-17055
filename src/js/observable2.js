const { map, pipe } = rxjs.operators;

window.addEventListener("load", () => {
    const input = document.querySelector("#input2");
    const output = document.querySelector("#output2");

    const observable = new Observable((observer) => {
        const eventFunction = (e) => {
            if (e.target.value === "error") observer.error("Ingresaste error");
            if (e.target.value === "complete") observer.complete();
            observer.next(e.target.value);
        };
        input.addEventListener("keyup", eventFunction);
        return () => {
            input.removeEventListener("keyup", eventFunction);
            input.value = "";
            input.readOnly = true;
            output.textContent = "Espejito rebotin";
        };
    });

    const sub = observable
        .pipe(map((item) => item.split("").reverse().join("")))
        .subscribe(
            (value) => (output.textContent = value),
            (error) => console.log(error),
            () => console.log("ingresaste complete antes de tiempo")
        );

    setTimeout(() => {
        console.log("Se terminó el tiempo");
        sub.unsubscribe();
    }, 30000);
});
