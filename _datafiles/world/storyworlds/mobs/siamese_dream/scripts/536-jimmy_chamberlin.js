function onAsk(mob, room, eventDetails) {
    var user = GetUser(eventDetails.sourceId);
    var question = eventDetails.askText.toLowerCase();

    // Track that the player talked to Jimmy
    if (user) {
        user.SetTempData("siamese_jimmy_talked", "true");
    }

    if (question.indexOf("drums") >= 0 || question.indexOf("play") >= 0 || question.indexOf("kit") >= 0) {
        mob.Command("emote plays a short fill on the curb with his sticks, the concrete ringing like a dull snare.");
        mob.Command("say My dad made me take jazz lessons. I hated it at the time.");
        mob.Command("emote grins briefly.", 2.0);
        mob.Command("say I do not hate it now. The jazz is the only thing that keeps me honest up there. You cannot fake swing.");
        return true;
    }

    if (question.indexOf("addiction") >= 0 || question.indexOf("struggling") >= 0 || question.indexOf("okay") >= 0 || question.indexOf("alright") >= 0) {
        mob.Command("emote is quiet for a while, turning a drumstick over in his fingers.");
        mob.Command("say I am not going to pretend it is not hard.");
        mob.Command("say The music helps. When I am behind the kit I do not think about anything else. The problem is I cannot be behind the kit all the time.", 2.5);
        mob.Command("emote looks at the studio door.", 2.0);
        mob.Command("say He does not need me in there right now anyway. He is playing everything himself.");
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("corgan") >= 0) {
        mob.Command("emote considers for a moment.");
        mob.Command("say He hears everything. Every guitar layer. Every drum hit. He knows what he wants.");
        mob.Command("say That is not easy to play for. But it makes the record better.", 2.0);
        mob.Command("say He is in there right now playing my parts, her parts, everyone's parts. Because he can hear what it needs to be and he is afraid nobody else can get it there.");
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("darcy") >= 0 || question.indexOf("james") >= 0) {
        mob.Command("emote taps the curb once with a drumstick, a single clean note.");
        mob.Command("say We are not doing well. As people. As a band we are making the best thing we have ever made.");
        mob.Command("say Those two things might be connected. I try not to think about what that means.", 2.0);
        return true;
    }

    if (question.indexOf("geek") >= 0 || question.indexOf("fast") >= 0 || question.indexOf("tempo") >= 0) {
        mob.Command("say That one is about holding on. The tempo wants to run away from you and you do not let it.");
        mob.Command("emote demonstrates the opening pattern on the curb with both sticks, slow, then up to speed in four bars.", 2.5);
        mob.Command("say Jazz teaches you where the beat actually is. Which is everywhere. Which is why you can play anywhere and still be right.");
        return true;
    }

    if (question.indexOf("session") >= 0 || question.indexOf("record") >= 0 || question.indexOf("album") >= 0 || question.indexOf("siamese") >= 0) {
        mob.Command("say The record is going to be incredible. I know that. Everyone in there knows that.");
        mob.Command("emote looks down at his hands.", 2.0);
        mob.Command("say The question is what it costs to make something this good. Whether the people survive it.");
        mob.Command("say I am not sure all of us will.", 2.0);
        return true;
    }

    if (question.indexOf("heat") >= 0 || question.indexOf("atlanta") >= 0 || question.indexOf("air") >= 0) {
        mob.Command("emote wipes sweat from his forehead.");
        mob.Command("say Eleven days without AC. The tape stretches in the heat. Butch has to compensate for it.");
        mob.Command("say Nobody fixes the AC because the money went to studio time. That tells you everything about priorities.", 2.0);
        return true;
    }

    var defaults = [
        "emote taps a rhythm on the curb, precise even sitting down, the muscle memory of ten thousand fills.",
        "say The kit is the most honest instrument. You cannot fake it.",
        "say It is hot out here. But it is hotter in there."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
