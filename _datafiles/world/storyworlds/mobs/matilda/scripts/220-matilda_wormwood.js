
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("book") >= 0 || question.indexOf("read") >= 0 || question.indexOf("library") >= 0) {
        mob.Command("emote looks up from her book, dark eyes shining.");
        mob.Command("say I started with the children's books, but Mrs. Phelps said I could try the grown-up ones. I've read Dickens, and Hemingway, and Steinbeck.");
        mob.Command("say Books make me feel less alone.", 2.0);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("parents") >= 0 || question.indexOf("wormwood") >= 0) {
        mob.Command("emote 's expression becomes very still.");
        mob.Command("say My father sells second-hand cars. My mother goes to bingo. They watch television every evening.");
        mob.Command("say They think reading is a waste of time. They think I'm... difficult.", 2.0);
        return true;
    }

    if (question.indexOf("trunchbull") >= 0 || question.indexOf("school") >= 0 || question.indexOf("headmistress") >= 0) {
        mob.Command("emote 's eyes narrow with quiet determination.");
        mob.Command("say Miss Trunchbull is very big and very mean. She puts children in the Chokey.");
        mob.Command("say But I've been thinking about her. I've been thinking very hard.", 2.0);
        return true;
    }

    if (question.indexOf("honey") >= 0 || question.indexOf("teacher") >= 0 || question.indexOf("miss honey") >= 0) {
        mob.Command("emote smiles — a real, warm smile that transforms her serious face.");
        mob.Command("say Miss Honey is wonderful. She's the only grown-up who listens to me properly.");
        mob.Command("say I wish... I wish she were happier. She deserves to be happy.", 2.0);
        return true;
    }

    if (question.indexOf("power") >= 0 || question.indexOf("telekinesis") >= 0 || question.indexOf("magic") >= 0 || question.indexOf("chalk") >= 0) {
        mob.Command("emote goes very still, her dark eyes intense.");
        mob.Command("say Something happens when I concentrate. Really concentrate. Things... move.");
        mob.Command("emote holds up her hand and stares at it, as if seeing something invisible.", 1.5);
        return true;
    }

    if (question.indexOf("lavender") >= 0 || question.indexOf("friend") >= 0) {
        mob.Command("say Lavender is my best friend. She's very brave.");
        mob.Command("emote smiles.", 1.0);
        mob.Command("say She put a newt in the Trunchbull's water jug once. It was brilliant.", 1.5);
        return true;
    }

    var defaults = [
        "say I find that a good book is the answer to most problems.",
        "say Did you know that at the age of five, Matilda had read every book in the children's section?",
        "emote gives you a look of quiet, patient intelligence."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("chalk") >= 0) {
        mob.Command("emote stares at the chalk with extraordinary intensity.");
        mob.Command("say I could make that move. If I tried. If I really tried.", 1.5);
        return true;
    }

    mob.Command("emote examines it with the careful attention of someone who takes everything seriously.");
    mob.Command("say That's very interesting. Thank you for showing me.");
    return true;
}
