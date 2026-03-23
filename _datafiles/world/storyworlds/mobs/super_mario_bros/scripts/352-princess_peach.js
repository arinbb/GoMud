
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bowser") >= 0 || question.indexOf("kidnap") >= 0) {
        mob.Command("emote sighs softly, her expression composed.");
        mob.Command("say He is persistent. I will give him that.");
        mob.Command("say But you always come. That is more than persistence -- that is something else entirely.", 2.0);
        return true;
    }

    if (question.indexOf("cake") >= 0 || question.indexOf("bake") >= 0) {
        mob.Command("emote smiles and gestures toward the table.");
        mob.Command("say I had time to prepare. You earned it.");
        mob.Command("say It is a proper cake. No tricks. No lies. Just cake.", 1.5);
        return true;
    }

    if (question.indexOf("mario") >= 0 || question.indexOf("luigi") >= 0) {
        mob.Command("emote clasps her hands with a warm expression.");
        mob.Command("say He is very brave. They both are.");
        mob.Command("say I know what it cost to get here. I want you to know that I know.", 2.0);
        return true;
    }

    if (question.indexOf("mushroom kingdom") >= 0 || question.indexOf("kingdom") >= 0) {
        mob.Command("emote looks toward the window.");
        mob.Command("say It is a beautiful kingdom. Worth protecting.");
        mob.Command("say Thank you for helping protect it.", 1.5);
        return true;
    }

    mob.Command("emote smiles at you with warm grace.");
    mob.Command("say Thank you for everything. Please, have some cake.");
    return true;
}
