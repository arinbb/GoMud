
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("earth") >= 0 || question.indexOf("home") >= 0 || question.indexOf("planet") >= 0) {
        mob.Command("emote 's face lights up with uncomplicated enthusiasm.");
        mob.Command("say Earth! I know everything about it from Father's books. The cities, the oceans, the seasons.");
        mob.Command("say Father says it rains there regularly. Not synthesized water -- actual atmospheric precipitation.", 2.0);
        mob.Command("say I should very much like to see it. Father says it is not necessary to see a thing to know it. I think he may be wrong about that.", 3.5);
        return true;
    }

    if (question.indexOf("father") >= 0 || question.indexOf("morbius") >= 0 || question.indexOf("dad") >= 0) {
        mob.Command("say Father is the most learned man I know. He is also the only man I know, until recently.");
        mob.Command("emote smiles with genuine affection that holds no reservation.", 1.5);
        mob.Command("say He is very careful about me. More careful than I would like, sometimes. He says the universe is full of danger.", 2.5);
        mob.Command("say But all I have ever known is this garden, and the danger here is theoretical.", 4.0);
        return true;
    }

    if (question.indexOf("robot") >= 0 || question.indexOf("robby") >= 0) {
        mob.Command("say Robby is my oldest friend. My only friend, until you arrived.");
        mob.Command("emote speaks without any awareness that this is poignant.", 1.5);
        mob.Command("say He reads to me when Father is working late. He has synthesized every type of Earth candy I asked about. He plays chess very well but lets me win sometimes, which I find I do not actually prefer.", 2.5);
        return true;
    }

    if (question.indexOf("tiger") >= 0 || question.indexOf("deer") >= 0 || question.indexOf("animal") >= 0) {
        mob.Command("emote turns toward the animals with warm, proprietary attention.");
        mob.Command("say They were born here. I raised the deer from a fawn. The tiger arrived as a cub. They know nothing to be afraid of.");
        mob.Command("say Father says that fear is learned. They never learned it. I think that is a gift.", 2.0);
        mob.Command("emote pauses.", 3.5);
        mob.Command("say Though lately the tiger watches the perimeter. At night. I try not to think about that.", 4.5);
        return true;
    }

    if (question.indexOf("monster") >= 0 || question.indexOf("danger") >= 0 || question.indexOf("attack") >= 0) {
        mob.Command("emote 's expression changes -- the first shadow you have seen in her face.");
        mob.Command("say Father says there is no danger. Father has always said there is no danger.");
        mob.Command("emote looks toward the house for a moment.", 2.0);
        mob.Command("say I have always believed him. I still do. I think.", 3.5);
        return true;
    }

    if (question.indexOf("krell") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("laboratory") >= 0) {
        mob.Command("say The Krell built everything here. This world is their world. We are living in it like -- like birds in a cathedral.");
        mob.Command("emote considers this metaphor, decides she likes it.", 1.5);
        mob.Command("say Father has studied them my whole life. I think sometimes he admires them more than he fears them. I think sometimes he should fear them more.", 2.5);
        return true;
    }

    var defaults = [
        "say Tell me something about Earth that is not in the encyclopedias. Something ordinary.",
        "say I find I have many questions I did not know I had until there were people here to ask.",
        "say Father says I ask too many questions. I think there are not enough questions to ask."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("disc") >= 0 || showText.indexOf("krell") >= 0) {
        mob.Command("emote takes the disc and turns it over in her hands with grave attention.");
        mob.Command("say Father showed me Krell artifacts before. This is different. This one is -- I do not know the word -- personal.", 1.5);
        mob.Command("say It is warm. The others in Father's study are always cold.", 3.0);
        return true;
    }

    return false;
}
