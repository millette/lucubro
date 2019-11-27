"use strict"

const themes = [
  {
    text: "#542437",
    background: "#ecd078",
    highlight: "#c02942",
    primary: "#d95b43",
    secondary: "#53777a",
    muted: "#78334e",
  },

  {
    text: "#ece5ce",
    background: "#774f38",
    highlight: "#f1d4af",
    primary: "#e08e79",
    secondary: "#c5e0dc",
    muted: "#ded1a9",
  },

  {
    text: "#f8ca00",
    background: "#490a3d",
    highlight: "#e97f02",
    primary: "#bd1550",
    secondary: "#8a9b0f",
    muted: "#c5a000",
  },

  {
    text: "#fecea8",
    background: "#2a363b",
    highlight: "#99b898",
    primary: "#ff847c",
    secondary: "#e84a5f",
    muted: "#fdb276",
  },

  {
    text: "#f1efa5",
    background: "#554236",
    highlight: "#d3ce3d",
    primary: "#f77825",
    secondary: "#60b99a",
    muted: "#eae779",
  },

  {
    text: "#ebe3aa",
    background: "#5d4157",
    highlight: "#cad7b2",
    primary: "#838689",
    secondary: "#a8caba",
    muted: "#e1d581",
  },

  {
    text: "#f2c45a",
    background: "#8c2318",
    highlight: "#bfb35a",
    primary: "#5e8c6a",
    secondary: "#88a65e",
    muted: "#eeb32b",
  },

  // NICE
  {
    text: "#26ade4",
    background: "#000000",
    highlight: "#ffffff",
    primary: "#d1e751",
    secondary: "#4dbce9",
    muted: "#188fbf",
  },

  {
    text: "#eafde6",
    background: "#1b676b",
    highlight: "#bef202",
    primary: "#519548",
    secondary: "#88c425",
    muted: "#c2f9b7",
  },

  {
    text: "#fcebb6",
    background: "#5e412f",
    highlight: "#f0a830",
    primary: "#78c0a8",
    secondary: "#f07818",
    muted: "#fade85",
  },

  {
    text: "#cfbe27",
    background: "#3b2d38",
    highlight: "#bcbdac",
    primary: "#f27435",
    secondary: "#f02475",
    muted: "#a4971f",
  },

  {
    text: "#f0d8a8",
    background: "#3d1c00",
    highlight: "#f2d694",
    primary: "#86b8b1",
    secondary: "#fa2a00",
    muted: "#e8c47d",
  },

  {
    text: "#2a2829",
    background: "#b9d7d9",
    highlight: "#493736",
    primary: "#668284",
    secondary: "#7b3b3b",
    muted: "#444142",
  },

  // NICE
  {
    text: "#ccbf82",
    background: "#170409",
    highlight: "#b8af03",
    primary: "#67917a",
    secondary: "#e33258",
    muted: "#bdac5e",
  },

  {
    text: "#e8d5b9",
    background: "#0e2430",
    highlight: "#e8d5b7",
    primary: "#fc3a51",
    secondary: "#f5b349",
    muted: "#dbbe93",
  },

  {
    text: "#f4ebc3",
    background: "#ab526b",
    highlight: "#f0e2a4",
    primary: "#bca297",
    secondary: "#c5ceae",
    muted: "#ecdd98",
  },

  {
    text: "#fcf7c5",
    background: "#29221f",
    highlight: "#0abfbc",
    primary: "#fc354c",
    secondary: "#13747d",
    muted: "#f9f094",
  },

  // NICE
  {
    text: "#1c2130",
    background: "#ffeaad",
    highlight: "#028f76",
    primary: "#b3e099",
    secondary: "#d14334",
    muted: "#2f3750",
  },

  {
    text: "#e5ddcb",
    background: "#524656",
    highlight: "#a7c5bd",
    primary: "#eb7b59",
    secondary: "#cf4647",
    muted: "#d4c7a9",
  },

  {
    text: "#563444",
    background: "#dad6ca",
    highlight: "#6a5e72",
    primary: "#1bb0ce",
    secondary: "#4f8699",
    muted: "#76475d",
  },

  {
    text: "#edebe6",
    background: "#403b33",
    highlight: "#d6e1c7",
    primary: "#94c7b6",
    secondary: "#d3643b",
    muted: "#d8d3c8",
  },

  {
    text: "#ebebbc",
    background: "#230f2b",
    highlight: "#bce3c5",
    primary: "#f21d41",
    secondary: "#82b3ae",
    muted: "#dfdf95",
  },

  {
    text: "#fcf7d3",
    background: "#5e3929",
    highlight: "#dee8be",
    primary: "#cd8c52",
    secondary: "#b7d1a3",
    muted: "#f9eea3",
  },

  {
    text: "#000000",
    background: "#cccccc",
    highlight: "#292c37",
    primary: "#9f111b",
    secondary: "#b11623",
    muted: "#1a1a1a",
  },

  {
    text: "#ffeaf2",
    background: "#382f32",
    highlight: "#fcd9e5",
    primary: "#fbc5d8",
    secondary: "#f1396d",
    muted: "#ffb7d2",
  },

  // CRISP
  {
    text: "#e3dfba",
    background: "#1a1f1e",
    highlight: "#c8d6bf",
    primary: "#93ccc6",
    secondary: "#6cbdb5",
    muted: "#d4ce96",
  },

  // NICE
  {
    text: "#e9f2f9",
    background: "#1b325f",
    highlight: "#9cc4e4",
    primary: "#3a89c9",
    secondary: "#f26c4f",
    muted: "#c1daee",
  },

  {
    text: "#fbeec2",
    background: "#605951",
    highlight: "#accec0",
    primary: "#c1b398",
    secondary: "#61a6ab",
    muted: "#f8e192",
  },

  {
    text: "#040004",
    background: "#c8ff00",
    highlight: "#4b000f",
    primary: "#413d3d",
    secondary: "#fa023c",
    muted: "#370037",
  },

  {
    text: "#eff3cd",
    background: "#605063",
    highlight: "#b2d5ba",
    primary: "#61ada0",
    secondary: "#248f8d",
    muted: "#e2e9a4",
  },

  {
    text: "#fffee4",
    background: "#8b7a5e",
    highlight: "#ffefd3",
    primary: "#d0ecea",
    secondary: "#9fd6d2",
    muted: "#fffcb1",
  },

  {
    text: "#dfece6",
    background: "#2d2d29",
    highlight: "#92c7a3",
    primary: "#215a6d",
    secondary: "#3ca2a2",
    muted: "#bfd9cd",
  },

  {
    text: "#f8edd1",
    background: "#474843",
    highlight: "#c5cfc6",
    primary: "#d88a8a",
    secondary: "#9d9d93",
    muted: "#f1dca5",
  },

  {
    text: "#f1edd0",
    background: "#55443d",
    highlight: "#cde9ca",
    primary: "#f38a8a",
    secondary: "#a0cab5",
    muted: "#e5dea9",
  },

  {
    text: "#a70267",
    background: "#f6d86b",
    highlight: "#f10c49",
    primary: "#fb6b41",
    secondary: "#339194",
    muted: "#d90386",
  },

  {
    text: "#353432",
    background: "#94ba65",
    highlight: "#2b4e72",
    primary: "#4e4d4a",
    secondary: "#2790b0",
    muted: "#4f4e4b",
  },

  {
    text: "#fefeeb",
    background: "#4e3f30",
    highlight: "#f8f4e4",
    primary: "#0ca5b0",
    secondary: "#a5b3aa",
    muted: "#fcfcba",
  },

  {
    text: "#f5e0d3",
    background: "#4d3b3b",
    highlight: "#ffd0b3",
    primary: "#de6262",
    secondary: "#ffb88c",
    muted: "#ecc3a9",
  },

  {
    text: "#fffbb7",
    background: "#4f2958",
    highlight: "#a6f6af",
    primary: "#66b6ab",
    secondary: "#5b7c8d",
    muted: "#fff884",
  },

  {
    text: "#ffedbf",
    background: "#2e0d23",
    highlight: "#f8e4c1",
    primary: "#f7803c",
    secondary: "#f54828",
    muted: "#ffdf8c",
  },

  {
    text: "#f7af63",
    background: "#633d2e",
    highlight: "#ddd9ab",
    primary: "#9cddc8",
    secondary: "#bfd8ad",
    muted: "#f59632",
  },

  {
    text: "#fffcdd",
    background: "#805841",
    highlight: "#dcf7f3",
    primary: "#ffd8d8",
    secondary: "#f5a2a2",
    muted: "#fff7aa",
  },

  {
    text: "#dee1b6",
    background: "#373b44",
    highlight: "#e1b866",
    primary: "#73c8a9",
    secondary: "#bd5532",
    muted: "#ced292",
  },
]

