
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tony") >= 0 || question.indexOf("friend") >= 0 || question.indexOf("imaginary") >= 0) {
        mob.Command("say Tony is the little boy who lives in my mouth.");
        mob.Command("emote wiggles his index finger back and forth.");
        mob.Command("say He shows me things. Things that happened. Things that are going to happen.", 2.0);
        return true;
    }

    if (question.indexOf("shining") >= 0 || question.indexOf("shine") >= 0 || question.indexOf("gift") >= 0) {
        mob.Command("say I don't call it that. That's what Dick calls it.");
        mob.Command("say It's like... seeing. But more. And sometimes you see things you don't want to.");
        mob.Command("emote stares at something that isn't there.", 2.0);
        return true;
    }

    if (question.indexOf("redrum") >= 0) {
        mob.Command("emote 's voice changes to a low, croaking rasp.");
        mob.Command("say REDRUM. REDRUM. REDRUM.");
        mob.Command("emote 's voice returns to normal, and he looks confused.", 2.0);
        mob.Command("say Tony says it. I can't stop him.", 3.5);
        return true;
    }

    if (question.indexOf("twins") >= 0 || question.indexOf("girls") >= 0) {
        mob.Command("emote goes very quiet.");
        mob.Command("say I've seen them. At the end of the hall. They want me to play with them.");
        mob.Command("say Forever and ever and ever.", 2.0);
        return true;
    }

    if (question.indexOf("room") >= 0 || question.indexOf("237") >= 0) {
        mob.Command("emote 's face goes pale and he shakes his head violently.");
        mob.Command("say No. No no no no no.");
        mob.Command("say Tony says never go in there. NEVER.", 1.5);
        return true;
    }

    if (question.indexOf("dad") >= 0 || question.indexOf("jack") >= 0 || question.indexOf("daddy") >= 0 || question.indexOf("father") >= 0) {
        mob.Command("emote looks down at his shoes.");
        mob.Command("say Daddy is sick.");
        mob.Command("say The hotel made him sick.", 1.5);
        return true;
    }

    var defaults = [
        "emote stares at you with large, unblinking eyes.",
        "say Tony doesn't want me to talk right now.",
        "emote rides his Big Wheel in a small circle, not looking at you."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
