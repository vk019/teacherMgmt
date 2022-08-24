import React, { Component } from 'react'
import Newsitem from'./Newsitem'


export class News extends Component {
  articles= [
    {
        "title": "Madrid meteor's cometary origins unearthed",
        "link": "https://phys.org/news/2022-08-madrid-meteor-cometary-unearthed.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "A fireball spotted over Madrid has had its astronomical ancestry unearthed. While it ended its days burning up in Earth's atmosphere on 31 July this year, the fragment began its life as part of Comet 169P/NEAT, responsible for the annual Alpha Capricornids meteor shower.",
        "content": null,
        "pubDate": "2022-08-10 15:46:07",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/madrid-meteors-cometar.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "Toronto greenspaces create structural and systemic barriers for racialized residents",
        "link": "https://phys.org/news/2022-08-toronto-greenspaces-barriers-racialized-residents.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Racialized residents could face structural and systemic barriers to accessing, using and navigating Toronto's greenspaces, say the authors of a new report led by York University.",
        "content": null,
        "pubDate": "2022-08-10 15:45:19",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/toronto-greenspace.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "Sociologist discusses the appeal of QAnon and other modern-day conspiracy theories",
        "link": "https://phys.org/news/2022-08-sociologist-discusses-appeal-qanon-modern-day.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Days before the events on January 6, 2021, at the U.S. Capitol, Chris Conner took a late-night phone call that would change the trajectory of his research at the University of Missouri.",
        "content": null,
        "pubDate": "2022-08-10 15:45:04",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/sociologist-discusses.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "Here is today's Galaxy Unpacked event summarized in a series of short videos",
        "link": "https://www.gsmarena.com/here_is_todays_galaxy_unpacked_event_summarized_in_a_series_of_short_clips-news-55370.php",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "While the Folds are focused on multitasking excellence, the Flips are striving for style. Like its predecessor, the Samsung Galaxy Z Flip4 can be customized to your liking in the Bespoke Edition studio. Here is a glimpse at how that works and a preview of the 75 different color combinations you can create: Also note that with Bespoke Upgrade Care you can go back and change the look of your Z Flip4 after you get bored with the original color combo. Bespoke Edition Flips will be available in 28 countries around the world. Bespoke or not, Samsung is already accepting...",
        "content": null,
        "pubDate": "2022-08-10 15:45:01",
        "image_url": null,
        "source_id": "gsmarena",
        "country": [
            "india"
        ],
        "category": [
            "technology"
        ],
        "language": "english"
    },
    {
        "title": "Chemists develop new reagent for de-electronation",
        "link": "https://phys.org/news/2022-08-chemists-reagent-de-electronation.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Chemists from Freiburg have succeeded in converting polynuclear transition metal carbonyls into their homoleptic complex cations using typical inorganic oxidants. In their work, the research team of Malte Sellin, Christian Friedmann and Prof. Dr. Ingo Krossing from the Institute of Inorganic and Analytical Chemistry and Maximilian Mayländer and Sabine Richert from the Institute of Physical Chemistry at the University of Freiburg show that the anthracene derivative with a half-step potential of 1.42 Volts vs. Fc0/+ can be converted to the radical de-electronating salt by a nitrosonium salt.",
        "content": null,
        "pubDate": "2022-08-10 15:44:53",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/chemists-develop-new-r.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "Are animal migrations social?",
        "link": "https://phys.org/news/2022-08-animal-migrations-social.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Migratory animals include a wide range of species—from tiny insects to the world's largest marine mammals. To achieve their journeys, migrants must walk, swim, or fly, often traversing complex landscapes that requires many choices about where, when, and why to move. Despite the diversity of migratory journeys made by animals, most scientists who study migration have a taxonomic focus—meaning that they study a particular species or group of species that migrate.",
        "content": null,
        "pubDate": "2022-08-10 15:44:38",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2019/migratingbir.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "China launches 16 more Jilin-1 satellites atop Chang Zheng 6",
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
        "description": "Early on August 10, Earth observation satellites for the Jilin-1 Earth observation satellite constellation and… The post China launches 16 more Jilin-1 satellites atop Chang Zheng 6 appeared first on NASASpaceFlight.com.",
        "content": "Early on August 10, Earth observation satellites for the Jilin-1 Earth observation satellite constellation and six additional payloads were launched atop a Chinese Chang Zheng 6 rocket. Liftoff occurred at 04:50 UTC from Taiyuan and was confirmed to be a success after deployment. The target orbit for the 16 satellites was a 535 km sun-synchronous orbit (SSO). The Jilin-1 constellation is China’s first remote-sensing satellite constellation made by a commercial company, and the first satellites in the Jilin-1 constellation were launched in 2015. The company that is operating the constellation is the Chang Guang Satellite Technology Corporation, which is a subsidiary of the Changchun Institute of Optics, Fine Mechanics, and Physics. Payloads Once the constellation is completed, a total of 138 satellites will make up the constellation. Over 60 of these satellites have already been launched on a variety of Chinese rockets, including Kuaizhou-1A, Chang Zheng 6, and Chang Zheng 11. This launch featured 10 Jilin-1 satellites, called Jilin-1-GF-03D. See AlsoCZ-6 Jilin-1 Launch UpdatesChina Forum SectionL2 ResourcesClick here to Join L2 Once the final constellation is deployed, the goal is to have the satellites image every inch of Earth’s surface every 10 minutes. Currently, teams are planning for the constellation to be completed by 2030. In addition to the 10 Jilin-1 satellites, six Yunyao-1 atmospheric sensing satellites were included in the payload stack for this mission. These satellites are also referred to as Jilin-1 IR satellites and are infrared satellites, and are expected to provide infrared imagery of Earth when the constellation is completed. The Yunyao-1 satellites are also constructed by Chang Guang Satellite Tech. Chang Zheng 6 sent the 16 satellites to a Sun-Synchronous Orbit (SSO), which is often used for optical satellites similar to the 16 launched today. The SSO orbit will ensure that light conditions remain consistent for the satellites when flying over certain regions, which allows the images taken by the Jilin-1 satellites to be compared easily. Chang Zheng 6 Chang Zheng 6 (CZ-6) is a small launch vehicle developed by the China Aerospace Science and Technology Corporation (CASC) and the Shanghai Academy of Spaceflight Technology (SAST) with three stages. It launched for the first time in 2015 with a rideshare mission atop it, and its last flight was in November 2021 with the Guangmu-1 mission to SSO. CZ-6 on the pad at Taiyuan. (Credit: CNSA) The successful deployment of the 16 satellites from today’s launch extends CZ-6’s success streak, with all nine of its launches being a success. It can deliver up to 1,080 kg to a 700 km SSO orbit, which has been the orbit CZ-6 has flown to the most. CZ-6 is derived from the Chang Zheng 5 rocket (also known as the Long March 5), with it being powered by the same engine that is used by the side boosters of the CZ-5. Instead of having two YF-100 engines like the CZ-5 side boosters, CZ-6 only uses one YF-100 engine on the first stage. A separate variant of the rocket, the Chang Zheng 6A, debuted successfully in March 2022. CZ-6A features four strap-on solid rocket boosters that increase the rocket’s payload capabilities to SSO to four tons. Liftoff of Chang Zheng 6. (Credit: CNSA) The rocket stands 29 meters tall with a diameter of 3.35 meters. Its mass at liftoff is 103,000 kg, with the first stage comprising about two-thirds of that mass. At liftoff, the single YF-100 engine produces 1,188 kN of thrust with a specific impulse of 300 seconds when at sea level. The YF-100 is a kerolox engine, using RP-1 (highly refined liquid kerosene) and LOX (liquid oxygen) to produce thrust. Additionally, YF-100 is one of the new modern engines that Chinese aerospace companies are using to slowly phase out the old (and toxic) hypergolic rockets of the early Chang Zheng generation. Once the first stage fuel levels deplete and the first stage engine is shut down, stage separation occurs and the second stage takes over. CZ-6’s second stage is powered by a single YF-115 engine that also runs on RP-1 and LOX and has a mass of approximately 15,000 kg. Its diameter is smaller than that of the first stage at 2.25 meters, and the YF-115 engine produces 180 kN of thrust with a specific impulse of 341.5 seconds. CZ-6’s third and final stage is just a small kick stage that uses hypergolic propellants. This third stage produces 6.5 kN of thrust with a specific impulse of 306.9 seconds and places the payloads in their final orbit. CZ-6 launched from the Taiyuan Satellite Launch Center in the Shanxi Province in China. Taiyuan initially opened in 1988 and features launch pads for a variety of Chang Zheng vehicles, including the CZ-6 and CZ-6A. The launch site is 1500 meters above sea level, giving it an advantage as a launch site. The increased elevation of Taiyuan was one of the reasons it was selected as a launch location and is primarily used to launch rockets with payloads headed to SSO. What’s more, Taiyuan was once an intercontinental ballistic missile and overland ballistic missile test site. This was the ninth launch of a CZ-6, the 10th mission in the CZ-6 family, and the 31st launch out of China in 2022. (Lead image: Chang Zheng 6 launches from Taiyuan. Credit: CNSA) The post China launches 16 more Jilin-1 satellites atop Chang Zheng 6 appeared first on NASASpaceFlight.com.",
        "pubDate": "2022-08-10 15:44:36",
        "image_url": null,
        "source_id": "nasaspaceflight",
        "country": [
            "australia"
        ],
        "category": [
            "technology"
        ],
        "language": "english"
    },
    {
        "title": "Using a magnetic field to remotely control the air-water interface",
        "link": "https://phys.org/news/2022-08-magnetic-field-remotely-air-water-interface.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "A multidisciplinary study conducted by the Microfluidics Cluster of the UPV/EHU has observed and characterized a novel system involving the use of an external magnetic field to manipulate the air-water interface. The study is part of the European multidisciplinary MAMI project, in which groups and companies from six countries are participating. The work has been featured on the front cover of the journal Langmuir.",
        "content": null,
        "pubDate": "2022-08-10 15:44:19",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/using-a-magnetic-field.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    },
    {
        "title": "Samsung Galaxy Watch 5, Watch 5 Pro, Buds 2 Pro launched: Price and specifications",
        "link": "https://indianexpress.com/article/technology/gadgets/samsung-galaxy-watch-5-pro-buds-2-pro-launch-price-specifications-8083244/",
        "keywords": [
            "Gadgets",
            "Technology"
        ],
        "creator": null,
        "video_url": null,
        "description": null,
        "content": null,
        "pubDate": "2022-08-10 15:43:09",
        "image_url": null,
        "source_id": "indianexpress",
        "country": [
            "india"
        ],
        "category": [
            "technology"
        ],
        "language": "english"
    },
    {
        "title": "Cats are eating NZ's critically endangered bats",
        "link": "https://phys.org/news/2022-08-cats-nz-critically-endangered.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "New research by Department of Conservation staff confirms what has long been suspected—feral and domestic cats are repeatedly hunting and eating New Zealand's native bats, or pekapeka.",
        "content": null,
        "pubDate": "2022-08-10 15:40:03",
        "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2022/cats-are-eating-nzs-cr.jpg",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "science"
        ],
        "language": "english"
    }
]
  constructor()
  {
    super();
    console.log("Hello i am a const from news comps")
    this.state={articles:this.articles,
    loading:false}
  }
  
 
  render()
  {
   return (
    <div className="container my-3 ">
        <h2>Top Educational News Headlines</h2>
        <div className="row my-3">
       { this.state.articles.map((element)=>{
        return <div className="col-md-4" key= {element.source_id}>
        <Newsitem title={element.title} description={element.description} imageUrl={element.image_url} newsid={element.link}/>
      </div>
       })}
       
      </div>
      
        
      </div>
      
  
    )
  
  }
}

export default News