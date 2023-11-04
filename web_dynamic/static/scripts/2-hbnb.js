$(document).ready(function () {
	const amDict = {};
	$('input').css('margin', '10px')

	$('input').on('change', function () {
		const dataId = $(this).attr('data-id');
		const dataName = $(this).attr('data-name');

		if ($(this).is(':checked')) {
			amDict[dataId] = dataName;
		} else {
			delete amDict[dataId];
		}

		let text = '';
		for (const am in amDict) {
			text += `${amDict[am]}, `;
		}
		$('div h4').text(text);
	});
	const url = 'http://0.0.0.0:5001/api/v1/status/';
	$.getJSON(url, function(data, textstatus){
		if (data.status === 'OK'){
			alert(data.status)
			$('div#api_status').addClass('available')
		} else {
			$('div#api_status').removeClass('available')
		}
	})
});
