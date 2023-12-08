from flask import *

app = Flask(__name__)

@app.route("/")
def Main():
    return render_template("homepage.html")

@app.route("/playground")
def Playground():
    return render_template("playground.html")

@app.route("/projects")
def Projects():
    return render_template("projects.html")

if __name__ == "__main__":
    app.run(debug=True)