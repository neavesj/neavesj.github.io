
            $(document).ready(function () {
                setTimeout(function () { $("#lblPresentacion").fadeOut(500); }, 1000)
                var pattern = Trianglify({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                var pattern2 = Trianglify({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                var c1 = pattern.canvas();
                $(c1).addClass("fondo1");
                document.body.appendChild(c1);
                var c2 = pattern2.canvas();
                document.body.appendChild(c2);
                $(c2).addClass("fondo2");
                $(".fondo1,.fondo2").css("width", "100%");
                $(".fondo1,.fondo2").css("height", "100%");
                $(".fondo1,.fondo2").css("position", "fixed");
                $(".fondo1,.fondo2").css("top", "0");
                $(".fondo1,.fondo2").css("left", "0");
                $(".fondo1,.fondo2").css("z-index", "-1");
                var indice = false;
                setInterval(function myfunction() {
                    pattern = Trianglify({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                    if (indice) {
                        $(".fondo1").css("z-index", "-2");
                        $(".fondo2").css("display", "none");
                        $(".fondo2").css("z-index", "-1");
                        $(".fondo2").fadeIn(2000);
                    }
                    else {
                        $(".fondo1").css("z-index", "-1");
                        $(".fondo1").css("display", "none");
                        $(".fondo2").css("z-index", "-2");
                        $(".fondo1").fadeIn(2000);
                    }
                    indice = !indice;
                }, 8000);
            });

            var i = 0;
            var txt = ['Jorge Neaves', 'Desarrollador de Software','Autodidacta'];
            var lblIndice = 0;
            var speed = 80;
            $(document).ready(function () {
                setTimeout(function () { typeWriter(); }, 1000)          
            });
            function typeWriter() {
                if (i < txt[lblIndice].length) {
                    document.getElementById("txtTitulo").innerHTML += txt[lblIndice].charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
                else {
                    setTimeout(typeDesWriter, 2000);                   
                }
            }
            function typeDesWriter() {
                if (i > 0) {
                    i--;
                    document.getElementById("txtTitulo").innerHTML = txt[lblIndice].substring(0, i - 1);
                    setTimeout(typeDesWriter, speed/3);
                }
                else {
                    lblIndice += 1;
                    if (lblIndice >= txt.length) { lblIndice = 0;}
                    typeWriter();
                }
}
$(".visor").click(function (event) {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    $("#imgVisor").attr("src",$("#"+event.target.id).attr("src"));
    myModal.show();
});