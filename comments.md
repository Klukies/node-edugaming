18/04
======
- I think you can simplify your codebase a bit:
why do you separate routes and controllers? Both are fairly small and simple,
why not put them in one file?

Especially in a controller, I would not expect to see "express/http"-related
 code such as request and/or responses.

- if you do not plan on using the users-route, please remove it from your final
version.

- I have no technical comments on your work. In general I think you are doing a
good job, my concern is mainly "over complication": see my first remark. I had
the same feeling when looking at your DB code: I had to jump from one file to
another to find the info (eg.: routes/games.js -> controller/gameController.js ->
  config/db.config.js ->models/Game.js ; to find the info about Game in the DB.)
  But in general: good job.
