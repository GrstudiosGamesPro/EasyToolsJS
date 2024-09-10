https://cdn.jsdelivr.net/gh/GrstudiosGamesPro/EasyToolsJS@main/EasyToolsJS.js


SEND POST

var data = "name=Juan&age=30";

send_post('mi_archivo.php', data, function (error, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(response); 
    }
});


SEND GET

var data = "name=Juan&age=30";

send_post_get('mi_archivo.php?' + data, null, function (error, response) {
    if (error) {
        console.error(error); 
    } else {
        console.log(response); 
    }
});
