const notifications = (() => {
  $(document).on({
    ajaxStart: () => $('#loadingBox').fadeIn(),
    ajaxStop: () => $('#loadingBox').fadeOut()
  })

  function showSuccess(message) {
    let successBox = $('#infoBox');
    let messageBox = successBox.find('span');

    messageBox.text(message);
    successBox.fadeIn();
    successBox.fadeOut(3000);
  }

  function showError(message) {
    let errorBox = $('#errorBox');
    let messageBox = errorBox.find('span');

    messageBox.text(message);
    errorBox.fadeIn();
    errorBox.fadeOut(3000);
  }

  function showResponseError(err) {
      showError(err.responseJSON.description);
  }

  return {
    showSuccess,
    showError,
    showResponseError
  }
})()