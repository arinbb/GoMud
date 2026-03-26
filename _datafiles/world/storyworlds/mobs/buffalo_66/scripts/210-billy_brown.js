
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("prison") >= 0 || question.indexOf("jail") >= 0) {
        mob.Command("say I did my time. FIVE YEARS. Five years for something that wasn't even my fault.");
        mob.Command("emote 's jaw tightens.", 1.5);
        mob.Command("say I took the fall for someone else. That's all you need to know.", 3.0);
        return true;
    }

    if (question.indexOf("layla") >= 0 || question.indexOf("girl") >= 0) {
        mob.Command("say Layla? She's my wife. My WIFE. We've been together for years.");
        mob.Command("emote looks away quickly.");
        mob.Command("say She's great. She's PERFECT. Don't ask me any more about it.", 2.0);
        return true;
    }

    if (question.indexOf("parents") >= 0 || question.indexOf("mother") >= 0 || question.indexOf("father") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote 's expression hardens.");
        mob.Command("say My parents? My parents are GREAT. They're WONDERFUL people.", 1.0);
        mob.Command("say My mother loves me. She tells me all the time. ALL the time.", 2.0);
        mob.Command("emote 's voice cracks almost imperceptibly.", 3.5);
        return true;
    }

    if (question.indexOf("bills") >= 0 || question.indexOf("football") >= 0 || question.indexOf("buffalo") >= 0) {
        mob.Command("say The Bills? Don't talk to me about the Bills.");
        mob.Command("say You know what the Bills did to this city? To this FAMILY?", 1.5);
        mob.Command("emote shakes his head bitterly.", 3.0);
        return true;
    }

    if (question.indexOf("scott") >= 0 || question.indexOf("wood") >= 0 || question.indexOf("kicker") >= 0) {
        mob.Command("emote 's eyes go cold and flat.");
        mob.Command("say Scott Wood. That man RUINED my life.", 1.5);
        mob.Command("say He missed that kick and everything fell apart. EVERYTHING.", 3.0);
        return true;
    }

    if (question.indexOf("bet") >= 0 || question.indexOf("wager") >= 0 || question.indexOf("money") >= 0 || question.indexOf("debt") >= 0) {
        mob.Command("emote 's expression goes somewhere complicated.");
        mob.Command("say The bet. Right. I bet five thousand dollars that the Bills would win. Five thousand dollars I didn't have.", 1.5);
        mob.Command("say The Bills SHOULD have won. Scott Wood SHOULD have made that kick.", 3.0);
        mob.Command("say I covered the debt doing things I'm not proud of and then I took the fall when things went sideways. Five years.", 5.0);
        mob.Command("emote 's voice goes flat and quiet", 7.0);
        mob.Command("say The thing about prison is it gives you a LOT of time to think about who put you there.", 8.5);
        return true;
    }

    if (question.indexOf("photo") >= 0 || question.indexOf("picture") >= 0 || question.indexOf("booth") >= 0) {
        mob.Command("emote goes still for a moment.");
        mob.Command("say The photo booth? Yeah. That was... that was something.", 1.5);
        mob.Command("say Four pictures. Four chances to look like a normal person. It was harder than it sounds.", 3.0);
        mob.Command("emote touches his jacket pocket briefly, unconsciously.", 5.0);
        return true;
    }

    if (question.indexOf("angry") >= 0 || question.indexOf("anger") >= 0 || question.indexOf("rage") >= 0 || question.indexOf("yell") >= 0) {
        mob.Command("emote looks like he's about to deny it, then doesn't.");
        mob.Command("say Yeah. I know. I know I am.", 1.5);
        mob.Command("say When you grow up in a house where nobody's paying attention, you get loud. That's just. That's what happens.", 3.0);
        mob.Command("emote stares at the floor.", 5.0);
        mob.Command("say I'm working on it.", 6.5);
        return true;
    }

    var defaults = [
        "say What do you WANT? I'm busy. I have things to DO.",
        "say Stop LOOKING at me like that. I don't need your pity.",
        "say I'm FINE. Everything is FINE. Why does everyone keep ASKING?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
