import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllHeroes, getHeroBySlug, saveNewHero } from './controllers/heroes'
import { getAllTeams, getTeamBySlug, saveNewTeam } from './controllers/teams'

const app = express()

app.use(express.static('public'))

app.get('/api/heroes', getAllHeroes)
app.get('/api/heroes/:slug', getHeroBySlug)
app.post('/api/heroes', bodyParser.json(), saveNewHero)

app.get('/api/teams', getAllTeams)
app.get('/api/teams/:slug', getTeamBySlug)
app.post('/api/teams', bodyParser.json(), saveNewTeam)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1500, () => {
  console.log('Listening on port 1500...') // eslint-disable-line no-console
})
