
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("winky") >= 0 || question.indexOf("norwich") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote's face lights up in the way faces light up when someone asks about the right thing.");
        mob.Command("say Oh, Winky's terrific. He's really come a long way since Binghamton.", 1.5);
        mob.Command("emote looks down with uncomplicated pride.", 3.5);
        mob.Command("say He's calm, you know? Some dogs get anxious in the ring. He just walks out there and he's fine. He's a good boy.", 5.0);
        mob.Command("emote nods, settled in this certainty.", 7.5);
        return true;
    }

    if (question.indexOf("fly") >= 0 || question.indexOf("fish") >= 0 || question.indexOf("tackle") >= 0) {
        mob.Command("say Fly fishing? Sure, happy to talk about fly fishing.");
        mob.Command("say You've got your dry flies -- those float on the surface. Your nymphs go subsurface. Your streamers, those are bigger.", 2.0);
        mob.Command("emote warms to the subject.", 4.0);
        mob.Command("say The Elk Hair Caddis is your general-purpose dry fly. Adams is classic. If I could only have three flies --", 5.5);
        mob.Command("emote pauses.", 7.0);
        mob.Command("say Well. I'd need more than three. But I'd start with those two.", 8.5);
        return true;
    }

    if (question.indexOf("cookie") >= 0 || question.indexOf("wife") >= 0) {
        mob.Command("emote smiles in the easy way of a man who has found the right person.");
        mob.Command("say Cookie's wonderful. She really gets it. The show stuff. Not everyone does.", 2.0);
        mob.Command("say And she's just nice. Just genuinely nice.", 4.0);
        mob.Command("emote considers this.", 5.5);
        mob.Command("say She's also got two left feet. Actual medical thing. I drove to Vermont once to find her shoes that fit right.", 7.0);
        mob.Command("say Worth it.", 9.0);
        return true;
    }

    if (question.indexOf("sheboygan") >= 0 || question.indexOf("ohio") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say Shakey Hills, Ohio. Yeah. It's a good town.");
        mob.Command("emote thinks about it.", 2.0);
        mob.Command("say Quiet. Everybody knows everybody. Had a Dairy Queen, still do.", 4.0);
        mob.Command("say I like it. Some people can't wait to leave. I never felt that way.", 6.0);
        return true;
    }

    mob.Command("say Hmm?");
    mob.Command("emote looks up with the attentive expression of a man who was not expecting a question but is happy to help.", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("say Oh, sure. Let me see that.");
    mob.Command("emote examines it with the interested attention of a man who likes things.", 1.5);
    mob.Command("say Hm. That's nice.", 3.0);
    return true;
}
