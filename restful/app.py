from flask import Flask
from flask_restful import Api, Resource
from getip import getip
from flask_jsonpify import jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
api = Api(app)


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


class Getip(Resource):
    def get(self):
        jsonResp = {'ip': getip()}
        print(jsonify(getip()))
        return jsonify(jsonResp)


api.add_resource(HelloWorld, '/')
api.add_resource(Getip, '/ip')

if __name__ == '__main__':
    app.run(debug=True)