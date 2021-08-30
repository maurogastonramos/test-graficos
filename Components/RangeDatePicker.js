Vue.component("range-date-picker", {
  template: `
    <div>
      <input class="p-2 mt-2 w-full text-gray-500 border rounded" ref="datepicker" type="text" name="daterange" :value="dateRange"/>
    </div>
  `,
  data: function () {
    return {
      startDate: null,
      endDate: null,
    };
  },
  computed: {
    dateRange: function () {
      return `${this.startDate} - ${this.endDate}`;
    },
  },
  mounted: function () {
    const startDate = moment().subtract(1, "month");
    const endDate = moment();

    this.startDate = startDate.format("DD/MM/YYYY");
    this.endDate = endDate.format("DD/MM/YYYY");
    this.emitFechas(this.startDate, this.endDate);
    
    $('input[name="daterange"]').daterangepicker(
      {
        locale: {
          format: "DD/MM/YYYY",
          separator: " - ",
          applyLabel: "Aceptar",
          cancelLabel: "Cancelar",
          fromLabel: "Desde",
          toLabel: "Hasta",
          customRangeLabel: "Custom",
          weekLabel: "S",
          daysOfWeek: ["D", "L", "M", "M", "J", "V", "S"],
          monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
        },
        opens: "left",
        startDate: startDate,
        endDate: endDate,
        // minDate: "30/08/2021"
      },
      (start, end, label) => {
        this.startDate = start.format("DD/MM/YYYY");
        this.endDate = end.format("DD/MM/YYYY");

        this.emitFechas(this.startDate, this.endDate);
      }
    );
  },
  methods: {
    emitFechas(start, end) {
      this.$emit('change-fecha', {start, end})
    },
  },
});