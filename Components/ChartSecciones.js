Vue.component("chart-secciones", {
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
    const posiblesLabels = ["Jardín", "Forestal y poda", "Agro"];
    this.labels = posiblesLabels.slice(0, getRandomInt(posiblesLabels.length));

    // Fake Data
    let data = [];
    this.labels.forEach((l) => {
      data.push(getRandomInt(200));
    });
    this.datasets.push({
      label: "",
      backgroundColor: this.labels.map((l) => getRandomColor()),
      data: data,
    });

    this.complete = true;
  },
  template: `
    <div class="relative h-full w-full">
      <h3 class="absolute top-3 left-5">Secciones</h3>
      <doughnut-chart v-if="complete" :labels="labels" :datasets="datasets" :config="config" />
    </div>
    `,
});
