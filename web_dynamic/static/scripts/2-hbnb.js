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
	$('header').append('<div></div>')
	$('header div').attr('id', 'api_status')
	const design = {
		width: '40px',
		height: '40px',
		background-color: '#cccccc',
		border-radius: '50%',
		position: 'absolute',
		right: '30px',
		top: '50%';
		transform: 'translateY(-50%)';
	}
	$('api_status').css(design)
});
