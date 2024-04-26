from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this to a random, secure value
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}
jwt = JWTManager(app)

# Mock user database (replace this with a real database in production)
users = {
  'user': generate_password_hash('password'),
}

@app.route('/login', methods=['POST'])
def login():
  data = request.get_json()
  username = data.get('username')
  password = data.get('password')

  if not username or not password:
    return jsonify({'message': 'Username and password are required'}), 400

  if username not in users or not check_password_hash(users[username], password):
    return jsonify({'message': 'Invalid username or password'}), 401

  access_token = create_access_token(identity=username)
  return jsonify({'token': access_token}), 200

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
  current_user = get_jwt_identity()
  return jsonify(logged_in_as=current_user), 200

if __name__ == "__main__":
  app.run(debug=True, port=5001)