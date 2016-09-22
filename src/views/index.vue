<template lang="jade">
  h1 cnbeta
  sticky
    tab(:line-width="1")
      tab-item(selected) 正在正映
      tab-item 即将上映
  article-lisets
</template>

<script>
import Sticky from 'vux-components/sticky'
import Tab from 'vux-components/tab/tab'
import TabItem from 'vux-components/tab/tab-item'
import ArticleLisets from '../components/ArticleLists'
import { getApiUrl } from '../assets/js/common'

export default {
  data () {
    return {}
  },
  computed: {},
  ready () {
    let vm = this
    let resource = vm.$resource(getApiUrl('Article.Lists'))
    resource.get()
     .then((response) => {
       if (response.ok) {
         if (response.data.status === 'success') {
           console.log(response.data)
          // vm.$set('data', response.data)
         }
       }
     }, (response) => {
       console.log(response)
     })
  },
  attached () {},
  methods: {},
  components: {
    Sticky,
    Tab,
    TabItem,
    ArticleLisets
  }
}
</script>

<style lang="css">

</style>
