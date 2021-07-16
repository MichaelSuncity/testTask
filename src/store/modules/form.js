import router from '../../router';

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
        console.log(data.success);
        if (data.success) {
          commit('resetForm');
          router.push('/successform');
          //this.$router.push('/successform');
        } else {
          alert('Ошибка отправки заявки');
        }
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
    formData: {
      online: false,
      city: null,
      theme: null,
      otherTheme: null,
      text: null,
      messageFile: null,
    },
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
    resetForm(state) {
      state.formData = {
        online: false,
        city: null,
        theme: null,
        otherTheme: null,
        text: null,
        messageFile: null,
      };
    },
  },
  getters: {
    cities: (s) => s.cities,
    messageThemes: (s) => s.messageThemes,
    formData: (s) => s.formData,
  },
};
