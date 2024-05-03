from flask import Flask,render_template,request,redirect,url_for,session
from flask_mysqldb import MySQL
from flask_wtf import FlaskForm 
from wtforms import StringField, validators, PasswordField, SubmitField,EmailField
from wtforms.validators import DataRequired, Email,Length
import email_validator 

app=Flask(__name__)
app.secret_key="your-secret-key"
app.config['MYSQL_HOST']="localhost"
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']=""
app.config['MYSQL_DB']= "flask_users"
app.config['MYSQL_UNIX_SOCKET'] = '/opt/lampp/var/mysql/mysql.sock'

mysql= MySQL(app)

class contactForm(FlaskForm): 
    name = StringField(label='Name', validators=[DataRequired()]) 
    email = EmailField(label='Email', validators=[DataRequired(), Email('enter valid email')]) 
    password=PasswordField(label='Password',validators=[DataRequired(), Length(min=5,max=10)] )
    message = StringField(label='Message')
    submit = SubmitField(label="Log In") 
  
@app.route("/",methods=['POST','GET'])
def homes():
    if 'username' in session:
        return render_template('home.html',username=session['username'])
    else :
        return render_template('home.html')


@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()
        cur.execute(f"SELECT username, password FROM users_table WHERE username='{username}'")
        user = cur.fetchone()
        cur.close()
     
        if username and password == user[1]:
            session["username"] = user[0]
            return redirect(url_for('home'))
        else:
            return render_template("login.html", error='Invalid username and password')
    
    return render_template("login.html")


@app.route("/register",methods=['POST','GET'])
def register():
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']
        cur =mysql.connection.cursor()
        cur.execute(f"insert into users_table(username,password) values ('{username}','{password}')")
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route("/contact", methods=["GET", "POST"]) 
def home(): 
    cform=contactForm() 
    if cform.validate_on_submit():
        if request.method=='POST':
            name=cform.name.data
            email=cform.email.data
            message=cform.message.data
            password=cform.password.data
            cur =mysql.connection.cursor()
            cur.execute(f"insert into users_contacts(name,email,message,password) values ('{name}','{email}','{message}','{password}')")
            mysql.connection.commit()
            cur.close()
        return f"Name:{cform.name.data}, E-mail:{cform.email.data},message:{cform.message.data},password:{cform.password.data}"
    return render_template("contact.html",form=cform) 

@app.route('/logout')
def logout():
    session.pop('username',None)
    return redirect(url_for("home"))


if __name__=="__main__":
    app.run(debug=True)