import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { events } from "@/lib/constrants"

const Page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev Events</h1>
      <p className="text-center mt-2 text-xl font-extralight">Hackathons, Workshops, Meetups, and Conferences, All in One Place</p>
      <ExploreBtn />

      <div className="mt-14 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {/* map(()=>())means return this automatically,No need to write return */
            events.map((event) => (
              <li key={event.title}>
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