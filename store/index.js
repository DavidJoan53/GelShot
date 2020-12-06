// Aquí se irá almacenando la orden
export const state = () => ({
  products: [],
  total: 0,
});

// Accesores
export const getters = {
  getOrder(state) {
    return {
      products: state.products,
      total: state.total,
      customer: state.customer,
    };
  },
  getTotal(state) {
    let sum = 0;
    for (let product of state.products) {
      if (isNaN(product.price)) product.price = 0;
      sum += product.price;
    }
    return Math.floor(sum * 100) / 100;
  },
};

// Acciones
export const actions = {
  sendProduct({ commit }) {
    commit("addProduct");
  },
};

// Mutaciones
export const mutations = {
  addProduct(state) {
    let product = JSON.parse(sessionStorage.getItem("product"));
    state.products.push(product);
  },
};
