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
                    $("body").html("Gratulation, du bist angemeldet! Herzlich Willkommen auf unserer Website, dem einigartigen Internetseiten Adressbuch<br>Was suchen Sie?")
                            .append("<br><input type='button' value='Nachrichten' id='nachrichten'/>")
                            .append("<br><input type='button' value='Sport' id='sport'/>")
                            .append("<br><input type='button' value='Spiele' id='spiele'/>")
                            .append("<br><input type='button' value='logout' id='logout'/>")
                            .append("<br><input type='button' value='AGB's' id= 'agb'/>");
                } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");

                }
            }
        }
        );
    });

    $(document).on("click", "#zuruck", function () {
        $("body").html("Herzlich Willkommen auf unserer Website, dem einigartigen Internetseiten Adressbuch<br>Was suchen Sie?")
                .append("<br><input type='button' value='Nachrichten' id='nachrichten'/>")
                .append("<br><input type='button' value='Sport' id='sport'/>")
                .append("<br><input type='button' value='Spiele' id='spiele'/>")
                .append("<br><input type='button' value='logout' id='logout'/>")
                .append("<br><input type='button' value='AGB's' id= 'agb'/>");

    });


    $(document).on("click", "#agb", function () {
        $("body").html("Datenschutzerklärung<br>1. Hinweise zum Datenschutz<br>Der Schutz Ihrer Daten hat bei uns höchste Priorität. Wir erheben Nutzerdaten im Rahmen der aktuell gültigen Datenschutzgesetze und nutzen diese u.a. um Werbekampagnen besser aussteuern zu können. Hierbei achten wir besonders wegen der jüngeren Nutzerschaft auf einen verantwortungsbewussten Umgang mit entsprechenden Daten. Im Folgenden haben wir unsere Datenschutzbestimmungen erläutert um Ihnen zu zeigen, dass sowohl Sie – als auch Ihre Kinder – sich gefahrenlos auf unserer kostenlosen Website bewegen können.Bitte geben Sie niemals persönliche Daten wie E-Mailadresse, Telefonnummern, Passwörter, etc. öffentlich bekannt und teilen Sie diese auch anderen Nutzern nicht mit. Auch unser Support-Team oder andere Mitarbeiter werden Sie niemals nach persönlichen Daten fragen. Wenn Sie Leistungen Dritter in Anspruch nehmen, gelten ausschließlich die Datenschutzbedingungen dieser Dritten. Der Anbieter überprüft die Datenschutzbedingungen Dritter nicht. Bei Fragen wenden Sie sich bitte an unsere Servicehotline:<br> 15 [;-)]")
                .append("<br><input type='button' value='zurück' id='zuruck'/>");





    });

    $(document).on("click", "#hilfe", function () {
        $("body").html("So öffnen Sie die Websites:<br>1.Link markieren<br>2.Rechte Maustaste auf den markierten Link<br>3.Auf 'zu ... wechseln'")

                .append("<br><input type='button' value='zurück' id= 'zuruck'/>");

    });



    $(document).on("click", "#nachrichten", function () {

        $("body").html("Hier ein paar Nachrichten-Websites\n\<br>")
                .append("<br><input type='url' value='http://www.spiegel.de/'/>" + " Spiegel Online")
                .append("<br><input type='url' value='http://www.kornwestheimer-zeitung.de/'/>" + " Kornwestheimer Zeitung")
                .append("<br><input type='url' value='http://www.bild.de/'/>" + " Bild Zeitung")
                .append("<br><input type='button' value='Hilfe' id='hilfe'/>")
                .append("<br><input type='button' value='zurück' id='zuruck'/>");
    });

    $(document).on("click", "#sport", function () {

        $("body").html("Hier ein paar Sport-Websites\n\<br>")
                .append("<br><input type='url' value='http://www.sport1.de/'/>" + " Sport 1")
                .append("<br><input type='url' value='http://www.kicker.de/'/>" + " Kicker")
                .append("<br><input type='url' value='https://www.sport.de/'/>" + " Sport.de")
                .append("<br><input type='button' value='zurück' id='zuruck'/>")
                .append("<br><input type='button' value='Hilfe' id='hilfe'/>");
    });
    $(document).on("click", "#spiele", function () {

        $("body").html("Hier ein paar Sport-Websites\n\<br>")

                .append("<br><input type='url' value='http://www.spielen.com/'/>" + " Spielen.com")
                .append("<br><input type='url' value='http://www.spielaffe.de/'/>" + " Spieleaffe")
                .append("<br><input type='button' value='zurück' id='zuruck'/>")
                .append("<br><input type='button' value='Hilfe' id='hilfe'/>");
    });
    $(document).on("click", "#registrierungsknopf", function () {
        $("body").html("Registriere dich<br>")
                .append("neuer Benutzername: <input type='text' id='benutzername'/><br>\n")
                .append("gewünschtes Passwort: <input type='password' id='passwort1'/><br>\n")
                .append("Passwort wiederholen: <input type='password' id='passwort2'/><br>\n")
                .append("<input type='button' value='Benutzer erstellen' id='benutzererstellenknopf'/>")
                .append("<input type='checkbox' name='checkknopf' id='checkknopf'/>" + "Ich bin freiwillig hier");
    });

    $(document).on("click", "#benutzererstellenknopf", function () {

        if ($("#passwort1").val() == $("#passwort2").val()) {
           
           var name = ($("#benutzername").val());
            
          
            
            
            
            $.post("../anfrage", {
                typ: "registrierungsdaten",
                benutzername: $("#benutzername").val(),
                passwort1: $("#passwort1").val()
            }, function (data) {
                if (data.typ == "bestätigung") {
                    if (data.text == "richtig") {

                        String;
                        name = ($("#benutzername").val());

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
        } else {
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