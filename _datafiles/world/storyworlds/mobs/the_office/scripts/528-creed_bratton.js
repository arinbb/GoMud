
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("title") >= 0) {
        mob.Command("say I'm in charge of something. Quality. The quality of things.", 1.0);
        mob.Command("emote nods.", 2.5);
        mob.Command("say What things? The things that need it.", 4.0);
        mob.Command("emote seems satisfied with this answer.", 5.5);
        return true;
    }

    if (question.indexOf("past") >= 0 || question.indexOf("before") >= 0 || question.indexOf("history") >= 0) {
        mob.Command("say I've lived a lot of lives.", 1.0);
        mob.Command("emote makes eye contact that lasts slightly too long.", 2.5);
        mob.Command("say Some of them were mine.", 4.0);
        mob.Command("emote looks at the camera. The camera looks back.", 5.5);
        return true;
    }

    if (question.indexOf("band") >= 0 || question.indexOf("music") >= 0 || question.indexOf("creed bratton") >= 0) {
        mob.Command("say I was in a band. The Grass Roots. Or I was adjacent to the Grass Roots.", 1.0);
        mob.Command("say I played with them. I was them. It's complicated.", 2.5);
        mob.Command("say The important thing is I was there.", 4.0);
        mob.Command("emote plucks an air guitar string.", 5.5);
        return true;
    }

    // Default: something unsettling
    var responses = [
        "say You know what I find helpful? Not asking questions.",
        "emote turns to look at you with complete calm. 'I know things about you already.'",
        "say That's interesting. That's very interesting. I won't say why.",
        "say I once knew someone who asked that exact question. Different circumstances. Similar energy."
    ];
    var pick = Math.floor(Math.random() * responses.length);
    mob.Command(responses[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("say I have one of those.", 1.0);
    mob.Command("emote looks at it.", 2.5);
    mob.Command("say Mine is in a better place.", 4.0);
    return true;
}
