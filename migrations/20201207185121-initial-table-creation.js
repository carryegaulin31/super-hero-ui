module.exports = {
  up: queryInterface => queryInterface.bulkInsert('heroes', [
    {
      name: 'Captain America',
      realname: 'Steve Rogers',
      firstappearance: 'Captain America Comics #1',
      slug: 'captain-america',
    }, {
      name: 'Spider-Man',
      realname: 'Peter Parker',
      firstappearance: 'Amazing Fantasy #15',
      slug: 'spider-man',
    }, {
      name: 'Iron Man',
      realname: 'Tony Stark',
      firstappearance: 'Tales of Suspense #39',
      slug: 'iron-man',
    }, {
      name: 'Thor',
      realname: 'Thor Odinson',
      firstappearance: 'Journey into Mystery #83',
      slug: 'thor',
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('heroes'),

}
