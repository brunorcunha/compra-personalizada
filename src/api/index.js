import Vue from 'vue'

const $serverEndpoint = 'https://dog.ceo/api'

export default ({
  request: async (url, args) => {
    const resposta = (await Vue.http.get(`${$serverEndpoint}${url}`, args)).data
    if (resposta && resposta.status !== 'success') throw resposta
    return resposta.message
  }
})
