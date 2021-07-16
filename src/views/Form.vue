<template>
  <form @submit.prevent="sendForm">
    <div class="branchLocation">
      <h5>Ваш филиал <span class="required">*</span></h5>
      <select
        :disabled="formData.online"
        v-model="formData.city"
        class="selectCity"
      >
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
    <div class="messageTheme">
      <h5>Тема обращения <span class="required">*</span></h5>
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
          class="otherTheme"
        />
      </div>
    </div>
    <div class="textDescription">
      <h5>Описание проблемы <span class="required">*</span></h5>
      <textarea v-model="formData.text" placeholder="Введите текст"></textarea>
    </div>
    <div class="loadDoc">
      <h5>Загрузка документы</h5>
      <div class="loadDocDescription">
        <p>Приложите, пожалуйста, полноэкрнанный скриншот.</p>
        <p>Это поможет быстрее решить проблему</p>
      </div>
      <input type="file" />
    </div>
    <div>
      <button class="sendBtn" type="submit" :disabled="!checkForm">
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Form',
  computed: {
    ...mapGetters(['cities', 'messageThemes', 'formData']),
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

<style lang="scss" scoped>
form {
  border: 1px solid lightgray;
  padding: 30px;
  box-sizing: border-box;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

h5 {
  font-weight: 100;
  font-size: 16px;
  color: gray;
}

.selectCity {
  margin-top: 15px;
  border: 1px solid lightgray;
  width: 230px;
  padding: 5px;
  box-sizing: border-box;
  color: rgb(94, 93, 93);
  &:disabled {
    background-color: rgb(235, 230, 230);
  }
}

.messageTheme {
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  .theme {
    margin-top: 5px;
  }

  .otherTheme {
    margin-top: 15px;
    border: none;
    outline: 1px solid lightgray;
    font-size: 14px;
    width: 230px;
    padding: 5px;
    color: rgb(94, 93, 93);
  }
}

.textDescription {
  margin-top: 20px;
  textarea {
    margin-top: 15px;
    width: 100%;
    height: 100px;
    font-size: 14px;
    border: none;
    outline: 1px solid lightgray;
    padding: 5px;
    box-sizing: border-box;
    color: rgb(94, 93, 93);
  }
}

.loadDoc {
  margin-top: 20px;
  .loadDocDescription {
    margin: 12px 0;
    font-size: 14px;
    color: rgb(168, 167, 167);
  }
}

.sendBtn {
  margin-top: 30px;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  background-color: #ff9767;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 7px 21px;
  box-sizing: border-box;
  cursor: pointer;
  &:disabled {
    background: lightgray;
  }
  &:hover:enabled {
    background-color: #fa6e11;
  }
}

.required {
  color: red;
}
</style>
