import React, { Component } from 'react'
import Tableitem from'./Tableitem'
import Apply from './Apply'



export class Vacancy extends Component {
  articles= [
    {
        "title": "School 1",
        "link": "https://phys.org/news/2022-08-madrid-meteor-cometary-unearthed.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Pune",
        "content": null,
        "pubDate": "2022-08-10 15:46:07",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwje5Ao3JFE-8ulScT-hNX_T8Y96YQ2WHm3w&usqp=CAU",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "Geography"
        ],
        "language": "english"
    },
    {
        "title": "School 2",
        "link": "https://phys.org/news/2022-08-toronto-greenspaces-barriers-racialized-residents.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Akurdi",
        "content": null,
        "pubDate": "2022-08-10 15:45:19",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwje5Ao3JFE-8ulScT-hNX_T8Y96YQ2WHm3w&usqp=CAU",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "History"
        ],
        "language": "english"
    },
    {
        "title": "School 3",
        "link": "https://phys.org/news/2022-08-sociologist-discusses-appeal-qanon-modern-day.html",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Ravet",
        "content": null,
        "pubDate": "2022-08-10 15:45:04",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwje5Ao3JFE-8ulScT-hNX_T8Y96YQ2WHm3w&usqp=CAU",
        "source_id": "phys",
        "country": [
            "united states of america",
            "united kingdom",
            "australia",
            "singapore"
        ],
        "category": [
            "Physics"
        ],
        "language": "english"
    },
    {
        "title": "School 4",
        "link": "https://www.gsmarena.com/here_is_todays_galaxy_unpacked_event_summarized_in_a_series_of_short_clips-news-55370.php",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Chinchwad",
        "content": null,
        "pubDate": "2022-08-10 15:45:01",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwje5Ao3JFE-8ulScT-hNX_T8Y96YQ2WHm3w&usqp=CAU",
        "source_id": "gsmarena",
        "country": [
            "india"
        ],
        "category": [
            "Mathematics"
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
        <h4>Vacancies </h4>
        <h5><Apply/></h5>
      
        <div className="row my-3">
       { this.state.articles.map((element)=>{
        return <div className="col-md-4" key= {element.source_id}>
        <Tableitem title={element.title} description={element.description} imageUrl={element.image_url} subject={element.category} newsid={element.link}/>
      </div>

       }
      
       )}
       
       
      </div>
   
      
        
      </div>
      
  
    )
  
  }
}

export default Vacancy