const express = require('express');
const router = express.Router();
const rp = require('request-promise');

// routes
router.get('/getRoutes', getRoutes);
router.get('/serverStatus', serverStatus);
router.get('/getUsers', getUsers);
router.get('/getFirewallRules', getFirewallRules);
router.get('/getSingleGateways', getSingleGateways);
router.post('/editSingleGateway', editSingleGateway);
router.get('/editSingleGateway', editSingleGatewayForm);
router.post('/editOpnSenseItem', editOpnSenseItem);
router.get('/editOpnSenseItemForm', editOpnSenseItemForm);
router.get('/viewOpnSensePage', viewOpnSensePage);
router.get('/getInterfaces', getInterfaces);
router.get('/getInterface', getInterface);
router.post('/editInterface', editInterface);
router.post('/reboot', reboot);
router.post('/addUser', addUser);

module.exports = router;

const customHeaders = {
	uri: 'https://r0ute.virt-ciso.com/',
	headers: {
		'Authorization': 'Basic clQzMkV3bytiRE1RMnBvQWRVbzFFLzFlbzFLL1dYcGp4TzA5R0pHakxVV2JOV2x1TnowbTRrcTZ2VlpZcHVmVWIwQUhVT2hhMGFTVkNCbEc6cEpGTEt3MEJaNHBuek9pSHFqZDVROENabWR1VWRjZ0RtUEU2RS9TZjZtcU5ialRmVU81ODRsNkFieGRGdFJmYXhXcnFnSkNxVHV2eTRkdi8=' 
	}
}

const baseHeaders = {
	uri: 'https://r0ute.virt-ciso.com/api',
	headers: {
		'Authorization': 'Basic clQzMkV3bytiRE1RMnBvQWRVbzFFLzFlbzFLL1dYcGp4TzA5R0pHakxVV2JOV2x1TnowbTRrcTZ2VlpZcHVmVWIwQUhVT2hhMGFTVkNCbEc6cEpGTEt3MEJaNHBuek9pSHFqZDVROENabWR1VWRjZ0RtUEU2RS9TZjZtcU5ialRmVU81ODRsNkFieGRGdFJmYXhXcnFnSkNxVHV2eTRkdi8=' 
	}
}

