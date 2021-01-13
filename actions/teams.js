import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const fetchTeams = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/teams`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return []
  }
}
