Vue.component('chart-articulos-comprados', {
    data() {
        return {
          titulo: "Dato Y",
          numero: getRandomInt(20),
        };
    },
    template: `
        <number-chart :titulo="titulo" :numero="numero" />
    `
})