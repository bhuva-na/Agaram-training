# input_string=input("enter the word to find palindrom:")
# temp=""
# for i in input_string:
#     #print(name)
#  # else:#     print("not a palindrom")
#     temp=i+temp
# if  input_string==temp:
#     print("palindrom")
# else:
#     print("not a palindrom")

list1=[1,0,3,0,9,13]
list2=[]
list3=[]
for i in list1:
    if i==0:
        list2=list2+[i]
    else:
        list3=list3+[i]
print(list3+list2)   
