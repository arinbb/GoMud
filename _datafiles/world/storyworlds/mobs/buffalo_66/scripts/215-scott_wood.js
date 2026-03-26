
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("kick") >= 0 || question.indexOf("miss") >= 0 || question.indexOf("game") >= 0 || question.indexOf("super bowl") >= 0) {
        mob.Command("emote flinches like he has been struck.");
        mob.Command("say The kick. You want to talk about the kick.", 1.5);
        mob.Command("say Forty-seven yards. The wind was twenty miles an hour. TWENTY.", 3.0);
        mob.Command("say It went wide right. Two feet. TWO FEET.", 5.0);
        mob.Command("emote stares at his hands.", 7.0);
        mob.Command("say I replay it every night. Every single night.", 9.0);
        return true;
    }

    if (question.indexOf("trophy") >= 0 || question.indexOf("trophies") >= 0 || question.indexOf("career") >= 0) {
        mob.Command("emote glances at the shelf and then looks away.");
        mob.Command("say Those? Those are from before.", 1.5);
        mob.Command("say Before doesn't matter. Only the last thing matters. And the last thing I did was miss.", 3.0);
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("brown") >= 0) {
        mob.Command("say Billy Brown? I don't... wait. That name.");
        mob.Command("emote 's brow furrows, trying to place something.", 1.5);
        mob.Command("say I don't know. I can't remember. Everything runs together now.", 3.0);
        return true;
    }

    if (question.indexOf("football") >= 0 || question.indexOf("bills") >= 0) {
        mob.Command("say I gave them everything. EVERYTHING. And all they remember is the one time I missed.");
        mob.Command("emote takes a long drink from a beer can.", 2.0);
        return true;
    }

    var defaults = [
        "emote stares past you at the television, not seeing it.",
        "say Leave me alone. I'm watching the game. I'm always watching the game.",
        "say You know what? It doesn't matter. None of it matters."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
