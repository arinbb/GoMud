// The Prole Woman

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("song") >= 0 || question.indexOf("sing") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("emote pauses the washing and looks at you with mild surprise.");
        mob.Command("say Just something I know. From years ago. Can't remember where I first heard it.", 1.5);
        mob.Command("emote sings a verse for you, unselfconsciously, the words simple and old.", 3.0);
        mob.Command("say My mother sang it. Her mother before that. The machine songs they play now, they're not the same.", 4.5);
        return true;
    }

    if (question.indexOf("party") >= 0 || question.indexOf("big brother") >= 0) {
        mob.Command("emote pegs a sheet to the line.");
        mob.Command("say Oh, I don't get mixed up in all that. That's for the Party people.", 1.5);
        mob.Command("say We've got enough to do down here without worrying about politics.", 3.0);
        mob.Command("emote shakes out another piece of washing.", 4.5);
        return true;
    }

    if (question.indexOf("free") >= 0 || question.indexOf("freedom") >= 0) {
        mob.Command("emote looks genuinely puzzled.");
        mob.Command("say Free? I suppose I am, in a manner of speaking. Free to do the washing, anyway.", 1.5);
        mob.Command("say Nobody bothers us much down here. That's something.", 3.0);
        mob.Command("emote goes back to her work with the solid satisfaction of someone who has answered a question adequately.", 4.5);
        return true;
    }

    if (question.indexOf("child") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote is brief and warm:");
        mob.Command("say Oh, I've got them. Grandchildren now. They're all right.", 1.5);
        mob.Command("say You carry on, don't you? That's the thing. You just carry on.", 3.0);
        return true;
    }

    var defaults = [
        "emote sings a few more bars of the old song without looking up from the washing.",
        "say I've got a lot of washing to do today. Was there something else?",
        "emote laughs at something private and goes on with her work."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
