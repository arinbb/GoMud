
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("feet") >= 0 || question.indexOf("shoes") >= 0) {
        mob.Command("emote looks down at her shoes with cheerful acknowledgment.");
        mob.Command("say Two left feet. Both of them. It's a real thing.", 1.5);
        mob.Command("say Gerry found me shoes in Vermont. He drove there. I didn't ask him to -- he just did it.", 3.0);
        mob.Command("emote smiles in the warm way of a woman who has had good things happen to her and knows it.", 5.0);
        mob.Command("say I walk just fine. People always ask that. I walk fine.", 6.5);
        return true;
    }

    if (question.indexOf("gerry") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("say Gerry is great. He really is.");
        mob.Command("emote says this with the directness of someone stating a fact, not performing an emotion.", 2.0);
        mob.Command("say He's just -- easy. Not boring-easy. Easy to be with. I didn't know how rare that was when I was younger.", 4.0);
        mob.Command("say I had a lot of boyfriends before Gerry.", 6.5);
        mob.Command("emote pauses, thinking about this.", 8.0);
        mob.Command("say A lot.", 9.5);
        return true;
    }

    if (question.indexOf("winky") >= 0 || question.indexOf("norwich") >= 0) {
        mob.Command("emote's expression becomes the expression of a woman talking about something she loves.");
        mob.Command("say He's perfect. I know everyone says that. But he just has the right energy for the ring.", 2.0);
        mob.Command("say He doesn't get nervous. He gets excited. There's a difference.", 4.0);
        mob.Command("emote nods firmly.", 5.5);
        mob.Command("say And he's good with people. Just -- good.", 7.0);
        return true;
    }

    mob.Command("emote looks over with a warm, open expression.");
    mob.Command("say What's up?", 1.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote leans in to look.");
    mob.Command("say Oh, that's cute.", 1.5);
    mob.Command("emote smiles genuinely.", 2.5);
    return true;
}
