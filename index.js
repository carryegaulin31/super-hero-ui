const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { getAllHeroes, getHeroBySlug, saveNewHero } = require('./controllers/heroes')
const { getAllTeams, getTeamBySlug, saveNewTeam } = require('./controllers/Teams')

const app = express()

app.use(express.static('public'))

app.get('/api/heroes', getAllHeroes)
app.get('/api/heroes/:slug', getHeroBySlug)
app.post('/api/heroes', bodyParser.json(), saveNewHero)

app.get('/api/teams', getAllTeams)
app.get('/api/teams/:slug', getTeamBySlug)
app.post('/api/teams', bodyParser.json(), saveNewTeam)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
