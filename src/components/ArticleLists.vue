<template lang="html">
  <group>
    <panel header="" :list="lists" type="1"></panel>
  </group>
</template>

<script>
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import Panel from 'vux-components/panel'

export default {
  props: ['lists'],
  data () {
    return {
      list: []
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
<style lang="less" scoped>
.weui_cells.vux-no-group-title {
  margin-top:90px;
}
</style>
