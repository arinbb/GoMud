function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tass") >= 0 || question.indexOf("inside") >= 0 || question.indexOf("entry") >= 0 || question.indexOf("door") >= 0) {
        mob.Command("emote looks at you with the unhurried assessment of someone who has made this calculation before.");
        mob.Command("say The Jam Session is for people who mean it. You know within two seconds if someone means it.", 1.5);
        mob.Command("say The outfit tells part of it. The posture tells the rest. The posture is not what you are wearing.", 2.5);
        mob.Command("say It is the question: are you here because you belong here, or are you here hoping you do?", 3.5);
        mob.Command("emote looks at you for exactly two seconds.", 4.5);
        mob.Command("say You can go in.", 5.0);
        return true;
    }

    if (question.indexOf("snotty") >= 0 || question.indexOf("untass") >= 0) {
        mob.Command("emote uncrosses their arms briefly, which is significant.");
        mob.Command("say The Jam Session attendance is down. I have been at this door a long time. I know what attendance down feels like.", 1.5);
        mob.Command("say People are not dressing as tass as they were. The gradient is moving north.", 2.5);
        mob.Command("say This door will stay open as long as there is anyone worth opening it for.", 3.5);
        mob.Command("emote crosses their arms again.", 4.5);
        return true;
    }

    var defaults = [
        "emote gives you the nod.",
        "say The music is inside. Go in.",
        "emote watches the avenue with the patience of someone who is exactly where they are supposed to be."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
