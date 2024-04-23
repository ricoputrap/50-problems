CREATE TABLE `problem` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`upvote_count` integer DEFAULT 0,
	`username` text NOT NULL,
	`twitter_username` text,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `report` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`problem_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`problem_id`) REFERENCES `problem`(`id`) ON UPDATE no action ON DELETE no action
);
