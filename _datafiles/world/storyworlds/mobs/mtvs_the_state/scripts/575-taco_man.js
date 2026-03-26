function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("taco") >= 0 || question.indexOf("food") >= 0 || question.indexOf("menu") >= 0) {
        mob.Command("emote sets the spatula down.");
        mob.Command("say Carnitas. Pollo. Carne asada.", 1.5);
        mob.Command("say And the philosophical.", 2.5);
        mob.Command("emote picks up the spatula.", 3.5);
        return true;
    }

    if (question.indexOf("philosophical") >= 0 || question.indexOf("philosophy") >= 0 || question.indexOf("meaning") >= 0) {
        mob.Command("emote is still for a moment.");
        mob.Command("say The philosophical taco is the same as the other tacos.", 2.0);
        mob.Command("say The difference is in how you eat it.", 3.5);
        mob.Command("emote returns to the griddle.", 5.0);
        return true;
    }

    if (question.indexOf("why") >= 0 || question.indexOf("life") >= 0 || question.indexOf("purpose") >= 0) {
        mob.Command("emote considers this while flipping a piece of meat.");
        mob.Command("say You make the taco. Someone takes it. You make another one.", 2.0);
        mob.Command("say That is the answer to your question.", 3.5);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("who") >= 0) {
        mob.Command("say I am the Taco Man.");
        mob.Command("emote gestures at the cart.", 1.5);
        mob.Command("say This is the taco stand. These are the tacos. Everything else follows from that.", 3.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
