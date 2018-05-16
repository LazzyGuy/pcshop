import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cartTotal: 0,
    cart: {},
    total: 0,
    priceRange: 60000,
    products: [
      {
        id: 0,
        name: 'Lenovo(Celeron J3355/4GB/1TB/DOS/Integrated Graphics)',
        price: 16990,
        category: 'desktop',
        sale: true,
        img: 'image1.jpg'
      },
      {
        id: 1,
        name: 'Reotm Reo Slimtype Desktop Intel Core I5 650',
        price: 27300,
        category: 'desktop',
        sale: true,
        img: 'image2.jpg'
      },
      {
        id: 2,
        name: 'AssembLED Desktop Pc With Intel 2.93 GHZ ',
        price: 20990,
        category: 'desktop',
        sale: true,
        img: 'image3.jpg'
      },
      {
        id: 3,
        name: 'Gandiva Core 2 Duo, G31 Motherboard',
        price: 13999,
        category: 'desktop',
        sale: true,
        img: 'image4.jpg'
      },
      {
        id: 4,
        name: 'Lenovo All In One Desktop C2000',
        price: 21752,
        category: 'desktop',
        sale: true,
        img: 'image5.jpg'
      },
      {
        id: 5,
        name: 'DELL Inspiron 3268 2017 Desktop',
        price: 50849,
        category: 'desktop',
        sale: true,
        img: 'image6.jpg'
      },
      {
        id: 6,
        name: 'Lenovo 310s-081ap Desktop',
        price: 30990,
        category: 'desktop',
        sale: true,
        img: 'image7.jpg'
      },
      {
        id: 7,
        name: 'Lenovo - (Core i3 (6th Gen)/4 GB DDR4/1 TB/Windows 10 ',
        price: 34990,
        category: 'desktop',
        sale: true,
        img: 'image8.jpeg'
      },
      {
        id: 8,
        name: 'Punta - (Core 2 Duo/4 GB DDR2/500 GB/Windows XP/4 GB)',
        price: 13989,
        category: 'desktop',
        sale: true,
        img: 'image9.jpeg'
      },
      {
        id: 9,
        name: 'HP - (APU Quad Core E2/4 GB DDR3/1 TB/Free DOS)',
        price: 21990,
        category: 'desktop',
        sale: true,
        img: 'image10.jpeg'
      },
      {
        id: 10,
        name: 'Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra)',
        price: 54990,
        category: 'laptop',
        sale: true,
        img: 'image11.jpeg'
      },
      {
        id: 11,
        name: 'Acer Aspire 3 Pentium Quad Core - (4 GB/500 GB HDD/Windows 10)',
        price: 21990,
        category: 'laptop',
        sale: true,
        img: 'image12.jpeg'
      },
      {
        id: 12,
        name: 'Lenovo Core i5 7th Gen - (8 GB/1 TB HDD/DOS/2 GB Graphics)',
        price: 37990,
        category: 'laptop',
        sale: true,
        img: 'image13.jpeg'
      },
      {
        id: 13,
        name: 'Acer Nitro 5 Core i5 7th Gen - (8 GB/1 TB HDD/Windows 10 Home/2 GB Graphics)',
        price: 49900,
        category: 'laptop',
        sale: true,
        img: 'image14.jpeg'
      },
      {
        id: 14,
        name: 'Dell 15 5000 Core i3 7th Gen - (4 GB/1 TB HDD/Windows 10 Home) ',
        price: 39800,
        category: 'laptop',
        sale: true,
        img: 'image15.jpeg'
      },
      {
        id: 15,
        name: 'Micromax Canvas Lapbook L1160 11.6-inch Laptop ',
        price: 17990,
        category: 'laptop',
        sale: true,
        img: 'image16.jpg'
      },
      {
        id: 16,
        name: 'Dell Vostro 3468 14-inch Laptop (7th Gen Core i3-7100U/4GB/1TB/Ubuntu 14.04/Integrated Graphics)',
        price: 27990,
        category: 'laptop',
        sale: true,
        img: 'image17.jpg'
      },
      {
        id: 17,
        name: 'Corsair Vengeance 8GB DDR4 LPX 2400MHz',
        price: 7066,
        category: 'hardware',
        sale: true,
        img: 'image18.jpg'
      },
      {
        id: 18,
        name: 'HyperX Fury 8GB DDR3 1866MHz CL10 DIMM Desktop Memory ',
        price: 5484,
        category: 'hardware',
        sale: true,
        img: 'image19.jpg'
      },
      {
        id: 19,
        name: 'Samsung original Ram memory upgrade 4GB 1 x 4GB DDR3 ',
        price: 2099,
        category: 'hardware',
        sale: true,
        img: 'image20.jpg'
      },
      {
        id: 20,
        name: 'Gigabyte Geforce GT 710 2GB DDR5 Graphics Card (GV-N710D5-2GL)',
        price: 3699,
        category: 'hardware',
        sale: true,
        img: 'image21.jpg'
      },
      {
        id: 21,
        name: 'ZOTAC GeForce GT 710 2GB DDR5 Zone Edition Graphics Card',
        price: 14199,
        category: 'hardware',
        sale: true,
        img: 'image22.jpg'
      },
      {
        id: 22,
        name: 'Gigabyte Radeon RX 550 D5 2GB Graphic Cards GV-RX550D5-2GD',
        price: 9490,
        category: 'hardware',
        sale: true,
        img: 'image23.jpg'
      }

  ]
  },
  getters:{
    desktop: state => filter(state.products,state.priceRange, 'category', 'desktop'),
    laptop: state => filter(state.products,state.priceRange, 'category', 'laptop'),
    hardware: state => filter(state.products,state.priceRange, 'category', 'hardware')
  },
  mutations:{
    addItem: (state, item) => {
      state.cartTotal++;
      if (item.name in state.cart) {
        state.cart[item.name].count++;
      } else {
        let stateItem = Object.assign({}, item);
        stateItem.count = 1;
        state.cart[item.name] = stateItem;
      }
    }
  }
})

const filter = (array, range, key, value) => array.filter((item) => {
  return item[key] === value && item['price'] <= range 
});