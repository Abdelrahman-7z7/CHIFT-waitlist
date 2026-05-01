CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT '"2026-05-01T19:55:11.298Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2026-05-01T19:55:11.298Z"' NOT NULL,
	`traffic_source` text,
	`device` text,
	`email_verified` integer,
	`unsubscribed_at` integer,
	`confirmation_token` text,
	CONSTRAINT "email_check" CHECK("subscribers"."email" LIKE '%@%.%')
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);