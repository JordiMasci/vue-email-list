const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  mounted() {
    for (i = 0; i < 10; i++) {
      this.randomEmail();
    }
  },
  methods: {
    randomEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => this.emailList.push(response.data.response));
    },
  },
}).mount("#app");

// "success":true,"response":"sarai.padberg@gmail.com"
