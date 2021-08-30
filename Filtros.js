Vue.component("filtros", {
  data() {
    return {
      opciones: {
        clientes: [],
        vendedores: [],
        familias: [],
      },
      activos: {
        clientes: [],
        vendedores: [],
        familias: [],
        fechas: {
          start: null,
          end: null,
        },
      },
    };
  },
  created: function () {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promise resolved");
      }, 300);
      setTimeout(function () {
        reject("Promise Rejected");
      }, 500);
    });

    const clientes = [
      { id: "cliente1", value: "Cliente 1" },
      { id: "cliente2", value: "Cliente 2" },
      { id: "cliente3", value: "Cliente 3" },
      { id: "cliente4", value: "Cliente 4" },
      { id: "cliente5", value: "Cliente 5" },
      { id: "cliente6", value: "Cliente 6" },
      { id: "cliente11", value: "Cliente 111" },
      { id: "cliente12", value: "Cliente 22" },
      { id: "cliente13", value: "Cliente 33" },
      { id: "cliente14", value: "Cliente 44" },
      { id: "cliente15", value: "Cliente 55" },
      { id: "cliente16", value: "Cliente 66" },
    ];
    const vendedores = [
      { id: "vendedor1", value: "Vendedor 1" },
      { id: "vendedor2", value: "Vendedor 2" },
      { id: "vendedor3", value: "Vendedor 3" },
      { id: "vendedor4", value: "Vendedor 4" },
      { id: "vendedor5", value: "Vendedor 5" },
    ];
    const familias = [
      { id: "familias1", value: "Familias 1" },
      { id: "familias2", value: "Familias 2" },
      { id: "familias3", value: "Familias 3" },
      { id: "familias4", value: "Familias 4" },
      { id: "familias5", value: "Familias 5" },
    ];
    promise.then(() => {
      this.opciones.clientes.push(...clientes);
      this.opciones.vendedores.push(...vendedores);
      this.opciones.familias.push(...familias);
    });
  },
  methods: {
    changeActivos(tipo, data) {
      this.activos[tipo].splice(0, this.activos[tipo].length);
      this.activos[tipo].push(...data);
      this.emitFiltros();
    },
    changeFechas(fechas) {
      Vue.set(this.activos.fechas, "start", fechas.start);
      Vue.set(this.activos.fechas, "end", fechas.end);
      this.emitFiltros();
    },
    emitFiltros() {
      this.$emit("change-filtros", this.activos);
    },
  },
  template: `
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
        <div class="col-span-1">
            <h3 class="text-lg font-medium">Clientes</h3>
            <multi-select :opciones="opciones.clientes" @change-activos="changeActivos('clientes', $event)" />
        </div>
        <div class="col-span-1">
            <h3 class="text-lg font-medium">Vendedores</h3>
            <multi-select :opciones="opciones.vendedores" @change-activos="changeActivos('vendedores', $event)" />
        </div>
        <div class="col-span-1">
            <h3 class="text-lg font-medium">Familias</h3>
            <multi-select :opciones="opciones.familias" @change-activos="changeActivos('familias', $event)" />
        </div>
        <div class="col-span-1">
            <h3 class="text-lg font-medium">Rango</h3>
            <range-date-picker @change-fecha="changeFechas"/>
        </div>
    </div>
    `,
});
