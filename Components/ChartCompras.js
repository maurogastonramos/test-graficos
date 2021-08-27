Vue.component("chart-compras", {
  data: function () {
    return {
      config: { type: "line", data: {} },
      labels: [],
      datasets: [],
      complete: false,
    };
  },
  created: function () {
    this.labels = ["January", "February", "March", "April", "May", "June"];

    let data = [];
    this.labels.forEach((l) => {
      data.push(getRandomInt(30));
    });
    this.datasets.push({
      label: "USD",
      backgroundColor: "#1a3852",
      borderColor: "#1a3852",
      data: data,
    });

    this.complete = true;
  },
  computed: {
    total: function(){
      return this.datasets[0].data.reduce((acum, d) => {
        return acum += d;
      })
    }
  },
  methods: {
  },
  template: `
  <div class="relative h-full">
      <h3 class="absolute top-3 right-5">Total: {{total}} USD</h3>
      <h3 class="absolute top-3 left-5 font-medium">Pedidos en USD</h3>
      <line-chart v-if="complete" :labels="labels" :datasets="datasets" :config="config" />
  </div>
    `,
});
