$(document).ready(()=>{
    const socket = io.connect("http://localhost:9090");
    const chatterName = prompt("Pls enter your name");

    $("#btnSend").on("click", event => {
        event.preventDefault();
        const message = $("#txtMsg").val();
        socket.emit("toServer",{message, chatterName});
        $("#txtMsg").val('');
    })

    socket.on("toClient", data => {
        $("#taMsg").append(data.chatterName + " : " + data.message + "\n");
    })
})