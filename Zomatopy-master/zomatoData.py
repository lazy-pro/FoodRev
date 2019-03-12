import zomatopy
from zomatopy import initialize_app

config={
  "user_key":"ae82a0ef896c61c6d5e1d4cac2e4ae24"
}
    
zomato = zomatopy.initialize_app(config)
collections_dictionary = zomato.get_collections(24)
city_ID = zomato.get_city_ID("allahabad")
restaurant_list = zomato.restaurant_search()
print(city_ID)