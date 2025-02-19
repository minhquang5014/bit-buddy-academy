from flask import Blueprint, render_template
from flask import request, redirect, url_for

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("home.html")

@views.route('/scratch', methods=['GET', 'POST'])
def courses():
    return render_template("scratch.html")

@views.route('/python', methods=['GET', 'POST'])
def python():
    return render_template("python.html")

@views.route('/game-maker', methods=['GET', 'POST'])
def game_maker():
    return render_template("game-maker.html")

@views.route('/app-inventor', methods=['GET', 'POST'])
def app_inventor():
    return render_template("app-inventor.html")

@views.route('/uaro', methods=['GET', 'POST'])
def uaro():
    return render_template("uaro.html")

@views.route('/arduino', methods=['GET', 'POST'])
def arduino():
    return render_template("arduino.html")

@views.route('/raspberry', methods=['GET', 'POST'])
def raspberry():
    return render_template("raspberry.html")

@views.route('/rover-stem', methods=['GET', 'POST'])
def rover_stem():
    return render_template("rover-stem.html")