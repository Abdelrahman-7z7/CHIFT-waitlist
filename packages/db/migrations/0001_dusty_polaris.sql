PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_subscribers` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT '"2026-05-01T19:55:37.711Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2026-05-01T19:55:37.711Z"' NOT NULL,
	`traffic_source` text,
	`device` text,
	`email_verified` integer,
	`unsubscribed_at` integer,
	`confirmation_token` text,
	CONSTRAINT "email_check" CHECK("__new_subscribers"."email" LIKE '%@%.%')
);
--> statement-breakpoint
INSERT INTO `__new_subscribers`("id", "email", "created_at", "updated_at", "traffic_source", "device", "email_verified", "unsubscribed_at", "confirmation_token") SELECT "id", "email", "created_at", "updated_at", "traffic_source", "device", "email_verified", "unsubscribed_at", "confirmation_token" FROM `subscribers`;--> statement-breakpoint
DROP TABLE `subscribers`;--> statement-breakpoint
ALTER TABLE `__new_subscribers` RENAME TO `subscribers`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);