window.addEventListener('DOMContentLoaded', () => {
	var os = require('os');

	ipView = document.querySelector('#ips');

	var interfaces = os.networkInterfaces();
	var addresses = [];
	for (var k in interfaces) {
	    for (var k2 in interfaces[k]) {
	        var address = interfaces[k][k2];
	        if (address.family === 'IPv4' && !address.internal) {
	            addresses.push(address.address);
	        }
	    }
	}
	// ipView.innerText = addresses.join();
	ipView.innerText = addresses[0];
})
