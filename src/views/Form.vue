<template>
  <form @submit.prevent="sendForm">
    <div>
      <h5>Ваш филиал</h5>
      <select :disabled="formData.online" v-model="formData.city">
        <option disabled selected value="null">Выберите город</option>
        <option v-for="city in cities" :key="city.id" :value="city.id">
          {{ city.title }}
        </option>
      </select>
      <label
        ><input
          type="checkbox"
          v-model="formData.online"
          @change="formData.city = null"
        />Онлайн
      </label>
    </div>
    <div>
      <h5>Тема обращения</h5>
      <label
        class="theme"
        v-for="messageTheme in messageThemes"
        :key="messageTheme.id"
      >
        <input
          type="radio"
          name="messageTheme"
          v-model="formData.theme"
          :value="messageTheme.id"
          @change="formData.otherTheme = null"
        />{{ messageTheme.theme }}
      </label>
      <div>
        <input
          type="text"
          v-model="formData.otherTheme"
          @input="formData.theme = null"
          placeholder="Другое"
        />
      </div>
    </div>
    <div>
      <h5>Описание проблемы</h5>
      <textarea
        v-model="formData.text"
        cols="90"
        rows="6"
        placeholder="Введите текст"
      ></textarea>
    </div>
    <div>
      <h5>Загрузка документы</h5>
      <p>Приложите, пожалуйста, полноэкрнанный скриншот.</p>
      <p>Это поможет быстрре решить проблему</p>
      <input type="file" />
    </div>
    <div>
      <button type="submit" :disabled="!checkForm">Отправить</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Form',
  data() {
    return {
      formData: {
        online: false,
        city: null,
        theme: null,
        otherTheme: null,
        text: null,
        messageFile: null,
      },
    };
  },
  computed: {
    ...mapGetters(['cities', 'messageThemes']),
    checkForm() {
      return (this.formData.online || this.formData.city) &&
        (this.formData.theme || this.formData.otherTheme) &&
        this.formData.text
        ? true
        : false;
    },
  },
  methods: {
    ...mapActions(['fetchCities', 'sendFormData']),
    sendForm() {
      this.sendFormData(this.formData);
    },
  },
  mounted() {
    this.fetchCities();
  },
};
</script>
