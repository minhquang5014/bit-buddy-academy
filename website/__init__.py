from flask import Flask
from flask_login import LoginManager
import os
from dotenv import load_dotenv

def create_app():
    load_dotenv()  # Take environment variables from .env.
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

    from .views import views
    # from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    # app.register_blueprint(auth, url_prefix='/')

    return app