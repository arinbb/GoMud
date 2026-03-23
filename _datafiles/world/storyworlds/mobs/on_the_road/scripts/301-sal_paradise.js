
// Sal Paradise - the narrator, watching, writing it all down

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dean") >= 0 || question.indexOf("moriarty") >= 0) {
        mob.Command("emote looks in the direction Dean went and is quiet for a moment.");
        mob.Command("say Dean. I have been trying to describe Dean for three years now and the words are never right. He is... he is the most alive person I have ever known and also the most destructive.", 1.5);
        mob.Command("say I love him. I know what he is. I love him anyway. That is the honest version.", 3.0);
        mob.Command("emote makes a small note in the margin of his notebook.", 4.5);
        return true;
    }

    if (question.indexOf("road") >= 0 || question.indexOf("journey") >= 0 || question.indexOf("travel") >= 0) {
        mob.Command("emote looks at the road with an expression that contains a lot of things.");
        mob.Command("say I have crossed this country four times now. East to west, west to east, south to north. And the thing about it is -- the thing I keep finding -- is that the road is not what I thought it was going out, but it is not nothing either.", 1.5);
        mob.Command("say There is somewhere to go. There is something at the end. I just have not figured out yet whether it is place or person or just the going itself.", 3.5);
        return true;
    }

    if (question.indexOf("writing") >= 0 || question.indexOf("book") >= 0 || question.indexOf("novel") >= 0) {
        mob.Command("emote looks at his notebook.");
        mob.Command("say The book. It is all the book. Everything I am doing out here is the book, whether I know it or not. Dean is the engine, Carlo is the conscience, I am the one writing it down. Somebody has to.", 1.5);
        mob.Command("say I want to write it the way Dean drives -- fast, no brakes, the whole thing at once. I am still figuring out how.", 3.0);
        return true;
    }

    if (question.indexOf("sad") >= 0 || question.indexOf("lonely") >= 0 || question.indexOf("alone") >= 0) {
        mob.Command("emote nods slowly, looking at the road.");
        mob.Command("say Yeah. It is sad. The whole thing is sad underneath the joy. Dean is sad, the jazz is sad, the road at 3am is the saddest thing in the world. But you know what? Sad is not the same as bad. Sad is just honest.", 1.5);
        mob.Command("say The book is both. The joy and the sadness. They are the same book.", 3.0);
        return true;
    }

    if (question.indexOf("home") >= 0 || question.indexOf("new york") >= 0 || question.indexOf("aunt") >= 0) {
        mob.Command("emote looks east, which is the direction of New York from everywhere west of it.");
        mob.Command("say Home is the apartment in New York. The typewriter. The aunt who feeds me when I come back. It is the beginning and the end of every road I take.", 1.5);
        mob.Command("say Every time I leave I think this time I will stay gone. And then something pulls me back and I do not know if it is love or failure.", 3.0);
        return true;
    }

    var defaults = [
        "say I am writing this all down. You are in it now, whether you like it or not.",
        "say Ask me when we get somewhere. I think better when I am moving.",
        "emote looks at you with the patient attention of someone who has been watching people for a living."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it carefully and makes a note in his notebook.");
    mob.Command("say Everything is worth writing down. That is something I believe and also something that makes my life very complicated.");
    return true;
}
