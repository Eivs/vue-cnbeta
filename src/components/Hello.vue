<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {getApiUrl} from '../assets/js/common'

export default {
  data () {
    return {
      msg: 'Hello World!111'
    }
  },
  ready () {
    let vm = this
    let resource = vm.$resource(getApiUrl('Article.Lists'))
    resource.get()
     .then((response) => {
       if (response.ok) {
         console.log(response)
         vm.$set('data', response.data)
       }
     }, (response) => {
       console.log(response)
     })
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
