import React from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold text-white sm:text-5xl">
					Contact Us
				</h1>
				<p className="mt-4 text-lg text-gray-400">
					We're here to help! If you have any questions or feedback, please feel
					free to reach out to us using the contact information below.
				</p>
			</div>
			<div className="mt-12 max-w-lg mx-auto">
				<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
					<div className="flex items-center justify-center px-6 py-4 bg-white shadow-lg rounded-lg">
						<div className="text-center">
							<FaEnvelope className="text-5xl text-blue-600 mx-auto mb-4" />
							<h2 className="text-xl font-medium text-gray-900">Email</h2>
							<p className="mt-1 text-lg text-gray-600">
								contact@moviecosmos.com
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center px-6 py-4 bg-white shadow-lg rounded-lg">
						<div className="text-center">
							<FaPhone className="text-5xl text-blue-600 mx-auto mb-4" />
							<h2 className="text-xl font-medium text-gray-900">Phone</h2>
							<p className="mt-1 text-lg text-gray-600">+1 (123) 456-7890</p>
						</div>
					</div>
					<div className="flex items-center justify-center px-6 py-4 bg-white shadow-lg rounded-lg">
						<div className="text-center">
							<FaTwitter className="text-5xl text-blue-600 mx-auto mb-4" />
							<h2 className="text-xl font-medium text-gray-900">Twitter</h2>
							<p className="mt-1 text-lg text-gray-600">@moviecosmos</p>
						</div>
					</div>
					<div className="flex items-center justify-center px-6 py-4 bg-white shadow-lg rounded-lg">
						<div className="text-center">
							<FaInstagram className="text-5xl text-blue-600 mx-auto mb-4" />
							<h2 className="text-xl font-medium text-gray-900">Instagram</h2>
							<p className="mt-1 text-lg text-gray-600">@moviecosmos</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
