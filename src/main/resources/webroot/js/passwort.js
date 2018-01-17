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
        }
        );
    });

    $(document).on("click", "#registrierungsknopf", function () {
        $("body").html("Registriere dich<br>")
                .append("neuer Benutzername: <input type='text' id='benutzername'/><br>\n")
                .append("gewünschtes Passwort: <input type='password' id='passwort1'/><br>\n")
                .append("Passwort wiederholen: <input type='password' id='passwort2'/><br>\n")
                .append("<input type='button' value='Benutzer erstellen' id='benutzererstellenknopf'/>")
.append("<input type='checkbox' name='checkknopf' id='checkknopf'/>"+"Ich bin freiwillig hier");
    });

    $(document).on("click", "#benutzererstellenknopf", function () {

        if ($("#passwort1").val() == $("#passwort2").val()) {
           $.post("../anfrage", {
            typ: "registrierungsdaten",
            benutzername: $("#benutzername").val(),
            passwort1: $("#passwort1").val()
        }, function (data) {
            if (data.typ == "bestätigung") {
                if (data.text == "richtig") {
             //if ($("#passwort1").val() == $("#passwort2").val()) {
                   String; name = ($("#benutzername").val());
            
            $("body").html("Benutzer erstellt: " + name + "<br> Passwort: " + $("#passwort1").val() + " <br>")
                    .append("Einloggen<br>\nName: <input type='text' id='anmeldename'/><br>")
                    .append("Passwort: <input type='password' id='passwort'/><br>\n")
                    .append("<input type='button' value='OK' id='anmeldeknopf'/>\n");
                } else {
                    $("body").append("<br>fehler");

                }
            }
           
        }
        );
        }
            else {
                    $("body").append("<br>passwort bitte überprüfen");

                }
   
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
                        .append("<input type='button' value='Passwort vergessen?' id='vergessenknopf'/><br>\n");
                    } else {
                        $("body").html("Gratulation, du bist angemeldet!")
                                .append("<br><input type='button' value='logout' id='logout'/>");
                    }
                }
            }
    );
    
    
    
    
$(document).on("click", "#vergessenknopf", function () {
    $("body").html("Leider können wir die Tatsache nicht ändern, dass Sie ihr Passwort vergessen haben. Hier zur Aufmunterung ein kleines Bild")
            .append("<br><input type='image' src='https://i.pinimg.com/736x/2c/d8/77/2cd8770926c40117f5660d73ad1daace--facebook-com.jpg'/>");
});
});