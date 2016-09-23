import MD5 from 'md5'
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
// dataAdapter
export default ((params = {
  methods: '',
  page: '1',
  success: () => {},
  error: () => {}
}) => {
  let timestamp = Math.round(new Date().getTime() / 1000)
  let parms = ''
  switch (params.methods) {
    case 'Lists':
      parms = 'app_key=10000&format=json&method=Article.Lists&timestamp=' + timestamp + '&v=1.0'
      break
    case 'NewsContent':
      parms = 'app_key=10000&format=json&method=Article.NewsContent&sid=' + params.sid + '&timestamp=' + timestamp + '&v=1.0'
      break
  }
  let sign = MD5(parms + '&mpuffgvbvbttn3Rc')
  let apiUrl = '/api?' + parms + '&sign=' + sign
  request(apiUrl, {success: params.success, error: params.error})
})

export function request (apiUrl, callBack) {
  let resource = Vue.resource(apiUrl)
  resource.get()
   .then((response) => {
     if (response.ok) {
       if (response.data.status === 'success') {
         callBack.success(response)
       } else {
         callBack.error(response)
       }
     }
   }, (response) => {
     callBack.error(response)
     console.log(response)
   })
}
