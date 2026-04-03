import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { IEvent } from "@/database"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const Page = async () => {

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();


  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev Events</h1>
      <p className="text-center mt-2 text-xl font-extralight">Hackathons, Workshops, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />

      <div className="mt-14 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {/* map(()=>())means return this automatically,No need to write return */
            events && events.length > 0 && events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Page