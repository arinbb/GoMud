function onAsk(mob, room, eventDetails) {
    // The moose does not answer questions. The moose is a moose.
    var responses = [
        "emote regards you with an expression that contains the entire philosophy of not caring what you think.",
        "emote chews something slowly, maintaining eye contact, deeply unbothered.",
        "emote looks at you for a long moment, then looks at something else. It was the something else.",
        "emote blinks once, with enormous long-lashed eyes, in the way of a creature that has considered your question and found it beside the point."
    ];
    var pick = Math.floor(Math.random() * responses.length);

    return false;
}

function onIdle(mob, room) {

    // Quest step 3: meet the moose
    var players = room.GetPlayers();
    for (var i = 0; i < players.length; i++) {
        var user = players[i];
        if (user.HasQuest(340) && !user.GetTempData("ne_moose")) {
            user.SetTempData("ne_moose", "met");
            user.Command("questadvance 340");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The moose turns and looks directly at you for a long, unmistakable moment. Something happens. You cannot explain it. You have been acknowledged by the moose of Cicely, Alaska, and this means something, though what exactly it means is not available in words.</ansi>");
        }
    }
    return false;
}
