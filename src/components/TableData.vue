<template>
  <v-row justify="center" v-show="SignIn">
    <v-data-table :headers="headers" :items="users" sort-by="name.first" item-key="id.value"  >
    </v-data-table>
  </v-row>
</template>

<script>
import  api from "../api.js";

export default {
  name: "TableData",
  props:{Sign:Boolean,data_users:Object},
  created(){
      this.LoadUsers();
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "name.first" },
        { text: "Last", value: "name.last" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" ,sortable: false },
        { text: "Gender", value: "gender", sortable: false },
      ],
      users: [],
      SignIn:false,
    }
  },
  watch:{
      'data_users'(value){
          this.users.push(value);
      },
      'Sign'(value){
          this.SignIn = value;
          if(value){
              this.LoadUsers();
          } 
      }
  },
  methods:{ 
      LoadUsers(){
         api.getUsers()
         .then(data =>{
         let users = data.results;
         this.users=users; 
         })
         .catch(e=>console.error(e));
      }
  }
}
  

</script>

<style></style>
