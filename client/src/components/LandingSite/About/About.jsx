import { TeamCard } from "./TeamMember";
function About() {

  const warden = {
    name: "warden 1",
    designation: "Boys Hostel",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const Warden = {
    name: "warden 2",
    designation: "Boys Hostel",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const Caretaker = {
    name: "Caretaker",
    designation: "Boys Hostel",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Welcome to Management System Solutions!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={warden} />
        <TeamCard member={Warden} />
        <TeamCard member={Caretaker} />
        
      </div>
    </>
  );
}
export { About };