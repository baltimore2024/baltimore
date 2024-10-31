import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EmailIcon, MapIcon, PhoneIcon } from '@/lib/emma-icons';

export default function ContactUsPage() {
	return (
    <div className="bg-white  pt-[30px] min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">Get in touch with us</h1>
            <p className="text-lg text-gray-600 mb-8">
              These initiatives reflect our commitment to creating a holistic
              and inclusive approach to community development. By addressing
              various aspects of community life, we aim to create a supportive
              and thriving environment where everyone has the opportunity to
              succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center ">
                <EmailIcon />
                <span className=' break-words' >info@blackeconomicimprovementcorp.com</span>
              </div>
              <div className="flex items-center ">
                <PhoneIcon />
                {/* <Phone className='w-6 h-6 text-black mr-4 ' /> */}
                <span>+1 (410) 598-8055</span>
              </div>
              <div className="flex items-center ">
                <MapIcon />
                {/* <MapPin className='w-6 h-6 text-black mr-4' /> */}
                <span>305 E. Joppa Road, Towson Maryland 21286</span>
              </div>
            </div>
            <div className="bg-gray-100 py-12 w-full rounded-xl mt-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <iframe
                  title="BEIC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390483!2d-76.60118668411407!3d39.39184507950135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c808bfb9202443%3A0x9e2e9b11e89b77f5!2s305%20E%20Joppa%20Rd%2C%20Towson%2C%20MD%2021286!5e0!3m2!1sen!2sus!4v1645656282619!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  //   className="mb-16 h-3/4"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <Input id="phone" name="phone" type="tel" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose a topic
                </label>
                <Select
                // id='topic'
                // name='topic'
                // className='mt-1'
                >
                  <SelectTrigger id="topic-select" className="w-full">
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="Volunteer Opportunities">
                      Volunteer Opportunities
                    </SelectItem>
                    <SelectItem value="Program Registration">
                      Program Registration
                    </SelectItem>
                    <SelectItem value="other"> Other </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Which best describes you?
                </label>
                <div className="mt-2 space-y-2">
                  {[
                    "First choice",
                    "Second choice",
                    "Third choice",
                    "Fourth choice",
                    "Fifth choice",
                    "Other",
                  ].map((choice) => (
                    <div key={choice} className="flex items-center">
                      <input
                        id={choice.toLowerCase().replace(" ", "-")}
                        name="description"
                        type="radio"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                      />
                      <label
                        htmlFor={choice.toLowerCase().replace(" ", "-")}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {choice}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                />
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="terms"
                  name="terms"
                  className=" border-black text-black"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I accept the Terms
                </label>
              </div>
              <Button type="submit" className="w-1/5 bg-black rounded-3xl">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
