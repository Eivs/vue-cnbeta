<template lang="html">
  <group>
    <panel header="" :list="list" type="1"></panel>
  </group>
</template>

<script>
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import Panel from 'vux-components/panel'

export default {
  data () {
    return {
      list: [
        {
          title: '5G技术几秒钟内下载完整高清电影 日本运营商望率先采用',
          url: '',
          src: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
          desc: ''
        },
        {
          title: '5G技术几秒钟内下载完整高清电影 日本运营商望率先采用',
          url: '',
          src: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
          desc: ''
        }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    Group,
    Cell,
    Panel
  }
}
</script>
