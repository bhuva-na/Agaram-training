# items_list = [
#     {'name': 'Apple', 'category': 'Fruits'},
#     {'name': 'Carrot', 'category': 'Vegetables'},
#     {'name': 'Banana', 'category': 'Fruits'},
#     {'name': 'Broccoli', 'category': 'Vegetables'},
# ]
# def item_category(items):
#     new_item_list = {}
#     for item in items:
#         #print(item)
#         category = item["category"]
#         name=item["name"]
#     #print(category)
#     #print(name)
#         if category in new_item_list:
#             new_item_list[category].append(name)
#         else: 
#             new_item_list[category]=[name]
            
#         #print( new_item_list)
#     return new_item_list
# category_list=item_category(items_list)
# print(category_list)

# def item_category(item):
   
#     new_list={}
#     Fruits=[]
#     Vegetables=[]
#     for items in items_list:
#         if items["category"]=="Fruits":
#             Fruits.append(items["name"])
#         elif items["category"]=="Vegetables":
#             Vegetables.append(items["name"])
#     new_list.update({"vegetables":Vegetables,"Fruits":Fruits})
#     #category=[Fruits+Vegetables]
#     #print(category)
#     return new_list
# categories=item_category(items_list)
# print(categories)

            








my_dict = {'a': 1, 'b': 2, 'c': 3}
value_to_delete = 2
#key_to_delete = None
new_dict={}
new_dict1={}
for key in my_dict():
    if key==value_to_delete:
        new_dict.update({key:value})
        new_dict=None
    else:
        new_dict1.update({key:value})
print(new_dict)
print(new_dict1)

    #print(value)
#     values=my_dict[value]
#     print(values)
#     #print(key)
#     if my_dict[key] == value_to_delete:
#         # pass
#         #print(my_dict[key])
#         key_to_delete = key
        
#         #print(key)
        
#     else:
#         new_dict.update({key:value})
#     # if key_to_delete in my_dict:


# # Check if the key was found and then create a new dictionary without the key-value pair
# # if key_to_delete is not None:
# #      for key in my_dict :
# #         if key != key_to_delete:
# #             my_dict=new_dict{key:my_dict[key]}
            
# #         else:
# #             print("Value not found in the dictionary.")

# # The key-value pair with value 2 is now removed from the dictionary
# print(my_dict)