const express = require('express');
const router = express.Router();
const rp = require('request-promise');

// routes
router.get('/getRoutes', getRoutes);
router.get('/serverStatus', serverStatus);
router.post('/reboot', reboot);

module.exports = router;

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

