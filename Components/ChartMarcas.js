Vue.component("chart-marcas", {
  data: function () {
    return {
      config: { type: "doughnut", data: {} },
      labels: [],
      datasets: [],
      complete: false,
    };
  },
  created: function () {
    // Fake Labels
    const posiblesLabels = [
      "Gardena",
      "Husqvarna",
      "Metabo",
      "Niwa",
      "Pampa",
      "GTM",
      "Carlton"
    ];
    this.labels = posiblesLabels.slice(0, getRandomInt(posiblesLabels.length));

    // Fake Data
    let data = [];
    this.labels.forEach(l => {
      data.push(getRandomInt(200))
    })
    console.log(getRandomInt(200));
    this.datasets.push({
      label: "",
      backgroundColor: ["#7B4B94", "#b7e3cc", "#7d82b8"],
      data: data,
    });

    this.complete = true;
  },
  template: `
        <doughnut-chart v-if="complete" :labels="labels" :datasets="datasets" :config="config" />
    `,
});
