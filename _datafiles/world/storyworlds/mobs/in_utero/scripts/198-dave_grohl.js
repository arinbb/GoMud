
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drum") >= 0 || question.indexOf("play") >= 0 || question.indexOf("kit") >= 0) {
        mob.Command("say I hit hard. That is the whole approach.");
        mob.Command("emote demonstrates -- a single snare hit that cracks like a rifle shot.", 2.0);
        mob.Command("say Loud as possible, precise as necessary. The two things can coexist. You just have to hit hard enough.");
        return true;
    }

    if (question.indexOf("kurt") >= 0 || question.indexOf("cobain") >= 0) {
        mob.Command("say A genius. I mean that without qualification.");
        mob.Command("emote taps a slow rhythm on the snare rim, thinking.", 2.0);
        mob.Command("say The songs come from somewhere in him that I have never been able to explain. I just try to serve them.");
        mob.Command("say He trusts me with the drums. That matters to me more than I probably let on.");
        return true;
    }

    if (question.indexOf("album") >= 0 || question.indexOf("utero") >= 0 || question.indexOf("record") >= 0 || question.indexOf("heavy") >= 0) {
        mob.Command("say Heaviest thing we have done. Heaviest thing I have ever played on.");
        mob.Command("emote grins broadly.", 1.5);
        mob.Command("say Which means I had to hit even harder than usual. I was completely on board with that.");
        return true;
    }

    if (question.indexOf("albini") >= 0 || question.indexOf("recording") >= 0 || question.indexOf("studio") >= 0) {
        mob.Command("say He put the mics in the room and let the drums be drums. No samples, no triggers, no replacing hits in the mix.");
        mob.Command("emote adjusts a cymbal stand by a centimeter.", 2.0);
        mob.Command("say If I hit it wrong it is on tape forever. Which means I hit it right.");
        return true;
    }

    if (question.indexOf("tourette") >= 0 || question.indexOf("geek") >= 0 || question.indexOf("fast") >= 0 || question.indexOf("ape") >= 0) {
        mob.Command("say Those are the fun ones. Fast, loud, no apologies.");
        mob.Command("emote runs through a portion of the groove without sticks, just hands, the air in front of him.", 2.5);
        mob.Command("say You have to commit to the tempo and then trust it. No second-guessing once it starts.");
        return true;
    }

    if (question.indexOf("krist") >= 0 || question.indexOf("novoselic") >= 0) {
        mob.Command("say We lock in together. He holds the low end and I hit it and we give Kurt something to stand on.");
        mob.Command("emote nods with conviction.", 1.5);
        mob.Command("say The rhythm section is its own conversation. Ours is a good one.");
        return true;
    }

    var defaults = [
        "emote plays a short fill on the kit -- crack, crack, ride, kick -- and grins.",
        "say I love this. All of it.",
        "emote tapes another blister on his right hand and flexes it, testing."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
