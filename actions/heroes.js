import axios from 'axios'

export default async (slug) => {
  const { data } = await axios.get(`${API_BASE_URL}/teams/${slug}`) // eslint-disable-line no-undef

  return data
}