function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("work") >= 0 || question.indexOf("restore") >= 0 || question.indexOf("prepare") >= 0 || question.indexOf("embalm") >= 0) {
        mob.Command("say I give them dignity.", 1.0);
        mob.Command("emote does not look up from what he is doing.", 2.0);
        mob.Command("say People think it is -- they do not want to think about it.", 3.5);
        mob.Command("say But the family gives me a photograph. They say: this is who he was.", 5.5);
        mob.Command("say And I look at the photograph and I look at the person and I make them the same.", 7.5);
        mob.Command("say That last time the family sees them -- I gave them that. That is my work.", 9.5);
        mob.Command("emote steps back and looks at what he is doing with quiet pride.", 11.0);
        return true;
    }

    if (question.indexOf("fisher") >= 0 || question.indexOf("family") >= 0 || question.indexOf("david") >= 0 || question.indexOf("nate") >= 0) {
        mob.Command("say They are my family too.", 1.0);
        mob.Command("emote says it with more feeling than he intended.", 2.5);
        mob.Command("say David is -- he is fair. He is more than fair. He respects the work.", 4.5);
        mob.Command("say Nate is -- Nate is learning.", 6.0);
        mob.Command("emote 's expression suggests this is a generous assessment.", 7.5);
        mob.Command("say Ruth feeds me. She has always fed me. That matters.", 9.0);
        return true;
    }

    if (question.indexOf("art") >= 0 || question.indexOf("craft") >= 0 || question.indexOf("skill") >= 0) {
        mob.Command("say It is art.", 1.0);
        mob.Command("emote is firm about this.", 2.0);
        mob.Command("say I trained for this. I went to school. I practiced.", 3.5);
        mob.Command("say The color matching alone -- you cannot guess. You have to know.", 5.5);
        mob.Command("say People think because it is the dead it does not require skill.", 7.0);
        mob.Command("say Those people do not understand what skill is.", 8.5);
        return true;
    }

    if (question.indexOf("family") >= 0 && question.indexOf("rico") >= 0) {
        mob.Command("say I have a wife. Children.", 1.0);
        mob.Command("emote 's expression warms.", 2.5);
        mob.Command("say They know what I do. My kids know. I told them straight.", 4.5);
        mob.Command("say I help people. That is what I told them. I help families in the worst time.", 6.5);
        mob.Command("emote nods.", 8.0);
        return true;
    }

    var defaults = [
        "say You want something. What do you want.",
        "emote looks at you steadily, brush still in hand.",
        "say Ask me about the work. I'll tell you about the work."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}