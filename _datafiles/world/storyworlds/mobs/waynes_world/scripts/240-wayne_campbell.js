
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("aurora") >= 0 || question.indexOf("illinois") >= 0) {
        mob.Command("say Aurora, Illinois. Greatest city in the world. Population: us.");
        mob.Command("emote does the gun-fingers.", 1.5);
        mob.Command("say People ask why we do the show from Aurora. I tell them: why NOT Aurora? Why NOT a basement? Why NOT cable access? The answer is always 'no reason.' No reason at all.", 3.0);
        return true;
    }

    if (question.indexOf("cassandra") >= 0 || question.indexOf("girl") >= 0 || question.indexOf("love") >= 0) {
        mob.Command("emote gets a faraway look.");
        mob.Command("say Cassandra. She's incredible. She sings like... you know that feeling when you hear the exact right guitar chord? It's like that but also she's beautiful.", 1.5);
        mob.Command("say I would do anything for her. I mean ANYTHING. Except give up the show. But also maybe the show.", 3.5);
        return true;
    }

    if (question.indexOf("show") >= 0 || question.indexOf("cable") >= 0 || question.indexOf("broadcast") >= 0) {
        mob.Command("say Wayne's World! Party time! Excellent!");
        mob.Command("emote does the camera-address spin.", 1.5);
        mob.Command("say People say it's just cable access. I say it's the FUTURE. We are speaking directly to the people. No middleman. No corporate filter. Just me, Garth, and the good people of Aurora watching at midnight.", 3.0);
        return true;
    }

    if (question.indexOf("rock") >= 0 || question.indexOf("music") >= 0 || question.indexOf("guitar") >= 0) {
        mob.Command("emote grabs an imaginary guitar and plays three perfect silent notes.");
        mob.Command("say Led Zeppelin. Rush. Aerosmith. Alice Cooper. These are not bands. These are religions.", 1.5);
        mob.Command("say And Hendrix. Always Hendrix. The man played a guitar like it was a conversation with God and God was listening.", 3.0);
        return true;
    }

    if (question.indexOf("benjamin") >= 0 || question.indexOf("kane") >= 0 || question.indexOf("corporate") >= 0) {
        mob.Command("emote 's face does something complicated.");
        mob.Command("say Benjamin is... he's a... look, he's not excellent. I'll say that. He wants to take the show and make it a product and a product is not a show.", 1.5);
        mob.Command("say We do this because we LOVE it. The moment you do something you love for someone else's reasons, you've lost the thing that made it worth doing.", 3.5);
        return true;
    }

    if (question.indexOf("garth") >= 0 || question.indexOf("algar") >= 0) {
        mob.Command("say Garth is my best friend. Not in a soft way. In a REAL way. He's brilliant and he's weird and he would do anything for the people he cares about.");
        mob.Command("emote nods once, definitively.", 2.0);
        mob.Command("say Also he is a better drummer than you think. And you probably already think he's very good. He's better than that.", 3.5);
        return true;
    }

    if (question.indexOf("fourth wall") >= 0 || question.indexOf("camera") >= 0 || question.indexOf("watching") >= 0) {
        mob.Command("emote turns directly to face you with an unsettling level of awareness.");
        mob.Command("say Yeah. I know. I've always known. It's fine. Hi.", 1.5);
        mob.Command("say Some people find it weird. I find it liberating. If you're going to be observed, you might as well wave back.", 3.0);
        return true;
    }

    var defaults = [
        "say Excellent question. Excellent. I'll think about that.",
        "say SCHWING! Wait, that wasn't really appropriate. Actually, yes it was.",
        "say Party on! I mean, that's basically my answer to everything.",
        "emote points finger-guns. You know what I'm saying?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
