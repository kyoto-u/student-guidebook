from app.app import app
import flask
import logging

@app.route('/', methods=["GET"])
def root():
    return flask.render_template("guidelist.htm")

@app.route('/template/<htm_name>', methods=["GET"])
def show_template(htm_name):
    return flask.render_template(f"{htm_name}.htm")



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
