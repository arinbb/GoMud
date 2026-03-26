function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("arm") >= 0 || question.indexOf("prosthetic") >= 0 || question.indexOf("hand") >= 0) {
        mob.Command("emote 's jaw sets briefly.");
        mob.Command("say Lost in service. Does its job. This one does its job.");
        mob.Command("emote turns back to the maps, indicating the subject is closed.", 1.5);
        return true;
    }

    if (question.indexOf("harold") >= 0 || question.indexOf("nephew") >= 0) {
        mob.Command("emote turns with the full authority of a military officer.");
        mob.Command("say Fine boy. Unfocused. What he needs is structure. Discipline. Purpose.");
        mob.Command("say I am working on getting him into officer training. The Army will sort him out.", 2.0);
        return true;
    }

    if (question.indexOf("war") >= 0 || question.indexOf("military") >= 0 || question.indexOf("army") >= 0 || question.indexOf("service") >= 0) {
        mob.Command("emote stands fractionally straighter.");
        mob.Command("say Service is the highest calling. The discipline. The clarity of purpose. A man knows who he is.");
        mob.Command("say Harold will understand this once he has experienced it.", 2.0);
        return true;
    }

    if (question.indexOf("map") >= 0 || question.indexOf("pin") >= 0 || question.indexOf("situation") >= 0) {
        mob.Command("emote turns to the maps and uses his remaining hand to gesture broadly.");
        mob.Command("say The situation in each theater is dynamic. Here, the northeast sector. Here, the river corridor.");
        mob.Command("say Most people do not track these things carefully enough. That is how you get surprised.", 2.0);
        return true;
    }

    if (question.indexOf("maude") >= 0 || question.indexOf("old woman") >= 0) {
        mob.Command("emote 's expression does something complicated.");
        mob.Command("say The woman Harold has been spending time with. She is... a character.");
        mob.Command("say I have concerns. Operational concerns. I am monitoring the situation.", 1.5);
        return true;
    }

    var defaults = [
        "say In my experience, most problems are solved by discipline, focus, and a clear chain of command.",
        "emote looks at you with the direct, assessing gaze of someone evaluating your fitness for a mission.",
        "say A man without a mission is just... wandering. This is Harold's problem. I intend to fix it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
