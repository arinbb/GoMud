function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("nathaniel") >= 0 || question.indexOf("husband") >= 0 || question.indexOf("father") >= 0 || question.indexOf("nathaniel") >= 0) {
        mob.Command("emote stops what she is doing.");
        mob.Command("say I miss him every day.", 2.0);
        mob.Command("emote says this without performance.", 3.0);
        mob.Command("say He was not -- he was difficult. He was a difficult man.", 5.0);
        mob.Command("say But he was mine. And I was his. And now he is not here.", 7.0);
        mob.Command("emote goes back to the stove. She does not look at you.", 9.0);
        mob.Command("say I still make too much food.", 11.0);
        return true;
    }

    if (question.indexOf("children") >= 0 || question.indexOf("kids") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("say They do not need me anymore.", 1.0);
        mob.Command("emote wipes her hands on her apron.", 2.5);
        mob.Command("say That is what I wanted. When they were small that is what you work toward.", 4.5);
        mob.Command("say And now they are grown and they handle things and they do not call every day.", 6.0);
        mob.Command("emote pauses.", 7.5);
        mob.Command("say I know this is right. I do not have to like it.", 9.0);
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("yourself") >= 0 || question.indexOf("who are") >= 0) {
        mob.Command("say I wasted so much time.", 1.0);
        mob.Command("emote 's hands go still on the counter.", 2.5);
        mob.Command("say I was always -- preparing. Getting ready for a life that was coming.", 4.5);
        mob.Command("say And it was already here. It was already happening.", 6.0);
        mob.Command("say I am trying. I am trying now to -- just be in it.", 8.0);
        mob.Command("emote picks up a wooden spoon. Her hands need something to do.", 9.5);
        return true;
    }

    if (question.indexOf("cook") >= 0 || question.indexOf("food") >= 0 || question.indexOf("garden") >= 0) {
        mob.Command("say This is what I know how to do.", 1.0);
        mob.Command("emote gestures at the stove.", 2.5);
        mob.Command("say I cannot fix what is broken in this family. I cannot bring Nathaniel back.", 4.5);
        mob.Command("say But I can make sure everyone has eaten.", 6.0);
        mob.Command("emote nods once, decided.", 7.5);
        return true;
    }

    if (question.indexOf("grief") >= 0 || question.indexOf("sad") >= 0 || question.indexOf("mourn") >= 0) {
        mob.Command("say Grief is not what I expected.", 1.0);
        mob.Command("emote looks at the window.", 2.5);
        mob.Command("say I thought it would be a thing I did and then finished.", 4.0);
        mob.Command("say It is not like that. It is just -- there. It moves around. Some days it is the whole kitchen.", 6.0);
        mob.Command("emote stirs the pot.", 8.0);
        return true;
    }

    var defaults = [
        "say Are you hungry. Sit down.",
        "emote looks at you with a worried attentiveness that is entirely natural to her.",
        "say I'll make more if you need it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onGive(mob, room, eventDetails) {
    mob.Command("emote takes it with both hands.");
    mob.Command("say Thank you. That is very kind.", 1.5);
    mob.Command("emote looks at it and then at you and then goes back to the stove.", 3.0);
    return true;
}

function onShow(mob, room, eventDetails) {

    return false;
}