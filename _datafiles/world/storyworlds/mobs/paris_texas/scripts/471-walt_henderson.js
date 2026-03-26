
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("travis") >= 0 || question.indexOf("brother") >= 0) {
        mob.Command("say He walked out of the desert. We thought he was dead.");
        mob.Command("emote looks toward the window.", 2.0);
        mob.Command("say He won't say where he was. I stopped asking.", 3.5);
        mob.Command("say He's my brother. That's enough.", 5.0);
        return true;
    }

    if (question.indexOf("hunter") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0) {
        mob.Command("say Hunter's a good kid. Smart. Tough in the right ways.");
        mob.Command("emote pauses.", 2.0);
        mob.Command("say Travis needs to be his father. It's right. It's what should happen.", 3.5);
        mob.Command("emote looks at his coffee cup.", 5.0);
        mob.Command("say Doesn't make it easy.", 6.0);
        return true;
    }

    if (question.indexOf("jane") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("say I don't know where Jane is. Travis found her somehow. He doesn't tell me how he does things.");
        mob.Command("emote shakes his head slowly.", 2.0);
        mob.Command("say I hope she's okay. I always liked Jane.", 3.5);
        return true;
    }

    if (question.indexOf("anne") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("say Anne's been carrying most of this. Don't tell her I said that, she'd argue about it.");
        mob.Command("emote almost smiles.", 2.0);
        return true;
    }

    return false;
}
