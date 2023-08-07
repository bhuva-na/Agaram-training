age=int(input("enter the age:"))
gender=input("enter the gender:")
name=input("enter the name:")
if age>60:
    if gender=="female":
      print("miss"+name+" u r senior")
    elif gender=="male":
      print(f"mr  {name} u r seniot")
elif age>18:
        if gender=="female":
           print("miss"+name+" u r adult")
        elif gender=="male":
            print("mr"+name+" u r adult")
elif age<18:
        if gender=="female":
           print("miss"+name+" u r teenager")
        elif gender=="male":
           print("mr"+name+"u r teenager")
