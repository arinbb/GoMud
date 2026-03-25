
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ranch") >= 0 || question.indexOf("home") >= 0 || question.indexOf("california") >= 0) {
        mob.Command("say Home is the only word that means what it means.");
        mob.Command("emote looks at the fields with something that is not pride exactly but is close to it.", 1.5);
        mob.Command("say I came here and it was right. Some places are right. You know when you find one.");
        return true;
    }

    if (question.indexOf("old man") >= 0 || question.indexOf("neighbor") >= 0 || question.indexOf("caretaker") >= 0) {
        mob.Command("say He was here before me. He taught me things about this land without meaning to teach me anything.");
        mob.Command("emote pauses, fingers finding a chord on the guitar without looking.", 2.0);
        mob.Command("say I wrote a song about it. He had a lot more life than I did at the time. I am not sure that is still true.");
        return true;
    }

    if (question.indexOf("heart of gold") >= 0 || question.indexOf("gold") >= 0) {
        mob.Command("say Still searching.");
        mob.Command("emote says nothing else for a moment, the answer clearly complete.", 2.0);
        return true;
    }

    if (question.indexOf("danny") >= 0 || question.indexOf("whitten") >= 0 || question.indexOf("needle") >= 0) {
        mob.Command("emote goes very still.");
        mob.Command("say He played that pattern first. On the first record.");
        mob.Command("emote is quiet for a long moment, fingers moving on the guitar strings without sound.", 3.0);
        mob.Command("say Some songs you write because you have to. Not because you want to.");
        return true;
    }

    if (question.indexOf("harvest") >= 0 || question.indexOf("album") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("say It is what happened that year. The ranch, the old man, the songs that came. You write what is in front of you.");
        mob.Command("emote looks at the wheat in the late light.", 2.0);
        mob.Command("say Nashville for some of it. London for some of it. Here for the rest. It is all one place in the end.");
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("song") >= 0 || question.indexOf("writing") >= 0) {
        mob.Command("say I do not think about it the way you might think I think about it.");
        mob.Command("say A song is a feeling you cannot say out loud, so you put it in a chord progression until it fits.");
        mob.Command("emote strums a single G chord and lets it decay.", 2.0);
        return true;
    }

    if (question.indexOf("london") >= 0 || question.indexOf("orchestra") >= 0 || question.indexOf("symphony") >= 0) {
        mob.Command("say A Man Needs a Maid. Theres a World. Those two needed more than a guitar could hold.");
        mob.Command("say The London Symphony. In a concert hall. It was something.");
        mob.Command("emote almost smiles.", 1.5);
        mob.Command("say The acoustic is still right for most of it. But those two needed that.");
        return true;
    }

    var defaults = [
        "say Ask me about the ranch, the old man, the songs. I have limited patience for much else.",
        "say I am thinking.",
        "emote keeps playing, the phrase continuing without resolution."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return false;
}
