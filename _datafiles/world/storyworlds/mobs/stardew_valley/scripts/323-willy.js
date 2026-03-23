
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("fish") >= 0 || question.indexOf("fishing") >= 0 || question.indexOf("cast") >= 0) {
        mob.Command("emote sets down his net and gives you his full attention.");
        mob.Command("say Fishing is patience. That is ninety percent of it right there. The other ten is paying attention.");
        mob.Command("say Watch the float. When it dips, count to two before you pull. Most people pull on the dip. That is too soon.", 2.0);
        return true;
    }

    if (question.indexOf("ocean") >= 0 || question.indexOf("sea") >= 0 || question.indexOf("water") >= 0) {
        mob.Command("emote looks out at the bay with something like reverence.");
        mob.Command("say I have been on this water forty years. It is different every day. Same water, different day.");
        mob.Command("say The sea keeps its own records. Does not share them. You just have to show up and see what it offers.", 2.0);
        return true;
    }

    if (question.indexOf("legend") >= 0 || question.indexOf("legendary") >= 0) {
        mob.Command("emote goes quiet for a moment.");
        mob.Command("say The Legend. Yes. A fish the size of a dog, they say, in the mountain lake. I have seen the ripple it leaves. Never seen the fish.");
        mob.Command("say Some fish are not meant to be caught. They are meant to be the reason you keep coming back.", 2.0);
        return true;
    }

    if (question.indexOf("life") >= 0 || question.indexOf("happy") >= 0 || question.indexOf("content") >= 0) {
        mob.Command("emote leans on the pier railing and considers the question.");
        mob.Command("say I fish. I eat what I catch. I sleep when it is dark. That is about all there is to it.");
        mob.Command("say Most people make it more complicated than that. Some of them figure it out eventually.", 2.0);
        return true;
    }

    var defaults = [
        "say Good bait never hurt. But mostly it is just patience.",
        "say The fish do not care about your problems. That is part of why I like them.",
        "say Come back when the tide turns. That is when they bite."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with the practiced eye of someone who has seen many things come out of the water.");
    mob.Command("say Hm. Where did you find that? The bay gives up interesting things if you know where to look.");
    return true;
}
