// The Grand Library — home room
// Handles: guestbook, cascading browse menu

// All portal destinations organized by media type
// Format: [display_name, room_id, ansi_color]
var CATEGORIES = [
    ["Books and Poetry", "books", "cyan"],
    ["Films and Television", "films", "red"],
    ["Music", "music", "yellow"],
    ["Paintings and Visual Art", "paintings", "blue"],
    ["Video Games", "games", "magenta"]
];

var BOOKS = [
    ["Alices Adventures in Wonderland", 100, "cyan"],
    ["The Odyssey", 200, "11"],
    ["Robert Haydens Collected Poems", 700, "8"],
    ["The Hobbit", 970, "10"],
    ["A Confederacy of Dunces", 1200, "yellow"],
    ["Matilda", 1400, "magenta"],
    ["Goodnight Moon", 1500, "12"],
    ["On the Road", 1740, "3"],
    ["Crime and Punishment", 1800, "red"],
    ["The Monkey Wrench Gang", 1880, "9"],
    ["The Little Prince", 1900, "14"],
    ["Nineteen Eighty Four", 1960, "8"]
];

var FILMS = [
    ["Beetlejuice", 600, "10"],
    ["Peewees Big Adventure", 800, "red"],
    ["The Shining", 950, "15"],
    ["Buffalo 66", 1300, "8"],
    ["Waynes World", 1520, "cyan"],
    ["Jurassic Park", 1550, "9"],
    ["Die Die My Darling", 1600, "5"],
    ["The Sopranos", 1720, "3"],
    ["The Little Prince", 1900, "14"],
    ["Ghostbusters", 1920, "10"],
    ["Back to the Future", 1940, "11"],
    ["Forbidden Planet", 1980, "14"],
    ["Seinfeld", 2000, "yellow"],
    ["Harold and Maude", 2020, "3"],
    ["Its Always Sunny", 2040, "yellow"],
    ["The Andy Griffith Show", 2060, "10"],
    ["Up in Smoke", 2100, "9"],
    ["Paris Texas", 2120, "red"],
    ["Northern Exposure", 2140, "cyan"],
    ["The Wire", 2200, "8"],
    ["Six Feet Under", 2220, "5"],
    ["The Office", 2300, "3"],
    ["Best in Show", 2340, "11"],
    ["Billy Madison", 2360, "yellow"],
    ["MTVs The State", 2380, "magenta"],
    ["Stand By Me", 2400, "10"],
    ["The Sandlot", 2420, "9"],
    ["Idiocracy", 2470, "10"]
];

var MUSIC = [
    ["In Utero (Nirvana)", 1100, "cyan"],
    ["Blonde on Blonde (Bob Dylan)", 1700, "3"],
    ["Harvest (Neil Young)", 2240, "yellow"],
    ["Siamese Dream (Smashing Pumpkins)", 2320, "13"]
];

var PAINTINGS = [
    ["Starry Night (Van Gogh)", 500, "12"]
];

var GAMES = [
    ["Stardew Valley", 1820, "10"],
    ["Far Cry 5", 1840, "red"],
    ["Super Mario Bros", 1860, "9"],
    ["Tass Times in Tonetown", 2450, "magenta"]
];

function showCategories(user) {
    user.SetTempData("library_menu", "categories");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===== Browse the Library =====</ansi>");
    SendUserMessage(user.UserId(), "");
    for (var i = 0; i < CATEGORIES.length; i++) {
        var num = i + 1;
        SendUserMessage(user.UserId(), "  <ansi fg=\"stat\">" + num + ".</ansi> <ansi fg=\"" + CATEGORIES[i][2] + "\">" + CATEGORIES[i][0] + "</ansi>");
    }
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type a number to browse that section.</ansi>");
    SendUserMessage(user.UserId(), "");
}

function showTitles(user, title, items, menuKey) {
    user.SetTempData("library_menu", menuKey);
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===== " + title + " =====</ansi>");
    SendUserMessage(user.UserId(), "");
    for (var i = 0; i < items.length; i++) {
        var num = i + 1;
        var pad = num < 10 ? " " : "";
        SendUserMessage(user.UserId(), "  <ansi fg=\"stat\">" + pad + num + ".</ansi> <ansi fg=\"" + items[i][2] + "\">" + items[i][0] + "</ansi>");
    }
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type a number to enter that world, or 'browse' to go back.</ansi>");
    SendUserMessage(user.UserId(), "");
}

function getCategoryItems(menuKey) {
    if (menuKey == "books") return BOOKS;
    if (menuKey == "films") return FILMS;
    if (menuKey == "music") return MUSIC;
    if (menuKey == "paintings") return PAINTINGS;
    if (menuKey == "games") return GAMES;
    return null;
}

function enterWorld(user, room, name, destRoom) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">You step into " + name + "...</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into a story and vanishes.", user.UserId());
    user.SetTempData("library_menu", "");
    user.MoveRoom(destRoom);
}

function onCommand(cmd, rest, user, room) {

    // Browse — show categories (or go back to categories)
    if (cmd == "browse" || cmd == "back") {
        showCategories(user);
        return true;
    }

    // Number selection — context-dependent
    var num = parseInt(cmd);
    if (!isNaN(num) && num > 0) {
        var menuKey = user.GetTempData("library_menu");

        // At the category level — pick a category
        if (menuKey == "categories") {
            if (num <= CATEGORIES.length) {
                var catKey = CATEGORIES[num - 1][1];
                var catName = CATEGORIES[num - 1][0];
                var items = getCategoryItems(catKey);
                showTitles(user, catName, items, catKey);
                return true;
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">No category at that number.</ansi>");
                return true;
            }
        }

        // At a title level — enter the world
        var items2 = getCategoryItems(menuKey);
        if (items2 != null && num <= items2.length) {
            var pick = items2[num - 1];
            enterWorld(user, room, pick[0], pick[1]);
            return true;
        } else if (items2 != null) {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">No title at that number. Type browse to go back.</ansi>");
            return true;
        }
    }

    // Guestbook signing
    if (cmd == "sign") {
        var signKey = "library_guestbook_signed";
        var playerName = user.GetCharacterName(false);

        if (rest == "" || rest == "guestbook") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">What would you like to write? Type: sign <your message></ansi>");
            return true;
        }

        var message = rest;
        if (message.indexOf("guestbook ") == 0) {
            message = message.substring(10);
        }
        if (message.length > 80) {
            message = message.substring(0, 80);
        }

        var entryKey = "guestbook_" + playerName;
        room.SetPermData(entryKey, message);

        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You write in the guestbook. The ink shimmers, then settles.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + message + "\" -- " + playerName + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something in the guestbook.", user.UserId());
        return true;
    }

    // Guestbook reading
    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Names and notes fill the pages:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" -- N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" -- J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" -- O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" -- W. & G.</ansi>");

        var playerName2 = user.GetCharacterName(false);
        var myEntry = room.GetPermData("guestbook_" + playerName2);
        if (myEntry != null && myEntry != "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + myEntry + "\" -- " + playerName2 + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
