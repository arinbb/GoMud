function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("news") >= 0 || question.indexOf("story") >= 0 || question.indexOf("paper") >= 0) {
        mob.Command("emote looks at you with the immediate attention of a person for whom every person is potentially a source.");
        mob.Command("say News? I will tell you what news is: the tass index is at thirty-four and falling.", 1.5);
        mob.Command("say Snotty's operation is documented but not stopped. The hoop inventor is missing. The swamp is growing.", 2.5);
        mob.Command("say I need someone to go south, get inside that mansion, and come back with facts I can print.", 3.5);
        mob.Command("say Are you that someone? You look like you might be that someone.", 4.5);
        return true;
    }

    if (question.indexOf("snotty") >= 0 || question.indexOf("franklin") >= 0) {
        mob.Command("emote stops moving for the first time, which is notable.");
        mob.Command("say Donn Snotty. Born Franklin Snarl. Inventor turned industrialist turned -- this.", 1.5);
        mob.Command("say The biggest story in Tonetown history and I cannot get close enough to it to print the half I know.", 2.5);
        mob.Command("say His operation is documented. His methods are documented. His target is documented.", 3.5);
        mob.Command("say What I need is someone inside that mansion. With a camera. With the evidence.", 4.5);
        mob.Command("emote starts moving again.", 5.5);
        return true;
    }

    if (question.indexOf("tass") >= 0 || question.indexOf("index") >= 0) {
        mob.Command("say Tass is not a feeling, it is a measurable property of this city's culture. I know because we have been measuring it since 1978.", 0.5);
        mob.Command("say The index is currently thirty-four. Historical high: ninety-one. We are at the lowest point on record.", 1.5);
        mob.Command("say You write tass copy or you do not write. That is the standard of this paper. That is the standard of this city.", 2.5);
        mob.Command("say We will get it back to ninety-one. That is not optimism. That is the editorial position.", 3.5);
        return true;
    }

    if (question.indexOf("gramps") >= 0 || question.indexOf("inventor") >= 0) {
        mob.Command("emote grabs a piece of paper and points at something on the pinboard.");
        mob.Command("say He went south to get evidence on Snotty. Went in alone. Did not come back.", 1.5);
        mob.Command("say The connection is on the board: Snarl and Gramps were partners. The hoop was their joint work.", 2.5);
        mob.Command("say Snotty has him. I know it. I cannot print what I cannot prove.", 3.5);
        mob.Command("say Find him. Get him out. Come back and give me the story. I will write the headline myself.", 4.5);
        return true;
    }

    var defaults = [
        "say I have a paper to run. Ask me something useful.",
        "emote looks at you with the professional assessment of a person who is always on deadline.",
        "say The story is Snotty. It has always been Snotty. Are you going south or not?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("shades") >= 0 || showText.indexOf("sunglasses") >= 0) {
        mob.Command("emote looks at the sunglasses and immediately reaches for a notepad.");
        mob.Command("say You got those at the Tass Market. You are dressed. You are ready.", 1.5);
        mob.Command("say You look like someone who has been to the market and the Jam Session and knows what they are protecting.", 2.5);
        mob.Command("say Good. Go south. Get the evidence. Come back. I will clear the front page.", 3.5);
        return true;
    }

    mob.Command("emote looks at what you are showing with the assessment of someone deciding whether it is newsworthy.");
    mob.Command("say That is from Tonetown. Everything from Tonetown has a story. What is the story?", 1.5);
    return true;
}
