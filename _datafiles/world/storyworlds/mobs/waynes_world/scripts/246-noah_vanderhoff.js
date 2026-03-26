
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("product") >= 0 || question.indexOf("sponsor") >= 0 || question.indexOf("brand") >= 0) {
        mob.Command("emote holds the product up with practiced certainty.");
        mob.Command("say This product represents quality, value, and the kind of reliability that Aurora families have trusted for years. Or will trust. We're building that trust.", 2.0);
        mob.Command("say The important thing is visibility. Repeated visibility. The brain is a pattern-recognition device. We give it patterns.", 4.0);
        return true;
    }

    if (question.indexOf("wayne") >= 0 || question.indexOf("show") >= 0 || question.indexOf("cable") >= 0) {
        mob.Command("say Wayne's World has extraordinary reach for the investment level. The youth demo is highly receptive to organic integration.");
        mob.Command("emote holds the product at camera angle even though no camera is currently rolling.", 2.0);
        mob.Command("say I see myself as a partner. A creative partner. Not just a sponsor.", 3.5);
        return true;
    }

    if (question.indexOf("benjamin") >= 0) {
        mob.Command("say Benjamin Kane is a visionary. He understands the intersection of content and commerce.", 1.0);
        mob.Command("emote smiles the brand smile.", 2.0);
        return true;
    }

    var defaults = [
        "emote holds up the product encouragingly. 'Have you tried this?'",
        "say The ROI on local cable access is surprisingly strong.",
        "emote smiles at you with the warmth of someone who views warmth as a tool."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
