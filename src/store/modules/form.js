export default {
  actions: {
    async fetchCities({ commit }) {
      try {
        const response = await fetch(
          `https://60254fac36244d001797bfe8.mockapi.io/api/v1/city`
        );
        const data = await response.json();
        commit('setCities', data);
      } catch (error) {
        //throw error;
      }
    },
    async sendFormData({ commit }, formData) {
      try {
        const response = await fetch(
          `https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form`,
          {
            method: 'POST',
            body: JSON.stringify({
              formData,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        commit();
        console.log(data);
      } catch (error) {
        //throw error;
      }
    },
  },

  state: {
    cities: {},
    messageThemes: [
      { id: 1, theme: 'Недоволен качеством услуг' },
      { id: 2, theme: 'Расторжение договора' },
      { id: 3, theme: 'Не приходит письмо активации на почту' },
      { id: 4, theme: 'Не работает личный кабинет' },
    ],
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
  },
  getters: {
    cities: (s) => s.cities,
    messageThemes: (s) => s.messageThemes,
  },
};
