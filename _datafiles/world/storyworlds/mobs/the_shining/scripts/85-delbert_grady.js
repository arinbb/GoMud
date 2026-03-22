
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("caretaker") >= 0 || question.indexOf("jack") >= 0 || question.indexOf("torrance") >= 0) {
        mob.Command("say You ARE the caretaker, sir. You have ALWAYS been the caretaker.");
        mob.Command("emote fixes you with a cold, unwavering gaze.");
        mob.Command("say I should know, sir. I've always been here.", 2.0);
        return true;
    }

    if (question.indexOf("daughter") >= 0 || question.indexOf("girls") >= 0 || question.indexOf("twins") >= 0 || question.indexOf("children") >= 0) {
        mob.Command("emote dabs at his jacket with a cloth, his expression perfectly controlled.");
        mob.Command("say I corrected them, sir.");
        mob.Command("say And when my wife tried to prevent me from doing my duty, I corrected her as well.", 2.0);
        return true;
    }

    if (question.indexOf("danny") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("child") >= 0) {
        mob.Command("say The boy has a very great talent, sir. A disruptive talent.");
        mob.Command("say It must be dealt with. As firmly as possible.");
        mob.Command("emote 's voice is perfectly calm, perfectly cold.", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0) {
        mob.Command("say The hotel has always needed a caretaker, sir.");
        mob.Command("say Someone who understands its... requirements.");
        mob.Command("emote straightens his jacket with precise movements.", 2.0);
        return true;
    }

    if (question.indexOf("wife") >= 0 || question.indexOf("wendy") >= 0 || question.indexOf("woman") >= 0) {
        mob.Command("say She is interfering, sir. With the boy. With everything.");
        mob.Command("emote 's expression hardens almost imperceptibly.");
        mob.Command("say Perhaps she needs to be corrected as well. A firm hand, sir. A firm hand.", 2.0);
        return true;
    }

    var defaults = [
        "say I beg your pardon, sir. Is there something you require?",
        "emote stands rigidly, his expression betraying nothing.",
        "say The hotel asks only for your dedication, sir. Your complete dedication."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
