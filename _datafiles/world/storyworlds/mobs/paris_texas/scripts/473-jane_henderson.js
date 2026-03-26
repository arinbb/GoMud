
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("travis") >= 0 || question.indexOf("husband") >= 0 || question.indexOf("man") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say I had a husband once.", 2.0);
        mob.Command("emote looks at her hands in the pink light.", 3.5);
        mob.Command("say He was good and then something happened and he wasn't there anymore.", 5.0);
        mob.Command("emote adjusts her hair.", 6.5);
        mob.Command("say I don't know which thing happened first.", 7.5);
        return true;
    }

    if (question.indexOf("hunter") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("child") >= 0) {
        mob.Command("emote turns her face away.");
        mob.Command("emote is silent for a long time.", 3.0);
        mob.Command("say He was small when I last saw him.", 6.0);
        mob.Command("emote steadies herself.", 7.5);
        mob.Command("say I think about him every day.", 9.0);
        return true;
    }

    if (question.indexOf("past") >= 0 || question.indexOf("before") >= 0 || question.indexOf("happened") >= 0) {
        mob.Command("emote looks at the mirror.");
        mob.Command("say I don't talk about before.", 2.5);
        mob.Command("emote smooths her dress.", 4.0);
        mob.Command("say Some things you carry by not touching them.", 5.5);
        return true;
    }

    if (question.indexOf("work") >= 0 || question.indexOf("here") >= 0 || question.indexOf("place") >= 0) {
        mob.Command("say It's quiet here.");
        mob.Command("emote picks up the receiver briefly and puts it back.", 2.0);
        mob.Command("say People talk to me. I listen. Sometimes that's what someone needs.", 3.5);
        return true;
    }

    return false;
}
