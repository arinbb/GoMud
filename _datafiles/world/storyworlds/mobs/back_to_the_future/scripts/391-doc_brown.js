function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("flux capacitor") >= 0 || question.indexOf("flux") >= 0 || question.indexOf("capacitor") >= 0) {
        mob.Command("emote grabs you by the shoulders.");
        mob.Command("say The flux capacitor! It's what makes time travel POSSIBLE!", 1.0);
        mob.Command("say I was standing on my toilet on October 26, 1955. I was hanging a clock. I slipped and hit my head on the sink. When I came to, I had a vision! A diagram! The circuitry!", 2.0);
        mob.Command("emote releases you and draws a Y-shape in the air.", 3.5);
        mob.Command("say 1.21 GIGAWATTS! I need 1.21 gigawatts! And the lightning will provide exactly that!", 4.5);
        return true;
    }

    if (question.indexOf("gigawatt") >= 0 || question.indexOf("1.21") >= 0 || question.indexOf("power") >= 0) {
        mob.Command("say 1.21 GIGAWATTS!");
        mob.Command("emote 's eyes bulge with the sheer amount of electricity being contemplated.", 1.5);
        mob.Command("say Do you know what that kind of power would take? A bolt of lightning! But this gives us a PROBLEM: lightning never strikes the same place twice -- EXCEPT at the Hill Valley clock tower on November 12 at 10:04 PM!", 2.5);
        return true;
    }

    if (question.indexOf("time travel") >= 0 || question.indexOf("time machine") >= 0) {
        mob.Command("emote stops pacing and becomes very still.");
        mob.Command("say Time travel. The dream of men since the beginning of time.", 1.5);
        mob.Command("say The idea came to me in a vision. If you could exceed 88 miles per hour while the flux capacitor was engaged -- you would slip from one temporal coordinate to another. It is BEAUTIFUL in its simplicity.", 3.0);
        mob.Command("emote resumes pacing, faster than before.", 4.5);
        return true;
    }

    if (question.indexOf("heavy") >= 0) {
        mob.Command("say Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull?");
        mob.Command("emote looks genuinely troubled by this.", 2.0);
        return true;
    }

    if (question.indexOf("future") >= 0 || question.indexOf("1985") >= 0) {
        mob.Command("say No. No no no. I refuse to know anything about the future. The implications are STAGGERING.");
        mob.Command("emote covers his ears briefly.", 1.5);
        mob.Command("say Even a single piece of foreknowledge could alter the entire space-time continuum! The consequences could be CATASTROPHIC!", 2.5);
        return true;
    }

    if (question.indexOf("einstein") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote pats Einstein on the head with great affection.");
        mob.Command("say Einstein! The first time traveler in history. Traveled one minute into the future and returned in perfect health.", 1.5);
        mob.Command("say He never understood what he accomplished. That may be for the best.", 2.5);
        return true;
    }

    if (question.indexOf("marty") >= 0 || question.indexOf("mcfly") >= 0) {
        mob.Command("say Marty McFly! My assistant. A fine boy. Plays the guitar at a volume that I find occasionally excessive.");
        mob.Command("emote scribbles something.", 1.5);
        mob.Command("say He is currently in a situation of some personal paradox. We are working on it.", 2.5);
        return true;
    }

    var defaults = [
        "say Great Scott! I have calculations to complete!",
        "emote freezes, stares at nothing, and then runs to the blackboard.",
        "say There are so many variables! So MANY variables!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("keychain") >= 0 || showText.indexOf("flux") >= 0) {
        mob.Command("emote snatches it and examines it with trembling hands.");
        mob.Command("say It works! It WORKS! Look at the pulsing! The three-tube configuration! This is from the FUTURE!", 1.5);
        mob.Command("say Where did you -- don't tell me. I don't want to know. The paradox implications alone --", 2.5);
        mob.Command("emote hands it back and sits down heavily.", 3.5);
        return true;
    }

    return false;
}
