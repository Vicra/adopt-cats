import axios from "axios";

export async function getCats() {
  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats',
    params: {name: 'abyssinian'},
    headers: {'X-Api-Key': '8I5WKinqRnySQO3moxyqbw==zy4om9QVXoSingY4'}
  };
  
  const response = await axios.request(options);
  response.data.push({
    "length": "14 to 18 inches, not including tail",
    "origin": "Persia (known as Iran today)",
    "image_link": "https://api-ninjas.com/images/cats/persian.jpg",
    "family_friendly": 3,
    "shedding": 5,
    "general_health": 2,
    "playfulness": 2,
    "meowing": 3,
    "children_friendly": 2,
    "stranger_friendly": 2,
    "grooming": 2,
    "intelligence": 3,
    "other_pets_friendly": 2,
    "min_weight": 7,
    "max_weight": 12,
    "min_life_expectancy": 10,
    "max_life_expectancy": 15,
    "name": "Persian"
  })

  response.data.push({
    "length": "17 to 21 inches, not including tail",
    "origin": "Riverside, California, USA",
    "image_link": "https://api-ninjas.com/images/cats/ragdoll_cats.jpg",
    "family_friendly": 5,
    "shedding": 4,
    "general_health": 3,
    "playfulness": 4,
    "meowing": 4,
    "children_friendly": 5,
    "grooming": 1,
    "intelligence": 4,
    "other_pets_friendly": 4,
    "min_weight": 10,
    "max_weight": 20,
    "min_life_expectancy": 12,
    "max_life_expectancy": 17,
    "name": "Ragdoll Cats"
  })

  response.data.push({
    "length": "15 to 20 inches, not including tail",
    "origin": "Thailand",
    "image_link": "https://api-ninjas.com/images/cats/siamese_cat.jpg",
    "family_friendly": 5,
    "shedding": 2,
    "general_health": 3,
    "playfulness": 4,
    "meowing": 5,
    "children_friendly": 4,
    "grooming": 4,
    "intelligence": 5,
    "other_pets_friendly": 4,
    "min_weight": 6,
    "max_weight": 14,
    "min_life_expectancy": 8,
    "max_life_expectancy": 15,
    "name": "Siamese Cat"
  })

  response.data.push({
    "length": "Medium",
    "origin": "Ankara, Turkey",
    "image_link": "https://api-ninjas.com/images/cats/turkish_angora.jpg",
    "family_friendly": 5,
    "shedding": 2,
    "general_health": 3,
    "playfulness": 5,
    "children_friendly": 3,
    "stranger_friendly": 4,
    "grooming": 4,
    "intelligence": 4,
    "other_pets_friendly": 3,
    "min_weight": 5,
    "max_weight": 9,
    "min_life_expectancy": 12,
    "max_life_expectancy": 18,
    "name": "Turkish Angora"
  })
  return response.data;

}