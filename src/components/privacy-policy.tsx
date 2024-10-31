"use client";

import React from "react";

interface PolicySection {
	id: string;
	title: string;
	content: string | string[];
	subsections?: PolicySection[];
}

const policyData: PolicySection[] = [
	{
		id: "introduction",
		title: "Introduction",
		content:
			"The Black Economic Improvement Corporation (BEIC) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.",
	},
	{
		id: "information-we-collect",
		title: "Information We Collect",
		content:
			"We collect various types of information in connection with the services we provide, including:",
		subsections: [
			{
				id: "personal-information",
				title: "1. Personal Information:",
				content:
					"- When you register for our programs, subscribe to our newsletter, make a donation, or contact us, we may collect personal information such as your name, email address, phone number, mailing address, and payment information.",
			},
			{
				id: "non-personal-information",
				title: "2. Non-Personal Information:",
				content:
					"- We also collect non-personal information that does not identify you directly. This can include demographic data, browser type, operating system, and usage information about how you interact with our website.",
			},
		],
	},
	{
		id: "how-we-use-your-information",
		title: "How We Use Your Information",
		content: [
			"We use the information we collect for various purposes, including:",
		],
		subsections: [
			{
				id: "providing-and-managing-services",
				title: "Providing and Managing Services",
				content: "- To provide and manage our services",
			},
			{
				id: "communication",
				title: "Communication",
				content:
					"- To communicate with you about our programs and initiatives",
			},
			{
				id: "improvement-of-services",
				title: "Improvement of Services",
				content: "- To improve our services and develop new ones",
			},
			{
				id: "compliance",
				title: "Compliance",
				content: "- To comply with legal obligations",
			},
		],
	},
	{
		id: "disclosure-of-your-information",
		title: "Disclosure of Your Information",
		content:
			"We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following circumstances:",
		subsections: [
			{
				id: "service-providers",
				title: "Service providers",
				content:
					"- Service Providers: We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties are obligated to keep your information confidential. ",
			},
			{
				id: "legal-requirements",
				title: "Legal Requirements",
				content:
					"- Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities (e.g., a court or a government agency)",
			},
		],
	},
	{
		id: "security-of-your-information",
		title: "Security of Your Information",
		content:
			"We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.",
	},
	{
		id: "your-data-protection-rights",
		title: "Your Data Protection Rights",
		content:
			"Depending on your location, you may have the following rights regarding your personal information:",

		subsections: [
			{
				id: "access",
				title: "Access",
				content:
					"- Access: You have the right to request copies of your personal information. ",
			},
			{
				id: "rectification",
				title: "Rectification",
				content:
					"- Rectification: You have the right to request that we correct any information you believe is inaccurate or incomplete. ",
			},
			{
				id: "erasure",
				title: "Erasure",
				content:
					"- Erasure: You have the right to request that we erase your personal information, under certain conditions. ",
			},
			{
				id: "rectification-of-processing",
				title: "Restriction of Processing",
				content:
					"- Restriction of Processing: You have the right to request that we restrict the processing of your personal data, under certain conditions. ",
			},
			{
				id: "objection-to-processing",
				title: "Objection to Processing",
				content:
					"- Objection to Processing: You have the right to object to our processing of your personal data, under certain conditions. ",
			},
			{
				id: "data-portability",
				title: "Data Portability",
				content:
					"- Data Portability: You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.",
			},
		],
	},
	{
		id: "cookies",
		title: "Cookies",
		content:
			"Our website may use cookies to enhance your experience. Cookies are small data files that are placed on your device when you visit a website. You can choose to disable cookies through your browser settings; however, this may affect your ability to use certain features of our website.",
	},
	{
		id: "changes-to-this-privacy-policy",
		title: "Changes to this privacy policy",
		content:
			"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
	},
];

const TableOfContents: React.FC<{ sections: PolicySection[] }> = ({
	sections,
}) => (
	<nav className="mb-8">
		<h2 className="mb-2 hidden text-lg font-bold md:block">
			Table of contents
		</h2>
		<ul className="hidden space-y-4 md:block">
			{sections.map((section) => (
				<li key={section.id}>
					<a
						href={`#${section.id}`}
						className="font-normal text-black"
					>
						{section.title}
					</a>
					{section.subsections && (
						<ul className="my-2 mt-1 gap-3 md:pl-4">
							{section.subsections.map((subsection) => (
								<li key={subsection.id}>
									<a
										href={`#${subsection.id}`}
										className="text-black"
									>
										{subsection.title}
									</a>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	</nav>
);

const PolicySection: React.FC<PolicySection> = ({
	id,
	title,
	content,
	subsections,
}) => (
	<div className="mb-6" id={id}>
		<div>
			<div className="text-xl font-bold">{title}</div>
		</div>
		<div>
			{Array.isArray(content) ? (
				<ul className="my-3 list-disc space-y-4 md:pl-5">
					{content.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			) : (
				<p>{content}</p>
			)}
			{subsections &&
				subsections.map((subsection) => (
					<PolicySection key={subsection.id} {...subsection} />
				))}
		</div>
	</div>
);

export function PrivacyPolicyComponent() {
	return (
		<div className="container mx-auto px-6 pt-[70px]">
			<h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
			<p className="mb-8 text-lg font-normal text-black">
				Effective date: October 14, 2024
			</p>
			<div className="relative">
				<div className="grid gap-8 md:grid-cols-[300px_1fr]">
					<div className="sticky top-[90px] max-h-[calc(100vh-120px)] self-start overflow-auto">
						<TableOfContents sections={policyData} />
					</div>
					<div>
						{policyData.map((section) => (
							<PolicySection key={section.id} {...section} />
						))}
						<div className="mb-8">
							<h1 className="text-xl font-bold">Contact Us</h1>
							<p className="font-normal">
								{" "}
								{`If you have any questions about this Privacy Policy, please contact us at:`}
							</p>
							<p className="font-normal">{`Black Economic Improvement Corporation (BEIC)`}</p>
							<p className="font-normal">{`Address: 305 E. Joppa Road, Towson Maryland 21286`}</p>
							<p className="font-normal">{`Email: tidwell@blackeconomicimprovementcorp.com`}</p>
							<p className="font-normal">{`Phone: +1 (410) 598-8055`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
