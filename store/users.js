import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const usersRef = db.collection("users");

export const state = () => ({
  users: []
});

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("users", usersRef);
  }),
  add: firestoreAction((context, name, email, password) => {
    usersRef.add({
      name: name,
      email: email,
      password: password,
      created: firebase.firestore.FieldValue.serverTimestamp()
    });
  }),
  remove: firestoreAction((context, id) => {
    usersRef.doc(id).delete();
  })
};

export const getters = {
  orderdTodos: state => {
    return _.sortBy(state.todos, "created");
  }
};
