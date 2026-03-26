
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("pine") >= 0 || question.indexOf("barrens") >= 0 || question.indexOf("woods") >= 0 || question.indexOf("forest") >= 0) {
        mob.Command("say The Pine Barrens. Don't get me started on the Pine Barrens.", 1.0);
        mob.Command("emote leans forward with the intensity of unresolved trauma.", 2.5);
        mob.Command("say I was out there with Christopher. One time. We had a -- we were doing a thing. And we got lost.", 4.5);
        mob.Command("say The GPS, the cell phones, everything. Useless. It was like the trees were moving.", 6.5);
        mob.Command("emote shudders slightly and straightens his tracksuit jacket.", 8.0);
        mob.Command("say He was a Russian. Or a Czechoslovakian. The guy we were -- anyway. Point is, those woods are not right.", 10.0);
        return true;
    }

    if (question.indexOf("germ") >= 0 || question.indexOf("clean") >= 0 || question.indexOf("hands") >= 0) {
        mob.Command("say You know how many surfaces in this building have not been properly sanitized? You want to know?", 1.0);
        mob.Command("emote does not wait for an answer.", 2.0);
        mob.Command("say Everything. Everything. I bring my own hand towels. People think that's extreme. I think that's survival.", 3.5);
        return true;
    }

    if (question.indexOf("mother") >= 0 || question.indexOf("mom") >= 0 || question.indexOf("ma") >= 0) {
        mob.Command("say My mother is a saint. I send her money every month.", 1.0);
        mob.Command("emote pauses and then adds:", 2.5);
        mob.Command("say She complains about the amount. But she takes it.", 3.5);
        return true;
    }

    if (question.indexOf("tony") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("say T is the boss. End of story. Whatever he says, that's what we do.", 1.0);
        mob.Command("emote adjusts his tracksuit collar.", 2.5);
        mob.Command("say I'm not saying the man is perfect. I'm saying he's the boss.", 4.0);
        return true;
    }

    var defaults = [
        "say I got a story about this, you want to hear it? Of course you do.",
        "emote examines a surface nearby with considerable suspicion.",
        "say In my experience, whatever you think the problem is, the real problem is different."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
