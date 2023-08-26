# """num1=int(input("enter the number:"))
# num2=int(input("enter the number:"))
# num3=input("enter the operation to do:")
# if num3=="Addition" :
#     print("you added two num",num1+num2)
# elif num3=="Subtration":
#     print("you subrated two num",num1-num2)
# elif num3=="Division":
#     print("you divied two num",num2/num1)
# elif num3=="Multiplication":
#     print("you mulitiplied two num",num1*num2) """
 
# """Salary=int(input("enter your salary:"))
# basic_Hra=0.20 
# basic_Da=0.05
# normal_Hra=0.25
# normal_Da=0.07
# pro_Hra=0.30
# pro_Da=0.08 
# total_salary1=(Salary*basic_Hra)+(Salary*basic_Da)
# total_salary2=(Salary*normal_Hra)+(Salary*normal_Da)
# total_salary3=(Salary*pro_Hra)+(Salary*pro_Da)
# if Salary<=10000:
#     print("Gross Salary:",Salary+total_salary1)
# elif Salary>10000 and Salary<=20000:
#     print("Gross Salary:",Salary+total_salary2)
# elif Salary>20000:
#     print("Gross Salary:",Salary+total_salary3) """






# """maths=int(input("enter the mark for maths:"))
# physics=int(input("enter the mark for physics"))
# chemistry=int(input("enter the mark for chemistry:"))
# maths_physics=maths+physics
# maths_physics_chemistry=maths+physics+chemistry
# if chemistry>=50 and physics>=55 and maths>=65:
#     if maths_physics>=140 or maths_physics_chemistry>=190:
#       print("you are eligible")   
# else:
#   print("you are not eligible")"""
 
# """num1=int(input("enter the num1:"))
# num2=int(input("enter the num2:"))
# num3=int(input("enter the num3:"))
# num4=int(input("enter the num4:"))
# num5=int(input("enter the num5:"))
# num6=num1+num2+num3
# num7=num6*num4*num5
# if num7%2==0:
#     print("even")
# else:
#     print("odd")""" 
# """a=input("enter the agj:")
# b=input("enter the fruit:")
# adj=["red","green","blue"]
# fruits=["berry","orange","apple"]
# for x in adj:
#   for y in fruits:
#     if a==x and b==y:
#       print(x, y)
#     else:
#       print("not available")"""

# electricity_unit=int(input("enter the electricity unit:"))
# electricity_unit_cost=int(input("enter the electricity unit cost:"))
# additional_cost=50
# electricity_bill=electricity_unit*electricity_unit_cost
# if electricity_unit<100:
#   gst=electricity_bill*0.18
#   print(electricity_bill+gst)
# if electricity_unit>100 and electricity_unit<=500:
#   additional=electricity_bill+additional_cost
#   gst=additional*0.18
#   print(electricity_bill+gst)
# elif electricity_unit>500 and electricity_unit<=1000:
#   percentage=electricity_bill*0.05
#   exclude_gst=electricity_bill+percentage
#   gst=exclude_gst*0.18
#   print(exclude_gst+gst) 


#DELECTING THE NUM BY REPLACING
# list1=[10,20,30,40]
# to_print=20
# index=4
# for i in range(len(list1)):
#   if list1[i]==to_print:
#     index=i
# if index!=-1:
#   for x in range(index,len(list1)-1):
#     list1[x]=list1[x+1]
#   list1[len(list1)-1]=None
# #   print(list1)
#   list1=list1[]

# print(list1) 
#         2 3 5 9  9
# numbers=[5,9,2,3,9]
num1=[]
for i in range(5):
  number=input(f"enter the number{i+1}")
#SORTING
def sort(num):
  n=len(num)
  for i in range(n):
    print(i)
    for j in range(0,n-i-1):
      print(j)
#       #      1    1+1
#       #      5        3
      if num[j]>num[j+1]:               #FOR DECENTING <
#         #  3        5         3  , 5
        num[j],num[j+1]=num[j+1],num[j]
sort(numbers)
print(numbers)
  
#     list1.append(to_print)
# print(list1)









  
   

