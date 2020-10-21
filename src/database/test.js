const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  //insert data on table
  await saveOrphanage(db, { 
      lat:"-27.222633",
      lng: "-49.6455874",
      name: "Lar das meninas",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "998989899",
      images: [
        "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até 8h",
      opne_on_weekends: "1"
  })
  //consulting data on table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //consulting only one orphanage by id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)

  //delete specific data from table
  await db.run('DELETE FROM orphanages WHERE id = "4" ')
})