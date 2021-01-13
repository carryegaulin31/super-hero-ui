import { expect } from 'chai'
// import { describe, it } from 'mocha'
import { singleTeam } from '../mocks/heroes'
import * as HeroesActions from '../../actions/heroes'
import { getTeamSlugFromUrl, retrieveHeroes } from '../../utils/heroes'


describe('Utils - Heroes', () => {
  let sandbox
  let stubbedFetchHeroesForTeam

  before(() => {
    sandbox = createSandbox()

    stubbedFetchHeroesForTeam = sandbox.stub(HeroesActions, 'fetchHeroesForTeam')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })


  describe('getTeamSlugFromUrl', () => {
    it('returns the final portion of the URL from the location object provided', () => {
      const slug = getTeamSlugFromUrl({ pathname: '/heroes/x-men' })

      expect(slug).to.equal('x-men')
    })

    it('returns empty string when there is no pathname', () => {
      const slug = getTeamSlugFromUrl({})

      expect(slug).to.equal('')
    })
  })

  describe('retrieveHeroes', () => { })
  it('returns the team id, their details, and product list from the API call', async () => {
    stubbedFetchHeroesForTeam.returns(singleTeam)

    const data = await retrieveHeroes({ pathname: '/heroes/x-men' })

    expect(data).to.deep.equal({
      details: { id: 3, name: 'X-Men', slug: 'x-men' },
      heroes: singleTeam.heroes,
    })
  })
})
