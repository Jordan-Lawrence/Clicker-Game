import { Counter } from "./counter.js";

const textBox = document.getElementById("counter");
const button = document.getElementById("combo");

const counter = new Counter(textBox);


button?.addEventListener("click", () => {
        counter.increment()
    }
)