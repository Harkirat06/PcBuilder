const gamaBaja = 1;
const gamaBajaMedia = 2;
const gamaMedia = 3;
const gamaMediaAlta = 4;
const gamaAlta = 5;
const gamaPremium = 6;

const emptyConfiguration = {};

const configuration = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaAlta,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i7-13700K 3.4 GHz",
    gama: gamaAlta,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaAlta,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaAlta,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const cpuList = [
  {
    marca: "Intel",
    nombre: "Intel Core i9-13700K 4 GHz",
    gama: gamaAlta,
    socket: "Intel LGA 1700",
    consumo: 253,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  {
    marca: "Intel",
    nombre: "Intel Core i7-13700K 3.4 GHz",
    gama: gamaAlta,
    socket: "Intel LGA 1700",
    consumo: 253,
    tipoRam: "DDR4",
    ventilador: false,
    gpu: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  {
    marca: "Intel",
    nombre: "Intel Core i5-13600KF 3.5 GHz",
    gama: gamaMedia,
    socket: "Intel LGA 1700",
    consumo: 181,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: false,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  {
    marca: "Intel",
    nombre: "Intel Core i3-13100 3.4 GHz/4.5 GHz",
    gama: gamaBaja,
    socket: "Intel LGA 1700",
    consumo: 89,
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
];

const placasList = [
  {
    marca: "Asus",
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: gamaAlta,
    numeroM2: 2,
    numeroSata: 2,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  {
    marca: "Asus",
    nombre: "ASUS PRIME Z790-V",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: gamaAlta,
    numeroM2: 2,
    numeroSata: 2,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  {
    marca: "Asus",
    nombre: "ASUS TUF GAMING Z790 PLUS WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    gama: gamaMedia,
    numeroM2: 1,
    numeroSata: 2,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  {
    marca: "MSI",
    nombre: "MSI MAG Z790 TOMAHAWK WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1200",
    tipoRam: "DDR5",
    gama: gamaBaja,
    numeroM2: 1,
    numeroSata: 2,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
];

const gpuList = [
  {
    marca: "MSI",
    nombre: "MSI GeForce RTX 3060 VENTUS 2X OC LHR 12GB GDDR6",
    consumo: 170,
    potenciaRecomendada: 550,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  {
    marca: "AMD",
    nombre: "Sapphire Pulse AMD Radeon RX 6700 XT 12GB GDDR6",
    consumo: 230,
    potenciaRecomendada: 650,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    consumo: null,
    potenciaRecomendada: 750,
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
];

const ramList = [
  {
    marca: "Corsair",
    nombre: "Corsair Vengeance LPX DDR4 3200MHz PC4-25600 32GB 2x16GB CL16",
    tipo: "DDR4",
    capacidad: 32, //gb
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  {
    marca: "Kingston",
    nombre: "Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16",
    tipo: "DDR4",
    capacidad: 16,
    gama: gamaBajaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaPremium,
    precio: {
      segundaMano: 100,
      amazon: 200,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
];

const discoList = [
  {
    marca: "Samsung",
    nombre: "Samsung 870 QVO SSD 1TB SATA3",
    capacidad: 1, //tb
    tecnologia: "Sata",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "hdd.jpg",
  },
  {
    marca: "Samsung",
    nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
    capacidad: 1,
    tecnologia: "m.2",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "m2.jpg",
  },
  {
    marca: "Seagate",
    nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
    capacidad: 2,
    tecnologia: "Sata",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "hdd.jpg",
  },
];

const monitorList = [
  {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  {
    marca: "AOC",
    nombre: "AOC 24B2XHM2 23.8 LED FullHD",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  {
    marca: "LG",
    nombre: "LG 27GR95QE-B 26.5 OLED QHD 240Hz G-Sync/FreeSync Premium",
    gama: gamaPremium,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
];

const disipadorList = [
  {
    marca: "Tempest",
    nombre: "Tempest Cooler 4Pipes 120mm Ventilador CPU Negro",
    tipo: "Ventilador",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 360 ARGB Kit de Refrigeración Líquida 360mm Negro",
    tipo: "Liquida",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
];

const cajaList = [
  {
    marca: "Forgeon",
    nombre: "Forgeon Mithril ARGB Mesh Torre ATX Negra",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  {
    marca: "Nox",
    nombre: "Nox Hummer Void USB 3.0 Negro",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
];

const fuenteList = [
  {
    marca: "Tempest",
    nombre: "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
    potencia: "650", //W
    ochetaplus: true,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  {
    marca: "Tempest",
    nombre: "Tempest PSU PRO 650W 80+ Bronze Fuente de Alimentación",
    potencia: "750",
    ochetaplus: false,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
];

const ratonList = [
  {
    marca: "Tempest",
    nombre: "Tempest X8 Keeper RGB Ratón Gaming 10.000 DPI Negro",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Vendetta Ratón Gaming RGB 16000DPI Negro",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
  },
  {
    marca: "Newskill",
    nombre: "Newskill Eos Ivory Ratón Gaming Professional RGB 16000DPI Blanco",
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "raton.jpg",
  },
];

const tecladoList = [
  {
    marca: "Tempest",
    nombre: "Tempest Cataclysm Combo 3 en 1 Gaming Teclado",
    gama: gamaMedia,
    mecanico: false,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
  },
  {
    marca: "Forgeon",
    nombre: "Forgeon Clutch Teclado Gaming RGB 60% Switch Blue",
    gama: gamaBaja,
    mecanico: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
  },
  {
    marca: "Newskill",
    nombre: "Newskill Suiko Teclado Mecánico Gaming Full RGB Switch Kailh Blue",
    gama: gamaAlta,
    mecanico: true,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "teclado.jpg",
  },
];

const buildGamaBaja = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaBaja,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaBaja,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaBajaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaBaja1 = {
  placas: {
    nombre: "ASUS PRIME Z790-P",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaBaja,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaBaja,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaBajaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaBaja2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaBaja,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaBaja,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaBajaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaBaja3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaBaja,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaBaja,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaBaja,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaBajaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaBaja,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaMedia = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaMedia,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaMediaAlta,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaMedia1 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaMedia,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaMediaAlta,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaMedia2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaMedia,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaMediaAlta,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaMedia3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: gamaMedia,
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: gamaMediaAlta,
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: gamaMedia,
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: gamaMedia,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: gamaMediaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaAlta = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Alta",
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Alta",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaAlta1 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Alta",
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Alta",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaAlta2 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Alta",
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Alta",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "ssd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: gamaAlta,
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildGamaAlta3 = {
  placas: {
    nombre: "ASUS PRIME Z790-P WIFI",
    tamaño: "ATX",
    socket: "Intel LGA 1700",
    gama: "Alta",
    numeroM2: 0,
    numeroSata: 1,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "placa.jpg",
  },
  cpu: {
    marca: "Intel",
    nombre: "Intel Core i3-13700K 3.4 GHz",
    gama: "Alta",
    socket: "Intel LGA 1700",
    tipoRam: "DDR5",
    ventilador: false,
    gpu: true,
    tipoRam: "DDR5",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "intel.jpg",
  },
  ram: {
    marca: "Corsair",
    nombre:
      "Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra",
    tipo: "DDR5",
    capacidad: 32,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "ram.jpg",
  },
  m2: [
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
    {
      marca: "Samsung",
      nombre: "Samsung 980 Pro SSD 1TB PCIe NVMe M.2",
      capacidad: 1,
      tecnologia: "m.2",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "m2.jpg",
    },
  ],
  sata: [
    {
      marca: "Samsung",
      nombre: "Samsung 870 QVO SSD 1TB SATA3",
      capacidad: 1, //tb
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
    {
      marca: "Seagate",
      nombre: "Seagate BarraCuda 3.5 2TB SATA 3",
      capacidad: 2,
      tecnologia: "Sata",
      gama: "Alta",
      precio: {
        segundaMano: 100,
        amazon: 150,
        ebay: 200,
      },
      imagen: "hdd.jpg",
    },
  ],
  gpu: {
    marca: "Gigabyte",
    nombre: "Gigabyte GeForce RTX 4070 Windforce OC 12 GB GDDR6X DLSS3",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "gpu.jpg",
  },
  fuenteAlimentacion: {
    marca: "Forgeon",
    nombre:
      "Forgeon Bolt PSU 850W 80+ Gold Full Modular Fuente de Alimentación",
    potencia: "850",
    ochetaplus: true,
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "fuente.jpg",
  },
  monitor: {
    marca: "ASUS",
    nombre:
      "ASUS TUF Gaming VG249Q1A 23.8 LED IPS FullHD 165Hz FreeSync Premium",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "monitor.jpg",
  },
  caja: {
    marca: "Tempest",
    nombre: "Tempest Umbra RGB Torre ATX Blanca",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "caja.jpg",
  },
  disipador: {
    marca: "Forgeon",
    nombre: "Forgeon Azoth 240 ARGB Kit de Refrigeración Líquida 240mm Negro",
    tipo: "Liquida",
    gama: "Alta",
    precio: {
      segundaMano: 100,
      amazon: 150,
      ebay: 200,
    },
    imagen: "disipador.jpg",
  },
};

const buildsGamaBaja = [
  buildGamaBaja,
  buildGamaBaja1,
  buildGamaBaja2,
  buildGamaBaja3,
];
const buildsGamaMedia = [
  buildGamaMedia,
  buildGamaMedia1,
  buildGamaMedia2,
  buildGamaMedia3,
];
const buildsGamaAlta = [
  buildGamaAlta,
  buildGamaAlta1,
  buildGamaAlta2,
  buildGamaAlta3,
];

module.exports = {
  buildsGamaBaja,
  buildsGamaMedia,
  buildsGamaAlta,
  emptyConfiguration,
  configuration,
  cpuList,
  placasList,
  ramList,
  cajaList,
  gpuList,
  disipadorList,
  discoList,
  monitorList,
  fuenteList,
  ratonList,
  tecladoList,
};
