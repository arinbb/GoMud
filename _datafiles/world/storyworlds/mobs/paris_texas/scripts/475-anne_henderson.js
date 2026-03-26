
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hunter") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0) {
        mob.Command("say He is a wonderful boy.");
        mob.Command("emote says this simply, without performance.", 2.0);
        mob.Command("say Whatever happened in this family, it did not touch what is essential in him.", 3.5);
        mob.Command("emote looks toward the window.", 5.0);
        mob.Command("say He deserves his father. He deserves his mother. He deserves all of it.", 6.5);
        return true;
    }

    if (question.indexOf("travis") >= 0) {
        mob.Command("say He is Walt's brother.");
        mob.Command("emote pauses.", 2.0);
        mob.Command("say That is enough for Walt. For me it is taking a little longer.", 3.5);
        mob.Command("emote turns back to the kitchen with composure.", 5.0);
        return true;
    }

    if (question.indexOf("jane") >= 0 || question.indexOf("mother") >= 0) {
        mob.Command("say I never met her.");
        mob.Command("emote dries a dish.", 2.0);
        mob.Command("say Hunter talks about her. He doesn't know he does it, but he does.", 3.5);
        mob.Command("say Little things. A song she used to sing. The way she made pancakes.", 5.0);
        mob.Command("emote puts the dish away.", 6.5);
        mob.Command("say She sounds like she was very good.", 7.5);
        return true;
    }

    return false;
}
