<template>
  <div class="v-users-list">
    <v-user
      v-for="chat in chats"
      :key="chat.id"
      :user-data="chat"
    />
  </div>
</template>

<script>
import VUser from "@/components/users/v-user";
import { mapState, mapActions } from "vuex";

export default {
  name: "v-users-list",
  components: {
    VUser
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState([
        'chats'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_CHATS',
      'SET_USER_TO_HEADER'
    ])
  },
  mounted() {
    this.FETCH_CHATS()
    this.SET_USER_TO_HEADER()
  }
}
</script>