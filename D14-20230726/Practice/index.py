# def addition():
#     # a=3
#     # b=4
#     # c=a+b
#     # print(c)
#     l = [0, 10, 20, 30, 40, 50]
#     popped_item = l.pop(3)
#     print(l)

# addition()

# def name():
#     first_name="bhuvan"
#     last_name="eshwari"
#     full_name=first_name+" "+last_name
#     #print(first_name,last_name)
#     print(full_name)
# name()



#GETTING INPUT FROM THE USER AND PASSING THROUGH THE ARGUMENT AND PARAMETER
# first_name=input("enter the name:")
# last_name=input("enter the last name:")
# inital=input("enter the inital")
# def combine_name(a,b,c):  #parameter
#     print(a+b+" "+c)
# combine_name(first_name,last_name,inital)  #argument


# def get_gender(a): 
#     #print(a)
#     if a=="male":
#         print("your color is blue")
#     elif a=="Female":
#         print("your color is pink")
#     else:
#         print("third gender is not eligible")
# gender_name=input("enter the gender:")
# get_gender(gender_name) 
# number1=int(input("enter the first number:"))
# number2=int(input("enter the first number:"))
# def find_max(num1,num2):
#     if num1>num2:
#         print(num1, "is greater")
#     else:
#         print(num2,"is greater")
# find_max(number1,number2) 

# number1=int(input("enter the first number:"))
# number2=int(input("enter the first number:"))
# def find_max(num1,num2):
#     if num1>num2:
#         if num1%2==0:
#             print(num1,"is greater also an even number")
#         else:
#             print(num1,"is greater  also an odd number")
#     elif num1==num2:
#         print("both are equal")
#     elif num1<num2:
#         if num2%2==0:
#             print(num2,"is greater and is also even")
#         else:
#             print(num2,"is greater and it is odd")
# find_max(number1,number2) 

# number1=int(input("enter the first number:"))
# number2=int(input("enter the first number:"))
# def find_max(num1,num2):
#     def odd_even(big_num):
#         if big_num%2==0:
#             print(big_num,"is  also an even number")
#         else:
#             print(big_num,"is  also an odd number")
#     if num1>num2:
#         print(num1," is a greater number")
#         odd_even(num1)
#     elif num1==num2:
#         print("both are equal")
#     elif num1<num2:
#         print(num2,"is greater a number")
#         odd_even(num2)
# find_max(number1,number2) 

#def odd_even(num1,num2):


f_input = int(input("Enter your first number"))
s_input = int(input("Enter your second number"))

def find_even_odd(number):
    if number%2==0:
            print("even")
    else:
            print("odd")

def find_max_number(f,s):
    
    if f<s:
        find_even_odd(s) 
        print("second input is max")
    elif s<f:
        find_even_odd(f) 
        print("first input is max")
    elif s==f:
        print("both are same")
    else:
        print("check the input")

find_max_number(f_input,s_input)  




            
            
#find_even_odd(4)


