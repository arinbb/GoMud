function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("porcupine") >= 0 || question.indexOf("race") >= 0 || question.indexOf("quilliam") >= 0 || question.indexOf("needlepoint") >= 0 || question.indexOf("spinal") >= 0) {
        mob.Command("emote raises the microphone.");
        mob.Command("say Quilliam is your frontrunner today. Strong out of the gate. Consistent on the turns. The porcupine to beat.", 1.5);
        mob.Command("say Needlepoint is a wildcard. Tremendous speed in short bursts but prone to investigating distractions. Brilliant and unpredictable.", 3.0);
        mob.Command("say Spinal is the veteran. Spinal has seen things. Spinal does not panic.", 4.5);
        return true;
    }

    if (question.indexOf("bet") >= 0 || question.indexOf("odds") >= 0 || question.indexOf("win") >= 0) {
        mob.Command("say I cannot advise on wagering. That is outside my role.");
        mob.Command("emote brings the microphone a little closer.", 2.0);
        mob.Command("say I will say, off the record, that Needlepoint has been training very hard this week. Privately. At 5am. I have observed this.", 3.5);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("porcupine") >= 0) {
        mob.Command("say Why porcupines.");
        mob.Command("emote seems genuinely surprised you are asking.", 2.0);
        mob.Command("say Because no one else will do it. Because they deserve coverage. Because every athlete deserves a voice that cares whether they win or lose. I am that voice.", 4.0);
        mob.Command("say AND I AM OUTTA HEEERE!", 5.5);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
