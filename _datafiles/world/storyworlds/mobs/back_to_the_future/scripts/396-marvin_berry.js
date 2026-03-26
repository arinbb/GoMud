function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hand") >= 0 || question.indexOf("bandage") >= 0 || question.indexOf("hurt") >= 0 || question.indexOf("injury") >= 0) {
        mob.Command("emote holds up his wrapped right hand.");
        mob.Command("say Caught it in a car door. Of all the stupid -- and tonight of all nights.", 1.5);
        mob.Command("say I can still play, mostly. But the fast stuff... I need someone who can cover the lead. Otherwise this dance ends early.", 2.5);
        return true;
    }

    if (question.indexOf("chuck") >= 0 || question.indexOf("cousin") >= 0 || question.indexOf("berry") >= 0) {
        mob.Command("say My cousin Chuck? He's working on his sound. Got some real talent.", 1.0);
        mob.Command("emote grins.", 1.5);
        mob.Command("say If I hear something good tonight, I'm gonna call him up. Let him hear it.", 2.5);
        return true;
    }

    if (question.indexOf("song") >= 0 || question.indexOf("music") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("say We play the hits. We play them tight. The Starlighters don't miss a note.");
        mob.Command("emote pauses and flexes his hand again.", 1.5);
        mob.Command("say Usually.", 2.0);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("enchantment") >= 0) {
        mob.Command("say Best school dance we've ever played. Good crowd, good energy.");
        mob.Command("emote looks out at the dance floor.", 1.5);
        mob.Command("say Something special is gonna happen tonight. I can feel it.", 2.5);
        return true;
    }

    var defaults = [
        "say We're gonna play something a little different tonight, folks.",
        "emote adjusts the microphone stand with one-handed dexterity.",
        "say My hand's gonna be fine. Don't worry about my hand."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
