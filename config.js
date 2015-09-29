var mode = 'live'; // local, live

if (mode == 'local') {
	process.env['LAMBDA_TASK_ROOT'] = '/var/www/lambda-htmltopdf';
	dstBucket = 'hassan-html-to-pdf';

} else if (mode == 'live') {

	dstBucket = 'hassan-html-to-pdf';
}

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

module.exports = function() {
};