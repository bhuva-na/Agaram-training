email="rizanabhuvana@gmail.com"
password="3012"
email_id=input("enter the email_id:")
email_password=input("enter the email_password:")
if email!=email_id and password==email_password:
    print("you email_id is wrong")
elif email==email_id and password!=email_password:
    print("your email_password is wrong")
elif email==email_id and password==email_password:
    print("your are logging successfully")
else:
    print("your are not authenticated")
