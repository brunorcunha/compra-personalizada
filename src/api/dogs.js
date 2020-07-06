import API from './'

export default {
  breeds: async () => API.request('/breeds/list/all'),
  imgBreed: async breed => API.request(`/breed/${breed}/images/random`),
  imgSubBreed: async (breed, subBreed) => API.request(`/breed/${breed}/${subBreed}/images/random`)
}
