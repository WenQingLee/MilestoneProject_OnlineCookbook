from flask import Flask, render_template
import os
import pymongo

app = Flask(__name__)

# Create the connection to MongoDB
conn = pymongo.MongoClient(os.getenv("MONGO_URI"))


@app.route("/")
def index():
    
    recipe_name = conn["online_cookbook"]["recipes"]["name"]

    recipes = conn["online_cookbook"]["recipes"].find({})
    
    return render_template("index.html", recipes=recipes, recipe_name=recipe_name)



if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
