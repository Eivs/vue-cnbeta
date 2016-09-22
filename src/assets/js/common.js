import MD5 from 'md5'

// dataAdapter
export function getApiUrl (method) {
  let timestamp = Math.round(new Date().getTime() / 1000)
  let parms = 'app_key=10000&format=json&method=' + method + '&timestamp=' + timestamp + '&v=1.0'
  let sign = MD5(parms + '&mpuffgvbvbttn3Rc')
  let apiUrl = '/api?' + parms + '&sign=' + sign
  return apiUrl
}
