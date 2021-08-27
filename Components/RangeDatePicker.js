Vue.component("range-date-picker", {
  template:
    "<div>"+
    "<date-range-picker" +
    ' :value="date"' +
    ' @input="log"' +
    ' min="2018-6-1"' +
    ' max="2030-01-01"' +
    ' :dayStr="dayStr"' +
    "/>" +
    "</div>",
  data: function () {
    return {
      dayStr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      date: ["2018-06-01"],
    };
  },
  methods: {
    log: function (val) {
      this.date = val;
      console.log(val);
    },
  },
});