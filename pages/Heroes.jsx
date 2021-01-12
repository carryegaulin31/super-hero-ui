import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import Hero from '../components/Hero'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import TeamDetails from '../components/TeamDetails'
import Title from '../components/Title'
import { retrieveHeroes } from '../utils/heroes'

export default ({ location }) => {
  const [teamSlug, setTeamSlug] = useState('')
  const [team, setTeam] = useState({})
  const [heroList, setHeroList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, heroes } = await retrieveHeroes(location)

      setTeamSlug(details.slug)
      setTeam(details)
      setHeroList(heroes)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        teamSlug
          ? (
            <>
              <TeamDetails name={team.name} slug={team.slug} />
              {heroList.map(hero => (
                <Hero
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  realname={hero.realname}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I do not know that team" />)
      }
    </Page>
  )
}
