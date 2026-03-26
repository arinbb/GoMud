
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("soup") >= 0 || question.indexOf("menu") >= 0 || question.indexOf("today") >= 0) {
        mob.Command("emote points at the menu on the wall.");
        mob.Command("say Menu is on the wall.", 1.5);
        mob.Command("emote returns to the soup.", 3.0);
        return true;
    }

    if (question.indexOf("bread") >= 0) {
        mob.Command("emote looks up slowly.");
        mob.Command("say Bread. Two dollars. Extra.", 1.5);
        mob.Command("emote waits.", 3.0);
        return true;
    }

    if (question.indexOf("recipe") >= 0 || question.indexOf("how") >= 0 || question.indexOf("ingredient") >= 0) {
        mob.Command("emote straightens.");
        mob.Command("say NO SOUP FOR YOU!", 1.0);
        mob.Command("emote points at the door.", 2.0);
        return true;
    }

    // Any other question gets the treatment

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
