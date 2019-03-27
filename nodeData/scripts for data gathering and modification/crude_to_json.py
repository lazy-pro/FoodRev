import json
input_file=open('json.json', 'r')
output_file=open('test.json', 'w')
json_decode=json.load(input_file)
result=[]
x=0;
for item in json_decode:
	for item1 in item.get('restaurants'):
		my_dict={}
		x=x+1
		my_dict['srno']=x
		my_dict['id']=item1.get("restaurant").get('id')
		my_dict['name']=item1.get("restaurant").get('name')
		my_dict['name']=item1.get("restaurant").get('name')
		my_dict['url']=item1.get("restaurant").get('url')
		my_dict['address']=item1.get("restaurant").get('location').get('address')
		my_dict['locality']=item1.get("restaurant").get('location').get('locality')
		my_dict['city']=item1.get("restaurant").get('location').get('city')
		my_dict['city_id']=item1.get("restaurant").get('location').get('city_id')
		my_dict['latitude']=item1.get("restaurant").get('location').get('latitude')
		my_dict['longitude']=item1.get("restaurant").get('location').get('longitude')
		my_dict['locality_verbose']=item1.get("restaurant").get('location').get('locality_verbose')
		my_dict['cuisines']=item1.get("restaurant").get('cuisines')
		my_dict['average_cost_for_two']=item1.get("restaurant").get('average_cost_for_two')
		my_dict['price_range']=item1.get("restaurant").get('price_range')
		my_dict['currency']=item1.get("restaurant").get('currency')
		my_dict['aggregate_rating']=item1.get("restaurant").get('user_rating').get('aggregate_rating')
		my_dict['rating_text']=item1.get("restaurant").get('user_rating').get('rating_text')
		my_dict['rating_color']=item1.get("restaurant").get('user_rating').get('rating_color')
		my_dict['votes']=item1.get("restaurant").get('user_rating').get('votes')
		my_dict['has_fake_reviews']=item1.get("restaurant").get('user_rating').get('has_fake_reviews')
		my_dict['has_online_delivery']=item1.get("restaurant").get('has_online_delivery')
		my_dict['is_table_reservation_supported']=item1.get("restaurant").get('is_table_reservation_supported')
		my_dict['has_table_booking']=item1.get("restaurant").get('has_table_booking')
		
		#print(my_dict['id'])
		result.append(my_dict)
# for item in json_decode:
# 	for item1 in item.get('restaurants'):
#     	my_dict={}
#     	item2=item1.get('id')
#     	# my_dict['id']=item1.get('id')
#     	result.append("item2")
    # print (my_dict)
# output_file.write(result)
# output_file.writelines(["%s\n" % item  for item in list])
# back_json=json.dumps(result, output_file)
# output_file.write(back_json)
output_file.write("[")
for item in result:
	output_file.write("%s"%item+",")
output_file.write("]")
# print(result)
print(x)
output_file.close()