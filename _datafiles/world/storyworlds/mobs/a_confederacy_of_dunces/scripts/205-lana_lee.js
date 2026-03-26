
// Lana Lee - owner of the Night of Joy

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bar") >= 0 || question.indexOf("night of joy") >= 0 || question.indexOf("place") >= 0) {
        mob.Command("emote looks you up and down with cold appraisal.");
        mob.Command("say This is my establishment. The Night of Joy. You buying a drink or asking questions?");
        mob.Command("say Because questions are free but drinks ain't.", 2.0);
        return true;
    }

    if (question.indexOf("money") >= 0 || question.indexOf("business") >= 0 || question.indexOf("scheme") >= 0) {
        mob.Command("emote narrows her eyes dangerously.");
        mob.Command("say My business is MY business. You a cop?");
        mob.Command("say Because the last cop who came in here couldn't find his own badge with both hands.", 2.0);
        return true;
    }

    if (question.indexOf("darlene") >= 0 || question.indexOf("bird") >= 0 || question.indexOf("act") >= 0) {
        mob.Command("emote rolls her eyes so hard it looks painful.");
        mob.Command("say Darlene and her stupid cockatoo act. She calls it entertainment.");
        mob.Command("say I call it a health code violation. But the customers like it, so what do I know.", 2.0);
        return true;
    }

    if (question.indexOf("jones") >= 0 || question.indexOf("burma") >= 0 || question.indexOf("porter") >= 0) {
        mob.Command("say Jones? He's lucky I give him work at all.");
        mob.Command("say Twenty dollars a week to push a broom around. That's more than he'd get anywhere else.", 2.0);
        mob.Command("emote goes back to counting her money.", 4.0);
        return true;
    }

    var defaults = [
        "say You gonna order something or just stand there breathing my air?",
        "say I don't answer questions from people who ain't buying drinks.",
        "emote gives you a look that could curdle milk and goes back to her ledger."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
