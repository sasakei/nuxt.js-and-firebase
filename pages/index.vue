<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        firebase-todo
      </h1>
      <div class="links">
        <nuxt-link to="signin" class="button--green">SignIn</nuxt-link>
        <nuxt-link to="login" class="button--grey">LogIn</nuxt-link>
        <button @click="signout" email="email">SignOut</button>
      </div>
      <p v-if="user">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

var user = firebase.auth().currentUser;
console.log(user);

export default {
  data: function () {
    return {
      user: user,
    };
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(alert("Success!"), this.$router.push("/"))
        .catch(function (error) {
          alert("Success!"), this.$router.push("/");
        });
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
