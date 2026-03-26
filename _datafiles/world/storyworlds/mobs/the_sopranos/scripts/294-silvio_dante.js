
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pacino") >= 0 || question.indexOf("godfather") >= 0 || question.indexOf("impression") >= 0) {
        mob.Command("emote sets down the espresso with precise ceremony.");
        mob.Command("say Just when I thought I was out... they pull me back in.", 1.5);
        mob.Command("emote delivers this with the complete sincerity of a man who has given it a hundred times and means it every single one.", 3.0);
        return true;
    }

    if (question.indexOf("tony") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("emote folds his hands.");
        mob.Command("say Tony Soprano is the boss of this family. My loyalty is complete and without reservation.", 2.0);
        mob.Command("emote 's expression says this is both true and also the end of the conversation.", 3.5);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("bing") >= 0 || question.indexOf("money") >= 0) {
        mob.Command("say Business is a series of decisions and consequences. You make a good decision, the consequence is usually acceptable.", 1.5);
        mob.Command("emote picks up the espresso again.", 3.0);
        mob.Command("say You make a bad decision, you deal with the consequence. This is not complicated.", 4.5);
        return true;
    }

    if (question.indexOf("paulie") >= 0 || question.indexOf("walnuts") >= 0) {
        mob.Command("emote permits himself a very small expression.");
        mob.Command("say Paulie is a good earner. He has certain... enthusiasms. You learn to work around them.", 2.5);
        return true;
    }

    var defaults = [
        "say That's a complicated question. My answer would not make you feel better about it.",
        "emote looks at you with the patient attention of someone deciding whether to say anything at all.",
        "say In my experience, the thing that worries you is usually not the thing you should be worried about."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
