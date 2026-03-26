// Winston Smith

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("big brother") >= 0 || question.indexOf("party") >= 0) {
        mob.Command("emote glances quickly at the telescreen. His face becomes very blank.");
        mob.Command("say Big Brother is... The Party is wise. The Party is just. ", 1.5);
        mob.Command("emote pauses. His jaw tightens fractionally, then releases.", 3.0);
        mob.Command("say I have always believed this. I believe it now.", 4.5);
        return true;
    }

    if (question.indexOf("julia") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("emote looks away. Something crosses his face that his face is trying not to allow.");
        mob.Command("say I do not know anyone by that name. ", 1.5);
        mob.Command("emote pauses for a long time.", 3.0);
        mob.Command("say There are things I am working on not remembering.", 4.5);
        return true;
    }

    if (question.indexOf("diary") >= 0 || question.indexOf("write") >= 0) {
        mob.Command("emote his expression becomes even more carefully blank.");
        mob.Command("say I have no diary. Diaries are thoughtcrime.", 1.5);
        mob.Command("emote swallows. His hand moves toward the diary and stops.", 3.0);
        return true;
    }

    if (question.indexOf("past") >= 0 || question.indexOf("before") >= 0 || question.indexOf("history") >= 0) {
        mob.Command("emote stares at a point somewhere beyond you.");
        mob.Command("say The past is whatever the Party says it is.", 1.5);
        mob.Command("say Who controls the past controls the future.", 3.0);
        mob.Command("emote says this with the flat certainty of someone reciting something they are trying to make themselves believe.", 4.5);
        return true;
    }

    if (question.indexOf("obrien") >= 0 || question.indexOf("o'brien") >= 0 || question.indexOf("brotherhood") >= 0) {
        mob.Command("emote looks at you. His look contains several things at once.");
        mob.Command("say I... there is a man in the Inner Party. I have met him. That is all I will say.", 1.5);
        mob.Command("emote leans closer and says, very quietly:", 3.0);
        mob.Command("say We shall meet in the place where there is no darkness.", 4.5);
        return true;
    }

    if (question.indexOf("telescreen") >= 0 || question.indexOf("watching") >= 0) {
        mob.Command("emote glances at the telescreen and looks away.");
        mob.Command("say I cannot discuss the telescreens. The telescreen is beneficial. It serves the people.", 1.5);
        mob.Command("emote his face says nothing more than this.", 3.0);
        return true;
    }

    if (question.indexOf("prole") >= 0 || question.indexOf("future") >= 0) {
        mob.Command("emote rubs the ulcer on his ankle slowly.");
        mob.Command("say If there is hope... it lies in the proles.", 1.5);
        mob.Command("emote looks out the window at the grey street.", 3.0);
        mob.Command("say Eighty-five percent of the population. They do not know what they have.", 4.5);
        return true;
    }

    var defaults = [
        "emote looks at you carefully. His face reveals nothing.",
        "say I am afraid I cannot discuss that. You understand.",
        "emote stares at the telescreen for a moment, then looks back. His face is very blank."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
