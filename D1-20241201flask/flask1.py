from flask import Flask,request
from flask import render_template
from flask_cors   import CORS

app=Flask(__name__)
CORS(app)

lists=[]
@app.route("/flask")


def router():
    return "welcome to app hhh"





@app.route("/welcome/<user>")
def rout(user):
    return user 




@app.route("/contact")
def routername():
    return render_template("home.html",name=["bhuvana","gayu","sangee","ajay","vicky","abinesh"])

@app.route("/todo",methods=["GET","POST"])
def todoitems():
  
    if request.method=="POST" and request.form["item_name"]!="":
        lists.append(request.form["item_name"])
    return render_template("todo.html",item_list=lists)

@app.route("/delete/<item>")
def todoDeleteitem(item):
    lists.remove(item)
    return render_template("todo.html",item_list=lists)

@app.route("/update/<itemindex>",methods=["GET","POST"])
def todoUpdateitem(itemindex):
    if request.method=="POST":
        lists[int(itemindex)]=request.form["updatename"]
        return render_template("todo.html",item_list=lists)
    else:
        values=lists[int(itemindex)]
        return render_template("update.html",items_list=values)



if __name__=="__main__":
    app.run(debug=True)

