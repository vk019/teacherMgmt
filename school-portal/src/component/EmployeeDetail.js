import React, { Component } from 'react'
import Tableitem from'./Tableitem'


export class EmployeeDetail extends Component {
  articles=[
    {
        "title": "A1",
        "link": "https://phys.org/news/2022-08-madrid-meteor-cometary-unearthed.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Principal",
        "content": null,
        "pubDate": "2022-08-10 ",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    },
    {
        "title": "A2",
        "link": "https://phys.org/news/2022-08-toronto-greenspaces-barriers-racialized-residents.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Vice Principal",
        "content": null,
        "pubDate": "2022-08-10",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "OBC"
        ],
        "language": "english"
    },
    {
        "title": "B1",
        "link": "https://phys.org/news/2022-08-sociologist-discusses-appeal-qanon-modern-day.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": " Physics Lecturer",
        "content": null,
        "pubDate": "2022-08-10 15:45:04",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    },
    {
        "title": "B2",
        "link": "https://www.gsmarena.com/here_is_todays_galaxy_unpacked_event_summarized_in_a_series_of_short_clips-news-55370.php",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": " Maths Lecturer",
        "content": null,
        "pubDate": "2022-08-10 15:45:01",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "gsmarena",
        "country": [
            "india"
        ],
        "category": [
            "NT"
        ],
        "language": "english"
    },
    {
        "title": "B3",
        "link": "https://phys.org/news/2022-08-chemists-reagent-de-electronation.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Biology Lecturer",
        "content": null,
        "pubDate": "2022-08-10 15:44:53",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "SC"
        ],
        "language": "english"
    },
    {
        "title": "B4",
        "link": "https://phys.org/news/2022-08-animal-migrations-social.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Chemistry Lecturer",
        "content": null,
        "pubDate": "2022-08-10 15:44:38",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    },
    {
        "title": "B5",
        "link": "https://www.nasaspaceflight.com/2022/08/cz6-launches-16-jilin-1/",
        "keywords": [
            "Chinese",
            "International",
            "Uncrewed",
            "Chang Zheng 6",
            "china",
            "CZ-6",
            "Jilin-1",
            "Long March 6",
            "Taiyuan"
        ],
        "creator": [
            "Adrian Beil"
        ],
        "video_url": null,
        "description": "History Lecturer",
        "content": "Early on August 10, Earth observation satellites for the Jilin-1 Earth observation satellite constellation and six additional payloads were launched atop a Chinese Chang Zheng 6 rocket. Liftoff occurred at 04:50 UTC from Taiyuan and was confirmed to be a success after deployment. The target orbit for the 16 satellites was a 535 km sun-synchronous orbit (SSO). The Jilin-1 constellation is China’s first remote-sensing satellite constellation made by a commercial company, and the first satellites in the Jilin-1 constellation were launched in 2015. The company that is operating the constellation is the Chang Guang Satellite Technology Corporation, which is a subsidiary of the Changchun Institute of Optics, Fine Mechanics, and Physics. Payloads Once the constellation is completed, a total of 138 satellites will make up the constellation. Over 60 of these satellites have already been launched on a variety of Chinese rockets, including Kuaizhou-1A, Chang Zheng 6, and Chang Zheng 11. This launch featured 10 Jilin-1 satellites, called Jilin-1-GF-03D. See AlsoCZ-6 Jilin-1 Launch UpdatesChina Forum SectionL2 ResourcesClick here to Join L2 Once the final constellation is deployed, the goal is to have the satellites image every inch of Earth’s surface every 10 minutes. Currently, teams are planning for the constellation to be completed by 2030. In addition to the 10 Jilin-1 satellites, six Yunyao-1 atmospheric sensing satellites were included in the payload stack for this mission. These satellites are also referred to as Jilin-1 IR satellites and are infrared satellites, and are expected to provide infrared imagery of Earth when the constellation is completed. The Yunyao-1 satellites are also constructed by Chang Guang Satellite Tech. Chang Zheng 6 sent the 16 satellites to a Sun-Synchronous Orbit (SSO), which is often used for optical satellites similar to the 16 launched today. The SSO orbit will ensure that light conditions remain consistent for the satellites when flying over certain regions, which allows the images taken by the Jilin-1 satellites to be compared easily. Chang Zheng 6 Chang Zheng 6 (CZ-6) is a small launch vehicle developed by the China Aerospace Science and Technology Corporation (CASC) and the Shanghai Academy of Spaceflight Technology (SAST) with three stages. It launched for the first time in 2015 with a rideshare mission atop it, and its last flight was in November 2021 with the Guangmu-1 mission to SSO. CZ-6 on the pad at Taiyuan. (Credit: CNSA) The successful deployment of the 16 satellites from today’s launch extends CZ-6’s success streak, with all nine of its launches being a success. It can deliver up to 1,080 kg to a 700 km SSO orbit, which has been the orbit CZ-6 has flown to the most. CZ-6 is derived from the Chang Zheng 5 rocket (also known as the Long March 5), with it being powered by the same engine that is used by the side boosters of the CZ-5. Instead of having two YF-100 engines like the CZ-5 side boosters, CZ-6 only uses one YF-100 engine on the first stage. A separate variant of the rocket, the Chang Zheng 6A, debuted successfully in March 2022. CZ-6A features four strap-on solid rocket boosters that increase the rocket’s payload capabilities to SSO to four tons. Liftoff of Chang Zheng 6. (Credit: CNSA) The rocket stands 29 meters tall with a diameter of 3.35 meters. Its mass at liftoff is 103,000 kg, with the first stage comprising about two-thirds of that mass. At liftoff, the single YF-100 engine produces 1,188 kN of thrust with a specific impulse of 300 seconds when at sea level. The YF-100 is a kerolox engine, using RP-1 (highly refined liquid kerosene) and LOX (liquid oxygen) to produce thrust. Additionally, YF-100 is one of the new modern engines that Chinese aerospace companies are using to slowly phase out the old (and toxic) hypergolic rockets of the early Chang Zheng generation. Once the first stage fuel levels deplete and the first stage engine is shut down, stage separation occurs and the second stage takes over. CZ-6’s second stage is powered by a single YF-115 engine that also runs on RP-1 and LOX and has a mass of approximately 15,000 kg. Its diameter is smaller than that of the first stage at 2.25 meters, and the YF-115 engine produces 180 kN of thrust with a specific impulse of 341.5 seconds. CZ-6’s third and final stage is just a small kick stage that uses hypergolic propellants. This third stage produces 6.5 kN of thrust with a specific impulse of 306.9 seconds and places the payloads in their final orbit. CZ-6 launched from the Taiyuan Satellite Launch Center in the Shanxi Province in China. Taiyuan initially opened in 1988 and features launch pads for a variety of Chang Zheng vehicles, including the CZ-6 and CZ-6A. The launch site is 1500 meters above sea level, giving it an advantage as a launch site. The increased elevation of Taiyuan was one of the reasons it was selected as a launch location and is primarily used to launch rockets with payloads headed to SSO. What’s more, Taiyuan was once an intercontinental ballistic missile and overland ballistic missile test site. This was the ninth launch of a CZ-6, the 10th mission in the CZ-6 family, and the 31st launch out of China in 2022. (Lead image: Chang Zheng 6 launches from Taiyuan. Credit: CNSA) The post China launches 16 more Jilin-1 satellites atop Chang Zheng 6 appeared first on NASASpaceFlight.com.",
        "pubDate": "2022-08-10 15:44:36",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "nasaspaceflight",
        "country": [
            "australia"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    },
    {
        "title": "B6",
        "link": "https://www.nasaspaceflight.com/2022/08/cz6-launches-16-jilin-1/",
        "keywords": [
            "Chinese",
            "International",
            "Uncrewed",
            "Chang Zheng 6",
            "china",
            "CZ-6",
            "Jilin-1",
            "Long March 6",
            "Taiyuan"
        ],
        "creator": [
            "Adrian Beil"
        ],
        "video_url": null,
        "description": "Geography Lecturer",
        "content": "Early on August 10, Earth observation satellites for the Jilin-1 Earth observation satellite constellation and six additional payloads were launched atop a Chinese Chang Zheng 6 rocket. Liftoff occurred at 04:50 UTC from Taiyuan and was confirmed to be a success after deployment. The target orbit for the 16 satellites was a 535 km sun-synchronous orbit (SSO). The Jilin-1 constellation is China’s first remote-sensing satellite constellation made by a commercial company, and the first satellites in the Jilin-1 constellation were launched in 2015. The company that is operating the constellation is the Chang Guang Satellite Technology Corporation, which is a subsidiary of the Changchun Institute of Optics, Fine Mechanics, and Physics. Payloads Once the constellation is completed, a total of 138 satellites will make up the constellation. Over 60 of these satellites have already been launched on a variety of Chinese rockets, including Kuaizhou-1A, Chang Zheng 6, and Chang Zheng 11. This launch featured 10 Jilin-1 satellites, called Jilin-1-GF-03D. See AlsoCZ-6 Jilin-1 Launch UpdatesChina Forum SectionL2 ResourcesClick here to Join L2 Once the final constellation is deployed, the goal is to have the satellites image every inch of Earth’s surface every 10 minutes. Currently, teams are planning for the constellation to be completed by 2030. In addition to the 10 Jilin-1 satellites, six Yunyao-1 atmospheric sensing satellites were included in the payload stack for this mission. These satellites are also referred to as Jilin-1 IR satellites and are infrared satellites, and are expected to provide infrared imagery of Earth when the constellation is completed. The Yunyao-1 satellites are also constructed by Chang Guang Satellite Tech. Chang Zheng 6 sent the 16 satellites to a Sun-Synchronous Orbit (SSO), which is often used for optical satellites similar to the 16 launched today. The SSO orbit will ensure that light conditions remain consistent for the satellites when flying over certain regions, which allows the images taken by the Jilin-1 satellites to be compared easily. Chang Zheng 6 Chang Zheng 6 (CZ-6) is a small launch vehicle developed by the China Aerospace Science and Technology Corporation (CASC) and the Shanghai Academy of Spaceflight Technology (SAST) with three stages. It launched for the first time in 2015 with a rideshare mission atop it, and its last flight was in November 2021 with the Guangmu-1 mission to SSO. CZ-6 on the pad at Taiyuan. (Credit: CNSA) The successful deployment of the 16 satellites from today’s launch extends CZ-6’s success streak, with all nine of its launches being a success. It can deliver up to 1,080 kg to a 700 km SSO orbit, which has been the orbit CZ-6 has flown to the most. CZ-6 is derived from the Chang Zheng 5 rocket (also known as the Long March 5), with it being powered by the same engine that is used by the side boosters of the CZ-5. Instead of having two YF-100 engines like the CZ-5 side boosters, CZ-6 only uses one YF-100 engine on the first stage. A separate variant of the rocket, the Chang Zheng 6A, debuted successfully in March 2022. CZ-6A features four strap-on solid rocket boosters that increase the rocket’s payload capabilities to SSO to four tons. Liftoff of Chang Zheng 6. (Credit: CNSA) The rocket stands 29 meters tall with a diameter of 3.35 meters. Its mass at liftoff is 103,000 kg, with the first stage comprising about two-thirds of that mass. At liftoff, the single YF-100 engine produces 1,188 kN of thrust with a specific impulse of 300 seconds when at sea level. The YF-100 is a kerolox engine, using RP-1 (highly refined liquid kerosene) and LOX (liquid oxygen) to produce thrust. Additionally, YF-100 is one of the new modern engines that Chinese aerospace companies are using to slowly phase out the old (and toxic) hypergolic rockets of the early Chang Zheng generation. Once the first stage fuel levels deplete and the first stage engine is shut down, stage separation occurs and the second stage takes over. CZ-6’s second stage is powered by a single YF-115 engine that also runs on RP-1 and LOX and has a mass of approximately 15,000 kg. Its diameter is smaller than that of the first stage at 2.25 meters, and the YF-115 engine produces 180 kN of thrust with a specific impulse of 341.5 seconds. CZ-6’s third and final stage is just a small kick stage that uses hypergolic propellants. This third stage produces 6.5 kN of thrust with a specific impulse of 306.9 seconds and places the payloads in their final orbit. CZ-6 launched from the Taiyuan Satellite Launch Center in the Shanxi Province in China. Taiyuan initially opened in 1988 and features launch pads for a variety of Chang Zheng vehicles, including the CZ-6 and CZ-6A. The launch site is 1500 meters above sea level, giving it an advantage as a launch site. The increased elevation of Taiyuan was one of the reasons it was selected as a launch location and is primarily used to launch rockets with payloads headed to SSO. What’s more, Taiyuan was once an intercontinental ballistic missile and overland ballistic missile test site. This was the ninth launch of a CZ-6, the 10th mission in the CZ-6 family, and the 31st launch out of China in 2022. (Lead image: Chang Zheng 6 launches from Taiyuan. Credit: CNSA) The post China launches 16 more Jilin-1 satellites atop Chang Zheng 6 appeared first on NASASpaceFlight.com.",
        "pubDate": "2022-08-10 15:44:36",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "nasaspaceflight",
        "country": [
            "australia"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    },
    {
        "title": "B7",
        "link": "https://www.nasaspaceflight.com/2022/08/cz6-launches-16-jilin-1/",
        "keywords": [
            "Chinese",
            "International",
            "Uncrewed",
            "Chang Zheng 6",
            "china",
            "CZ-6",
            "Jilin-1",
            "Long March 6",
            "Taiyuan"
        ],
        "creator": [
            "Adrian Beil"
        ],
        "video_url": null,
        "description": "Political Science Lecturer",
        "content": "Early on August 10, Earth observation satellites for the Jilin-1 Earth observation satellite constellation and six additional payloads were launched atop a Chinese Chang Zheng 6 rocket. Liftoff occurred at 04:50 UTC from Taiyuan and was confirmed to be a success after deployment. The target orbit for the 16 satellites was a 535 km sun-synchronous orbit (SSO). The Jilin-1 constellation is China’s first remote-sensing satellite constellation made by a commercial company, and the first satellites in the Jilin-1 constellation were launched in 2015. The company that is operating the constellation is the Chang Guang Satellite Technology Corporation, which is a subsidiary of the Changchun Institute of Optics, Fine Mechanics, and Physics. Payloads Once the constellation is completed, a total of 138 satellites will make up the constellation. Over 60 of these satellites have already been launched on a variety of Chinese rockets, including Kuaizhou-1A, Chang Zheng 6, and Chang Zheng 11. This launch featured 10 Jilin-1 satellites, called Jilin-1-GF-03D. See AlsoCZ-6 Jilin-1 Launch UpdatesChina Forum SectionL2 ResourcesClick here to Join L2 Once the final constellation is deployed, the goal is to have the satellites image every inch of Earth’s surface every 10 minutes. Currently, teams are planning for the constellation to be completed by 2030. In addition to the 10 Jilin-1 satellites, six Yunyao-1 atmospheric sensing satellites were included in the payload stack for this mission. These satellites are also referred to as Jilin-1 IR satellites and are infrared satellites, and are expected to provide infrared imagery of Earth when the constellation is completed. The Yunyao-1 satellites are also constructed by Chang Guang Satellite Tech. Chang Zheng 6 sent the 16 satellites to a Sun-Synchronous Orbit (SSO), which is often used for optical satellites similar to the 16 launched today. The SSO orbit will ensure that light conditions remain consistent for the satellites when flying over certain regions, which allows the images taken by the Jilin-1 satellites to be compared easily. Chang Zheng 6 Chang Zheng 6 (CZ-6) is a small launch vehicle developed by the China Aerospace Science and Technology Corporation (CASC) and the Shanghai Academy of Spaceflight Technology (SAST) with three stages. It launched for the first time in 2015 with a rideshare mission atop it, and its last flight was in November 2021 with the Guangmu-1 mission to SSO. CZ-6 on the pad at Taiyuan. (Credit: CNSA) The successful deployment of the 16 satellites from today’s launch extends CZ-6’s success streak, with all nine of its launches being a success. It can deliver up to 1,080 kg to a 700 km SSO orbit, which has been the orbit CZ-6 has flown to the most. CZ-6 is derived from the Chang Zheng 5 rocket (also known as the Long March 5), with it being powered by the same engine that is used by the side boosters of the CZ-5. Instead of having two YF-100 engines like the CZ-5 side boosters, CZ-6 only uses one YF-100 engine on the first stage. A separate variant of the rocket, the Chang Zheng 6A, debuted successfully in March 2022. CZ-6A features four strap-on solid rocket boosters that increase the rocket’s payload capabilities to SSO to four tons. Liftoff of Chang Zheng 6. (Credit: CNSA) The rocket stands 29 meters tall with a diameter of 3.35 meters. Its mass at liftoff is 103,000 kg, with the first stage comprising about two-thirds of that mass. At liftoff, the single YF-100 engine produces 1,188 kN of thrust with a specific impulse of 300 seconds when at sea level. The YF-100 is a kerolox engine, using RP-1 (highly refined liquid kerosene) and LOX (liquid oxygen) to produce thrust. Additionally, YF-100 is one of the new modern engines that Chinese aerospace companies are using to slowly phase out the old (and toxic) hypergolic rockets of the early Chang Zheng generation. Once the first stage fuel levels deplete and the first stage engine is shut down, stage separation occurs and the second stage takes over. CZ-6’s second stage is powered by a single YF-115 engine that also runs on RP-1 and LOX and has a mass of approximately 15,000 kg. Its diameter is smaller than that of the first stage at 2.25 meters, and the YF-115 engine produces 180 kN of thrust with a specific impulse of 341.5 seconds. CZ-6’s third and final stage is just a small kick stage that uses hypergolic propellants. This third stage produces 6.5 kN of thrust with a specific impulse of 306.9 seconds and places the payloads in their final orbit. CZ-6 launched from the Taiyuan Satellite Launch Center in the Shanxi Province in China. Taiyuan initially opened in 1988 and features launch pads for a variety of Chang Zheng vehicles, including the CZ-6 and CZ-6A. The launch site is 1500 meters above sea level, giving it an advantage as a launch site. The increased elevation of Taiyuan was one of the reasons it was selected as a launch location and is primarily used to launch rockets with payloads headed to SSO. What’s more, Taiyuan was once an intercontinental ballistic missile and overland ballistic missile test site. This was the ninth launch of a CZ-6, the 10th mission in the CZ-6 family, and the 31st launch out of China in 2022. (Lead image: Chang Zheng 6 launches from Taiyuan. Credit: CNSA) The post China launches 16 more Jilin-1 satellites atop Chang Zheng 6 appeared first on NASASpaceFlight.com.",
        "pubDate": "2022-08-10 15:44:36",
        "image_url": "https://image.shutterstock.com/image-vector/young-female-teacher-on-lesson-260nw-573565840.jpg",
        "source_id": "nasaspaceflight",
        "country": [
            "australia"
        ],
        "category": [
            "Gen"
        ],
        "language": "english"
    }
    
]
  constructor()
  {
    super();
    console.log("Hello i am a const from EmployeeDetail comps")
    this.state={articles:this.articles,
    loading:false}
  }
  
 
  render()
  {
   return (

    <div className="container my-3 ">
        <h2>Employee Details</h2>
        <div className="row my-3">
       { this.state.articles.map((element)=>{
        return <div className="col-md-4" key= {element.source_id}>
        <Tableitem title={element.title} description={element.description} imageUrl={element.image_url}/>
      </div>
       })}
       
      </div>
      
        
      </div>
      
  
    )
  
  }
}

export default EmployeeDetail