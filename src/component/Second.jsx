// import React from 'react'

const Second = () => {
  return (
    <>
        <div className="about w-[100%] h-[120vh]  pt-30">
        <div className="heading inline-block m-10 ml-[20vh]">
          <h1 className="text-5xl instrument-serif-regular">about me</h1>
        </div>
        <div className="content w-[60%] ml-[20vh]">
          <p className="text-3xl josefin-slab-normal">
            I&apos;m a passionate Computer Science and Engineering student at Mait
            College, with a strong interest in designing and development. I
            enjoy transforming ideas into functional, user-friendly solutions
            and continuously strive to enhance my skills.
          </p>
        </div>
        <div className="about-button w-[60vh] flex gap-5 ml-[20vh] mt-[5vh] items-center">
          <p className="text-xl">More about me ——</p>
          <button onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1G8XmAmreJhqfdVNBblSePHZc3DOC2KFM/view?usp=drive_link",
              "_blank"
            )
          } className=" cursor-pointer border-dotted border-1  p-6 pt-2 pb-2 rounded-full flex items-center">
            <span className="text-xl">My Resume</span>
          </button>
        </div>
        
        <div className="image-wrapper bg-amber-50 w-[45vh] relative left-[73%] top-[-40%] aspect-[2/3]">
      <img className="image grayscale h-full w-full object-cover"
        src="https://media-hosting.imagekit.io//ed0ff2c86f934e03/WhatsApp%20Image%202025-02-15%20at%206.53.04%20PM.jpeg?Expires=1834235035&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v25u079OZ9w453FSxSUb0xZ71-~FlHy23LR5Rj27r79mUbX-x9ugCnwsTYjF527jO0ffuVnVS1NspXeR8RwPNbc5tTCfVSJMEe4xMC88Brs6UjkaIsibMW7ADuXaJuzZBBseEKQ8zn3AuRqjV7DAUbWR2Jtn1ChCO9LTIZvNdRpVCrpiAcgO-VWF1dE7ZKa691rBepE4e2Gg~JNtkzd8G3W1l1XWhLIbvWYOUsPpLUZEt-iqUCzQS1RIpZH0gZu-su1PYNqvrDW1fjZZShpUFWAxXl7UyDX~n3ZbSq-y4i-yEqmIHRmCzueNRajhL8mX8z9KOhD7MGEKUrFkHPgCRQ__"
        alt=""
      />
    </div>
      </div>
    </>
  )
}

export default Second
