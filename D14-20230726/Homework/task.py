userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]
#page_type=input("please! Enter Whether you want to LOGIN or REGISTER:")

def login(login_details):
    # if login_details=="login":
    email_id=input("Enter the email id:")
    pass_word=input("Enter the password:")
    get_person=False
    for userdetails in userDtails:
    #name=userdetails["name"]
    #email=userdetails["e_mail"]
    #password=userdetails["password"]
    #print(password)
        if userdetails["e_mail"]==email_id and userdetails["password"]==pass_word:
            get_person=True
    if get_person==True:
        print("you are login successfully")
    else:
        print("invalid email_id or pass_word")

def register_details(register):
    #if register=="Register":
        name=input("enter the username:")
        email_id=input("Enter the email id:")
        pass_word=input("Enter the password:")
        confirm_password=input("cofirm password:")
        if pass_word==confirm_password:
            pass
        else: #pass_word!=confirm_password:
            print("incorrect confirm_password")
            
    
        #print(details["name"])
        get_username=False
        for details in userDtails:
            if name  in details["name"]:
                get_username=True
        if get_username==True:
            print("you are already register""\n""please login")
        else:
            print("your are register successfully")
        userDtails.append({"name":name,"e_mail":email_id,"password":pass_word})
        print(userDtails)

page_type=input("please! Enter Whether you want to LOGIN or REGISTER:") 
def user_input(login_format):
    if login_format=="login":
        login(page_type)
    elif login_format=="Register":
        register_details(page_type)
user_input(page_type)

# #
#elif page_type=="Register"
    

    
    #     if email and pass_word is in userdetails:
    #         print("you are al")
