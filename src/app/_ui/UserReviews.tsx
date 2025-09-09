import COMMENTS from "../_lib/data/comments";
import Comment from "./Comment";

export default function UserReviews() {
  return (
    <section className="mt-[50px] max-md:p-0 p-30 flex flex-col items-center ">
      <h2 className="text-[36px] font-bold">User Reviews</h2>
      <div className="flex justify-center mt-[80px] items-start w-1/1 gap-10  flex-wrap">
        {COMMENTS.map((val, i) => (
          <Comment
            key={i}
            title={val.title}
            desc={val.description}
            descShort={val.descShort}
            profilePic={val.profilePic}
            username={val.username}
          />
        ))}
      </div>
    </section>
  );
}
