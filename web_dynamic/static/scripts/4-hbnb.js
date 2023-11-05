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
	const url1 = 'http://0.0.0.0:5001/api/v1/status/';
	$.getJSON(url1, function(data, textstatus){
		if (data.status === 'OK'){
			$('div#api_status').addClass('available')
		} else {
			$('div#api_status').removeClass('available')
		}
	})
	$.ajax({
		url: 'http://0.0.0.0:5001/api/v1/places_search',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({}),
		success: (data) => {
			data.forEach((place) =>
				$("section.places").append(
					`<article>
			<div class="title_box">
			<h2>${place.name}</h2>
			<div class="price_by_night">$${place.price_by_night}</div>
			</div>
			<div class="information">
			<div class="max_guest">${place.max_guest} Guest${
						place.max_guest !== 1 ? "s" : ""
					}</div>
			<div class="number_rooms">${place.number_rooms} Bedroom${
						place.number_rooms !== 1 ? "s" : ""
					}</div>
			<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
						place.number_bathrooms !== 1 ? "s" : ""
					}</div>
			</div>
			<div class="description">
			${place.description}
			</div>
				</article>`
				)
			);
		},
		dataType: "json",

	});

});