export default themes

///////////// STOP HERE RYM /////////////

/*
// HMM CONTRAST
const ooo = {
  text: '#f9cdad',
  background: '#fe4365',
  highlight: '#c8c8a9',
  primary: '#fc9d9a',
  secondary: '#83af9b',
  muted: '#f6b07d'
}

// HMM CONTRAST
const ooo = {
  text: '#c7f464',
  background: '#556270',
  highlight: '#4ecdc4',
  primary: '#ff6b6b',
  secondary: '#c44d58',
  muted: '#b6f134'
}

// HMM CONTRAST
const ooo = {
  text: '#031634',
  background: '#e8ddcb',
  highlight: '#033649',
  primary: '#cdb380',
  secondary: '#036564',
  muted: '#062a64'
}

// HMM CONTRAST
const ooo = {
  text: '#e5fcc2',
  background: '#594f4f',
  highlight: '#9de0ad',
  primary: '#547980',
  secondary: '#45ada8',
  muted: '#d0fa91'
}

// HMM CONTRAST
const ooo = {
  text: '#edc951',
  background: '#6a4a3c',
  highlight: '#eb6841',
  primary: '#00a0b0',
  secondary: '#cc333f',
  muted: '#e8bb23'
}

// HMM CONTRAST
const ooo = {
  text: '#dad8a7',
  background: '#ff3d7f',
  highlight: '#ff9e9d',
  primary: '#3fb8af',
  secondary: '#7fc7af',
  muted: '#cbc883'
}

// HMM CONTRAST
const ooo = {
  text: '#d5ded9',
  background: '#7a6a53',
  highlight: '#d9ceb2',
  primary: '#948c75',
  secondary: '#99b2b7',
  muted: '#b8c8bf'
}

// HMM CONTRAST
const ooo = {
  text: '#2e2633',
  background: '#efffcd',
  highlight: '#99173c',
  primary: '#dce9be',
  secondary: '#555152',
  muted: '#483c50'
}

// HMM CONTRAST
const ooo = {
  text: '#00dffc',
  background: '#343838',
  highlight: '#00b4cc',
  primary: '#005f6b',
  secondary: '#008c9e',
  muted: '#00b2c9'
}

// HMM CONTRAST
const ooo = {
  text: '#f7e4be',
  background: '#413e4a',
  highlight: '#f0b49e',
  primary: '#73626e',
  secondary: '#b38184',
  muted: '#f1d191'
}

// HMM CONTRAST
const ooo = {
  text: '#f6f7bd',
  background: '#655643',
  highlight: '#e6ac27',
  primary: '#80bca3',
  secondary: '#bf4d28',
  muted: '#f0f190'
}

// HMM CONTRAST
const ooo = {
  text: '#351330',
  background: '#e8caa4',
  highlight: '#424254',
  primary: '#64908a',
  secondary: '#cc2a41',
  muted: '#5b2052'
}

// HMM CONTRAST
const ooo = {
  text: '#3b8183',
  background: '#fad089',
  highlight: '#ed303c',
  primary: '#ff9c5b',
  secondary: '#f5634a',
  muted: '#4ba4a6'
}

// HMM CONTRAST
const ooo = {
  text: '#f4fad2',
  background: '#ff4242',
  highlight: '#f0f2eb',
  primary: '#d4ee5e',
  secondary: '#e1edb9',
  muted: '#e9f5a4'
}

// HMM CONTRAST
const ooo = {
  text: '#355c7d',
  background: '#f8b195',
  highlight: '#6c5b7b',
  primary: '#f67280',
  secondary: '#c06c84',
  muted: '#4476a1'
}

// HMM CONTRAST
const ooo = {
  text: '#e2f7ce',
  background: '#452632',
  highlight: '#e8bf56',
  primary: '#91204d',
  secondary: '#e4844a',
  muted: '#c8f0a2'
}

// HMM CONTRAST
const ooo = {
  text: '#36393b',
  background: '#eee6ab',
  highlight: '#45484b',
  primary: '#c5bc8e',
  secondary: '#696758',
  muted: '#4e5356'
}

// HMM CONTRAST
const ooo = {
  text: '#2a044a',
  background: '#a0c55f',
  highlight: '#0b2e59',
  primary: '#0d6759',
  secondary: '#7ab317',
  muted: '#45077a'
}

// HMM CONTRAST
const ooo = {
  text: '#fff7bd',
  background: '#f04155',
  highlight: '#f2f26f',
  primary: '#ff823a',
  secondary: '#95cfb7',
  muted: '#fff18a'
}

// HMM CONTRAST
const ooo = {
  text: '#ecf081',
  background: '#ab3e5b',
  highlight: '#ffbe40',
  primary: '#b3cc57',
  secondary: '#ef746f',
  muted: '#e5eb53'
}

// HMM CONTRAST
const ooo = {
  text: '#ce1836',
  background: '#edb92e',
  highlight: '#009989',
  primary: '#a3a948',
  secondary: '#f85931',
  muted: '#e73250'
}

// HMM CONTRAST
const ooo = {
  text: '#300030',
  background: '#f07241',
  highlight: '#480048',
  primary: '#601848',
  secondary: '#c04848',
  muted: '#630063'
}

// HMM CONTRAST
const ooo = {
  text: '#604848',
  background: '#f0f0d8',
  highlight: '#607848',
  primary: '#789048',
  secondary: '#c0d860',
  muted: '#7d5e5e'
}

// CONTRAST, HMM
const ooo = {
  text: '#2a2c31',
  background: '#fffedf',
  highlight: '#5a2e2e',
  primary: '#3e4147',
  secondary: '#dfba69',
  muted: '#42454c'
}

// CONTRAST, HMM
const ooo = {
  text: '#cc0c39',
  background: '#f8fcc1',
  highlight: '#1693a7',
  primary: '#e6781e',
  secondary: '#c8cf02',
  muted: '#f1194c'
}

// YUCK (contrast)
const ooo = {
  text: '#e5f04c',
  background: '#5c323e',
  highlight: '#c0d23e',
  primary: '#a82743',
  secondary: '#e15e32',
  muted: '#deec1d'
}

// CONTRAST, HMM
const ooo = {
  text: '#e6f9bc',
  background: '#3a111c',
  highlight: '#bcdea5',
  primary: '#574951',
  secondary: '#83988e',
  muted: '#d5f58d'
}

// YUCK (contrast)
const ooo = {
  text: '#333333',
  background: '#f6f6f6',
  highlight: '#990100',
  primary: '#e8e8e8',
  secondary: '#b90504',
  muted: '#4d4d4d'
}

// YUCK (contrast)
const ooo = {
  text: '#dcd1b4',
  background: '#b05574',
  highlight: '#fab87f',
  primary: '#5e9fa3',
  secondary: '#f87e7b',
  muted: '#ccbc91'
}

// YUCK (contrast)
const ooo = {
  text: '#f5f4d7',
  background: '#951f2b',
  highlight: '#e0dfb1',
  primary: '#a5a36c',
  secondary: '#535233',
  muted: '#ebe9ae'
}

// YUCK (contrast)
const ooo = {
  text: '#5c5863',
  background: '#cfffdd',
  highlight: '#ff1f4c',
  primary: '#b4dec1',
  secondary: '#a85163',
  muted: '#75707e'
}

// YUCK (contrast)
const ooo = {
  text: '#4e395d',
  background: '#ccfc8e',
  highlight: '#827085',
  primary: '#8ebe94',
  secondary: '#dc5b3e',
  muted: '#694c7d'
}

// YUCK (contrast)
const ooo = {
  text: '#ecbe13',
  background: '#046d8b',
  highlight: '#93a42a',
  primary: '#309292',
  secondary: '#2fb8ac',
  muted: '#bd980f'
}

// YUCK!
const ooo = {
  text: '#fabe28',
  background: '#ff003c',
  highlight: '#ff8a00',
  primary: '#88c100',
  secondary: '#00c176',
  muted: '#eaa805'
}

// YUCK!
const ooo = {
  text: '#151101',
  background: '#edf6ee',
  highlight: '#412e28',
  primary: '#d1c089',
  secondary: '#b3204d',
  muted: '#463803'
}

// YUCK!
const ooo = {
  text: '#aa00ff',
  background: '#aaff00',
  highlight: '#ff00aa',
  primary: '#ffaa00',
  secondary: '#00aaff',
  muted: '#bb33ff'
}

// YUCK!
const ooo = {
  text: '#f9bf76',
  background: '#615375',
  highlight: '#8eb2c5',
  primary: '#d1313d',
  secondary: '#e5625c',
  muted: '#f7a845'
}
*/
