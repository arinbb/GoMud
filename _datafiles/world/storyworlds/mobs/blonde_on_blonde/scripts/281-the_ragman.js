
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("shakespeare") >= 0) {
        mob.Command("say He came for the same reason as anyone who comes here.");
        mob.Command("say He heard there was something that wouldn't translate into the old languages.", 1.5);
        mob.Command("emote gestures vaguely at Shakespeare in his alley.");
        mob.Command("say He has been here some time. He is still working on it.", 2.0);
        return true;
    }

    if (question.indexOf("compass") >= 0 || question.indexOf("north") >= 0 || question.indexOf("direction") >= 0) {
        mob.Command("emote holds up the spinning compass.");
        mob.Command("say North is a theory. In this room it is only a theory.", 1.5);
        mob.Command("say The compass knows it. The compass is being honest with you.");
        mob.Command("emote puts the compass down and goes back to rearranging.");
        return true;
    }

    if (question.indexOf("mobile") >= 0 || question.indexOf("memphis") >= 0) {
        mob.Command("say Mobile is where you are. Memphis is where you are not.", 1.5);
        mob.Command("say The distance between them is the blues. The blues is the distance.");
        mob.Command("say I have been trying to reduce that distance for some time.");
        mob.Command("emote picks up a hubcap and moves it three inches to the left. Considers.");
        return true;
    }

    if (question.indexOf("sack") >= 0 || question.indexOf("bag") >= 0 || question.indexOf("collection") >= 0) {
        mob.Command("say Everything in here was lost by someone who needed to lose it.");
        mob.Command("say I keep it until they need it back. Most of them never come back.", 1.5);
        mob.Command("emote pats the burlap sack with something like affection.");
        return true;
    }

    if (question.indexOf("who") >= 0 || question.indexOf("name") >= 0 || question.indexOf("ragman") >= 0) {
        mob.Command("say I am the man who deals in what other men discard.");
        mob.Command("say In this song, that is a structural role. Every song needs someone to hold the debris.", 1.5);
        return true;
    }

    var defaults = [
        "emote draws a circle in the dust and looks at it.",
        "say The hubcap was in the wrong place. Now it is in a different wrong place.",
        "say Ask Shakespeare. He has more words than I do. They are the wrong words, but more of them."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
