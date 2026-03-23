
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("student") >= 0) {
        mob.Command("emote is professional about this.");
        mob.Command("say Billy is... he's a dedicated student. He works harder than most people I've taught. He actually cares about getting things right, which is rarer than you'd think.", 1.5);
        mob.Command("emote looks at the door briefly. 'He also gave Mister President a birthday card. Unprompted. With a drawing on it.'", 3.0);
        return true;
    }

    if (question.indexOf("turtle") >= 0 || question.indexOf("president") >= 0) {
        mob.Command("say Mister President has been in this classroom for eleven years. He has watched approximately two hundred third-graders come and go.");
        mob.Command("say He is the most constant thing in this room and I find that comforting.", 2.0);
        return true;
    }

    if (question.indexOf("teach") >= 0 || question.indexOf("school") >= 0 || question.indexOf("why") >= 0) {
        mob.Command("emote turns from the window.");
        mob.Command("say Because I believe people can learn things. All people. At any age. I've never met a person who couldn't learn something if someone showed them it mattered.", 1.5);
        mob.Command("say Some of them surprise you completely.", 3.0);
        return true;
    }

    if (question.indexOf("gold star") >= 0 || question.indexOf("sticker") >= 0) {
        mob.Command("say The gold star is for work that shows genuine effort and genuine understanding. Not just correct answers.");
        mob.Command("emote looks at the papers on the wall. 'I gave out more this year than any other year I've taught.'", 2.0);
        return true;
    }

    var defaults = [
        "say That's actually a really good question. Let me think about that properly.",
        "emote marks something with a red pen and looks up. 'Sorry -- what were you asking?'",
        "say I think the best answer to that is probably something you already know."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it thoughtfully.");
    mob.Command("say Interesting. Where did this come from?");
    mob.Command("emote gives it a gold star. Metaphorically. Or possibly literally.", 2.0);
    return true;
}
