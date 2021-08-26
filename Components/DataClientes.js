Vue.component("data-clientes", {
  data() {
    return {
      cols: ["Name", "HVA", "Metabo", "Importe Total"],
      rows: [],
      hva: [
        { id: "Bronce", color: "#F78272" },
        { id: "Diamante", color: "#B2B2B2" },
        { id: "General", color: "#84C28A" },
      ],
      metabo: [
        { id: "Metabo A", color: "#DB93CD" },
        { id: "Metabo B", color: "#F9D087" },
        { id: "Metabo C", color: "#84C28A" },
      ],
    };
  },
  created() {
    const rows = [
      {
        id: 170038,
        razon_social: "Vivero Inventado S.A.",
        hva: "Diamante",
        metabo: "Metabo C",
        importe_total: {
          importe: 30.75,
          currency: "USD",
        },
      },
      {
        id: 170032,
        razon_social: "Molino S.A.",
        hva: "Bronce",
        metabo: "Metabo A",
        importe_total: {
          importe: 30.75,
          currency: "USD",
        },
      },
      {
        id: 170035,
        razon_social: "Hogas S.A.",
        hva: "General",
        metabo: "Metabo B",
        importe_total: {
          importe: 30.75,
          currency: "USD",
        },
      },
    ];
    this.rows.push(...rows);
  },
  methods: {
    getElementById(tipo, id) {
      switch (tipo) {
        case "hva":
          return this.hva.find((item) => item.id === id);
        case "metabo":
          return this.metabo.find((item) => item.id === id);
        default:
          return {};
      }
    },
  },
  template: `
    <table-layout :cols="cols">
      <tr v-for="(row,index) in rows" :key="row.id" 
        :class="[{'bg-gray-100': index%2}, 'hover:bg-gray-300 cursor-pointer']"
        @click="$emit('row-clicked', row)"
      >
        <td class="px-6 py-2">
            <div class="text-sm font-medium text-gray-900">
              {{row.razon_social}}
            </div>
        </td>
        <td class="px-6 py-2">
          <div class="flex items-center gap-x-1">
            <div class="h-4 w-4 rounded-full" :style="'background-color:'+getElementById('hva', row.hva).color" />
            <div class="text-sm text-gray-900">{{row.hva}}</div>
          </div>  
        </td>
        <td class="px-6 py-2">
          <div class="flex items-center gap-x-1">
            <div class="h-4 w-4 rounded-full" :style="'background-color:'+getElementById('metabo', row.metabo).color" />
            <div class="text-sm text-gray-900">{{row.metabo}}</div>
          </div>
        </td>
        <td class="px-6 py-2">
          <div class="text-sm text-gray-900">{{row.importe_total.importe}}</div>
        </td>
      </tr>
    </table-layout>
    `,
});