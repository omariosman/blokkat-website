/* eslint-disable @next/next/no-img-element */
import React from "react";
import BlockquoteSection from "./blockquote-section";
import CommentRespondSection from "./comment-respond-section";
import CommentSection from "./comment-section";
import PostNavigation from "./post-navigation";
import TagSection from "./tag-section";

export default function SingleBlogPost() {
	return (
		<div className="fugu--single-blog-section">
			<img className="fugu--single-thumb" src="/images/all-img/blog2/single-blog.png" alt="" />
			<p>
				A technologically advanced society like Japan is a natural place for non-fungible tokens to flourish.
				While the adoption of NFTs has been slow in Japan thus far, we believe the conditions are ideal for
				sustained growth and innovation.
			</p>
			<h3>NFT’s Home in the East</h3>
			<p>
				Japanese values align with the essential nature of NFTs. For instance, omoiyari — awareness and
				consideration of others — is taught to Japanese school children from an early age. This principle
				parallels the community building & concern for barriers to entry common to NFT projects. Values like
				ganbaru (effort) and gaman enduring cultivated from years of quality education and broader socialization
				propel continued learning essential to Web3 technologies and overcoming barriers.
			</p>
			<p>
				The Japanese NFT community is in its early days. In this article, we’ll provide an overview of the
				community from standpoint of cultural exports, namely the mangaverse and gaming.
			</p>
			<h3>Anime and the Mangaverse</h3>
			<p>
				Japanese animation, known as anime, takes inspiration from manga. Manga parallel the comi books of the
				Western world from which they arose after World War II. And so we have the term ‘mangaverse’ which plays
				off ‘metaverse’. The visual nature and rich heritage behind established manga and anime present natural
				opportunities for transfer into the metaverse in the form of non-fungible tokens.
			</p>
			<h3>CloneX: Murakami x RTKFT</h3>
			<p>
				One popular mangaverse NFT project is CloneX. According to our data at the time of writing this artic
				sixth among collectibles offered on the Ethereum blockchain. RTFKT pronounced ‘artifa and contemporary
				Japanese artist Takashi Murak collaborated on this project that blends commercial art, streetwear, and
				metaverse experimentati in the shape of avatars. The collaboration makes sense because RTFKT is a
				strictly metaverse brand wh Murakami is one of the wealthiest living artists. His name brings instant
				recognition and credibility to any project.
			</p>
			<BlockquoteSection />
			<TagSection />
			<PostNavigation />
			<CommentSection />
			<CommentRespondSection />
		</div>
	);
}
