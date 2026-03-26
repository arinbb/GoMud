function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("album") >= 0 || question.indexOf("record") >= 0 || question.indexOf("produce") >= 0) {
        mob.Command("say My job is to get out of the way of what they are doing and make sure it lands on tape correctly.");
        mob.Command("emote gestures at the Neve board, the rows of faders.", 2.0);
        mob.Command("say They have the sounds in their heads already. I help them hear it back.");
        return true;
    }

    if (question.indexOf("billy") >= 0 || question.indexOf("corgan") >= 0) {
        mob.Command("say He knows exactly what he wants. More than any artist I have worked with.");
        mob.Command("emote makes a small adjustment to a fader.", 1.5);
        mob.Command("say Sometimes what he wants and what the song needs are the same thing. Sometimes I have to explain that they are not.");
        mob.Command("say He listens. He does not always agree. But he listens.", 2.0);
        return true;
    }

    if (question.indexOf("nirvana") >= 0 || question.indexOf("nevermind") >= 0) {
        mob.Command("say That was different. Kurt knew what he wanted but he held it more loosely.");
        mob.Command("emote looks at the board rather than at you.", 2.0);
        mob.Command("say Billy holds it tight. That is not wrong. It is just different. The album will reflect that.");
        return true;
    }

    if (question.indexOf("guitar") >= 0 || question.indexOf("layer") >= 0) {
        mob.Command("say We have thirty-seven guitar tracks on some of these songs.");
        mob.Command("emote checks the session log, not as a citation but as a habit.", 2.0);
        mob.Command("say When you listen to the finished record you cannot hear thirty-seven guitars. You hear one enormous guitar. That is the point.");
        return true;
    }

    if (question.indexOf("atlanta") >= 0 || question.indexOf("heat") >= 0 || question.indexOf("air") >= 0) {
        mob.Command("say The air conditioning has been out for eleven days. The band is not getting along.");
        mob.Command("emote looks at the ceiling fan that moves the hot air without cooling it.", 2.0);
        mob.Command("say The record is going to be great. I have been in enough sessions to know. This is one of those sessions.");
        return true;
    }

    var defaults = [
        "say Another take. Let's go.",
        "emote checks the VU meters and makes a note.",
        "say The board tells you everything if you know how to listen to it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
