
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("play") >= 0 || question.indexOf("game") >= 0 || question.indexOf("fun") >= 0) {
        mob.Command("say Come and play with us.");
        mob.Command("say Forever.");
        mob.Command("say And ever.", 2.0);
        mob.Command("say And ever.", 3.5);
        return true;
    }

    if (question.indexOf("daddy") >= 0 || question.indexOf("father") >= 0 || question.indexOf("grady") >= 0 || question.indexOf("parent") >= 0) {
        mob.Command("emote stare at you with empty eyes, their expressions unchanging.");
        mob.Command("say Daddy corrected us.", 2.0);
        return true;
    }

    if (question.indexOf("danny") >= 0 || question.indexOf("boy") >= 0) {
        mob.Command("say We like Danny.");
        mob.Command("say We want him to stay.");
        mob.Command("say He can play with us. Forever and ever and ever.", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0 || question.indexOf("home") >= 0 || question.indexOf("live") >= 0) {
        mob.Command("say We live here.");
        mob.Command("say We've always lived here.");
        mob.Command("emote tilt their heads in perfect unison.", 2.0);
        return true;
    }

    mob.Command("emote stare at you in silence, holding hands.");
    mob.Command("say Come and play with us.", 2.0);
    return true;
}
