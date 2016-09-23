<template lang="html">
  <div class="views">
    <view-box v-ref:view-box>
      <!--header slot-->
      <x-header class="header-box" slot="header"></x-header>
      <!--default slot-->
      <div class="articles-content">
        <header>
          <h2>{{article.title}}</h2>
          <p class="article-byline">
            <a class="commnum" href=""><i></i>{{article.comments}}</a>
            <span>{{article.source}}</span>
            <time class="time">{{article.time}}</time>
          </p>
        </header>
        <div class="article-summ">
          {{{article.hometext}}}
        </div>
        {{{article.bodytext}}}
      </div>
    </view-box>
    <loading :show="loadingShow" :text="loadingText"></loading>
  </div>
</template>

<script>
import ViewBox from 'vux-components/view-box'
import xHeader from 'vux-components/x-header'
import Loading from 'vux-components/loading'
import getData from '../assets/js/getData'

export default {
  components: {
    ViewBox,
    Loading,
    xHeader
  },
  data () {
    return {
      article: {},
      loadingShow: true,
      loadingText: '加载中...'
    }
  },
  computed: {},
  ready () {
    this.init()
  },
  attached () {},
  methods: {
    init: function () {
      this.loadData(this.$route.params.sid)
    },
    loadData: function (sid) {
      let vm = this
      getData({
        methods: 'NewsContent',
        sid: sid,
        success: (response) => {
          vm.$set('loadingShow', false)
          console.log(response.data.result)
          vm.$set('article', response.data.result)
        },
        error: (response) => {
          vm.$set('loadingShow', false)
          console.log(response)
        }
      })
    }
  }
}
</script>

<style lang="less">
.articles-content {
  line-height: 1.8rem;
  padding: 0 1rem 1rem 1rem;
  header {
    padding: 2rem 0 0 0;
    h2 {
      font-size: 1.8rem;
      text-align: left
    }
    .article-byline {
      color: #A2A2A2;
      font-size: 12px;
      .commnum {
      }
    }
  }
  p {
    margin: 1rem 0;
    img {
      width: 100% !important;
      height: auto !important;
      margin: 1rem 0;
    }
  }
}

</style>
