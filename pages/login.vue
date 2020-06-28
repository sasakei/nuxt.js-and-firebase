<template>
  <div class="signin">
    <table>
      <tr>
        <th>メールアドレス</th>
      </tr>
      <tr>
        <td><input type="email" v-model="email" /></td>
      </tr>
      <tr>
        <th>パスワード</th>
      </tr>
      <tr>
        <td><input type="password" v-model="password" /></td>
      </tr>
    </table>

    <button @click="login">ログイン</button>
    <p>
      アカウントが無い方はこちら【<nuxt-link to="signin">新規登録</nuxt-link>】
    </p>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(alert("Success!"), this.$router.push("/"))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
