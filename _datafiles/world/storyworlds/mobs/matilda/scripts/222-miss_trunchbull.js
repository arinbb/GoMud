
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("child") >= 0 || question.indexOf("student") >= 0 || question.indexOf("children") >= 0) {
        mob.Command("say CHILDREN! Nasty, filthy, grubby little creatures! I cannot understand why we have them at all!");
        mob.Command("emote pounds the desk with a fist the size of a ham.", 1.5);
        return true;
    }

    if (question.indexOf("chokey") >= 0 || question.indexOf("punishment") >= 0 || question.indexOf("discipline") >= 0) {
        mob.Command("say The Chokey is the finest educational tool ever invented.");
        mob.Command("emote smiles, which is somehow worse than her scowl.");
        mob.Command("say A few hours in there sorts out even the most disobedient brat.", 2.0);
        return true;
    }

    if (question.indexOf("honey") >= 0 || question.indexOf("teacher") >= 0 || question.indexOf("niece") >= 0) {
        mob.Command("say That sniveling little milksop? She's useless. Weak. Pathetic.");
        mob.Command("emote 's lip curls with contempt.");
        mob.Command("say She was always her father's pet. Magnus this, Magnus that. Disgusting.", 2.0);
        return true;
    }

    if (question.indexOf("matilda") >= 0 || question.indexOf("wormwood") >= 0) {
        mob.Command("say The Wormwood girl? Another nasty little troublemaker.");
        mob.Command("say Her father warned me about her. Told me she was a real bad egg.");
        mob.Command("emote narrows her eyes dangerously.", 1.5);
        return true;
    }

    if (question.indexOf("sport") >= 0 || question.indexOf("athletics") >= 0 || question.indexOf("throw") >= 0) {
        mob.Command("say I was British Olympic hammer-throwing champion three years running.");
        mob.Command("emote flexes her enormous arms.");
        mob.Command("say A useful skill. Applicable to many situations involving small children.", 2.0);
        return true;
    }

    if (question.indexOf("magnus") >= 0 || question.indexOf("brother") >= 0 || question.indexOf("red house") >= 0) {
        mob.Command("emote 's face darkens dangerously.");
        mob.Command("say I will NOT discuss private family matters with the likes of you!");
        mob.Command("say Get out of my sight before I put you in the Chokey!", 2.0);
        return true;
    }

    return false;
}

function onIdle(mob, room) {
    if (mob.GetRoomId() == 1407) {
        var roll = UtilDiceRoll(1, 10);
        if (roll == 1) {
            mob.Command("say YOU! Stand up straight! I can see you slouching from here!");
        }
    }
    return false;
}
