<template>
    <details class= "people" open>
      <summary>People <i class="fas fa-user"></i> </summary>
      <div>
      <li v-for="item in items" :key="item.message">
        <a href=""  class="peaple_item">
        <spam class="name">{{item.name}} </spam>
        <spam class="peaple_profile">Profile ›</spam>
        <img class = "peaple_image" v-bind:src="item.img" >
        <spam>{{item.summery}}</spam>
      </a>
      </li>
    </div>
    </details>
</template>

<script>
export default {
 data()   {
     return {
         "items":[
            {
                "message":"ff",
                "title":"Remote Voting in Parliament: how its removal disenfranchises millions of constituents",
                "summery":"The Government’s move to end remote voting for MPs is not only irresponsible and discriminatory, but epitomises Parliament’s refusal to modernise to a level fit for the 21st century. ",
                "date":"07.10.2020",
                "author":"Adrian Farrel, Harley Faggetter",
                "img":"shuttingdown.png",
            },
            {
              "message":"ff",
              "title":"Remote Voting in Parliament: how its removal disenfranchises millions of constituents",
              "summery":"The Government’s move to end remote voting for MPs is not only irresponsible and discriminatory, but epitomises Parliament’s refusal to modernise to a level fit for the 21st century. ",
              "date":"07.10.2020",
              "author":"Adrian Farrel, Harley Faggetter",
              "img":"shuttingdown.png",
          }
         ]
     }
 }
}
</script>
<style scoped>

</style>