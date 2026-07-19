<template>
  <form @submit.prevent="submitData">
    <div>
      <label> Name </label>
      <input v-model="enteredname" type="text" placeholder="name" />
    </div>
    <div>
      <label> Email </label>
      <input v-model="enteredmail" type="text" placeholder="email" />
    </div>
    <div>
      <label> phone </label>
      <input v-model="enteredphone" type="tel" placeholder="phone" />
    </div>

    <button>Add New Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredname: "",
      enteredmail: "",
      enteredphone: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredname,
        this.enteredmail,
        this.enteredphone
      );
    },
  },
};
</script>