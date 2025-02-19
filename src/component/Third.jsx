const Third = () => {
      const skills = [
        { id: "01", name: "Figma", experience: "Intermediate", icon: "./skill1.svg" },
        { id: "02", name: "C++", experience: "Advanced", icon: "./icons8-c++.svg" },
        { id: "03", name: "React", experience: "Advanced", icon: "./React.svg" },
        { id: "05", name: "Javascript", experience: "Advanced", icon: "./skill4.svg" },
        { id: "04", name: "Node.js", experience: "Intermediate", icon: "./skill3.svg" },
        { id: "06", name: "Java", experience: "Intermediate", icon: "./java.svg" },
        { id: "07", name: "Web dev", experience: "Advanced", icon: "./skill6.svg" },
        { id: "08", name: "MongoDB", experience: "Extreme", icon: "./skill7.svg" },
        { id: "09", name: "SQL", experience: "Extreme", icon: "./skill8.svg" },
        { id: "10", name: "Python", experience: "Intermediate", icon: "./skill9.svg" },
        { id: "11", name:"Three.js", experience: "Begineerr", icon: "./skil.svg"}
      ];
    
  return (
    <>
         <div className="skill w-[100%] h-full">
        <div className="heading inline-block m-10 ml-[20vh]">
          <h1 className="text-5xl instrument-serif-regular">My skills</h1>
        </div>
        <div className="content w-[70%] ml-[20vh]">
          <p className="text-3xl josefin-slab-normal">
            I enjoy creating unique and intuitive digital experiences by
            utilizing a variety of tools that I have mastered over my lots of
            practice & experience.
          </p>
        </div>
    <div className="cards mt-20">
    {skills.map((skill, index) => (
    <div key={skill.id} className="p-[10vh] border-t-1 ml-38 border-black-500 w-[90%]">
      
      <p className="text-5xl text-center"   style={{
        transform: `translateX(${Math.sin(index) * -300}px) translateY(${index * 0}px)`,
      }}>{skill.name}</p>
      <p className="text-gray-400 text-xl translate-y-[100%] ">{skill.id}</p>
    </div>
  ))}
    </div>
      </div>
    </>
  )
}

export default Third
