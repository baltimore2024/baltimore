import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    // <footer className='bg-purple-600 text-white py-16 px-8'>
    // 	<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
    // 		<div>
    // 			<h3 className='text-2xl font-bold mb-4'>
    // 				Get started
    // 			</h3>
    // 			<p className='mb-6'>
    // 				Join the Black Economic Improvement Corporation
    // 				and be part of the change in your community.
    // 			</p>
    // 			<div className='flex space-x-4'>
    // 				<Button
    // 					variant='outline'
    // 					className='text-white border-white hover:bg-white hover:text-purple-600'
    // 				>
    // 					Sign Up
    // 				</Button>
    // 				<Button
    // 					variant='outline'
    // 					className='text-white border-white hover:bg-white hover:text-purple-600'
    // 				>
    // 					Learn More
    // 				</Button>
    // 			</div>
    // 		</div>
    // 		<div>
    // 			<h3 className='text-2xl font-bold mb-4'>
    // 				Let's get in touch
    // 			</h3>
    // 			<p className='mb-6'>
    // 				Have questions or want to get involved? Reach out
    // 				to us and a team member will be in touch shortly.
    // 			</p>
    // 			<Button className='bg-white text-purple-600 hover:bg-gray-100'>
    // 				Contact Us
    // 			</Button>
    // 		</div>
    // 	</div>
    // 	<div className='mt-12 text-center text-sm'>
    // 		© 2024 Black Economic Improvement Corporation. All rights
    // 		reserved.
    // 	</div>
    // </footer>
    <footer className="bg-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">
            Join us in our initiatives to make a meaningful and lasting impact!
          </h3>
          <p className="max-w-md">
            These initiatives reflect our commitment to creating a holistic and
            inclusive approach to community development. By addressing various
            aspects of personal and community growth, we aim to create a
            supportive and thriving environment where everyone has the
            opportunity to succeed.
          </p>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-lg font-bold mb-2">Let's get in touch</h4>
          <p className="mb-4">
            Have questions or want to get involved? Reach out to us through our
            contact form, and a team member will be in touch shortly.
          </p>
          <Button className="bg-white text-purple-600">Contact us</Button>
        </div>
      </div>
    </footer>
  );
}
