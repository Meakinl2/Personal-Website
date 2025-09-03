from flask import *

app = Flask(__name__)

@app.route("/")
def Main():
    return render_template("homepage.html")

@app.route("/experience")
def Experience():
    return render_template("experience.html")

@app.route("/projects")
def Projects():
    return render_template("projects.html")

@app.route("/contact")
def Contact():
    return render_template("contact.html")

@app.route("/playground")
def Playground():
    return render_template("playground.html")

if __name__ == "__main__":
    app.run(debug=True)