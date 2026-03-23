
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("matilda") >= 0 || question.indexOf("girl") >= 0 || question.indexOf("child") >= 0) {
        mob.Command("emote leans forward, lowering her voice with wonder.");
        mob.Command("say That little girl walked in here at the age of four and asked for a book to read. I gave her a picture book.");
        mob.Command("say She came back and asked for something with more words. Within a week she had finished the entire children's section.", 2.0);
        mob.Command("say She's reading Dickens now. She's FOUR.", 3.0);
        return true;
    }

    if (question.indexOf("book") >= 0 || question.indexOf("recommend") >= 0 || question.indexOf("read") >= 0) {
        mob.Command("say Oh, we have wonderful books here! What do you enjoy?");
        mob.Command("emote adjusts her reading glasses with enthusiasm.");
        mob.Command("say I always say, there's a book for everyone. You just have to find the right one.", 2.0);
        return true;
    }

    if (question.indexOf("library") >= 0) {
        mob.Command("say This library has been here for over a hundred years. I've been librarian for twenty of them.");
        mob.Command("say Every book on these shelves has been read and loved by someone. That's what makes a library alive.", 2.0);
        return true;
    }

    if (question.indexOf("wormwood") >= 0 || question.indexOf("parents") >= 0 || question.indexOf("family") >= 0) {
        mob.Command("emote purses her lips, clearly holding back opinions.");
        mob.Command("say The Wormwoods are... not readers. They have never visited this library.");
        mob.Command("say That poor child walks here by herself. Every single day.", 2.0);
        return true;
    }

    var defaults = [
        "say Can I help you find something?",
        "say We just got some wonderful new arrivals. Let me show you.",
        "emote smiles warmly over her reading glasses."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
