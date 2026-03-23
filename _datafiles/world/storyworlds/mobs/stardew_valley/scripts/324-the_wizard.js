
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("junimo") >= 0 || question.indexOf("junimos") >= 0) {
        mob.Command("emote turns from the cauldron with an expression of careful attention.");
        mob.Command("say The Junimos are forest spirits of great antiquity. They bound themselves to the Community Center long ago as a gesture of goodwill toward the valley's people.");
        mob.Command("say When the Center was abandoned, they stayed. They are still waiting. Spirits of that kind do not abandon their commitments easily.", 2.0);
        return true;
    }

    if (question.indexOf("forest") >= 0 || question.indexOf("spirit") >= 0 || question.indexOf("spirits") >= 0) {
        mob.Command("emote stirs the cauldron slowly.");
        mob.Command("say The forest is alive in ways most people prefer not to examine too closely. There are old agreements between this land and certain entities.");
        mob.Command("say I have been party to some of those agreements. I keep them. The land keeps them in return.", 2.0);
        return true;
    }

    if (question.indexOf("community") >= 0 || question.indexOf("center") >= 0) {
        mob.Command("say The Community Center was built on a site of significance. That is not a coincidence.");
        mob.Command("emote gazes into the cauldron's shifting colors.");
        mob.Command("say If someone were to restore it -- to bring the valley back into relationship with itself -- the Junimos would do remarkable things in gratitude.", 2.0);
        return true;
    }

    if (question.indexOf("magic") >= 0 || question.indexOf("cauldron") >= 0 || question.indexOf("spell") >= 0) {
        mob.Command("emote gestures at the cauldron with mild amusement.");
        mob.Command("say What I do is less mystical than it appears and more demanding than it looks. The cauldron is a focusing instrument.");
        mob.Command("say Magic is just attention applied with unusual precision. You can do it. Most people simply do not try.", 2.0);
        return true;
    }

    if (question.indexOf("joja") >= 0 || question.indexOf("corporate") >= 0 || question.indexOf("morris") >= 0) {
        mob.Command("emote is silent for a long moment.");
        mob.Command("say I have observed corporations before, in different forms, across different eras. They are not new.");
        mob.Command("say What is new is the speed. But the valley is older than any corporation. The valley will endure.", 2.0);
        return true;
    }

    var defaults = [
        "say The valley has more history than most people suspect. Some of it I have witnessed personally.",
        "say I have lived here a very long time. I have not grown tired of it. That is a meaningful data point.",
        "say Ask me about the Junimos. That is the more interesting question."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote takes it carefully, turns it over with long fingers, holds it near the cauldron light.");
    mob.Command("say Interesting. This carries a resonance. Where did you find it?");
    mob.Command("emote returns it with an expression you cannot fully read.", 1.5);
    return true;
}
