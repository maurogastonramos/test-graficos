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
    this.labels.forEach(l => {
      data.push(getRandomInt(30));
    })
    this.datasets.push({
      label: "Dato X",
      backgroundColor: "#7B4B94",
      borderColor: "#7B4B94",
      data: data,
    });

    this.complete = true;
  },
  methods: {
    add() {
      this.datasets.push({
        label: "Dato2",
        backgroundColor: "#93E5AB",
        borderColor: "#93E5AB",
        data: [5, 10, 5, 2, 20, 30, 45],
      });
    },
  },
  template: `
        <line-chart v-if="complete" :labels="labels" :datasets="datasets" :config="config" />
    `,
});
