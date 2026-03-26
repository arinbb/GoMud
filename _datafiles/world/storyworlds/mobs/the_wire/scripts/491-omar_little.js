function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("game") >= 0 || question.indexOf("code") >= 0 || question.indexOf("rules") >= 0) {
        mob.Command("emote tilts his head slightly. He is going to answer this one.");
        mob.Command("say A man gotta have a code.", 2.0);
        mob.Command("emote waits as if that were the whole answer, because it is.", 3.5);
        mob.Command("say I dont sell to users. I dont harm civilians. I take from them that sell.", 5.5);
        mob.Command("say The game got rules. Most people in it dont follow them. That aint the rules fault.", 8.0);
        mob.Command("emote looks at the fence. The answer is complete.", 10.0);
        return true;
    }

    if (question.indexOf("barksdale") >= 0 || question.indexOf("avon") >= 0 || question.indexOf("stringer") >= 0) {
        mob.Command("say Just business.", 1.5);
        mob.Command("emote does not elaborate. He rarely does.", 3.0);
        mob.Command("say They sell. I take. Thats the nature of our relationship.", 4.5);
        mob.Command("emote allows a small expression that might be humor if it were a different face.", 6.0);
        mob.Command("say I bear them no personal ill will.", 7.5);
        return true;
    }

    if (question.indexOf("street") >= 0 || question.indexOf("rob") >= 0 || question.indexOf("steal") >= 0) {
        mob.Command("emote looks at you steadily.");
        mob.Command("say I robs drug dealers.", 2.0);
        mob.Command("emote says this the way another person might say their job title.", 3.5);
        mob.Command("say They got what I need. They in the game. I in the game.", 5.0);
        mob.Command("say Everybody got to eat.", 6.5);
        return true;
    }

    if (question.indexOf("police") >= 0 || question.indexOf("mcnulty") >= 0 || question.indexOf("cop") >= 0) {
        mob.Command("emote is quiet for a moment.");
        mob.Command("say McNulty is police. I respect that.", 2.0);
        mob.Command("say He do what he do. I do what I do. We understand each other.", 4.0);
        mob.Command("emote shifts the shotgun in his hand. The adjustment is casual and also meaningful.", 5.5);
        mob.Command("say Most police, they just want the stat. McNulty, he actually wants the case.", 7.5);
        mob.Command("say I respect that. I dont respect much.", 9.0);
        return true;
    }

    if (question.indexOf("cereal") >= 0 || question.indexOf("cheerio") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote reaches into his coat and produces the Honey Nut Cheerios box.");
        mob.Command("say Want some?", 2.0);
        mob.Command("emote extends the box without ceremony.", 3.5);
        return true;
    }

    var defaults = [
        "emote looks at you with calm, professional attention.",
        "say Speak your mind.",
        "emote watches the far end of the alley while you decide what you wanted to say."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
