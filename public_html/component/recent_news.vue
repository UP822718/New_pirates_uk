<template>
    <section class= "recent_news">
      <link  rel="stylesheet"  href=".\recent_news.css"></link>
      <link  rel="stylesheet"  href=".\peaple.css"></link>
      <h1>Recent news</h1>
      <ul id="example-1">
        <li v-for="item in items" :key="item.message" class="recent_news_item" >
          <a href="" class="recent_news_grid">
                <img class = "recent_news_image" v-bind:src="item.img" >
                <div class>
                <h1 class="recent_news_title" >{{ item.title}}</h1>
                {{ item.summery }}
                </div>
                <div class = "recent_news_summery"><i class="fas fa-calendar-day"></i> {{ item.date }} <i class="far fa-user"></i> {{ item.author }}</div>
                <div class = "recent_news_date"><a href="">Read More<a></div>
            </a>
        </li>
      </ul>
    </section>
</template>