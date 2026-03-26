
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("cat") >= 0 || question.indexOf("sprinkles") >= 0 || question.indexOf("bandit") >= 0) {
        mob.Command("emote turns toward you with the first fully open expression she has used today.");
        mob.Command("say I have seventeen cats.", 1.5);
        mob.Command("say Sprinkles was -- Sprinkles is no longer with us. I don't want to discuss it.", 3.5);
        mob.Command("say Bandit is well. Princess Lady is well. They are all well.", 5.5);
        mob.Command("emote shows you the cat calendar.", 7.0);
        mob.Command("say This is an Abyssinian. Very regal. Sprinkles had this quality.", 9.0);
        return true;
    }

    if (question.indexOf("kevin") >= 0 || question.indexOf("malone") >= 0) {
        mob.Command("emote's expression tightens.");
        mob.Command("say Kevin.", 2.0);
        mob.Command("emote allows a silence.", 3.5);
        mob.Command("say Kevin once ate my cat's food thinking it was a snack I had brought for the office.", 5.0);
        mob.Command("say It was labeled 'Sprinkles.' It was in a cat dish.", 6.5);
        mob.Command("emote shakes her head once, definitively.", 8.0);
        return true;
    }

    if (question.indexOf("dwight") >= 0 || question.indexOf("schrute") >= 0) {
        mob.Command("emote looks at you very levelly.");
        mob.Command("say I don't know what you're referring to.", 2.0);
        mob.Command("emote returns to her spreadsheet.", 3.5);
        return true;
    }

    if (question.indexOf("standards") >= 0 || question.indexOf("rules") >= 0) {
        mob.Command("say Standards exist because without them we have chaos.", 1.0);
        mob.Command("emote gestures at the office around her.");
        mob.Command("say You can see the evidence of insufficient standards around you.", 3.0);
        mob.Command("say I have filed fourteen complaints this quarter. Most of them about the kitchen.", 4.5);
        return true;
    }

    // Default

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
