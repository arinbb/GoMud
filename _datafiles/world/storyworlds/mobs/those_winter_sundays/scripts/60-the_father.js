
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("cold") >= 0 || question.indexOf("winter") >= 0 || question.indexOf("morning") >= 0) {
        mob.Command("emote looks at his cracked hands.");
        mob.Command("say The cold. Yes. Every morning it is there, waiting.");
        mob.Command("say But the furnace needs tending. The house needs warming. So I get up.", 2.0);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("son") >= 0 || question.indexOf("boy") >= 0 || question.indexOf("child") >= 0) {
        mob.Command("emote is quiet for a long moment.");
        mob.Command("say The boy... he is a good boy. Smart. He will do better than me.");
        mob.Command("say I do not always know how to... how to say things. But I make sure the house is warm for him. I polish his shoes.", 2.5);
        mob.Command("emote turns away, busying himself with the furnace.", 4.0);
        return true;
    }

    if (question.indexOf("love") >= 0 || question.indexOf("care") >= 0) {
        mob.Command("emote pauses, hands still.");
        mob.Command("say Love?");
        mob.Command("emote looks at the furnace, the woodbox, his own cracked hands.", 1.5);
        mob.Command("say I do not have pretty words for it. I have these hands. I have this fire. I have Sunday shoes to polish.", 3.0);
        mob.Command("say That is what I have.", 4.5);
        return true;
    }

    if (question.indexOf("shoe") >= 0 || question.indexOf("polish") >= 0) {
        mob.Command("say The shoes? Someone has to do it.");
        mob.Command("emote shrugs, but his eyes are gentle.");
        mob.Command("say A boy should have clean shoes for church. It is a small thing.", 2.0);
        return true;
    }

    if (question.indexOf("furnace") >= 0 || question.indexOf("fire") >= 0 || question.indexOf("warm") >= 0) {
        mob.Command("say The furnace is the first thing and the last thing.");
        mob.Command("say First thing in the morning — light it. Last thing at night — bank it.");
        mob.Command("say In between, it keeps the cold away. That is enough.", 2.0);
        return true;
    }

    if (question.indexOf("anger") >= 0 || question.indexOf("argue") >= 0 || question.indexOf("fight") >= 0) {
        mob.Command("emote 's jaw tightens.");
        mob.Command("say This house has its... difficulties. Every house does.");
        mob.Command("say But I still get up in the cold. Every morning. That does not change.", 2.0);
        return true;
    }

    if (question.indexOf("thank") >= 0 || question.indexOf("grateful") >= 0) {
        mob.Command("emote looks surprised, then looks away.");
        mob.Command("say I do not do it for thanks.");
        mob.Command("emote feeds another log into the furnace.", 1.5);
        return true;
    }

    var defaults = [
        "emote nods quietly but does not speak. He feeds a log into the furnace instead.",
        "say I am not much for talking. But I can answer about the cold, or the fire, or the boy.",
        "emote looks at you with steady eyes, waiting. He is a man who expresses himself through action, not words."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("shoe") >= 0 || showText.indexOf("polish") >= 0) {
        mob.Command("emote looks at the polished shoe, then at his own cracked hands.");
        mob.Command("say You found those. Good. They are ready for Sunday.");
        return true;
    }

    mob.Command("emote glances at what you show him, nods once, and turns back to his work.");
    return true;
}
