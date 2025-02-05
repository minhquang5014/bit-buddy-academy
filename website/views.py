from flask import Blueprint, render_template
from flask import request, redirect, url_for

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("home.html")