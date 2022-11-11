import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";

const store = createStore({
    modules: { // Aqui pueden ir cuantos módulos se necesite
        journal
    }
})

export default store

// Finalmente este store va aser usado en el main.js