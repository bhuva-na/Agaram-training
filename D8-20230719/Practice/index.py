"""age=int(input("enter the age:"))
if age<3 :
    a="free"
elif age>=3 and age<=12:
    a="pay$10"
elif age>=65:
    a="pay$12"
else:
    a="pay$15"
print(a)"""

"""day=int(input("enter the day:"))
if day==1:
  print("sunday")
elif day==2:
  print("monday")
elif day==3:
  print("tuesday")
elif day==4:
  print("wednesday")
elif day==5:
  print("thursday")
elif day==6:
  print("friday")
elif day==7:
  print("saturday")""" 
"""a=int(input("enter the num1:"))#greater then 3 numbers
b=int(input("enter the num2:"))
c=int(input("enter the num3:"))
if a>b or a==b :
    if a>c :
        print( " greater is",a)
    else:
        print(" greater is",c)
elif b<c:
  print(" greater is",c)
else:
    print("greater is",b)"""

"""a=int(input("enter the num1:"))#if 2 numbers are equal
b=int(input("enter the num2:"))
c=int(input("enter the num3:"))
if a>=b :
    if a>c :
        print( " greater is",a)
    else:
        print(" greater is",c)
elif b<c:
  print(" greater is",c)
else:
    print("greater is",b)"""

# food1=input("enter the 1st food iteam:")
# food2=input("enter the 2nd food iteam:")
# users_foods={"milk":1.02,
#               "popcorn":2.5,
#               "bread":2.5}
"""print(users_foods[food1]+users_foods[food2])"""
"""food_iteam1="milk"
food_iteam2="popcorn"
food_iteam3="bread"
a=users_foods["milk"]+users_foods["popcorn"]
b=users_foods["milk"]+users_foods["bread"]
c=users_foods["popcorn"]+users_foods["bread"]"""
# if users_foods[food1] and users_foods[food2]:
#   print("your food is available\n",users_foods[food1]+users_foods[food2],"is the total price for your order")
# else:
#   print("your food is not available")

"""elif users_foods[food1]==food_iteam2 and users_foods[food2]==food_iteam3:
print("your food is available,\n and the total price for 2 iteam is:",c)"""


from pprint import pprint
customer_data={}
user_name=input("customer_name:")
eb_reading=[]
for i in range(1,6):
  eb_reading.append(int(input(f"enter the eb_bill for past five months{i+1}:")))
def electricity_meter_reading(user_name,eb_units):
  bill_data=[]
  for i in range(len(eb_units)-1):
    units=eb_units[i+1]-eb_units[i]
    if units<=100:
      rate=0
    elif units>100 and units<=200:
      rate=2*units
    elif units>200 and units<=500:
      rate=5*units
    elif units>500 and units<=1000:
      rate=10*units
    elif units>1000:
      rate=14*units
    bill_data.append({"month":i+1,
              "units":units,
              "bill":rate})
  for cost in bill_data:
    total=sum([rate])
  return(bill_data)
result=electricity_meter_reading(user_name,eb_reading)
pprint(result)
  

# electricity_meter_reading={
#                             "user_name":user_name,
#                             "eb_reading":[
#                                 {
#                             "month":month,
#                             "units_consumed":units_consumed,
#                             "billAmount":billAmount ,                           
#                                 },
#                                 {
#                             "month":month,
#                             "units_consumed":units_consumed,
#                             "billAmount":billAmount ,                           
#                                 },
#                                 {
#                             "month":month,
#                             "units_consumed":units_consumed,
#                             "billAmount":billAmount ,                           
#                                 },
#                                 {
#                             "month":month,
#                             "units_consumed":units_consumed,
#                             "billAmount":billAmount ,                           
#                                 },
#                                 {
#                             "month":month,
#                             "units_consumed":units_consumed,
#                             "billAmount":billAmount ,                           
#                                 },
#                                 ]
#                                 }   


