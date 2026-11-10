import { links, marcus } from "@/lib/content";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn btn-orange" href={links.tel(marcus)}>Call {marcus.phone}</a>
      <a className="btn btn-line" href="#places">Find us</a>
    </div>
  );
}
