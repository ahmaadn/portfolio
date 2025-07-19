import rss from "@astrojs/rss";
import { SITE } from "@/config";

type Context = {
	site: string;
};

export async function GET(context: Context) {
	return rss({
		title: SITE.title,
		description: SITE.shortDescription,
		site: context.site,
		items: [],
	});
}
