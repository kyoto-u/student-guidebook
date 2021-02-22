from app.app import app
import flask
import logging

@app.route('/', methods=["GET"])
def root():
    return flask.render_template("guidelist.htm")



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)