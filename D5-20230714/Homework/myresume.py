my_resume={"Name":"Bhuvaneshwari",
"Email":"rizanabhuvana@gmail.com",
"MobileNo":"+91 6383615390",  
"Objective":"Being a fresher,seeking for opportunity to enhance my knowledge in a succeding environment",    
"Softskills":["TimeManagement","Communication","Problem-solving","TeamWork"], 
"HardSkills":                                                                          
{                                                                                       
"Technical_Skills":["Html","CSS","JAVAScripts"],                                      
"Computer_Skills":["Word","Powerpoint","Email"],                                      
"Programming_Skills":["python","JAVAScripts"]                                          
},
"Educational_Qualification":[
{"level":"sslc",
"instution_name":"Fathima Convent Matriculation",
"passed_year":2017,
"percentage":86.40},
{"level":"hsc",
"instution_name":"D.V.D Higher Secondary school",
"passed_year":2019,
"percentage":50.5},
{"level":"BE computerScience",
"instution_name":"Arunachala college of engineering for women",
"passed_year":2023,
"percentage":8.73}
],                                   
"projects":[
{"MiniProject":                                                             
{"Title":"Online Banking System",                                           
"frontEnd":["HTML","CSS","JAVAScript"],                                                
"BackEnd":["JAVA","mySQL"],
"Tools":["netBeam","github"]                                                       
}}, 
{"MainProject":
{"Title":"Multi-Objective load balancing technique for resource management in cloud environment",
"frontEnd":["HTML","CSS","JAVAScript"],                                           
"BackEnd":["JAVA","mySQL"],                                                         
"Tools":["Cloud sim","Deeplearning",["github"]]} 
}
],
"area_of_intreset":"web development",
"Experience":[
{"company":"cts",
"experience":"1.4",
"role":"full_stack_developer"},
{"company":"Google",
"experience":"1.4",
"role":"Team_lead"}
],
"Hobbies":["Gardening","CraftMaking","Drawing"],
"Personal_Details":{                                                                                
"Father's_Name":"Thalavai MadaSwamy.M",
"Mother's_Name":"Kala.p",
"Father's_Occupation":"Highway DepartMent"},
"Languages_Known":{                                 
"Read & Writing & speaking":["Tamil","English"],                                         
"speaking":["Tamil","English","Malayalam"]                                       
},                                                                                
"Date_of_Birth":"30-12-2001",
"Gender":"Female",
"Martial_Status":"Single",
"Address":{"Door No":"1/42",
"street_name":"Lakshmi puram,kurukkalMadam",
"post":"Vellamadam",
"city":"nagercoil city",
"dist":"kanyakumari"},
"Declaration":"Here all my details are truth to my knowldage"
}
"""gender=my_resume["Gender"] 
if gender=="Female":
    print("pink")
else:
    print("blue")"""
project_front_end1=my_resume["projects"][0]["MiniProject"]["Title"]
project_front_end2=my_resume["projects"][1]["MainProject"]["Title"]
if project_front_end1==project_front_end2:
    print("same")
else:
    print("not same")

print(my_resume["Educational_Qualification"][0]["passed_year"])
print(my_resume["Softskills"][3])
print(my_resume["HardSkills"]["Technical_Skills"][1])
print(my_resume["projects"][0])
print(my_resume["Experience"][0]["role"])
print(my_resume["Hobbies"][1])
print(my_resume["Personal_Details"]["Father's_Occupation"])
print(my_resume["Languages_Known"]["speaking"][1])
print(my_resume["Date_of_Birth"])  
print(my_resume["Address"]["Door No"])    




