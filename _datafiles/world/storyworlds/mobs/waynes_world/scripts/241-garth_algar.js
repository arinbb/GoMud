
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drum") >= 0 || question.indexOf("music") >= 0 || question.indexOf("neil") >= 0 || question.indexOf("peart") >= 0) {
        mob.Command("emote 's eyes light up.");
        mob.Command("say Neil Peart is the greatest drummer who ever lived. I've analyzed every recording. I've transcribed every fill. I dream in time signatures.", 1.5);
        mob.Command("say Once you really understand what he's doing rhythmically, you can never hear music the same way again. It's like learning a language and then realizing everyone around you has been speaking it all along.", 3.5);
        return true;
    }

    if (question.indexOf("invention") >= 0 || question.indexOf("electronic") >= 0 || question.indexOf("build") >= 0) {
        mob.Command("emote adjusts his glasses.");
        mob.Command("say I'm working on something. I can't really explain what it is yet because I'm still figuring out what it does. But it hums at a really interesting frequency.", 1.5);
        mob.Command("say I also modified the amp so it doesn't hum at 60 Hz anymore. It hums at 432 Hz now. It's a more natural frequency. Wayne says he can't tell the difference. He can. He just doesn't know he can.", 3.0);
        return true;
    }

    if (question.indexOf("foxy") >= 0 || question.indexOf("lady") >= 0 || question.indexOf("jimi") >= 0 || question.indexOf("hendrix") >= 0) {
        mob.Command("emote looks at the middle distance for a moment.");
        mob.Command("say Foxy Lady. Every time. The opening riff is one of the top three most perfect musical moments ever recorded.", 2.0);
        mob.Command("say I have a cassette that is nothing but that riff on repeat for ninety minutes. I made it myself. Don't tell Wayne.", 3.5);
        return true;
    }

    if (question.indexOf("afraid") >= 0 || question.indexOf("fear") >= 0 || question.indexOf("scare") >= 0) {
        mob.Command("emote gets quiet for a second.");
        mob.Command("say I'm afraid of a lot of things. Loud sounds that aren't music. Driving in heavy traffic. People who don't mean what they say.", 2.0);
        mob.Command("emote drums a slow quiet pattern on his knee.", 3.5);
        mob.Command("say But then I sit down at the drums and none of that is true anymore.", 5.0);
        return true;
    }

    if (question.indexOf("wayne") >= 0) {
        mob.Command("say Wayne's my best friend. He says what he means. That's rarer than people think.");
        mob.Command("emote nods thoughtfully.", 2.0);
        mob.Command("say Also he talks to cameras that aren't there and I think I understand why now. He's just more aware of things than most people.", 3.5);
        return true;
    }

    if (question.indexOf("glasses") >= 0 || question.indexOf("lens") >= 0) {
        mob.Command("emote touches his frames.");
        mob.Command("say I've had these since 1987. I tried contacts once. For three hours. Never again.", 1.5);
        return true;
    }

    var defaults = [
        "emote drums a short fill on a nearby surface and looks at you.",
        "say Excellent. I mean, your question. It's excellent.",
        "emote adjusts his glasses. There's a long pause. Then: 'Yeah.'",
        "say That's a really good question and I think the answer involves frequencies."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
