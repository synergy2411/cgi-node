$(document).ready(()=>{
    const socket = io.connect("http://localhost:9090");

    $("#btnSend").on("click", event => {
        event.preventDefault();
        const message = $("#txtMsg").val();
        socket.emit("toServer",{message});
        $("#txtMsg").val('');
    })

    socket.on("toClient", data => {
        $("#taMsg").append(data.message + "\n");
    })
})