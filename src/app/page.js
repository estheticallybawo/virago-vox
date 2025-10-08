//'use client';
import AddProfile from "./admin/add-profile/page";
import EditProfile from "./admin/edit-profile/[id]/page";
import Waitlist from "./waitlist/page";





export default function Page() {
  return (
    <>
    <EditProfile/>
    <AddProfile/>
    </>
  );
}