async function getRoutes(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = baseHeaders.uri + '/diagnostics/interface/getRoutes';
	options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function serverStatus(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = baseHeaders.uri + '/core/firmware/running';
	options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function reboot(req, res, next) {
	let options = {};
	options.method = 'POST';
	options.uri = baseHeaders.uri + '/core/firmware/reboot';
	options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function addUser(req, res, next) {
	let options = {};
	options.method = 'POST';
	options.uri = customHeaders.uri + '/system_adduser_trigger.php';
	options.formData = req.body;
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getUsers(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = customHeaders.uri + '/system_getusers.php';
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getSingleGateways(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = customHeaders.uri + '/system_getgateways.php';
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			let data = JSON.parse(resp);
			let array = [];
			for(let [index, gw] of Object.entries(data)) {
				let gwObject = { id: parseInt(index), ...gw };	
				array.push(gwObject);
			}
			res.json(array);
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getFirewallRules(req, res, next) {
	let options = {};
	let { query } = req;
	options.method = 'GET';
	options.uri = customHeaders.uri + '/firewall_getrules.php';
	if (query) {
		if (query['if']) {
			options.uri += '?if=' + query['if'];
		}
	}
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			let data = JSON.parse(resp);
			res.json(data);
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getSingleGateways(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = customHeaders.uri + '/system_getgateways.php';
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			let data = JSON.parse(resp);
			res.json(data);
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getFirewallRules(req, res, next) {
	let options = {};
	let { query } = req;
	options.method = 'GET';
	options.uri = customHeaders.uri + '/firewall_getrules.php';
	if (query) {
		if (query['if']) {
			options.uri += '?if=' + query['if'];
		}
	}
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			let data = JSON.parse(resp);
			res.json(data);
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getInterfaces(req, res, next) {
	let options = {};
	options.method = 'GET';
	options.uri = customHeaders.uri + '/getinterfaces.php';
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			let data = JSON.parse(resp);
			let array = [];
			for(let [index, itf] of Object.entries(data)) {
				let itfObject = { interface_type: index, ...itf };	
				array.push(itfObject);
			}
			res.json(array);
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function getInterface(req, res, next) {
	const { query } = req;
	let itf = '';
	if (query) {
		itf = query.if;
	} else {
		res.status(400).json({ message: "Missing if (interface) parameter"})
	}
	let options = {};
	options.method = 'GET';
	options.uri = customHeaders.uri + `/getinterface.php?if=${itf}`;
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function editSingleGateway(req, res, next) {
	let options = {};
	let { query } = req;
	let { id } = query; 
	
	options.method = 'POST';
	if (id) {
		options.uri = customHeaders.uri + `/system_gateways_edit_trigger.php?id=${id}`;
	} else {
		options.uri = customHeaders.uri + `/system_gateways_edit_trigger.php`;
	}
	options.formData = req.body;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function editSingleGatewayForm(req, res, next) {
	let options = {};
	let { query } = req;
	let { id } = query; 
	
	options.method = 'GET';
	if (id) {
		options.uri = customHeaders.uri + `/system_gateways_edit_trigger.php?id=${id}`;
	} else {
		options.uri = customHeaders.uri + `/system_gateways_edit_trigger.php`;
	}
	
	await rp(options)
		.then(function(resp) {
			res.json({'html': resp});
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function viewOpnSensePage(req, res, next) {
	let options = {};

	let { query } = req;
	if (!query) {
		res.status(400).json({ message: "Parameter rte is required." });
	}
	let { if: itf, rte, id, height } = query; 
	
	options.method = 'GET';
	/*
	if (!rte) {
		res.status(400).json({ message: "Parameter rte is required." });
	}
	if (itf && id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (itf) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}`;
	} else {
		options.uri = customHeaders.uri + `${rte}_api.php`;
	}
	*/
	options.uri = `${customHeaders.uri}${rte}?hidemenu=true`;
	await rp(options)
		.then(function(resp) {
//			res.json({'success': true, 'html': resp});
//			res.set('Content-Type', 'text/html');
		//	res.send(new Buffer(resp));
			if (!height) {
				res.json({'success': true, 'html': '<iframe style="border-width: 0px;" width="100%" height="700" src="' + options.uri + '"></iframe>'});
			}
			else {
				res.json({'success': true, 'html': `<iframe style="border-width: 0px;" width="100%" height="${height}" src="${options.uri}"></iframe>`});
			}
//			res.json({'success': true, 'path': options.uri});
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function editOpnSenseItem(req, res, next) {
	let options = {};
	let { query } = req;
	if (!query) {
		res.status(400).json({ message: "Parameter rte is required." });
	}
	let { if: itf, rte, id } = query; 
	
	options.method = 'POST';
	if (!rte) {
		res.status(400).json({ message: "Parameter rte is required." });
	}
	if (itf && id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (itf) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}`;
	} else {
		options.uri = customHeaders.uri + `${rte}_api.php`;
	}
	options.formData = req.body;
	await rp(options)
		.then(function(resp) {
			//res.json(JSON.parse(resp));
			res.json({'success': true, 'html': resp});
		})
		.catch(function(err) {
			console.log('failure');
			res.status(400).json({ message: err })
		});
}

async function editOpnSenseItemForm(req, res, next) {
	let options = {};
	let { query } = req;
	let { if: itf, rte, id } = query; 
	
	options.method = 'GET';
	if (!rte) {
		res.status(400).json({ message: "Parameter rte is required." });
	}
	if (itf && id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (id) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}&id=${id}`;
	}
	else if (itf) {
		options.uri = customHeaders.uri + `${rte}_api.php?if=${itf}`;
	} else {
		options.uri = customHeaders.uri + `${rte}_api.php`;
	}
	
	await rp(options)
		.then(function(resp) {
			res.json({'html': resp});
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}

async function editInterface(req, res, next) {
	let options = {};
	options.method = 'POST';
	options.uri = customHeaders.uri + `/interfaces_trigger.php`;
	options.formData = req.body;
	//	The object below is for debugging purposes
	/*
	options.formData = {
		"enable":"yes",
		"descr":"testdesc",
		"type":"staticv4",
		"type6":"track6",
		"spoofmac":"",
		"mtu": "",
		"mss": "",
		"mediaopt":"",
		"ipaddr":"192.168.1.1",
		"subnet":"24",
		"gateway":"none",
		"name":"testa_GWv4",
		"gatewayip":"",
		"gatewaydescr":"",
		"alias-address":"",
		"alias-subnet":"32",
		"dhcprejectfrom": "",
		"dhcphostname": "",
		"dhcpoverridemtru":"yes",
		"adv_dhcp_pt_timeout": "",
		"adv_dhcp_pt_retry": "",
		"adv_dhcp_pt_select_timeout": "",
		"adv_dhcp_pt_reboot": "",
		"adv_dhcp_pt_backoff_cutoff": "",
		"adv_dhcp_pt_initial_interval": "",
		"adv_dhcp_pt_values":"SavedCfg",
		"adv_dhcp_send_options": "",
		"adv_dhcp_request_options": "",
		"adv_dhcp_required_options": "",
		"adv_dhcp_option_modifiers": "",
		"adv_dhcp_config_file_override_path": "",
		"country": "",
		"provider_list": "",
		"providerplan": "",
		"username": "",
		"password": "",
		"phone": "",
		"apn": "",
		"pppoe_username": "",
		"pppoe_password": "",
		"provider": "",
		"ppoe_hostuniq": "",
		"pppoe_idletimeout": "",
		"pptp_username" : "",
		"pptp_password" : "",
		"localip": "",
		"pptp_subnet":"31",
		"pptp_remote": "",
		"pptp_idletimeout": "",
		"ipaddrv6": "",
		"subnetv6":"128",
		"gatewayv6":"none",
		"dhcp6-ia-pd-len":"0",
		"dhcp6vlanprio":"",
		"adv_dhcp6_interface_statement_send_options": "",
		"adv_dhcp6_interface_statement_request_options": "",
		"prefix-6rd-v4plen":"0",
		"prefix-6rd-v4addr":"",
		"track6-prefix-id--hex":"0",
		"if":"lan",
		};
		*/
	//options.headers = baseHeaders.headers;
	await rp(options)
		.then(function(resp) {
			res.json(JSON.parse(resp));
		})
		.catch(function(err) {
			res.status(400).json({ message: err })
		});
}
