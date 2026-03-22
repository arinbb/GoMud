
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("fortune") >= 0 || question.indexOf("future") >= 0 || question.indexOf("predict") >= 0) {
        var fortunes = [
            "say I see... a tall dark stranger! No wait, that's a lamp post. I see a LAMP POST in your future!",
            "say The spirits say you will come into great wealth! Also great debt. It's complicated.",
            "say I see travel in your future! And also in your past! You are someone who... MOVES AROUND!",
            "say The crystal ball shows me... a cloud shaped like a duck. This is VERY significant.",
            "say I predict you will breathe air today! The spirits are never wrong about these things!"
        ];
        var pick = Math.floor(Math.random() * fortunes.length);
        mob.Command(fortunes[pick]);
        mob.Command("emote nods sagely, completely confident in her prediction.", 2);
        return true;
    }

    if (question.indexOf("bike") >= 0 || question.indexOf("bicycle") >= 0) {
        mob.Command("say A bicycle? Let me consult the spirits...");
        mob.Command("emote peers deeply into the cracked crystal ball.", 1.5);
        mob.Command("say I see it! I see the bicycle! It's in... the BASEMENT of the ALAMO!", 3);
        mob.Command("emote delivers this with absolute theatrical certainty.", 4.5);
        mob.Command("say The spirits have spoken! Go to San Antonio! The Alamo awaits!", 6);
        return true;
    }

    if (question.indexOf("alamo") >= 0 || question.indexOf("basement") >= 0) {
        mob.Command("say The Alamo! Oh yes, very powerful spiritual vibrations there.");
        mob.Command("say The basement is DEFINITELY where you need to go. I'm never wrong about basements.", 2);
        mob.Command("emote adjusts seventeen scarves simultaneously.", 3.5);
        mob.Command("say I predicted my own breakfast this morning and only got it half wrong!", 5);
        return true;
    }

    if (question.indexOf("spirit") >= 0 || question.indexOf("ghost") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("say The spirits speak to me constantly! Sometimes they speak in English, sometimes in what I believe to be Esperanto.");
        mob.Command("emote tilts her head as if listening to something.", 2);
        mob.Command("say Right now they're telling me you're standing in front of me. See? Never wrong!", 3.5);
        mob.Command("say They also say you should tip your fortune teller generously. Very wise spirits.", 5);
        return true;
    }

    if (question.indexOf("crystal") >= 0 || question.indexOf("ball") >= 0) {
        mob.Command("say This crystal ball has been in my family for generations!");
        mob.Command("emote polishes it with her sleeve, revealing the thrift store price sticker.", 1.5);
        mob.Command("say It shows me visions of the past, present, and future. Also sometimes the weather channel. The reception is spotty.", 3);
        return true;
    }

    mob.Command("say Ask Madame Ruby about your fortune, the spirits, or perhaps a missing bicycle?");
    mob.Command("emote wiggles her fingers mysteriously.", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0) {
        mob.Command("say AH HA! The spirits TOLD me someone would show me a tiny bicycle today!");
        mob.Command("say Well, they said it would be a tiny horse, but close enough!", 2);
        return true;
    }

    mob.Command("say Ooh, let me read the psychic vibrations coming off that object...");
    mob.Command("emote closes her eyes and hums dramatically.", 1.5);
    mob.Command("say It was made... in a PLACE! By a PERSON! The spirits never lie!", 3);
    return true;
}
