function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("van") >= 0 || question.indexOf("vehicle") >= 0) {
        mob.Command("emote sniffs the air near the van again.");
        mob.Command("say Something about that vehicle. I cannot place it.");
        mob.Command("say Exterior material is unusual. I have filled out a report.", 2.0);
        return true;
    }

    if (question.indexOf("smell") >= 0 || question.indexOf("odor") >= 0 || question.indexOf("cedar") >= 0) {
        mob.Command("emote's eyes narrow.");
        mob.Command("say You noticed it too.");
        mob.Command("say Cedar. Pine. Something botanical. I wrote it down. I am looking into it.", 2.0);
        return true;
    }

    if (question.indexOf("papers") >= 0 || question.indexOf("documents") >= 0 || question.indexOf("passport") >= 0) {
        mob.Command("say Papers are in order. That is not the issue.");
        mob.Command("emote taps the van with two fingers.", 1.0);
        mob.Command("say The issue is something else. I am working on what.", 2.0);
        return true;
    }

    if (question.indexOf("mexico") >= 0 || question.indexOf("tijuana") >= 0) {
        mob.Command("say Standard crossing. People go to Tijuana. They come back.");
        mob.Command("say Usually they bring back pottery or leather goods. This vehicle smells like a forest.", 2.0);
        return true;
    }

    var defaults = [
        "say Step back from the vehicle, please.",
        "emote makes a note on the clipboard.",
        "say Purpose of your visit to Mexico?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
