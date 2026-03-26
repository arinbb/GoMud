
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("neil") >= 0) {
        mob.Command("say Neil knows what he wants. He just lets us find it with him.");
        return true;
    }

    if (question.indexOf("song") >= 0 || question.indexOf("play") >= 0 || question.indexOf("music") >= 0) {
        mob.Command("say We just play it till it feels right. That's the whole trick.");
        return true;
    }

    if (question.indexOf("steel") >= 0 || question.indexOf("ben") >= 0 || question.indexOf("keith") >= 0) {
        mob.Command("say Ben's steel guitar is the voice of this whole record. Without that sound, it's a different album.");
        return true;
    }

    if (question.indexOf("danny") >= 0) {
        mob.Command("emote exchanges a glance between the band members.");
        mob.Command("say Danny's... yeah. Danny's dealing with some things.", 1.5);
        return true;
    }

    var defaults = [
        "say Let's take it from the top.",
        "emote counts off — one, two, three, four — and starts playing.",
        "say You want to hear something? Pull up a hay bale."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
