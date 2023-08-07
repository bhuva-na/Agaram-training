"""names="bhuvanagayucddivya"
names=names.split()
print(names)"""

#max_value program

"""mothly_gold_rate=[{"month":"jan","gold_rate":2000},
{"month":"feb","gold_rate":1000},{"month":"march","gold_rate":2500},
{"month":"apirl","gold_rate":1500},{"month":"my","gold_rate":2300}]
max_value=mothly_gold_rate[0]["gold_rate"]
for rate in mothly_gold_rate:
   if rate["gold_rate"]>max_value:
    max_value=rate["gold_rate"]
print("gold rate is maximum in max_value",max_value)"""






mothly_gold_rate=[{"month":"jan","gold_rate":2000,
"jewel_list":[{"name":"chain","making_charge":20},
             {"name":"ring","making_charge":30}]},
{"month":"feb","gold_rate":1000,
"jewel_list":[{"name":"chain","making_charge":10},
              {"name":"ring","making_charge":40}]},
{"month":"march","gold_rate":2500,
"jewel_list":[{"name":"chain","making_charge":10},
              {"name":"ring","making_charge":60}]},
{"month":"apirl","gold_rate":1500,
"jewel_list":[{"name":"chain","making_charge":30},
              {"name":"ring","making_charge":50}]},
{"month":"my","gold_rate":2300,
"jewel_list":[{"name":"chain","making_charge":20},
              {"name":"ring","making_charge":40}]}]
min_value=mothly_gold_rate[0]["gold_rate"]
max_value=mothly_gold_rate[0]["gold_rate"]
min_month=None
max_month=None
for rate in mothly_gold_rate:
   if rate["gold_rate"]<min_value:
    min_value=(rate["gold_rate"])
    min_month=rate["month"]
   if rate["gold_rate"]>max_value:
    max_value=(rate["gold_rate"])
    max_month=rate["month"]

    #print("compare to five months maximum rate is"+str(max_value),"in",max_month)
   print( "Gold rate is " + str(rate["gold_rate"]))
   jewls_list = rate["jewel_list"]
   #print(jewls_list)
   for jewl in  jewls_list:
    #print(jewl["name"])
      

    

                        # 2000 * 13 / 100
      cal_mak_charge = rate["gold_rate"]+(jewl["making_charge"] / 100)
      final_charge = rate["gold_rate"] + cal_mak_charge
      print( jewl['name'] + " rate is "+ str(final_charge))
      #print("compare to five months maximum rate is"+str(max_value),"in",max_month)
   #print("\n")
print("The gold rate is minimum on",min_month,"month as ",min_value)
print("The gold rate is maximum on",max_month,"month as",max_value)


#marks program




"""user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]
        
        
max_total=0       
for student in user_details:
    #print(student['marks'])
    total = 0
    for x in student['marks']: 
        total = total + x
    print(total)
    #max(total)
    
    
    if max_total<total:
        max_total=total
print("the maximum total is"+str(max_total))"""



#gold another ans

"""for rate in mothly_gold_rate:
   if rate["gold_rate"]<min_value:
    min_value=(rate["gold_rate"])
    min_month=rate["month"]
   if rate["gold_rate"]>max_value:
    max_value=(rate["gold_rate"])
    max_month=rate["month"]

   print("Gold rate is " + str(rate['gold_rate'])+" This is  "+ str(rate['month'])+" : ")

   jewls_list = rate["jewel_list"]
   for jewl in jewls_list:
      
      cal_mak_charge = rate["gold_rate"]+(jewl["making_charge"] / 100)
      final_charge = rate["gold_rate"] + cal_mak_charge
      print(jewl['name'] + " rate is "+ str(final_charge))
   print("\n") """
