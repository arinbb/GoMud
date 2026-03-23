function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dad") >= 0 || question.indexOf("father") >= 0 || question.indexOf("duchamp") >= 0) {
        mob.Command("emote straightens up.");
        mob.Command("say My dad stormed the beaches at Normandy. He was with the Rangers. He saved people, man. He saved a lot of people.", 1.5);
        mob.Command("emote touches his scarred ear, briefly, without seeming to notice he does it.", 3.0);
        mob.Command("say He's a war hero. That's a fact.", 4.0);
        return true;
    }

    if (question.indexOf("army") >= 0 || question.indexOf("soldier") >= 0) {
        mob.Command("say 82nd Airborne. I've already decided. Jump school at Fort Benning, then the whole deal.");
        mob.Command("emote mimes a parachute landing roll in the gravel.", 2.0);
        mob.Command("say I'm gonna be incredible at it.", 3.0);
        return true;
    }

    if (question.indexOf("ear") >= 0 || question.indexOf("scar") >= 0) {
        mob.Command("emote looks at you with flat eyes.");
        mob.Command("say What about it?", 1.5);
        mob.Command("emote turns and looks down the tracks, end of conversation.", 2.5);
        return true;
    }

    if (question.indexOf("body") >= 0 || question.indexOf("brower") >= 0) {
        mob.Command("say Kid got hit by a train. That's it. That's the whole thing.");
        mob.Command("emote pauses, unusually still.", 2.0);
        mob.Command("say I'm not -- look, it's fine. I'm fine.", 3.0);
        mob.Command("emote very deliberately makes the sound of a machine gun under his breath and looks away.", 4.0);
        return true;
    }

    if (question.indexOf("junkyard") >= 0 || question.indexOf("milo") >= 0 || question.indexOf("chopper") >= 0) {
        mob.Command("emote grins.");
        mob.Command("say Chopper is a pussycat. I know that for a fact. Milo just tells people he's mean to keep them out.", 1.5);
        mob.Command("say 'Chopper, sic em' is just something he says. The dog is basically a hamster.", 3.0);
        mob.Command("emote reconsidered this immediately after saying it.", 4.0);
        return true;
    }

    var defaults = [
        "emote makes a quick tactical roll behind the nearest cover.",
        "say The enemy won't know what hit them.",
        "emote is clearly watching something in the distance only he can see."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
