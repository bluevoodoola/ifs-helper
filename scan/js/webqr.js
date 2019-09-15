// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com

var gCtx = null;
var stype = 0;
var gUM = false;
var v = null;

function initCanvas(w, h) {
    var gCanvas = null;
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}

function captureToCanvas() {
    if (stype != 1)
        return;
    if (gUM) {
        try {
            gCtx.drawImage(v, 0, 0);
            try {
                qrcode.decode();
            }
            catch (e) {
                console.log(e);
                setTimeout(captureToCanvas, 500);
            };
        }
        catch (e) {
            console.log(e);
            setTimeout(captureToCanvas, 500);
        };
    }
}

function read(a) {
    stats = StatsFromIFS(JSON.parse(a));

    document.getElementById("result").innerText = a + ' ' + JSON.stringify(stats);

    document.getElementById("AgentName").innerText = stats.username;
    document.getElementById("AgentName").style.color = FactionTranslation.find(e => e.AgentStatsName === stats.faction).color;
    document.getElementById("Faction").innerText = FactionTranslation.find(e => e.AgentStatsName === stats.faction).NianticName;
    document.getElementById("Faction").style.color = FactionTranslation.find(e => e.AgentStatsName === stats.faction).color;
    document.getElementById("Level").innerText = stats.level;
    document.getElementById("LifetimeAP").innerText = stats.lifetimeap.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("CurrentAP").innerText = stats.ap.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("Trekker").innerText = stats.trekker.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("Recursions").innerText = stats.recursions;

    document.querySelectorAll('.watching-stats').forEach(el => { el.dataset.stats = true; });
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) {

    v.srcObject = stream;
    v.play();

    gUM = true;
    setTimeout(captureToCanvas, 500);
}

function error(error) {
    gUM = false;
    return;
}

function load() {
    document.querySelectorAll('.watching-stats').forEach(el => { delete el.dataset.stats; });

    if (isCanvasSupported()) {
        initCanvas(800, 600);
        qrcode.callback = read;
        document.getElementById("mainbody").style.display = "inline";
        setwebcam();
    }
    else {
        document.getElementById("mainbody").style.display = "inline";
        document.getElementById("mainbody").innerHTML = '<p>Sorry your browser is not supported</p>';
    }
}

function setwebcam() {

    var options = true;
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        try {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                    devices.forEach(function (device) {
                        if (device.kind === 'videoinput') {
                            if (device.label.toLowerCase().search("back") > -1)
                                options = { 'deviceId': { 'exact': device.deviceId }, 'facingMode': 'environment' };
                        }
                        console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
                    });
                    setwebcam2(options);
                });
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        console.log("no navigator.mediaDevices.enumerateDevices");
        setwebcam2(options);
    }

}

function setwebcam2(options) {
    console.log(options);
    document.getElementById("result").innerText = "Scanning";
    if (stype == 1) {
        setTimeout(captureToCanvas, 500);
        return;
    }
    var n = navigator;
    v = document.getElementById("v");

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: options, audio: false }).
            then(function (stream) {
                success(stream);
            }).catch(function (error) {
                error(error)
            });
    }
    else
        if (n.getUserMedia) {
            n.getUserMedia({ video: options, audio: false }, success, error);
        }
        else
            if (n.webkitGetUserMedia) {
                n.webkitGetUserMedia({ video: options, audio: false }, success, error);
            }

    stype = 1;
    setTimeout(captureToCanvas, 500);
}
