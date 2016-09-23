<template lang="html">
  <div class="views">
    <view-box v-ref:view-box>
      <div class="header-box" slot="header">
        <x-header :left-options="{showBack: false}" :right-options="{showMore: true}">cnBeta</x-header>
        <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item> 即将上映</tab-item>
        </tab>
      </div>
      <article-lists :lists='lists'></article-lists>
    </view-box>
    <loading :show="loadingShow" :text="loadingText" position="absolute"></loading>
    <toast :show.sync="toastShow" type="text">{{toastText}}</toast>
  </div>
</template>

<script>
import ViewBox from 'vux-components/view-box'
import xHeader from 'vux-components/x-header'
import Tab from 'vux-components/tab/tab'
import TabItem from 'vux-components/tab/tab-item'
import Loading from 'vux-components/loading'
import Toast from 'vux-components/toast'
import ArticleLists from '../components/ArticleLists'
import getData from '../assets/js/getData'

export default {
  components: {
    ViewBox,
    Tab,
    TabItem,
    Loading,
    Toast,
    ArticleLists,
    xHeader
  },
  data () {
    return {
      lists: [],
      loadingShow: true,
      loadingText: '加载中...',
      toastText: '',
      toastShow: false,
      isTabbarDemo: false
    }
  },
  ready () {
    this.init(this)
  },
  attached () {},
  methods: {
    init: function () {
      this.loadList()
    },
    loadList: function () {
      let vm = this
      getData({
        methods: 'Lists',
        success: (response) => {
          vm.$set('loadingShow', false)
          console.log(response.data.result)
          let listsData = []
          response.data.result.forEach((item, index) => {
            listsData.push({
              url: 'articles/' + item.sid,
              title: item.title,
              desc: item.summary,
              src: item.thumb
            })
          })
          vm.$set('lists', listsData)
        },
        error: (response) => {
          vm.$set('loadingShow', false)
          vm.$set('toastShow', true)
          vm.$set('toastText', response)
          console.log(response)
        }
      })
    }
  },
  computed: {}
}
</script>
<style>
.weui_cells.vux-no-group-title {
  margin-top:1rem;
}
</style>
