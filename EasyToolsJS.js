function send_post(file_name, data) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                return xhr.responseText
            } else {
                return 'Hubo un error en la solicitud.'
            }
        }
    };

    xhr.open('POST', file_name, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

function send_post_get(file_name, data) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                return xhr.responseText
            } else {
                return 'Hubo un error en la solicitud.'
            }
        }
    };

    xhr.open('GET', file_name, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}