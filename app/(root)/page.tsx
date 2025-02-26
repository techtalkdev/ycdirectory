import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string}>}) {
  const query = ( await searchParams ).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'Mike'},
    _id: 1,
    description: 'This is a description',
    image: 'https://plus.unsplash.com/premium_photo-1681126366707-8abb18f5ec5a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2UlMjByb2JvdHN8ZW58MHx8MHx8fDA%3D',
    category: 'Robots',
    title: 'Robotics'
  },
];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
            Pitch Your Startup, <br />
            Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote and Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}  />
            ))
          ): (
            <p className="no-results">No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
