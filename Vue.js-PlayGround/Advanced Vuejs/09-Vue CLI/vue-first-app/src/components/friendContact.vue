<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleData">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>PHONE: {{ friend.phone }}</li>
      <li>EMAIL :{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleData() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>