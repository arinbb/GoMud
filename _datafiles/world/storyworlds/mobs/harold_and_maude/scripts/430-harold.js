function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("death") >= 0 || question.indexOf("die") >= 0 || question.indexOf("dying") >= 0 || question.indexOf("dead") >= 0) {
        mob.Command("emote turns to look at you with those large, quiet eyes.");
        mob.Command("say Everyone treats it like an embarrassment. Like it happened to them personally and they are trying not to be rude about it.");
        mob.Command("say I find it clarifying, actually. The fact that it ends. It makes the rest of it mean something.", 2.0);
        return true;
    }

    if (question.indexOf("maude") >= 0 || question.indexOf("old woman") >= 0) {
        mob.Command("emote is quiet for a moment that stretches in an interesting direction.");
        mob.Command("say She is the most alive person I have ever met. That is the precise word.");
        mob.Command("say She does not manage life. She participates in it. Completely. I am learning.", 2.0);
        return true;
    }

    if (question.indexOf("mother") >= 0 || question.indexOf("mom") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote 's expression becomes very neutral, which is its own kind of expression.");
        mob.Command("say My mother has a great many plans. None of them concern what I actually am.");
        mob.Command("say She has been trying to get me a date. The dates have not gone well. I take responsibility for this.", 2.0);
        return true;
    }

    if (question.indexOf("funeral") >= 0 || question.indexOf("cemetery") >= 0 || question.indexOf("hearse") >= 0 || question.indexOf("church") >= 0) {
        mob.Command("emote looks genuinely pleased that you asked.");
        mob.Command("say Funerals are the most honest social occasion. Everyone knows why they are there. Nobody pretends.");
        mob.Command("say I go to them regularly. Maude goes too, actually. We meet at them. It started that way.", 2.0);
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("living") >= 0 || question.indexOf("happy") >= 0) {
        mob.Command("emote is quiet for a moment, as if listening to something.");
        mob.Command("say I am learning about it. Maude is teaching me.");
        mob.Command("say She says: the point is not to be careful about living. The point is to live. I think she is right.", 2.0);
        return true;
    }

    if (question.indexOf("suit") >= 0 || question.indexOf("clothes") >= 0 || question.indexOf("black") >= 0) {
        mob.Command("emote looks down at himself.");
        mob.Command("say It is practical. Black goes with everything. Also with funerals, which I attend frequently.");
        mob.Command("emote appears to consider this sufficient explanation.", 1.5);
        return true;
    }

    var defaults = [
        "say Most conversations are about avoiding the things worth talking about. I prefer this kind.",
        "emote watches you with the careful, uncategorizing attention he brings to everything.",
        "say Maude says that life is too important to take seriously. I am still thinking about that one."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
