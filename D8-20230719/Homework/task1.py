food1=input("enter the 1st food iteam:")
food2=input("enter the 2nd food iteam:")
users_foods={"milk":1.02,
              "popcorn":2.5,
              "bread":2.5}
print(users_foods[food1]+users_foods[food2])
# food_iteam1="milk"
# food_iteam2="popcorn"
# food_iteam3="bread"
# a=users_foods["milk"]+users_foods["popcorn"]
# b=users_foods["milk"]+users_foods["bread"]
# c=users_foods["popcorn"]+users_foods["bread"]
if users_foods[food1] and users_foods[food2]:
  print("your food is available\n",users_foods[food1]+users_foods[food2],"is the total price for your order")
else:
  print("your food is not available")

  # """elif users_foods[food1]==food_iteam2 and users_foods[food2]==food_iteam3:
  # print("your food is available,\n and the total price for 2 iteam is:",c)"""