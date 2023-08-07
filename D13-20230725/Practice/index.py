# fruits=["apple","banana","grapes"]
# fruits[0]="dargon"
# print(fruits)
# fruits.append("pineapple") #add
# fruits.insert(1,"cherry")  #add on the position and move the existing to next position
# print(fruits)"""

"""row1=["bhuvana","arun","anish"]
row2=["kumari",1,"sam"]
two_rows=row1+row2
print(two_rows)"""


"""row1=["bhuvana","arun","anish"]
row2=["kumari","venish","sam"]
two_rows=row1+row2
print(two_rows)"""

# row1=["bhuvana","arun","anish"]
# row2=[2,1,3]
# two_rows=row1+row2
# print(two_rows)

# details={"name":"karka",
# "place":"putheri",}
# details["phone"]="783902028" #add
# print(details)

"""details={"name":"karka",
"place":"putheri",}
details["place"]="krishnankovil"  #modify 
print(details)"""

# details={"name":"karka",
# "place":"putheri",},{"name":"oscar","place":"nagercoil"}
# details.insert(1,"name","cse")
"""details.update({"phone":"783902028","website":"karka.com"}) #add more key and value
print(details)"""



friends_names=[{"name":"shali","place":"cholacal","hobbies":["drawing","reading","dancing"]},
{"name":"renisha","place":"marthandam","hobbies":["music","gardening ","drawing"]},
{"name":"sobith","place":"kaliyakavelai ","hobbies":["movies","playing","travelling"]},
{"name":"bhuvana","place":"vellamadam","hobbies":["craft","drawing","gardening "]},
{"name":"sam","place":" monday market","hobbies":["cricket","movie","travelling"]},
{"name":"shak mohamad","place":" thirunalveli","hobbies":["cricket","football","travelling"]},
{"name":"sakthi tharma","place":" thirunalveli","hobbies":["kabadi","running","travelling"]},
{"name":"Boopathy","place":" parvathipuram","hobbies":["writing","directing","travelling"]}]
# friends_names.append({"name":"venisha","place":"nagercoil","hobbies":["writiing","travelling"]})
# hobbie_name=input("enter the hobbies to get the persons:")
# for friends in friends_names:
#     hobbies=friends["hobbies"]
#     hobbies.append("coding")
#print(hobbies)
# print(friends_names)"""

# friends_names=[{"name":"shali","place":"cholacal","hobbies":["drawing","reading","dancing"]},
# {"name":"renisha","place":"marthandam","hobbies":["music","gardening","drawing"]},
# {"name":"sobith","place":"kaliyakavelai ","hobbies":["movie","playing","travelling"]},
# {"name":"bhuvana","place":"vellamadam","hobbies":["craft","drawing","gardening"]},
# {"name":"sam","place":" monday market","hobbies":["cricket","movie","travelling"]},
# {"name":"shak mohamad","place":"thirunalveli","hobbies":["cricket","football ","travelling"]},
# {"name":"sakthi tharma","place":"thirunalveli","hobbies":["kabadi","running","travelling"]},
# {"name":"Boopathy","place":"parvathipuram","hobbies":["writing","directing","travelling"]}]
#friends_names.append({"name":"venisha","place":"nagercoil","hobbies":["writiing","travelling"]})

#add the hobbies to the hobby_name empty list,without duplicate hobby(should not repeat the same hobby again)

hobbie_name=input("enter the hobbies to get the persons:")
hobby_name=[]
for friends in friends_names:
    hobbies=friends["hobbies"]
    name=friends["name"]
    for names in hobbies:
       #print(names)
       if names  not in hobby_name:
          hobby_name=hobby_name+[names]
print(hobby_name)        
 
 
 
#ADD THE PERSONS NAME TO THE EMPTY STRING,WHOSE HAVE THE HOBBIE_NAME(EQUAL TO THE USER INPUT)
# hobbie_name=input("enter the hobbies to get the persons:")
# hobby_name=[] 
#  for names in hobbies:
#     #print(name)
#     if names==hobbie_name:
#         hobby_name.append(name)
# print(hobby_name)

"""details={"name":"karka",
# "place":"putheri",},{"name":"oscar","place":"nagercoil"}
# details.insert(1,"name")
# print(details)"""






# for name in friends_names:
#     hobbies=name["hobbies"]
#     position=0
#     for hobby in hobbies:
#       if hobby=="drawing":
#          hobbies[position]="designing"
#          position=position+1
# print(friends_names)




# for x in friends_names:
#     for hobby in x["hobbies"]:
#         if hobby=="drawing":
#             x.update({"eligible":True})
#             break
#         else:
#             x.update({"eligible":False})
# print(friends_names)       



       #another program 
# for x in friends_names:
    
#     if  "drawing"  in  x["hobbies"]:
#         x["eligible"]=True
#     else:
#          x["eligible"]=False
# print(friends_names)

# l = [0, 10, 20, 30, 40, 50]

# popped_item = l.pop(3)
# print(l)