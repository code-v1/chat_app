document.addEventListener('DOMContentLoaded', function(){
    var messages = document.getElementById('messages');
    var latestMsg = document.getElementById('latest-msg');
    var userName = document.getElementById('user');

    var socket = io();
    socket.on('add-message', function (data) {
        addMessage(data);
    });

    document.getElementById('send-msg-btn').addEventListener('click', function(){
        socket.emit('add-message', {
            name: userName.value,
            msg: latestMsg.value,
            
        });
        latestMsg.value = '';
    });

    function addMessage(data){
        messages.innerHTML += ['<li>', data.name, ':', data.msg + '</li>'].join('');
    }
    
});

