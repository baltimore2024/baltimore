import Stories from "@/components/shared/stories";
import TileCards from "@/components/shared/tile-cards";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EVENTS, NEWS, STORIES } from "@/lib/const";
import Image from "next/image";

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5FB]">
      <main className="flex-grow max-w-6xl mx-auto p-8   ">
        <h1 className="text-4xl font-bold text-center mb-4">News</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay up-to-date with the latest news and updates from the Black
          Economic Improvement Corporation (BEIC). Here, you'll find information
          on our recent activities, upcoming events, and success stories from
          our community.
        </p>
        <div className="grid grid-cols-1 gap-7">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-7`}>
            {NEWS.map((news, k) => (
              <TileCards
                key={k}
                detail={news.detail}
                title={news.title}
                image={news.image}
                read={news.read}
                type={news.type}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div className={""}>
              <Image
                src={"/news-image-4.png"}
                width={"1000"}
                height={"1000"}
                alt={"image"}
              />
              <p className="text-[12px] font-bold my-[10px] ">Latest News</p>
              <p className="font-bold">
                {"Community Health Fair a Huge Success"}
              </p>
              <p className="text-[14px] mt-[10px] ">
                {
                  "Our recent community health fair was a resounding success, with over 500 attendees receiving free health screenings, wellness advice, and fitness demonstrations. Thank you to all our volunteers and partners who made this event possible."
                }
              </p>
              <p className="mt-[20px]">• {"5"} min read</p>
            </div>
            <div className={""}>
              <Image
                src={"/news-image-5.png"}
                width={"1000"}
                height={"1000"}
                alt={"image"}
              />
              <p className="text-[12px] font-bold my-[10px] ">Latest News</p>
              <p className="font-bold">
                {"Youth Empowerment Program Celebrates Graduates"}
              </p>
              <p className="text-[14px] mt-[10px] ">
                {
                  "Congratulations to the latest graduates of our Youth Empowerment Program! These young individuals have completed mentorship sessions, leadership training, and community service projects. We are proud of their achievements and excited to see their continued growth."
                }
              </p>
              <p className="mt-[20px]">• {"5"} min read</p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-left mb-4 mt-[50px] ">
          Upcoming Events
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-[40px]  gap-7">
          {EVENTS.map((events, k) => (
            <TileCards
              key={k}
              detail={events.detail}
              image={events.image}
              title={events.title}
              type={events.type}
            />
          ))}
        </div>
        <div className=" w-full md:w-[70%] mx-auto ">
          <h1 className="text-4xl text-center font-bold mb-4 mt-[100px] ">
            Success Stories
          </h1>
          <p className="mt-[20px] text-center ">
            Stay connected with us for more news, events, and stories that
            highlight the impact of BEIC’s work. Together, we can continue to
            empower and uplift our community
          </p>
          <div className="grid grid-cols-1 gap-7 mt-[20px]">
            {STORIES.map((story, k) => (
              <Stories
                key={k}
                detail={story.detail}
                title={story.title}
                name={story.name}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
