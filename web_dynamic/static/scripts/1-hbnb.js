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
});
