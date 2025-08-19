from flask import Flask, jsonify, request
import bluetooth

app = Flask(__name__)

@app.route('/scan', methods=['GET'])
def scan_devices():
    """
    Endpoint to scan for nearby Bluetooth devices.
    """
    devices = bluetooth.discover_devices(duration=8, lookup_names=True, flush_cache=True, lookup_class=False)
    if not devices:
        return jsonify({'message': 'No devices found', 'devices': []}), 200
    
    result = [{'name': name, 'address': addr} for addr, name in devices]
    return jsonify({'message': f'Found {len(devices)} devices', 'devices': result}), 200

@app.route('/connect', methods=['POST'])
def connect_device():
    """
    Endpoint to connect to a Bluetooth device by address.
    """
    data = request.json
    address = data.get('address')
    if not address:
        return jsonify({'message': 'Device address is required'}), 400

    try:
        sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
        sock.connect((address, 1))
        sock.close()
        return jsonify({'message': f'Successfully connected to {address}'}), 200
    except bluetooth.BluetoothError as e:
        return jsonify({'message': f'Failed to connect: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
