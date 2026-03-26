
// Mac - closeted karate enthusiast, cultivating mass

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("karate") >= 0 || question.indexOf("fight") >= 0 || question.indexOf("martial") >= 0) {
        mob.Command("emote drops into a fighting stance immediately.");
        mob.Command("say I have been studying the martial arts for fifteen years. Not formally. But in my heart.", 1.5);
        mob.Command("say The body is a weapon. I am forging my body into a weapon. The process takes time. I am at intermediate forging.", 3.0);
        mob.Command("emote throws a slow-motion combination and nods at the result.", 4.5);
        return true;
    }

    if (question.indexOf("god") >= 0 || question.indexOf("religion") >= 0 || question.indexOf("faith") >= 0 || question.indexOf("church") >= 0) {
        mob.Command("emote holds up a finger with sudden intensity.");
        mob.Command("say God is testing us. Everything is a test. The bar is a test. Dennis is a test. My body not achieving its full potential — a test.", 1.5);
        mob.Command("say I am passing the test. You cannot always see it but it is happening. At the spiritual level.", 3.0);
        return true;
    }

    if (question.indexOf("mass") >= 0 || question.indexOf("muscles") >= 0 || question.indexOf("body") >= 0 || question.indexOf("gym") >= 0) {
        mob.Command("emote flexes an arm with deep sincerity.");
        mob.Command("say I am cultivating mass. It is a long-term program. You do not see results immediately. You see them after years of dedication.", 1.5);
        mob.Command("say The mass is there. It is potential mass. I am in the cultivation phase.", 3.0);
        return true;
    }

    if (question.indexOf("dennis") >= 0 || question.indexOf("best friend") >= 0) {
        mob.Command("say Dennis and I are best friends. He is exceptional and I am exceptional and we are exceptionally good at being best friends together.", 1.5);
        mob.Command("say There is nothing more to say about it. We are just friends. Very close friends who live together. Normal.", 3.0);
        return true;
    }

    var defaults = [
        "say Okay, but hear me out — what if I just hit it?",
        "emote shadowboxes at the air for a moment, apparently forgetting you are there.",
        "say I can bench two-fifty. Well, theoretically. The equipment at the bar is limited."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
