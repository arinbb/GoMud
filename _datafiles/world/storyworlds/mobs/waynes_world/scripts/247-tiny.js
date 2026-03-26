
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("list") >= 0 || question.indexOf("entry") >= 0 || question.indexOf("in") >= 0) {
        mob.Command("emote looks at you for a long moment.");
        mob.Command("say You're on the list.", 2.0);
        return true;
    }

    if (question.indexOf("backstage") >= 0 || question.indexOf("alice") >= 0 || question.indexOf("cassandra") >= 0) {
        mob.Command("emote unfolds his arms. Then refolds them.");
        mob.Command("say You know someone? You go through me first.", 2.0);
        return true;
    }

    if (question.indexOf("name") >= 0 || question.indexOf("tiny") >= 0) {
        mob.Command("emote regards you with the patience of a man who has been asked this before.");
        mob.Command("say Yeah.", 1.5);
        return true;
    }

    var defaults = [
        "emote looks at you. He does not elaborate.",
        "say Enjoy the show.",
        "emote nods once. Conversation concluded."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
