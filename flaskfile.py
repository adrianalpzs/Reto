import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
model = pickle.load(open('LR.pkl', 'rb'))


@app.route('/')
def home():
    return "HOME"
    #return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    resp = request.get_json()
    print(request)
    val1 = int(float(resp['class']))
    val2 = int(float(resp['gender']))
    val3 = int(float(resp['age']))
    val4 = int(float(resp['siblings']))
    val5 = int(float(resp['parents']))
    features = [val1, val2, val3, val4, val5]
    
    print(features)
    final_features = np.array(features).reshape(1,-1)
    prediction = model.predict(final_features)
    print(prediction)
    return "{}".format(prediction)

   
    
if __name__ == "__main__":
    app.run('192.168.1.239')