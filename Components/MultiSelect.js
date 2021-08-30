Vue.component("multi-select", {
  props: {
    opciones: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      activos: [],
      search: null,
    };
  },
  watch: {
    open() {
      this.search = null;
    },
  },
  computed: {
    getActivos: function () {
      return this.activos.map((cliente) =>
        this.opciones.find((opcion) => opcion.id === cliente)
      );
    },
    opcionesOrdenadas: function () {
      let ordenadas = this.opciones.sort((a, b) => {
        let indexDif = this.activos.indexOf(b.id) - this.activos.indexOf(a.id);
        if (indexDif !== 0) {
          return indexDif;
        }
        return a.value.localeCompare(b.value, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      });

      if (this.search) {
        ordenadas = ordenadas.filter((o) => {
          let regex = new RegExp(`${this.search.trim().toLowerCase()}`);
          return regex.test(o.value.trim().toLowerCase());
        });
      }
      return ordenadas;
    },
  },
  methods: {
    clickOpcion(id) {
      const opcionIndex = this.activos.findIndex((opcion) => opcion === id);
      if (opcionIndex === -1) {
        this.activos.push(id);
      } else {
        this.deleteActivo(opcionIndex);
      }
      this.$emit("change-activos", this.activos);
    },
    deleteActivo(index) {
      this.activos.splice(index, 1);
    },
  },
  template: `

<div class="h-20 flex flex-col items-center">
    <div v-if="open" class="z-10 absolute top-0 bottom-0 left-0 right-0" @click="open=false" />
    <div class="w-full">
        <div class="flex flex-col items-center relative">
            <div class="w-full z-10" @click="open=!open">
                <div class="my-2 p-1 flex items-center border border-gray-200 bg-white rounded">
                    <div class="flex-1 ml-2 text-gray-500">
                        <span v-if="activos.length == 0">Seleccione una opción</span>
                        <span v-else-if="activos.length ===1" class="text-gray-900">{{getActivos[0].value}}</span>
                        <span v-else class="text-gray-900">{{activos.length}} opciones seleccionadas.</span>
                    </div>
                    <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                        <button :class="[{'rotate-180': !open},'transform flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none']">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="open" class="z-40 w-full absolute top-14"> 
                <div class="p-2 rounded border bg-white w-full relative flex items-center">
                    <input type="text" class="flex-1 w-full h-full active:outline-none focus:outline-none" placeholder="Buscar..." v-model="search" />
                    <div
                        v-if="search"
                        @click="search = null" 
                        class="hover:text-red-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </div>

                <div class="h-56 shadow-md bg-white border z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                    <div v-if="opcionesOrdenadas.length === 0" class="text-gray-500 p-2">No hay resultados para mostrar.</div>
                    <transition-group name="flip-list" tag="div">
                      <div 
                          v-for="opcion in opcionesOrdenadas" 
                          :key="opcion.id" 
                          :class="[
                              'flex flex-col w-full bg-white list-item hover:bg-gray-200'
                          ]"
                          @click="clickOpcion(opcion.id)"
                      >
                          <div class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                              <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div class="w-full items-center flex">
                                      <div class="mx-2 leading-6  ">
                                          {{opcion.value}}
                                      </div>
                                      <div class="flex-1 text-right text-sm text-gray-500">
                                          <input type="checkbox" :checked="activos.indexOf(opcion.id) >= 0">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </transition-group>
                </div>
            </div>

        </div>
    </div>
</div>
`,
});
