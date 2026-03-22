
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("accident") >= 0 || question.indexOf("crash") >= 0 || question.indexOf("wreck") >= 0) {
        mob.Command("say The worst accident I ever seen...");
        mob.Command("emote 's voice drops to a hollow whisper.", 1.5);
        mob.Command("say There was this sound... a sound so loud it could wake the dead.", 3);
        mob.Command("say And when they finally pulled the driver's body from the twisted, burning wreck...", 5);
        mob.Command("say ...it looked like THIS!", 7);
        mob.Command("emote 's face suddenly contorts into something impossible -- eyes bulging out on stalks, mouth stretching wide, clay-like features warping into a grotesque mask of horror!", 8);
        SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">The air temperature drops twenty degrees. The lights flicker.</ansi>", 0);
        mob.Command("emote 's face snaps back to normal as if nothing happened.", 10);
        mob.Command("say Tell 'em Large Marge sent ya.", 12);
        return true;
    }

    if (question.indexOf("night") >= 0 || question.indexOf("dark") >= 0) {
        mob.Command("say It was a night just like this...");
        mob.Command("emote gazes out at the darkness beyond the window.", 1.5);
        mob.Command("say Dark. Quiet. The kind of quiet that means something bad is about to happen.", 3);
        mob.Command("say I've been driving this route a long time. Longer than you'd believe.", 5);
        return true;
    }

    if (question.indexOf("driv") >= 0 || question.indexOf("truck") >= 0 || question.indexOf("route") >= 0) {
        mob.Command("say Been driving this route for ten years now. Same stretch of road. Every night.");
        mob.Command("emote takes a sip of coffee that never seems to diminish.", 1.5);
        mob.Command("say The funny thing is... I don't remember where I'm going. I just keep driving.", 3);
        mob.Command("say Some roads you drive. Some roads drive you.", 5);
        mob.Command("emote 's form flickers translucently for just a moment.", 6.5);
        return true;
    }

    if (question.indexOf("dead") >= 0 || question.indexOf("ghost") >= 0 || question.indexOf("alive") >= 0) {
        mob.Command("emote stares at you with those distant eyes.");
        mob.Command("say What makes you think I'm not alive?", 1.5);
        mob.Command("emote 's coffee cup passes through her hand for just a second before she catches it again.", 3);
        mob.Command("say ...Don't answer that.", 4.5);
        return true;
    }

    mob.Command("say Hmm. On this very night, ten years ago, I saw something on this road I'll never forget.");
    mob.Command("say Ask me about the accident. If you dare.", 2);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0) {
        mob.Command("say A bicycle? On these roads? At night?");
        mob.Command("emote shakes her head slowly.", 1);
        mob.Command("say Dangerous. Very dangerous. Trust me. I know about dangerous roads.", 2.5);
        return true;
    }

    mob.Command("emote glances at it with hollow eyes.");
    mob.Command("say That's nice. But you should be careful what you carry on dark roads.", 1.5);
    return true;
}
