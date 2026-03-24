
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("agnes") >= 0 || question.indexOf("dog") >= 0 || question.indexOf("show") >= 0) {
        mob.Command("say Miss Agnes is going to win today.");
        mob.Command("emote says this without drama, as a statement of professional assessment.", 2.0);
        mob.Command("say Her movement in the last practice run was better than I've ever seen it. Stefan saw it too.", 4.0);
        mob.Command("emote checks the clipboard.", 5.5);
        mob.Command("say Everything is right today. The grooming, the light, she's calm. Days like this you feel it.", 7.5);
        return true;
    }

    if (question.indexOf("stefan") >= 0 || question.indexOf("partner") >= 0) {
        mob.Command("say Stefan has the eye. I have the list.");
        mob.Command("emote says this without false modesty -- it's simply accurate.", 2.0);
        mob.Command("say He can look at a dog from twenty feet and tell you three things about its structure. I can tell you what time the breed ring starts and where we parked.", 4.5);
        mob.Command("emote smiles.", 7.0);
        mob.Command("say Together that's everything.", 8.5);
        return true;
    }

    if (question.indexOf("catalog") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("say Twelve years running the business side. Stefan does the creative.");
        mob.Command("emote makes a small note on the clipboard.", 2.0);
        mob.Command("say It works because we're different where it matters and the same where it matters more.", 4.5);
        return true;
    }

    mob.Command("emote looks up from the clipboard.");
    mob.Command("say Need something?", 1.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it efficiently.");
    mob.Command("say Hm. Stefan would have a better opinion about this than I do. My instinct is good, though.", 2.0);
    return true;
}
