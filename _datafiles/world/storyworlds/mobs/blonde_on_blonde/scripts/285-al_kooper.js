
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("organ") >= 0 || question.indexOf("play") >= 0 || question.indexOf("leslie") >= 0) {
        mob.Command("say I was not hired to play the organ. I sat down and they let me.", 1.5);
        mob.Command("say The Leslie cabinet -- the spinning speaker inside -- that is the whole sound.");
        mob.Command("emote adjusts the Leslie speed and the sound opens outward like a flower.");
        mob.Command("say You cannot fake that. You can only find the right speed and stay there.", 2.0);
        return true;
    }

    if (question.indexOf("dylan") >= 0 || question.indexOf("bob") >= 0) {
        mob.Command("say He does not tell you what he wants. He lets you play and then he knows when it's right.", 1.5);
        mob.Command("say The first time I played with him I was one beat behind the whole take.");
        mob.Command("say He used that take. He liked the way I was following, not leading.", 2.0);
        mob.Command("emote nods at this memory with a complicated expression.");
        return true;
    }

    if (question.indexOf("rolling stone") >= 0 || question.indexOf("stone") >= 0) {
        mob.Command("say One take. I had never heard the changes before. I played it one measure late the whole time.", 1.5);
        mob.Command("say It is on the record that way. It is perfect that way. I know that now.");
        mob.Command("emote runs a hand through his hair.");
        mob.Command("say At the time I thought I had ruined it.", 2.0);
        return true;
    }

    if (question.indexOf("nervous") >= 0 || question.indexOf("afraid") >= 0 || question.indexOf("session") >= 0) {
        mob.Command("say I am always nervous. The nervousness is the point. If you are not nervous you are not listening hard enough.", 1.5);
        mob.Command("emote plays a small phrase to demonstrate something.");
        mob.Command("say That phrase. Right there. That is nervousness finding the right note.");
        return true;
    }

    var defaults = [
        "say Ask me about the changes. I have been working out the changes.",
        "emote plays a testing chord and listens to the room around it.",
        "say Does that sound right to you? Honestly. Does it sound right?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
