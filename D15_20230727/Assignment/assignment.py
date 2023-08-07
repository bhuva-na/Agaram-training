from pprint import pprint
users_details=[{
        "name":"bhuvana",
        "email_id":"bhuvana@gmail.com",
        "password":"bhuv@12",
        "friendslist":["beni","angel","geena"],
        "hobbies":["drawing","crafts makeing","gardening"]
            },
            {
        "name":"beni",
        "email_id":"benisha@gmail.com",
        "password":"beni@12",
        "friendslist":["beni","suji","geena"],
        "hobbies":["playing","crafts makeing","gardening"]
            },
            {
        "name":"kala",
        "email_id":"kala@gmail.com",
        "password":"kala@12",
        "friendslist":["beni","bhuvana","thalavai"],
        "hobbies":["playing","crafts makeing","gardening"],
            },
            {
        "name":"kaviyha",
        "email_id":"kaviyha@gmail.com",
        "password":"kaviyha@12",
        "friendslist":["beni","suji","bhuvana"],
        "hobbies":["playing","crafts makeing","gardening"],
            }]
Emailid=input("enter the email_id:")
Pass_word=input("enter the password:")

def user_login(email_id,password):
    #Emailid=input("enter the email_id:")
    #Pass_word=input("enter the password:")
    for users in users_details: 
        name=users["name"]
        email_id=users["email_id"]
        password=users["password"]
        #print(password)
        hobbies_list=""
        for hobbies in users["hobbies"]:
            hobbies_list=hobbies_list+hobbies+","
            friendslist=""
            for friends_list in users["friendslist"]:
                friendslist=friendslist+friends_list+","
                #print(friendslist)
        
        if users["email_id"]==Emailid and users["password"]==Pass_word:
            
            users["login"]=True
            print(users["name"],"\n",users["email_id"],"\n","your hobbies are:",hobbies_list,"\n","your friendslist are:",friendslist,"\n","login:",users["login"])
        else:
            users["login"]=False
    pprint(users_details)
user_login(Emailid,Pass_word) 