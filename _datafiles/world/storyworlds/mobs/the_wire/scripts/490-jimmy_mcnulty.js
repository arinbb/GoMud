function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("case") >= 0 || question.indexOf("barksdale") >= 0 || question.indexOf("stanfield") >= 0) {
        mob.Command("emote sets down the case file and looks at you with the expression of a man who has been waiting for someone to ask.");
        mob.Command("say You want to know about the case? I'll tell you about the case.", 2.0);
        mob.Command("say Barksdale ran the West Side for years. We had him. We had the wiretap, we had the connects -- and command pulled us off.", 4.0);
        mob.Command("emote gestures at the board on the wall.", 6.0);
        mob.Command("say Now Stanfield runs the West Side and we're starting over. Except with fewer resources. Because this is Baltimore.", 8.0);
        mob.Command("emote picks the case file back up. The conversation is over but not resolved.", 10.0);
        return true;
    }

    if (question.indexOf("omar") >= 0) {
        mob.Command("say Omar?", 1.0);
        mob.Command("emote almost smiles. Almost.", 2.0);
        mob.Command("say Omar is a --", 3.5);
        mob.Command("emote pauses, looking for the right word.", 4.5);
        mob.Command("say He robs drug dealers. He has a code. He keeps the code. In this city, that makes him almost --", 6.0);
        mob.Command("emote looks at the ceiling for a moment.", 7.5);
        mob.Command("say I'm not going to finish that sentence.", 9.0);
        return true;
    }

    if (question.indexOf("game") >= 0 || question.indexOf("win") >= 0 || question.indexOf("beat") >= 0) {
        mob.Command("emote sets down his coffee.");
        mob.Command("say You can't beat the game.", 2.0);
        mob.Command("emote looks at you without the energy to be cynical about it.", 3.5);
        mob.Command("say You can win a case. You can maybe put someone away for a while.", 5.0);
        mob.Command("say But the game? The game is the game. Always.", 7.0);
        mob.Command("emote picks up his coffee again. The conversation is done.", 8.5);
        return true;
    }

    if (question.indexOf("baltimore") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("emote looks around the Detail office with an expression that has too much in it to describe.");
        mob.Command("say This city.", 2.0);
        mob.Command("emote shakes his head.");
        mob.Command("say This goddam city.", 4.0);
        mob.Command("emote picks up a case file. That is all he has to say about Baltimore.", 5.5);
        return true;
    }

    if (question.indexOf("drink") >= 0 || question.indexOf("whiskey") >= 0 || question.indexOf("bar") >= 0) {
        mob.Command("say I'm not -- look. I drink. Okay? I drink sometimes.", 1.0);
        mob.Command("emote shifts in his chair with the discomfort of someone being accurate.", 3.0);
        mob.Command("say The job is --", 4.5);
        mob.Command("emote stops. Drinks his coffee. The coffee is the drink available right now.", 6.0);
        return true;
    }

    var defaults = [
        "say What.",
        "emote looks up from the case file with the expression of a man whose attention was elsewhere.",
        "say I'm busy. Is it about the case?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
