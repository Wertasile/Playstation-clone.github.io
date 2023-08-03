let slideno = 1;
showslidegames(slideno);
showslideaccs(slideno);

function showslidegames(n){

    if (n==1){
        document.getElementById('ps5discount').classList.remove("nodisplay");
        document.getElementById('winter').classList.add("nodisplay");
        document.getElementById('great2023').classList.add("nodisplay");
        document.getElementById('firewall').classList.add("nodisplay");
        document.getElementById('granturismo').classList.add("nodisplay");
        document.getElementById('venom').classList.add("nodisplay");
    }

    if (n==2){
        document.getElementById('ps5discount').classList.add("nodisplay");
        document.getElementById('winter').classList.remove("nodisplay");
        document.getElementById('great2023').classList.add("nodisplay");
        document.getElementById('firewall').classList.add("nodisplay");
        document.getElementById('granturismo').classList.add("nodisplay");
        document.getElementById('venom').classList.add("nodisplay");
    }

    if (n==3){
        document.getElementById('ps5discount').classList.add("nodisplay");
        document.getElementById('winter').classList.add("nodisplay");
        document.getElementById('great2023').classList.remove("nodisplay");
        document.getElementById('firewall').classList.add("nodisplay");
        document.getElementById('granturismo').classList.add("nodisplay");
        document.getElementById('venom').classList.add("nodisplay");
    }

    if (n==4){
        document.getElementById('ps5discount').classList.add("nodisplay");
        document.getElementById('winter').classList.add("nodisplay");
        document.getElementById('great2023').classList.add("nodisplay");
        document.getElementById('firewall').classList.remove("nodisplay");
        document.getElementById('granturismo').classList.add("nodisplay");
        document.getElementById('venom').classList.add("nodisplay");
    }

    if (n==5){
        document.getElementById('ps5discount').classList.add("nodisplay");
        document.getElementById('winter').classList.add("nodisplay");
        document.getElementById('great2023').classList.add("nodisplay");
        document.getElementById('firewall').classList.add("nodisplay");
        document.getElementById('granturismo').classList.remove("nodisplay");
        document.getElementById('venom').classList.add("nodisplay");
    }

    if (n==6){
        document.getElementById('ps5discount').classList.add("nodisplay");
        document.getElementById('winter').classList.add("nodisplay");
        document.getElementById('great2023').classList.add("nodisplay");
        document.getElementById('firewall').classList.add("nodisplay");
        document.getElementById('granturismo').classList.add("nodisplay");
        document.getElementById('venom').classList.remove("nodisplay");
    }

    


}

function showslideaccs(n){

    if (n==1){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(ps5s);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.remove("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.add("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.add("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.add("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.add("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.add("nodisplay");
        }
    }

    if (n==2){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(ps5s);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.add("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.remove("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.add("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.add("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.add("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.add("nodisplay");
        }
    }


    if (n==3){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(ps5s);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.add("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.add("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.remove("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.add("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.add("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.add("nodisplay");
        }
    }

    else if (n==4){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(dsedges);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.add("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.add("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.add("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.remove("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.add("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.add("nodisplay");
        }
    }
    
    if (n==5){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(ps5s);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.add("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.add("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.add("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.add("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.remove("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.add("nodisplay");
        }
    }

    if (n==6){
        var ps5s = document.getElementsByClassName('ps5');
        var dss = document.getElementsByClassName('ds');
        var pulses = document.getElementsByClassName('pulse');
        var dsedges = document.getElementsByClassName('dsedge');
        var medias = document.getElementsByClassName('media');
        var cameras = document.getElementsByClassName('camera');
        console.log(ps5s);
        for (var i=0; i<ps5s.length;i++){
            ps5s[i].classList.add("nodisplay");
        }
        for (var i=0; i<dss.length;i++){
            dss[i].classList.add("nodisplay");
        }
        for (var i=0; i<pulses.length;i++){
            pulses[i].classList.add("nodisplay");
        }
        for (var i=0; i<dsedges.length;i++){
            dsedges[i].classList.add("nodisplay");
        }
        for (var i=0; i<medias.length;i++){
            medias[i].classList.add("nodisplay");
        }
        for (var i=0; i<cameras.length;i++){
            cameras[i].classList.remove("nodisplay");
        }
    }
}

var x=0;

function previous(){
    var elem = document.getElementsByClassName("carousel");
    console.log(elem);
    if (x!=0){
        x = x +  13;
        console.log(x);
        elem[0].style.transform ="translateX("+x+"%)";
    }
    else{
        x = -26;
        console.log(x);
        elem[0].style.transform ="translateX("+x+"%)";
    }
        
}

function next(){
    var elem2 = document.getElementsByClassName("carousel");
    console.log(elem2);
    if(x!=-26){
        x = x -  13;
        console.log(x);
        elem2[0].style.transform ="translateX("+x+"%)";
    }
    else{
        x = 0;
        console.log(x);
        elem2[0].style.transform ="translateX("+x+"%)";
    }
     
}

