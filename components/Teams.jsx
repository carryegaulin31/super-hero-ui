import React, { useEffect, useState } from 'react'
import Search from './Search'
import Team from './Team'
import { filterTeams, retrieveTeams } from '../utils/teams'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [teamList, setTeamList] = useState([])
  const [filteredTeamList, setFilteredTeamList] = useState([])
  useEffect(() => {
    async function pullData() {
      const teams = await retrieveTeams()

      setTeamList(teams)
      setFilteredTeamList(teams)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterTeams(teamList, searchTerm)

    setFilteredTeamList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Meet the Heroes</div>
      <div className="subtitle">A searchable list of all your favorite teams of heroes</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredTeamList.map(team => (<Team key={team.id} id={team.id} name={team.name} slug={team.slug} />))
      }
    </div>
  )
}
