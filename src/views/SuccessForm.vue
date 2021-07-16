<template>
  <div>
    <div class="overlay" id="overlay"></div>
    <div id="modal" class="modal">
      <div id="close" class="close">
        <router-link to="/" class="closeLink">X</router-link>
      </div>
      <h3>Заявка отправлена.</h3>
      <img
        id="modalImage"
        src="../assets/img/success_modal2.jpg"
        alt="successForm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessForm',
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  top: 0;
  left: 0;
  display: block;
}

.modal {
  background-color: white;
  width: 400px;
  height: 200px;
  position: fixed;
  left: calc(50% - 200px);
  top: calc(40% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.close {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;

  .closeLink {
    text-decoration: none;
  }
}
</style>
