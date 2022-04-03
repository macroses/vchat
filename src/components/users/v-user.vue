<template>
  <div
      @click="toUserChat"
      class="v-user">
    <div class="v-user__avatar"></div>
    <div class="v-user__name">
      <p class="info__name">{{ userData.name }}</p>
      <p class="info__last-message">
        {{ userData.chat[userData.chat.length - 1].text }}
      </p>
    </div>
    <div class="v-user__time">
      {{ userData.chat[userData.chat.length - 1].time }}
    </div>
  </div>
</template>

<script>
export default {
  name: "v-user",
  props: {
    userData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    toUserChat() {
      this.$router.push({
        name: 'chat',
        params: {
          'messages': this.userData.chat,
          'user': this.userData
        }
      })
    }
  },
  mounted() {
    console.log(this.userData)
  }
}
</script>