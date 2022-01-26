import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="flex items-center py-10">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button pill variant="outline-yellow">
          Kontak
        </Button>
      </div>
    </div>
  );
}
