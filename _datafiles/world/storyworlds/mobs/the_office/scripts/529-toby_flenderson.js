
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("hr") >= 0 || question.indexOf("human resources") >= 0 || question.indexOf("policy") >= 0) {
        mob.Command("say So I'm HR, which means I technically report to corporate, not to Michael.", 1.0);
        mob.Command("emote pre-winces slightly.", 2.5);
        mob.Command("say Which means I can -- I'm here to help with any workplace concerns. That's what I'm here for.", 4.0);
        mob.Command("say Genuinely. I want to help.", 5.5);
        mob.Command("emote hopes this lands.", 7.0);
        return true;
    }

    if (question.indexOf("michael") >= 0 || question.indexOf("scott") >= 0) {
        mob.Command("emote prepares a neutral expression.");
        mob.Command("say Michael and I have a working relationship.", 2.0);
        mob.Command("emote is very careful.", 3.5);
        mob.Command("say He doesn't -- we don't always see eye to eye. On everything. On most things.", 5.0);
        mob.Command("say But I'm still here. So.", 6.5);
        mob.Command("emote shrugs very slightly.", 8.0);
        return true;
    }

    if (question.indexOf("daughter") >= 0 || question.indexOf("family") >= 0 || question.indexOf("sasha") >= 0) {
        mob.Command("emote brightens genuinely.");
        mob.Command("say My daughter is really great. She's five. Her name is Sasha.", 1.5);
        mob.Command("say She's -- she's the reason I'm here, honestly. Someone has to have health insurance.", 3.5);
        mob.Command("emote smiles with real warmth.", 5.0);
        return true;
    }

    if (question.indexOf("novel") >= 0 || question.indexOf("book") >= 0 || question.indexOf("write") >= 0) {
        mob.Command("say I'm writing a murder mystery.", 1.0);
        mob.Command("emote is slightly self-conscious about this.", 2.5);
        mob.Command("say It's set in Scranton. There's a character who is a regional manager. He's not the killer.", 4.5);
        mob.Command("emote pauses.", 6.0);
        mob.Command("say He might be the killer. I'm still deciding.", 7.5);
        return true;
    }

    // Default

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
