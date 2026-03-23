
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote blinks slowly, as if surfacing from deep water.");
        mob.Command("say Billy? Oh. Billy. Yes.", 1.5);
        mob.Command("emote drifts back into his private reverie.", 3.0);
        return true;
    }

    if (question.indexOf("jan") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("say Jan? She's... she's watching the game.");
        mob.Command("emote hums a few bars of something.", 1.5);
        return true;
    }

    if (question.indexOf("song") >= 0 || question.indexOf("music") >= 0 || question.indexOf("humming") >= 0) {
        mob.Command("emote stops humming for a moment, surprised by the question.");
        mob.Command("say That? Oh, I don't know. Something I heard a long time ago.", 1.5);
        mob.Command("emote resumes humming, already forgetting the conversation.", 3.0);
        return true;
    }

    if (question.indexOf("bills") >= 0 || question.indexOf("football") >= 0) {
        mob.Command("say Football? I don't really follow it. Jan does.");
        mob.Command("emote looks at the wall.", 1.5);
        return true;
    }

    mob.Command("say Hmm? What was that?");
    mob.Command("emote seems to have already forgotten you are here.", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote squints at it without recognition.");
    mob.Command("say That's nice. That's very nice.");
    mob.Command("emote goes back to humming.", 2.0);
    return true;
}
