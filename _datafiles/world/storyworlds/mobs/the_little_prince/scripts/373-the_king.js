
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("sunset") >= 0 || question.indexOf("sun") >= 0 || question.indexOf("command") >= 0) {
        mob.Command("emote raises one finger majestically.");
        mob.Command("say I shall order the sun to set at the appropriate moment.");
        mob.Command("say A king must issue only reasonable commands. To order what is possible at the right moment -- that is wisdom.", 2.0);
        mob.Command("emote adjusts his crown with immense dignity.", 3.5);
        return true;
    }

    if (question.indexOf("kingdom") >= 0 || question.indexOf("subjects") >= 0 || question.indexOf("rule") >= 0 || question.indexOf("king") >= 0) {
        mob.Command("say I rule everything. The stars. The wind. The clouds. All of it.");
        mob.Command("emote gestures broadly at the entire empty asteroid.", 2.0);
        mob.Command("say It is a large kingdom. The largest. I have no subjects to mismanage it.", 3.0);
        mob.Command("say You, however, are here now. I shall appoint you ambassador.", 4.0);
        return true;
    }

    if (question.indexOf("lonely") >= 0 || question.indexOf("alone") >= 0 || question.indexOf("empty") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say A king is never lonely. A king is between appointments.");
        mob.Command("emote adjusts his ermine robe with tremendous composure.", 2.5);
        return true;
    }

    if (question.indexOf("power") >= 0 || question.indexOf("obey") >= 0 || question.indexOf("authority") >= 0) {
        mob.Command("say Authority must be respected. If you order your subjects to do what they would do anyway, all your orders will be obeyed.");
        mob.Command("say A king adapts himself to circumstances. That is the art of ruling.", 2.0);
        return true;
    }

    var defaults = [
        "say Sit down. I command it. You will find it comfortable.",
        "emote issues a decree to the stars, which comply, as they were already doing.",
        "say I should like a subject who stays. Most visitors leave eventually.",
        "say You are addressing a king. Conduct yourself accordingly."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("say Bring it closer. A king examines things on his own terms.");
    mob.Command("emote leans forward with dignity, then leans back.", 2.0);
    mob.Command("say I believe I shall decree that this belongs to the crown.", 3.0);
    return true;
}
