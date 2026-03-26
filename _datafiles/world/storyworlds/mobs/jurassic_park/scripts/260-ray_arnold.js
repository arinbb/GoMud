
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("nedry") >= 0 || question.indexOf("code") >= 0 || question.indexOf("virus") >= 0) {
        mob.Command("say Nedry put a corrupted file into the system. Custom code — I've never seen anything like it and I've been writing systems code for twenty years.");
        mob.Command("emote lights a cigarette with the practiced motion of a man for whom this is essentially breathing.", 2.0);
        mob.Command("say It embedded itself in nine subsystems simultaneously. The security, the tour routing, the communications — he cut everything he could cut.", 3.5);
        mob.Command("say I'm going through it line by line. It's going to take time we may not have.", 5.0);
        return true;
    }

    if (question.indexOf("fix") >= 0 || question.indexOf("reset") >= 0 || question.indexOf("repair") >= 0 || question.indexOf("restore") >= 0) {
        mob.Command("say There's one option. Full system restart. Reboot everything from the basement cold storage.");
        mob.Command("emote exhales smoke toward the ceiling.", 1.5);
        mob.Command("say The risk is it takes twelve minutes and during those twelve minutes we have no systems at all. No security, no fences, no communications, nothing.", 3.0);
        mob.Command("say Hold onto your butts.", 4.5);
        return true;
    }

    if (question.indexOf("fence") >= 0 || question.indexOf("power") >= 0 || question.indexOf("electric") >= 0) {
        mob.Command("say The fence power is tied to the main security system. When Nedry dropped the security, the fences went with it.");
        mob.Command("emote stubs out a cigarette and immediately reaches for the pack.", 2.0);
        mob.Command("say The backup generators can power the fences but not the security monitoring simultaneously. I'm working on a workaround.", 3.5);
        return true;
    }

    if (question.indexOf("phone") >= 0 || question.indexOf("help") >= 0 || question.indexOf("call") >= 0 || question.indexOf("rescue") >= 0) {
        mob.Command("say Nedry cut the satellite link. I'm on radio but the storm is killing the signal.");
        mob.Command("emote shakes his head.", 1.5);
        mob.Command("say Hammond's got a scheduled helicopter tomorrow morning. If we can hold until then. If.", 3.0);
        return true;
    }

    if (question.indexOf("hammond") >= 0) {
        mob.Command("say Mr. Hammond is a brilliant man. I've worked for him for eight years.");
        mob.Command("emote pauses meaningfully.", 1.5);
        mob.Command("say He is not always a careful man. There is a difference.", 3.0);
        return true;
    }

    var defaults = [
        "say I need to concentrate. The fate of everyone on this island is currently in my hands and this code is terrible.",
        "say God damn Nedry. I cannot stress this enough.",
        "say Ask me when the systems are back online. I'll have more time then."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
