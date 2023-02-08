<template>
    <div class="p-5 w-56 border-2 border-blue-300 rounded-md mx-auto">
      <div>名前: {{ name }}</div>
      <div>所属: {{ department }}</div>
      <div>職種: {{ occupation }}</div>
      <div>入社年分: {{ joinedYear }}</div> 
      <div>コメント: {{ comment }}</div>
    </div>
    <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          large
        ></v-rating>
    </div>
  </template>

  <script>
  export default ({
    props: ['name', 'department', 'occupation', 'joinedYear', 'phoneNumber'],
  })
  </script>
