import axios from 'axios'

export default async () => {
  const { data } = await axios.get('http://localhost:1212/api/teams')

  return data
}
