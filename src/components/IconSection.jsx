import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHospital } from "react-icons/bs";

function IconSection() {
  return (
    <section className="w-full">
      <div className="section-container text-center">
        <div className="title mb-12">
          <h1 className="font-playfair font-bold text-5xl mb-6 tracking-wide">
            What We Provide
          </h1>
        </div>
        <div className="icon-container flex w-full justify-center">
          <div className="icon-box mx-16 text-center flex items-center flex-col">
            <AiOutlineShoppingCart size={70} color="#4ade80" />
            <a href="#" className="text-xl font-medium">
              Pharmacy
            </a>
          </div>
          <div className="icon-box mx-16 text-center flex items-center flex-col">
            <AiOutlineHeart size={70} color="#4ade80" />
            <a href="#" className="text-xl font-medium">
              Medicine
            </a>
          </div>
          <div className="icon-box mx-16 text-center flex items-center flex-col">
            <BsHospital size={70} color="#4ade80" />
            <a href="#" className="text-xl font-medium">
              Hospitals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconSection;
