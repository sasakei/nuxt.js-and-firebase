<template>
  <div>
    <nuxt-link to="/">トップページへ</nuxt-link>
    <nuxt-link to="login">ログインページへ</nuxt-link>
    <div class="signup">
      <table>
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td><input type="email" v-model="email" /></td>
        </tr>
        <tr>
          <th>パスワード：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="password" /></td>
        </tr>
      </table>

      <button @click="signUp">登録</button>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  created: function() {
    this.$store.dispatch("users/init");
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(alert("Success!"), this.$router.push("login"))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
