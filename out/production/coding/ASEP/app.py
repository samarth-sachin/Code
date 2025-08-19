from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import bluetooth

app = Flask(__name__)
CORS(app)

# Bluetooth setup
BT_DEVICE_NAME = "ESP32_Pendant"
server_socket = None
client_socket = None

# Discover ESP32 device by name
def discover_device():
    global client_socket
    print("Searching for Bluetooth devices...")
    nearby_devices = bluetooth.discover_devices(lookup_names=True, duration=8)

    for addr, name in nearby_devices:
        print(f"Found {name} at {addr}")
        if name == BT_DEVICE_NAME:
            print(f"Found target device {name} at {addr}")
            return addr

    print("ESP32 not found. Please ensure it's in discoverable mode.")
    return None

# Connect to ESP32 device
def connect_device():
    global client_socket
    addr = discover_device()

    if addr is None:
        return False

    service_matches = bluetooth.find_service(address=addr)
    if not service_matches:
        print("No services found on the device.")
        return False

    # Assuming first available service
    first_match = service_matches[0]
    port = first_match["port"]
    host = first_match["host"]

    try:
        client_socket = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
        client_socket.connect((host, port))
        print("Connected to ESP32.")
        return True
    except Exception as e:
        print(f"Failed to connect: {e}")
        return False

@app.route("/")
def home():
    return render_template("index.html")  # Serve the HTML page

@app.route("/connect", methods=["POST"])
def connect():
    if connect_device():
        return jsonify({"message": "Connected successfully to ESP32"}), 200
    else:
        return jsonify({"message": "Failed to connect to ESP32"}), 500

@app.route("/send", methods=["POST"])
def send_data():
    global client_socket
    if not client_socket:
        return jsonify({"message": "Not connected to ESP32"}), 400

    data = request.json.get("data")
    if not data:
        return jsonify({"message": "No data provided"}), 400

    try:
        client_socket.send(data)
        return jsonify({"message": "Data sent successfully"}), 200
    except Exception as e:
        return jsonify({"message": f"Failed to send data: {e}"}), 500

@app.route("/disconnect", methods=["POST"])
def disconnect():
    global client_socket
    try:
        if client_socket:
            client_socket.close()
            client_socket = None
            return jsonify({"message": "Disconnected from ESP32"}), 200
        else:
            return jsonify({"message": "No active connection"}), 400
    except Exception as e:
        return jsonify({"message": f"Failed to disconnect: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
