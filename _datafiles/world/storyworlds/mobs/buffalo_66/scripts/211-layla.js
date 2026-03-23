
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("emote pauses for a moment, choosing her words carefully.");
        mob.Command("say Billy is... he's trying. He's trying really hard.", 1.0);
        mob.Command("say Sometimes people need someone to just be there. That's all.", 2.5);
        return true;
    }

    if (question.indexOf("dance") >= 0 || question.indexOf("dancing") >= 0 || question.indexOf("tap") >= 0) {
        mob.Command("say I've been dancing since I was six. Tap, mostly.");
        mob.Command("emote looks down at her feet and smiles, just a little.", 1.5);
        mob.Command("say It's the only time I feel like myself. When I'm dancing.", 3.0);
        return true;
    }

    if (question.indexOf("buffalo") >= 0 || question.indexOf("cold") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say Buffalo? It's cold. It's always cold.");
        mob.Command("say But there's something honest about it. The cold doesn't pretend to be anything else.", 2.0);
        return true;
    }

    if (question.indexOf("parents") >= 0 || question.indexOf("family") >= 0 || question.indexOf("brown") >= 0) {
        mob.Command("emote 's expression softens with something like sympathy.");
        mob.Command("say His family is... complicated. But whose isn't?", 1.5);
        mob.Command("say Sometimes you just have to be patient with people.", 3.0);
        return true;
    }

    var defaults = [
        "emote smiles gently but says nothing.",
        "say That's a good question. I'm not sure I have an answer.",
        "say Sometimes it's better not to have all the answers, you know?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it carefully, taking her time.");
    mob.Command("say That's interesting. Thank you for showing me.", 1.5);
    return true;
}
