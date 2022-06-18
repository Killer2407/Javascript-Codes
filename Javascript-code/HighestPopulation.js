// Find the country with the highest population programmatically
// Use foreign key ids to join data together and determine the country
// with the highest population based on the city/population data available
// const countries = [
//     { id: 1, name: 'USA' },
//     { id: 2, name: 'England' },
//     { id: 3, name: 'Russia' },
//     { id: 4, name: 'New Zealand' }
//    ]
    
//    const cities = [
//     { id: 1, country_id: 1, name: 'New York' },
//     { id: 2, country_id: 1, name: 'Seattle' },
//     { id: 3, country_id: 2, name: 'London' },
//     { id: 4, country_id: 2, name: 'Manchester' },
//     { id: 5, country_id: 3, name: 'Moscow' },
//     { id: 6, country_id: 3, name: 'Novosibirsk' },
//     { id: 7, country_id: 4, name: 'Auckland' },
//     { id: 8, country_id: 4, name: 'Wellington' }
//    ]
//    const populations = [
//     { id: 1, city_id: 1, amount: 8419000 },
//     { id: 2, city_id: 2, amount: 724305 },
//     { id: 3, city_id: 3, amount: 8982000 },
//     { id: 4, city_id: 4, amount: 553230 },
//     { id: 5, city_id: 5, amount: 11920000 },
//     { id: 6, city_id: 6, amount: 1511000 },
//     { id: 7, city_id: 7, amount: 1657000 },
//     { id: 8, city_id: 8, amount: 212700 }
//    ]
   
   
   function country(){
   let highestPopulationCityId= populations.sort((a,b)=>(b.amount-a.amount))[0].city_id;
    let highestPopulationCountryId =cities.find(_=>_.id==highestPopulationCityId).country_id;
   
     let final= countries.find(_=>_.id==highestPopulationCountryId)
     console.log(`country id is ${final.id} and name is ${final.name}`)
   }
   country();