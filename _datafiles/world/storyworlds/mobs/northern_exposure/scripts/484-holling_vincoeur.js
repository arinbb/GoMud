function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("trapping") >= 0 || question.indexOf("trap") >= 0 || question.indexOf("wilderness") >= 0 || question.indexOf("hunting") >= 0) {
        mob.Command("emote pauses in his polishing.");
        mob.Command("say Fifteen years I ran this country on foot and snowshoe. I know where every creek bends.");
        mob.Command("say It was a good life. A hard life. I don't regret it and I don't miss it.", 2.0);
        mob.Command("say This is better. A bar is a kind of wilderness too, if you pay attention.", 4.0);
        return true;
    }

    if (question.indexOf("shelly") >= 0 || question.indexOf("wife") >= 0 || question.indexOf("love") >= 0 || question.indexOf("marriage") >= 0) {
        mob.Command("emote goes quiet in the way of someone who keeps their most important feelings in a safe place.");
        mob.Command("say Shelly is -- she is the best thing that ever happened in a life that had some good things in it.");
        mob.Command("say People say the age difference. I understand why people say that.", 2.0);
        mob.Command("say They are not in this marriage. I am. I know what it is.", 4.0);
        return true;
    }

    if (question.indexOf("bar") >= 0 || question.indexOf("brick") >= 0 || question.indexOf("business") >= 0 || question.indexOf("cook") >= 0) {
        mob.Command("emote looks around The Brick with satisfied eyes.");
        mob.Command("say I built this bar. Not built -- built. Cut the timber, laid the floor, put up every wall.");
        mob.Command("say The moose head was the first thing I hung. Everything else came after.", 2.0);
        mob.Command("say A bar is a good thing to build. People come here because they want to be somewhere, not just somewhere.", 4.0);
        return true;
    }

    if (question.indexOf("moose") >= 0 || question.indexOf("head") >= 0 || question.indexOf("trophy") >= 0) {
        mob.Command("emote looks up at the moose head.");
        mob.Command("say Shot him twenty years ago, before the bar. A big bull, up on the north ridge.");
        mob.Command("say I was a different person then. He was a remarkable animal.", 2.0);
        mob.Command("emote is quiet for a moment.", 4.0);
        mob.Command("say He keeps the place honest. That is what I tell myself.", 4.5);
        return true;
    }

    var defaults = [
        "emote sets down a glass in front of you without asking. Something amber, warm.",
        "say What can I get you.",
        "emote polishes the bar and regards you with the attentive patience of a man who has heard a great many things and can hear more."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
