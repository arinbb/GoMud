
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

    if (question.indexOf("patience") >= 0 || question.indexOf("patient") >= 0 || question.indexOf("why") >= 0) {
        mob.Command("emote considers this carefully.");
        mob.Command("say I don't think I'm unusually patient. I just think people deserve time.", 1.5);
        mob.Command("say Billy's carrying a lot of things he never asked to carry. That doesn't make him broken.", 3.0);
        mob.Command("say It makes him someone who needs a little more room.", 4.5);
        return true;
    }

    if (question.indexOf("see") >= 0 || question.indexOf("love") >= 0 || question.indexOf("feel") >= 0) {
        mob.Command("emote tilts her head, as if listening to something inside the question.");
        mob.Command("say There's a person in there that Billy hasn't met yet. I think I can see him.", 1.5);
        mob.Command("say He's funny, actually. When he forgets to be angry for a second, he's funny.", 3.0);
        mob.Command("emote smiles just slightly.", 5.0);
        return true;
    }

    if (question.indexOf("scared") >= 0 || question.indexOf("afraid") >= 0 || question.indexOf("worried") >= 0) {
        mob.Command("emote pauses longer than usual.");
        mob.Command("say A little. Maybe. But not of him.", 1.5);
        mob.Command("say I'm more scared of things staying the way they are. That seems worse.", 3.0);
        return true;
    }

    if (question.indexOf("kidnap") >= 0 || question.indexOf("hostage") >= 0 || question.indexOf("force") >= 0 || question.indexOf("choose") >= 0) {
        mob.Command("emote 's expression goes thoughtful.");
        mob.Command("say He needed someone. I could see that. And I needed somewhere to be.", 1.5);
        mob.Command("say Sometimes situations that look wrong from the outside make a strange kind of sense from the inside.", 3.0);
        mob.Command("say I'm here because I want to be. That part was always true.", 4.5);
        return true;
    }

    var defaults = [
        "emote smiles gently but says nothing.",
        "say That's a good question. I'm not sure I have an answer.",
        "say Sometimes it's better not to have all the answers, you know?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
