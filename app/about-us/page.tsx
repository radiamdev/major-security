import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import icon from "@/public/Photos/Icon.png";
import play from "@/public/Photos/Polygon 1.png";
import folder from "@/public/Photos/folder.png";
import vector from "@/public/Photos/Vector.png";
import crime from "@/public/Photos/crime scene.png";
import elipse from "@/public/Photos/Elipse.png";
import cercle from "@/public/Photos/Image (1).png";
import phone from "@/public/Photos/phone.png";
import fleche from "@/public/Photos/arrow-down-right.png";

export default function AboutUS() {
  return (
    <div className="About">
      <Header />
      <div className="about-image bg-[#2A2A2A] h-[500px] flex justify-center items-center">
        <div className="about-image-text text-white flex flex-col justify-center items-center">
          <div className="about-titre text-4xl leading-relaxed">About Us</div>
          <div className="about-titre-text text-sm w-[500px] text-center leading-relaxed">
            Arcu augue tristique elementum gravida lectus risus. Tortor nibh a
            amet eu blandit vitae at odio in. Eget lectus viverra dignissim in
            leo. Nunc.
          </div>
        </div>
      </div>
      <section className="about-discovery m-20">
        <div className="discover-one flex justify-around h-[400px]">
          <div className="discover-one-left w-[50%]">
            <span className="text-sm">About us</span>
            <div className="discover-one-text text-4xl font-bold w-[70%] my-2 leading-relaxed">
              Discover Our Security Legacy
            </div>
            <div className="discover-one-little-text text-[#7B7B7B] text-sm w-[60%] my-10 leading-relaxed">
              Pharetra neque feugiat commodo vitae viverra id in risus in ut
              urna lacinia.
            </div>
            <div className="discover-one-button">
              <a
                href="#"
                className="bg-[#0F0F0F] button text-white p-3 rounded-lg"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="discover-one-right bg-[#2A2A2A] w-[50%]"></div>
        </div>
        <div className="discover-two flex h-[300px]">
          <div className="discover-two-left flex w-[50%]">
            <div className="left-one w-[50%]">
              <div className="hundred relative h-[50%]">
                <span className="text-5xl font-semibold absolute top-12">
                  100%
                </span>
                <div className="badge absolute top-0 bg-blue-400 rounded-full ">
                  <span className="p-3 text-white">01</span>
                </div>
                <span className="p-2 absolute bottom-2 left-[50px] text-sm">
                  Satisfied Clients
                </span>
              </div>
              <div className="two-hundred relative h-[50%]">
                <span className="text-5xl font-semibold absolute top-12">
                  200+
                </span>
                <div className="badge absolute top-0 bg-red-600 rounded-full ">
                  <span className="p-3 text-white">02</span>
                </div>
                <span className="p-2 absolute bottom-2 left-[50px] text-sm">
                  Total Awards
                </span>
              </div>
            </div>
            <div className="left-two bg-[#2A2A2A] w-[50%]"></div>
          </div>
          <div className="discover-two-right w-[50%] relative">
            <div className="right ">
              <div className="right-title absolute top-14 left-20 text-2xl font-bold w-52">
                Customer-Centric Approach
              </div>
              <div className="right-text text-[#7B7B7B] absolute bottom-14 right-0 text-right leading-relaxed w-82 text-sm">
                Auctor neque feugiat ornare rhoncus. Odio sed porta in nibh dui.
                Orci hac blandit.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-story m-20">
        <div className="title text-5xl my-12">Our Story</div>
        <div className="story-one flex h-[300px]">
          <div className="story-one-left  w-[50%] relative py-10">
            <div className="one-title text-4xl py-8">The Early Years</div>
            <div className="one-text text-[#7B7B7B] w-96 text-xl">
              Pharetra neque feugiat commodo vitae viverra id in risus in ut
              urna lacinia.
            </div>
            <div className="one-link py-5">
              <span className=" border-b text-lg">Read More</span>
            </div>
            <div className="badge-image absolute top-12">
              <Image src={icon} alt="badge" />
            </div>
          </div>
          <div className="story-one-right bg-[#2A2A2A] w-[50%] relative">
            <div className="play-icon absolute bottom-0 bg-blue-600 p-10">
              <Image src={play} alt="icon" />
            </div>
          </div>
        </div>
        <div className="story-two flex">
          <div className="story-two-left  w-[50%] relative py-10">
            <div className="two-title text-4xl py-8">The 1980 and 1990s</div>
            <div className="two-text text-[#7B7B7B] w-96 text-xl">
              Pharetra neque feugiat commodo vitae viverra id in risus in ut
              urna lacinia.
            </div>
            <div className="one-link py-5">
              <span className=" border-b text-lg">Read More</span>
            </div>
            <div className="badge-image absolute top-12">
              <Image src={icon} alt="badge" />
            </div>
          </div>
          <div className="story-two-right  w-[50%] relative py-10">
            <div className="two-title text-4xl py-8">From 2000 to Now</div>
            <div className="two-text text-[#7B7B7B] w-96 text-xl">
              Pharetra neque feugiat commodo vitae viverra id in risus in ut
              urna lacinia.
            </div>
            <div className="two-link py-5">
              <span className=" border-b text-lg">Read More</span>
            </div>
            <div className="badge-image absolute top-12">
              <Image src={icon} alt="badge" />
            </div>
          </div>
        </div>
      </section>
      <section className="our-expertise bg-[#F9F9F9]  ">
        <div className="expertise-container m-20 h-[900px] py-16 flex">
          <div className="expertise-left w-[50%]">
            <div className="bg-image bg-[#2A2A2A] w-[80%] h-[80%]"></div>
            <div className="h-[30%] py-12">
              <div className="chiffre">
                <span className="text-7xl font-semibold">38+</span>
              </div>
              <span className="py-4 text-[#7B7B7B] bottom-2 text-xl">
                Years of Experience
              </span>
            </div>
          </div>
          <div className="expertise-right w-[50%]">
            <div className="expertise-title pb-5">Our Expertise</div>
            <div className="expertise-big-title text-6xl leading-snug">
              Security Solutions by Experts, for Experts
            </div>
            <div className="expertise-text text-[#7B7B7B] leading-10 w-[550px]">
              Praesent ornare ornare mi gravida convallis magna. Ultricies ipsum
              tortor dapibus in senectus. Ac id massa tortor lacus.
            </div>
            <div className="expertise-progress pt-16">
              <div className="cybersecurity flex items-center">
                <div className="image p-6 bg-[#0F0F0F]">
                  <Image src={folder} alt="folder image" />
                </div>
                <div className="detail mx-12">
                  <div className="text text-3xl leading-relaxed">
                    Cybersecurity Solutions
                  </div>
                  <div className="progress-bar flex m-2 items-center w-[400px]">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-500 w-[90%] h-full rounded-full transition-all duration-700 ease-in-out"></div>
                    </div>
                    <span className="ml-3 text-2xl">90%</span>
                  </div>
                </div>
              </div>
              <div className="security-personnal flex items-center mt-6">
                <div className="image p-6 bg-[#0F0F0F]">
                  <Image src={vector} alt="folder image" />
                </div>
                <div className="detail mx-12">
                  <div className="text text-3xl leading-relaxed">
                    Security Personnel Training
                  </div>
                  <div className="progress-bar flex m-2 items-center w-[400px]">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-500 w-[80%] h-full rounded-full transition-all duration-700 ease-in-out"></div>
                    </div>
                    <span className="ml-3 text-2xl">80%</span>
                  </div>
                </div>
              </div>
              <div className="emergency flex items-center mt-6">
                <div className="image p-6 bg-[#0F0F0F]">
                  <Image src={crime} alt="folder image" />
                </div>
                <div className="detail mx-12">
                  <div className="text text-3xl leading-relaxed">
                    Emergency Response Planning
                  </div>
                  <div className="progress-bar flex m-2 items-center w-[400px]">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-500 w-[90%] h-full rounded-full transition-all duration-700 ease-in-out"></div>
                    </div>
                    <span className="ml-3 text-2xl">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission bg-[#0F0F0F] py-16">
        <div className="mission-container flex m-20 gap-20 h-full">
          <div className="m-one flex flex-col justify-between">
            <div className="s-m">
              <h2 className="text-white text-4xl font-semibold border-b pb-2">
                Our Mission
              </h2>
            </div>
            <div className="b-m">
              <div className="number text-5xl text-white font-bold">860+</div>
              <div className="text text-white text-sm mt-1">
                Project Completed
              </div>
            </div>
          </div>
          <div className="mission-grid grid grid-cols-2 gap-x-12 gap-y-10">
            {[
              { title: "Protect Lives and Assets" },
              { title: "Ensure Peace of Mind" },
              { title: "Continuous Innovation" },
              { title: "Responsible Practices" },
              { title: "Community Safety" },
              { title: "Global Security Leadership" },
            ].map((item, index) => (
              <div key={index} className="text-white">
                <div className="text-2xl mb-2 flex items-center gap-2 relative">
                  <div className="pt-8">{item.title}</div>
                  <span className="text-xl absolute top-0">▼</span>
                </div>
                <p className="text-sm text-gray-300">
                  Ut nulla lectus vulputate non massa egestas. Nibh aliquam
                  tortor commodo vulputate ultricies nunc sed.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="award">
        <div className="award-container m-20">
          <div className="award-achievements flex items-end py-8">
            <div className="left-side w-[50%]">
              <div className="title">Awards and Achievenements</div>
              <div className="text-6xl font-bold">
                Our Award-Winning History
              </div>
            </div>
            <div className="right-side w-[50%]">
              <div className="text-lg text-[#7B7B7B] w-96 text-right ml-auto">
                Auctor neque feugiat ornare rhoncus. Odio sed porta in nibh dui.
                Orci hac blandit.
              </div>
            </div>
          </div>
          <div className="award-image bg-[#2A2A2A] h-[600px]"></div>
          <div className="year flex justify-between py-12">
            <div className="year-one">
              <div className="title flex items-center text-left">
                <div className="icon">
                  <Image src={elipse} alt="elipse icon" />
                </div>
                <div className="year text-xl font-bold ml-2">2023</div>
              </div>
              <div className="text-title text-2xl py-4">
                Security Innovator of the Year
              </div>
              <div className="text-content text-[#7B7B7B] w-72">
                Pharetra neque feugiat commodo vitae viverra id in risus in ut
                urna lacinia.
              </div>
            </div>
            <div className="year-two">
              <div className="title flex items-center text-left">
                <div className="icon">
                  <Image src={elipse} alt="elipse icon" />
                </div>
                <div className="year text-xl font-bold ml-2">2022</div>
              </div>
              <div className="text-title text-2xl py-4">
                Global Security Provider
              </div>
              <div className="text-content text-[#7B7B7B] w-72">
                Pharetra neque feugiat commodo vitae viverra id in risus in ut
                urna lacinia.
              </div>
            </div>
            <div className="year-third">
              <div className="title flex items-center text-left">
                <div className="icon">
                  <Image src={elipse} alt="elipse icon" />
                </div>
                <div className="year text-xl font-bold ml-2">2021</div>
              </div>
              <div className="text-title text-2xl py-4">
                Environmental Responsibility
              </div>
              <div className="text-content text-[#7B7B7B] w-72">
                Pharetra neque feugiat commodo vitae viverra id in risus in ut
                urna lacinia.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team bg-[#F9F9F9] py-12">
        <div className="team-container m-20">
          <div className="team-one flex flex-col justify-between items-center text-center">
            <div className="title py-4">
              <span className="font-bold ">Jagaen Team</span>
            </div>
            <div className="py-4">
              <span className="text-4xl font-bold w-52">
                Our Professional Team
              </span>
            </div>
            <div className="w-96">
              <span className=" text-[#7B7B7B]">
                Arcu augue tristique elementum gravida lectus risus. Tortor nibh
                a amet eu blandit vitae at odio in. Eget lectus viverra
                dignissim in leo. Nunc.
              </span>
            </div>
          </div>
          <div className="team-flex flex py-6 justify-between">
            <div className=" text-center">
              <div className="flex-image py-4">
                <Image src={cercle} alt="cercle icon" />
              </div>
              <div className="flex-nom py-4">
                <span>John Smith</span>
              </div>
              <div className="text-[#7B7B7B]">Chief Security Officer</div>
            </div>
            <div className=" text-center">
              <div className="flex-image py-4">
                <Image src={cercle} alt="cercle icon" />
              </div>
              <div className="flex-nom py-4">
                <span>Emily Davis</span>
              </div>
              <div className="text-[#7B7B7B]">Head Of Security Training</div>
            </div>
            <div className=" text-center">
              <div className="flex-image py-4">
                <Image src={cercle} alt="cercle icon" />
              </div>
              <div className="flex-nom py-4">
                <span>Michael Turner</span>
              </div>
              <div className="text-[#7B7B7B]">Lead Security Investigator</div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact-container m-20 flex gap-10">
          <div className="left-side w-1/2 flex flex-col justify-center relative">
            <h2 className="left-title text-sm uppercase tracking-widest text-gray-500 mb-2">
              Contact Us
            </h2>
            <h1 className="big-text text-5xl font-extrabold text-black mb-4">
              Your First Step To Security
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pharetra neque feugiat commodo vitae viverra id in risus in ut
              urna lacinia.
            </p>
            <div className="icon-contact flex items-center rounded-lg w-full pr-12 py-8 relative">
              <div className="flex items-center gap-4">
                <div className="icon w-14 h-14 bg-black flex items-center justify-center rounded-md">
                  <Image src={phone} alt="phone icon" />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-lg font-bold">Call Us</div>
                  <div className="text-lg font-semibold text-[#7B7B7B]">
                    +62 864 6444 2222
                  </div>
                </div>
              </div>
              <div className="absolute right-0">
                <Image src={fleche} alt="arrow icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="icon-contact flex items-center rounded-lg w-full pr-12 py-12 relative">
              <div className="flex items-center gap-4">
                <div className="icon w-14 h-14 bg-black flex items-center justify-center rounded-md">
                  <Image src={folder} alt="phone icon" />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-lg font-bold">Email</div>
                  <div className="text-lg font-semibold text-[#7B7B7B]">
                    hi@jagaen.com
                  </div>
                </div>
              </div>
              <div className="absolute right-0">
                <Image src={fleche} alt="arrow icon" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="right-side w-1/2">
            <div className="image bg-[#0F0F0F] h-[500px] rounded-xl shadow-lg"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
