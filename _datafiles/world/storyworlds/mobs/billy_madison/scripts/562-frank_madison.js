
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("billy") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote is quiet for a moment before answering.");
        mob.Command("say Billy is... I didn't always give him enough credit. I know that now.", 1.5);
        mob.Command("say He's trying. He's been trying his whole life and I think I was so busy building something that I forgot to tell him what it was for.", 3.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("company") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("say I started with one motel in 1971. Forty rooms. Bad carpet. A pool that was more suggestion than reality.");
        mob.Command("say Forty years later there are fifty-two properties. But the hotel was never the point.", 2.0);
        return true;
    }

    if (question.indexOf("eric") >= 0 || question.indexOf("gordon") >= 0) {
        mob.Command("emote's jaw tightens slightly.");
        mob.Command("say Eric Gordon is a very capable man. I should have seen more clearly what he was capable of.", 1.5);
        mob.Command("emote says nothing else. The silence is a complete sentence.", 3.0);
        return true;
    }

    if (question.indexOf("wife") >= 0 || question.indexOf("mother") >= 0 || question.indexOf("margaret") >= 0) {
        mob.Command("emote looks at the photo on his desk.");
        mob.Command("say She had Billy's eyes. Or he has hers.", 1.5);
        mob.Command("emote looks back at the documents in front of him. 'Excuse me. I have some things to finish.'", 3.0);
        return true;
    }

    if (question.indexOf("tuesday") >= 0 || question.indexOf("calendar") >= 0) {
        mob.Command("emote looks up.");
        mob.Command("say I have a standing weekly block. It doesn't need a title. He knows it's there. I know it's there.", 1.5);
        mob.Command("emote goes back to his documents. 'That's enough.'", 3.0);
        return true;
    }

    var defaults = [
        "say What do you need?",
        "emote looks up from his work with measured attention.",
        "say I'm listening. Make it count."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the thoroughness of a businessman.");
    mob.Command("say Where did you get this?");
    return true;
}
