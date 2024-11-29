/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import HCaptcha from "react-hcaptcha";

const BASE_ENDPOINT = "https://blokkat-website-backend-cbw2vjbhp-omar-osmans-projects.vercel.app";

export default function ContactFormSection() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [captchaToken, setCaptchaToken] = useState("");

	const onSubmit = async (data) => {
		if (!captchaToken) {
			alert("Please complete the CAPTCHA.");
			return;
		}
		try {
			const resourceName = "send-mail";
			const response = await fetch(`${BASE_ENDPOINT}/api/${resourceName}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					senderEmail: data.email,
					senderName: data.name,
					subject: "Contact us",
					text: data.comment || "Hello I want to contact Blokkat",
					category: "Blokkat website",
					captchaToken
				}),
			});
	
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
	
			const result = await response.json();
			console.log("Email sent successfully:", result);
			alert("Message sent successfully!");
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Failed to send the message. Please try again.");
		}
	};
		return (
		<div className="section fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-5 col-lg-6 col-md-10">
						<div className="fugu-default-content contact-page">
							<h2>Have any questions? We will talk to you sincerely anytime</h2>
							<p>
								If you have any questions about subscription or usage, please fill out the form and our
								team will get back to you within 24 hours.
							</p>
							<div className="fugu-contact-info">
								<ul>
									<li>
										<Link href="tel:123">
											<div className="fugu-contact-info-icon">
												<img src="/images/social/call.svg" alt="" />
											</div>
											<h5>Call us</h5>
											<p>+201147727919</p>
										</Link>
									</li>
									<li>
										<Link href="mailto:name@email.com">
											<div className="fugu-contact-info-icon">
												<img src="/images/social/email.svg" alt="" />
											</div>
											<h5>Email us</h5>
											<p>blokkat.blockchain.ed@gmail.com</p>
										</Link>
									</li>
									<li>
										<Link href="">
											<div className="fugu-contact-info-icon">
												<img src="/images/social/map.svg" alt="" />
											</div>
											<h5>Office address</h5>
											<p>Cairo, Egypt.</p>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 offset-xl-1">
						<div className="fugu-contact-wrap  wow fadeInUpX">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="fugu-input-field">
									<label>Your name</label>
									<input
										type="text"
										placeholder="Your Name*"
										{...register("name", { required: true })}
										aria-invalid={errors.name ? "true" : "false"}
									/>
									{errors.name?.type === "required" && (
										<p role="alert" className="error">
											First name is required
										</p>
									)}
								</div>
								<div className="fugu-input-field">
									<label>Email address</label>
									<input
										type="email"
										placeholder="Your Email*"
										{...register("email", { required: true })}
										aria-invalid={errors.email ? "true" : "false"}
									/>
									{errors.email?.type === "required" && (
										<p role="alert" className="error">
											Email is required
										</p>
									)}
								</div>
								<div className="fugu-input-field">
									<label>Write your message</label>
									<textarea
										name="textarea"
										placeholder="Write your comment*"
										{...register("comment")}
									></textarea>
								</div>
								<HCaptcha
								sitekey="2c264efe-a4c2-4498-a1d2-8f18788ebb52"
								onVerify={(token) => setCaptchaToken(token)}
								className="hcaptcha-wrapper"
							/>
								<button id="fugu-input-submit" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
