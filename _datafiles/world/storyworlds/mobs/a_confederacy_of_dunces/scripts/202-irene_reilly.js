
// Irene Reilly - long-suffering mother

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ignatius") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote takes a long pull of muscatel.");
        mob.Command("say I love my boy, I do. But he is DRIVING me crazy.");
        mob.Command("say He won't work, won't clean, won't do ANYTHING. Just sits in that room writing in that tablet and hollering about his valve.", 2.0);
        mob.Command("say Thirty years old and I'm still washing his flannel shirts. Lord have mercy.", 4.0);
        return true;
    }

    if (question.indexOf("claude") >= 0 || question.indexOf("robichaux") >= 0) {
        mob.Command("emote blushes slightly and fidgets with her rosary.");
        mob.Command("say Claude Robichaux? Oh, he's a nice man. A NICE man.");
        mob.Command("say He's been courting me. Says I deserve better. Maybe he's right.", 2.0);
        mob.Command("say Ignatius would have a FIT if he knew. His valve would close for a WEEK.", 4.0);
        return true;
    }

    if (question.indexOf("santa") >= 0 || question.indexOf("battaglia") >= 0) {
        mob.Command("say Santa Battaglia is my best friend. She tells me the truth even when it hurts.");
        mob.Command("say She says I need to stop babying Ignatius. She says I need to LIVE.", 2.0);
        mob.Command("emote sighs and takes another sip of muscatel.", 4.0);
        return true;
    }

    if (question.indexOf("drink") >= 0 || question.indexOf("muscatel") >= 0 || question.indexOf("wine") >= 0) {
        mob.Command("emote clutches the bottle protectively.");
        mob.Command("say Just a little muscatel. For my nerves.");
        mob.Command("say You try living with Ignatius for thirty years and see if YOU don't need a drink.", 2.0);
        return true;
    }

    if (question.indexOf("author") >= 0 || question.indexOf("toole") >= 0) {
        mob.Command("emote gets a faraway look in her eyes.");
        mob.Command("say You know, the man who wrote all this... his own mother fought for YEARS to get his story told.");
        mob.Command("say Eleven years, going from publisher to publisher. A mother's love don't quit.", 2.0);
        mob.Command("say He never got to see it. That's the saddest part.", 4.0);
        return true;
    }

    var defaults = [
        "say Lord, what I done to deserve all this?",
        "say You want some coffee, dawling? I think I got some somewhere.",
        "say I'm too tired to think straight. Ask me something simple."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
