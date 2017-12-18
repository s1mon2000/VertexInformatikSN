$(document).ready(function () {

    $(document).on("click", "#logout", function () {
        $.post("../anfrage", {
            typ: "logout"
        }, function (data) {
            if (data.typ == "logout") {
                $("body").html("Du bist erfolgreich abgemeldet. Neu laden zum erneuten Anmelden!");
            }
        })
    });

    $(document).on("click", "#anmeldeknopf", function () {
        $.post("../anfrage", {
            typ: "anmeldedaten",
            anmeldename: $("#anmeldename").val(),
            passwort: $("#passwort").val()
        }, function (data) {
            if (data.typ == "überprüfung") {
                if (data.text == "ok") {
                    $("body").html("Gratulation, du bist angemeldet!")
                            .append("<br><input type='button' value='logout' id='logout'/>");
                } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");
                    
                }
            }
        });
    });
    
     $(document).on("click", "#registrierungsknopf", function () {
        $("body").html("Registriere dich<br>")
       
              .append("neuer Benutzername: <input type='password' id='passwort'/><br>\n")
            .append("gewünschtes Passwort: <input type='password' id='passwort'/><br>\n")
             .append("Passwort wiederholen: <input type='password' id='passwort'/><br>\n")
             .append("<input type='button' value='Benutzer erstellen' id='benutzererstellenknopf'/>");

    });

    $.post("../anfrage",
            {
                typ: "angemeldet"
            },
            function (data) {

                if (data.typ == "angemeldet") {
                    if (data.text == "nein") {

                        $("body").html("Einloggen<br>\nName: <input type='text' id='anmeldename'/><br>")
                                .append("Passwort: <input type='password' id='passwort'/><br>\n")
                                .append("<input type='button' value='OK' id='anmeldeknopf'/>\n")
                                .append("<input type='button' value='Registrieren' id='registrierungsknopf'/><br>\n")
                                
                    } else {
                        $("body").html("Gratulation, du bist angemeldet!")
                                .append("<br><input type='button' value='logout' id='logout'/>");
                    }
                }
            }
    );

});