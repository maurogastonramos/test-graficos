Vue.component("number-chart", {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
  },
  template: `
        <div class="h-full pb-10 flex flex-col items-center justify-center">
             <span class="font-medium text-3xl">{{titulo}}</span>
             <span class="mt-5 text-5xl">{{numero}}</span>
        </div>
    `,
});
