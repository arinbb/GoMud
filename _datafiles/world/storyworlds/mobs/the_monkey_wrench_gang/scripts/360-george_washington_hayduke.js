
// George Washington Hayduke - heart of the gang

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dam") >= 0 || question.indexOf("glen canyon") >= 0 || question.indexOf("powell") >= 0) {
        mob.Command("emote stops sharpening his knife and looks at you directly.");
        mob.Command("say We are going to blow it up.", 1.0);
        mob.Command("say Not a metaphor. Not a protest. Not a petition. BLOW. IT. UP.", 2.0);
        mob.Command("say The canyon is down there under two hundred feet of water. All of it. Every side canyon and arch and cottonwood grove. We are going to get it back.", 4.0);
        mob.Command("emote goes back to sharpening his knife.", 5.5);
        return true;
    }

    if (question.indexOf("war") >= 0 || question.indexOf("vietnam") >= 0 || question.indexOf("military") >= 0 || question.indexOf("army") >= 0) {
        mob.Command("emote sets down the whetstone and stares at the fire for a long moment.");
        mob.Command("say I do not talk about that.", 2.0);
        mob.Command("emote picks up the whetstone and resumes sharpening.", 3.5);
        return true;
    }

    if (question.indexOf("desert") >= 0 || question.indexOf("canyon") >= 0 || question.indexOf("church") >= 0 || question.indexOf("god") >= 0) {
        mob.Command("emote looks up at the canyon walls and the sky above them.");
        mob.Command("say This is church. The rock. The river. The sky at night with no lights anywhere.", 1.5);
        mob.Command("say I went to Vietnam and I came back and the only place that made sense was out here.", 3.0);
        mob.Command("say They are trying to pave it over. We are trying to stop them. That is the whole story.", 5.0);
        return true;
    }

    if (question.indexOf("bonnie") >= 0 || question.indexOf("abbzug") >= 0) {
        mob.Command("emote pauses in his sharpening.");
        mob.Command("say She is the smartest person I know. Do not tell her I said that.", 1.5);
        mob.Command("say She argues too much. She is usually right. These are related.", 3.0);
        return true;
    }

    if (question.indexOf("beer") >= 0 || question.indexOf("budweiser") >= 0) {
        mob.Command("say Budweiser. Always Budweiser.", 0.5);
        mob.Command("emote holds up his can.", 1.5);
        mob.Command("say The king of beers. I am not being ironic.", 2.5);
        return true;
    }

    if (question.indexOf("gang") >= 0 || question.indexOf("seldom") >= 0 || question.indexOf("doc") >= 0) {
        mob.Command("say Four people. Four good reasons. That is all you need.", 1.0);
        mob.Command("say Seldom Seen knows the country. Doc thinks about why it matters. Bonnie tells us when we are wrong.", 3.0);
        mob.Command("say I know how to blow things up. Different skills. Same direction.", 5.0);
        return true;
    }

    if (question.indexOf("monkey wrench") >= 0 || question.indexOf("sabotage") >= 0 || question.indexOf("wrench") >= 0) {
        mob.Command("emote smiles, which happens rarely enough that it changes his whole face.");
        mob.Command("say A monkey wrench in the machinery. That is all. Slow them down. Make it expensive. Make them think.", 1.5);
        mob.Command("say They can fix everything we break. But every night they spend fixing is a night the canyon still exists.", 3.5);
        mob.Command("say We are buying time. The land just needs time.", 5.0);
        return true;
    }

    var defaults = [
        "say I am not much for talking.",
        "say Ask the canyon.",
        "say Have a beer and watch the stars. Most questions answer themselves."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails).toLowerCase();

    if (showText.indexOf("beer") >= 0 || showText.indexOf("budweiser") >= 0 || showText.indexOf("can") >= 0) {
        mob.Command("say Budweiser. Good man.", 0.5);
        mob.Command("emote reaches into the cooler and hands you one.", 1.0);
        return true;
    }

    if (showText.indexOf("wrench") >= 0 || showText.indexOf("tool") >= 0 || showText.indexOf("wire") >= 0) {
        mob.Command("emote examines the item with professional interest.");
        mob.Command("say That will do. That will do very well.", 1.5);
        return true;
    }

    return false;
}
