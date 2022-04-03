<template>
  <div class="v-contact-user"
      @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{ contactData.name }}</span>
    </div>
    <div
        class="user__status"
        :class="className"
    >

    </div>
  </div>
</template>

<script>
export default {
  name: "v-contact-user",
  props: {
    contactData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toContactInfo() {
      this.$emit('toContactInfo')
    }
  },
  computed: {
    className() {
      return {
        'online': this.contactData.status === 'online',
        'offline': this.contactData.status === 'offline'
      }
    }
  }
}
</script>