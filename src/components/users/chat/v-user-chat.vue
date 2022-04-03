<template>
  <div class="v-user-chat">
    <v-message
      v-for="message in messages"
      :key="message.id"
    >
      {{ message.text }}
    </v-message>
    <div class="input__field">
      <input
          type="text"
          class="v-user-chat__textfield"
          v-model="textValue"
          @keydown.enter="sendMessage"
      >
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import VMessage from "@/components/users/chat/v-message";

export default {
  name: "v-user-chat",
  components: {
    VMessage
  },
  props: {
    messages: { type: Array, default: () => [] },
    user: { type: Object, default: () => {} }
  },
  data() {
    return {
      textValue: ''
    }
  },
  methods: {
    sendMessage() {

    }
  },
}
</script>

<style lang="scss" scoped>

</style>