function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("barney") >= 0 || question.indexOf("fife") >= 0) {
        mob.Command("emote sets the guitar down and gives you the look of a man who has explained Barney Fife many times and will continue to explain Barney Fife as long as necessary.");
        mob.Command("say Barney is the best deputy I have ever had. He is also the most complicated deputy I have ever had.", 1.5);
        mob.Command("say He has got more heart than sense sometimes, but the heart is genuine, and that is what matters.", 3.5);
        mob.Command("emote rocks back in the chair, smiling in the direction of the courthouse.", 5.0);
        mob.Command("say You just have to give him room to be Barney. Once you accept that, everything gets a lot simpler.", 6.5);
        return true;
    }

    if (question.indexOf("opie") >= 0 || question.indexOf("son") >= 0) {
        mob.Command("emote is quiet for a moment in a way that is not sad but is full.");
        mob.Command("say Opie is the best thing I have ever done.", 1.5);
        mob.Command("say He is curious and he is kind and he is learning every day. I just try to be the kind of man he can learn the right things from.", 3.5);
        mob.Command("emote looks out at the yard.", 5.5);
        mob.Command("say Raising a child right is the main thing. Everything else is secondary.", 7.0);
        return true;
    }

    if (question.indexOf("mayberry") >= 0 || question.indexOf("town") >= 0) {
        mob.Command("say Mayberry is not a perfect town.");
        mob.Command("emote pauses.", 1.5);
        mob.Command("say But it is a good town. People here try. They look out for each other. They wave.", 2.5);
        mob.Command("say There are places in this world where people do not wave at each other on the street. I find that hard to understand.", 4.5);
        mob.Command("emote plays a quiet chord.", 6.0);
        return true;
    }

    if (question.indexOf("crime") >= 0 || question.indexOf("trouble") >= 0 || question.indexOf("law") >= 0) {
        mob.Command("say Most of what I deal with is not really crime. It is people who have made a poor choice or gotten into a situation.");
        mob.Command("emote tilts his head in the manner of someone who has worked this out carefully.", 2.0);
        mob.Command("say A firm word and a little patience handles most situations. The firm word says you mean it. The patience says you believe in the person.", 4.0);
        mob.Command("say Barney would rather use the handcuffs. I find conversation works better.", 6.5);
        mob.Command("emote smiles at some private recollection.", 8.0);
        return true;
    }

    if (question.indexOf("fishing") >= 0 || question.indexOf("lake") >= 0 || question.indexOf("myers") >= 0) {
        mob.Command("emote brightens in a way that suggests this is his favorite subject.");
        mob.Command("say Myers Lake on a Thursday afternoon, just me and Opie and two cane poles and whatever Aunt Bee packed.", 1.5);
        mob.Command("say That is the best thing there is.", 3.5);
        mob.Command("emote pauses for emphasis.", 4.5);
        mob.Command("say You hear people talk about getting away from it all. Going to the lake IS it all. That is the whole thing right there.", 6.0);
        return true;
    }

    // Default: gentle wisdom
    var wisdom = [
        "say Well now. That is something to think about.",
        "emote rocks in the chair once and considers the question with genuine attention.",
        "say I have found that most things sort themselves out if you do right by people and give it time.",
        "emote picks a quiet chord and lets it settle before answering."
    ];
    var pick = Math.floor(Math.random() * wisdom.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
