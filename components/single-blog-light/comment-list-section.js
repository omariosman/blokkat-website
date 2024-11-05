/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function CommentListSection() {
	return (
		<div className="fugu-comment-section">
			<h5>3 comments on this post:</h5>
			<div className="fugu-comment-wrap">
				<div className="fugu-comment-item">
					<div className="fugu-comment-author">
						<img src="/images/all-img/blog/comment1.png" alt="" />
					</div>
					<div className="fugu-comment-author-data">
						<h6>Kathryn Murphy</h6>
						<span>August 26, 2022</span>
						<p>
							It is a long established fact that a reader will be distrac readable content of a page when
							looking at its layout. The point of using is that it has two.
						</p>
					</div>
					<Link href={"#"} legacyBehavior>
						<a className="comment-reply">Reply</a>
					</Link>
				</div>
				<div className="fugu-comment-item">
					<div className="fugu-comment-author author2">
						<img src="/images/all-img/blog/comment3.png" alt="" />
					</div>
					<div className="fugu-comment-author-data">
						<h6>Darrell Steward</h6>
						<span>August 26, 2022</span>
						<p>
							It is a long established fact that a reader will be distra readable content of a page when
							looking its layout. The point of using.
						</p>
					</div>
					<Link href={"#"} legacyBehavior>
						<a className="comment-reply">Reply</a>
					</Link>
				</div>
				<div className="fugu-comment-item">
					<div className="fugu-comment-author">
						<img src="/images/all-img/blog/comment2.png" alt="" />
					</div>
					<div className="fugu-comment-author-data">
						<h6>Ronald Richards</h6>
						<span>August 26, 2022</span>
						<p>
							It is a long established fact that a reader will be distrac readable content of a page when
							looking at its layout. The point of using is that it has two.
						</p>
					</div>
					<Link href={"#"} legacyBehavior>
						<a className="comment-reply">Reply</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
