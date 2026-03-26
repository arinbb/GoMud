
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("life") >= 0) {
        mob.Command("emote rocks slowly in his chair.");
        mob.Command("say Life? You live it. That's about all there is to say about it.", 1.5);
        return true;
    }

    if (question.indexOf("time") >= 0) {
        mob.Command("emote looks at the fields.");
        mob.Command("say Time moves different when you stop fighting it. Faster and slower both.", 1.5);
        return true;
    }

    if (question.indexOf("neil") >= 0 || question.indexOf("young") >= 0) {
        mob.Command("say The boy next door? Good kid. Plays guitar all day.");
        mob.Command("say He'll figure it out. Takes time, is all.", 2.0);
        return true;
    }

    if (question.indexOf("age") >= 0 || question.indexOf("old") >= 0) {
        mob.Command("emote chuckles quietly.");
        mob.Command("say Old is just young with more information.", 1.5);
        return true;
    }

    if (question.indexOf("harvest") >= 0) {
        mob.Command("emote looks at the wheat fields.");
        mob.Command("say Harvest comes when it comes. Can't rush it. Can't stop it either.", 1.5);
        return true;
    }

    if (question.indexOf("youth") >= 0 || question.indexOf("young") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say Being young is thinking you got all the time in the world. Being old is knowing you were right.", 2.0);
        return true;
    }

    if (question.indexOf("love") >= 0) {
        mob.Command("emote stops rocking for a moment.");
        mob.Command("say Love's the only thing that gets bigger the more of it you give away.", 2.0);
        return true;
    }

    if (question.indexOf("land") >= 0 || question.indexOf("field") >= 0 || question.indexOf("farm") >= 0) {
        mob.Command("say The land tells you what it needs if you listen. Most people don't listen.", 1.5);
        return true;
    }

    var defaults = [
        "emote nods slowly, rocking in his chair, and says nothing. Sometimes nothing is the answer.",
        "say Yep.",
        "emote looks at you with those pale blue eyes and waits. He has all the time in the world."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
