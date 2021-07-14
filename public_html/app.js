import chat from "/component/chat.vue"
import facebook_ from "/component/facebook.vue"
import markdown from "/component/markdown.vue"
import navbar from "/component/navbar.vue"
import people from "/component/people.vue"
import recent_news_ from "/component/recent_news.vue"
import topbar from "/component/topbar.vue"
import twitter_ from "/component/twitter.vue"
import video from "/component/video.vue"
import wrapper from "/component/wrapper.vue"


Vue.component('chat',chat)
Vue.component('facebook_',facebook_)
Vue.component('recent_news',markdown)
Vue.component('navbar',navbar)
Vue.component('people',people)
Vue.component('recent_news',recent_news_)


const recent_news = Vue.createApp({
    data(){
        return {"items":[
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
        ]}
    }
  });
  recent_news.mount(".recent_news");

  const people_ = Vue.createApp({
    data(){
        return {
          "items":[
            {
              "name":"Will Tovey",
              "summery":"Party Leader and Acting Nominations Officer.",
              "img":"no-pic.png",
            },

            {
              "name":"Will Tovey",
              "summery":"Party Leader and Acting Nominations Officer.",
              "img":"no-pic.png",
            }

          ]
        }
    }
  });
  people_.mount(".people");

  const facebook = Vue.createApp({
    data(){
        return {}
    }
  });
  facebook.mount(".facebook");

  const twitter = Vue.createApp({
    data(){
        return {}
    }
  });
  twitter.mount(".twitter");