import requests
from pprint import pprint

locationUrlFromLatLong = "https://developers.zomato.com/api/v2.1/search?entity_id=24&entity_type=city"
header = {"User-agent": "curl/7.43.0", "Accept": "application/json", "user_key": "ae82a0ef896c61c6d5e1d4cac2e4ae24"}

response = requests.get(locationUrlFromLatLong, headers=header)

pprint(response.json())