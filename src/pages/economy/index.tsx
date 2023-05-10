import ListingCard from "@/Component/ListingCard";
import Image from "next/image";
import { useRouter } from "next/router";

export default function EconomyPage() {
  const router = useRouter();

  const handleNaviagtion = () => {
    router.push("/economy/2");
  };
  return (
    <div
      onClick={handleNaviagtion}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridGap: "10px",
      }}
      className=" mx-3"
      
    >
        EconomyPage
      {[1, 2, 3, 4, 5, 5, 67, , 88, 9, 9, 99, 9, 99].map((item, index) => {
        return <ListingCard key={index} />;
      })}
    </div>
  );
}
