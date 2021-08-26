Vue.component("doughnut-chart", {
  props: {
    config: {
      type: Object,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },
  watch: {
    datasets: function (val) {
      this.chart.update();
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted: function () {
    const config = {
      ...this.config,
      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
    };
    const options = {
      aspectRatio: 1,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          align: "start",
        },
        labels: {
          fontColor: "#fff",
        },
      },
      onClick: (e) => {
        let clickedPoint = this.chart.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          false
        );
        console.log(clickedPoint);
      },
    };

    this.chart = new Chart(this.$refs.chart, {
      ...config,
      options: {
        ...options,
      },
    });
  },
  template: `
            <canvas ref="chart"></canvas>
    `,
});
