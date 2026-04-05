package usercommands

import (
	"fmt"

	"github.com/GoMudEngine/GoMud/internal/events"
	"github.com/GoMudEngine/GoMud/internal/rooms"
	"github.com/GoMudEngine/GoMud/internal/users"
	"github.com/GoMudEngine/GoMud/internal/util"
)

// Hint shows a contextual hint for the current room, if one is defined.
func Hint(rest string, user *users.UserRecord, room *rooms.Room, flags events.EventFlag) (bool, error) {

	if len(room.Hints) == 0 {
		user.SendText(`<ansi fg="8">Nothing in particular draws your attention here.</ansi>`)
		return true, nil
	}

	hint := room.Hints[util.Rand(len(room.Hints))]
	user.SendText(``)
	user.SendText(fmt.Sprintf(`<ansi fg="yellow">[ Hint ]</ansi> <ansi fg="8">%s</ansi>`, hint))
	user.SendText(``)

	return true, nil
}
