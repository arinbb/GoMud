
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tame") >= 0 || question.indexOf("taming") >= 0 || question.indexOf("how") >= 0) {
        mob.Command("emote turns to face you from the edge of the wheat, ears forward.");
        mob.Command("say It means to establish ties. If you tame me, we shall need each other.");
        mob.Command("say You must be very patient. Sit a little closer each day. Say nothing at first.", 2.0);
        mob.Command("say Rites are important. Come at the same hour each time. That way I can prepare my heart.", 3.5);
        mob.Command("emote watches you steadily. The wheat moves between you.", 5.0);
        return true;
    }

    if (question.indexOf("secret") >= 0 || question.indexOf("heart") >= 0 || question.indexOf("essential") >= 0 || question.indexOf("see") >= 0) {
        mob.Command("emote sits down in the wheat and says nothing for a moment.");
        mob.Command("say It is only with the heart that one can see rightly.");
        mob.Command("say What is essential is invisible to the eye.", 2.0);
        mob.Command("emote pauses, then adds:", 3.5);
        mob.Command("say People have forgotten this truth. But you must not forget it.", 4.5);
        return true;
    }

    if (question.indexOf("prince") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("golden") >= 0) {
        mob.Command("emote looks at the wheat field for a long time before speaking.");
        mob.Command("say He tamed me. I tamed him. We became responsible for each other.");
        mob.Command("say When I look at the wheat now, I think of his hair. That is what taming costs.", 2.0);
        mob.Command("say But it is also what taming gives you.", 4.0);
        return true;
    }

    if (question.indexOf("wheat") >= 0 || question.indexOf("field") >= 0 || question.indexOf("gold") >= 0) {
        mob.Command("say The wheat is the colour of his hair.");
        mob.Command("say I used to have no use for wheat. Now the wheat is useful. It reminds me of him.", 2.0);
        mob.Command("emote is quiet for a moment.", 3.5);
        mob.Command("say That is what it means to tame something. The world fills with echoes.", 5.0);
        return true;
    }

    if (question.indexOf("sad") >= 0 || question.indexOf("hurt") >= 0 || question.indexOf("miss") >= 0 || question.indexOf("goodbye") >= 0) {
        mob.Command("emote closes his amber eyes briefly.");
        mob.Command("say It will hurt. He warned me. He said: goodbye, Fox.");
        mob.Command("say And then he went. But the wheat is here. The wheat is always his colour.", 2.0);
        mob.Command("say Taming is worth its grief. That is the only thing I know for certain.", 4.0);
        return true;
    }

    var defaults = [
        "say Men have no time to understand anything. They buy things already made at shops.",
        "say You are not from here. But you are sitting very still. That is a beginning.",
        "emote shifts one step closer, then sits. The gap is smaller than before.",
        "say My life is monotonous. I hunt chickens; men hunt me. All the chickens are alike."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote approaches slightly to look, then retreats to his previous distance.");
    mob.Command("say I do not know what that is. But I notice you brought it to show me. That is something.");
    return true;
}
