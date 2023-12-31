import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    articles=[
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Pia Singh",
          "title": "Stocks making the biggest moves premarket: DASH, ARM, PYPL - CNBC",
          "description": "These are the stocks making headlines in premarket trading Monday.",
          "url": "https://www.cnbc.com/2023/09/18/stocks-making-the-biggest-moves-premarket-dash-arm-pypl.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106516157-1588351785968gettyimages-1209050413.jpeg?v=1695040122&w=1920&h=1080",
          "publishedAt": "2023-09-18T12:28:42Z",
          "content": "Check out the companies making headlines in premarket trading.\r\nPayPal Shares of the payments giant fell more than 1% premarket after MoffettNathanson downgraded the stock to market perform from outp… [+1300 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Kara Scannell",
          "title": "Hunter Biden sues the IRS, alleging agents illegally released his tax information - CNN",
          "description": "Hunter Biden sued the Internal Revenue Service on Monday, alleging its agents illegally released his tax information and that the agency failed to protect his private records.",
          "url": "https://www.cnn.com/2023/09/18/politics/hunter-biden-irs/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230913175420-hunter-biden-file-091323.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-09-18T12:11:00Z",
          "content": "Hunter Biden sued the Internal Revenue Service on Monday, alleging its agents illegally released his tax information and that the agency failed to protect his private records.\r\nPresident Joe Bidens s… [+4003 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "NFL Week 2 overreactions, reality checks: Jets moving on from Zach Wilson? How hot is Brandon Staley's seat? - CBS Sports",
          "description": "More overreactions after a crazy Week 2 across the NFL",
          "url": "https://www.cbssports.com/nfl/news/nfl-week-2-overreactions-reality-checks-jets-moving-on-from-zach-wilson-how-hot-is-brandon-staley-seat/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/18/f08c564b-3af2-4acc-97f2-b410381c8d46/thumbnail/1200x675/cc7ce2fca067f7fd3c7ab08c89097ef5/zachwilson.jpg",
          "publishedAt": "2023-09-18T12:01:00Z",
          "content": "Week 2 certainly had its share of exciting games, starting with the Atlanta Falcons' thrilling comeback over the Green Bay Packers and the Seattle Seahawks' overtime victory over the Detroit Lions. T… [+7363 chars]"
        },
        {
          "source": { "id": "abc-news", "name": "ABC News" },
          "author": "Jolie Lash, Victoria Arancio",
          "title": "9 juvenile inmates captured after escape from Pennsylvania detention center, police say - ABC News",
          "description": "The juveniles were being held at Pennsylvania’s Abraxas Academy.",
          "url": "https://abcnews.go.com/US/9-juvenile-inmates-escape-detention-center-pennsylvania/story?id=103267696",
          "urlToImage": "https://s.abcnews.com/images/US/police-lights-rf-gty-200410_hpMain_16x9_992.jpg?w=992",
          "publishedAt": "2023-09-18T12:00:00Z",
          "content": "Nine inmates who escaped from a Pennsylvania juvenile detention facility were taken into custody on Monday following a manhunt, authorities said.\r\nThe inmates, all of who were male, fled the facility… [+1751 chars]"
        },
        {
          "source": { "id": "nfl-news", "name": "NFL News" },
          "author": null,
          "title": "Dolphins WR Tyreek Hill: Patriots fans are some of 'worst fans' in NFL - NFL.com",
          "description": "Following Sunday night's 24-17 victory over the New England Patriots, Miami Dolphins receiver Tyreek Hill reveled in the road win by taunting the home fans by waving goodbye. Then, he called them \"some of the worst fans in the NFL.\"",
          "url": "https://www.nfl.com/news/dolphins-wr-tyreek-hill-patriots-fans-are-some-of-worst-fans-in-nfl",
          "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ukrvaxnl34un9tg0pzm5",
          "publishedAt": "2023-09-18T11:32:00Z",
          "content": "After his 215-yard performance in Week 1, Hill was slowed to 40 yards on five catches Sunday night, but snagged an important TD late in the first half to push the Dolphins' lead to 14. Hill wasn't wo… [+1309 chars]"
        },
        {
          "source": { "id": null, "name": "INSIDER" },
          "author": "Ayomikun Adekaiyero",
          "title": "Kevin Costner's estranged wife owes over $300,000 to divorce lawyers - Insider",
          "description": "Christine Baumgartner's lawyers defended her request for nearly $900,000, per court documents obtained by Entertainment Tonight.",
          "url": "https://www.insider.com/kevin-costner-christine-baumgartner-owes-divorce-lawyers-2023-9",
          "urlToImage": "https://i.insider.com/64afe921c22d1a001945407c?width=1200&format=jpeg",
          "publishedAt": "2023-09-18T11:31:00Z",
          "content": "Kevin Costner's estranged wife Christine Baumgartner said she owes over $300,000 to her divorce lawyers, reports Entertainment Tonight, citing new court documents filed last week.\r\nCostner's lawyers … [+2772 chars]"
        },
        {
          "source": { "id": null, "name": "Fox Business" },
          "author": "Eric Revell",
          "title": "UAW strike against Big Three automakers enters fourth day - Fox Business",
          "description": "The UAW strike is the first to be carried out simultaneously against the Big Three of Ford, General Motors and Stellantis as the union pushes for higher pay for its members.",
          "url": "https://www.foxbusiness.com/economy/uaw-strike-against-big-three-automakers-enters-fourth-day",
          "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/09/0/0/ford-strike.jpg?ve=1&tl=1",
          "publishedAt": "2023-09-18T11:03:45Z",
          "content": "The United Auto Workers (UAW)\r\n strike at plants owned by the Big Three automakers – Ford, General Motors and Stellantis – entered its fourth day Monday after the two sides were unable to reach an ag… [+6895 chars]"
        },
        {
          "source": { "id": "the-hill", "name": "The Hill" },
          "author": "Mychael Schnell",
          "title": "House GOP unveils opening move in bid to prevent a shutdown - The Hill",
          "description": "The House this week will look to take up a GOP-crafted continuing resolution to fund the government beyond Sept. 30 — the conference’s opening move in Congress’s quest to avoid an end-of-the-month shutdown. A coalition of Republicans announced an internal dea…",
          "url": "https://thehill.com/homenews/house/4209517-house-gop-unveils-opening-move-in-bid-to-prevent-a-shutdown/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/08/64eb97b95a8fc4.19675934.jpeg?w=1280",
          "publishedAt": "2023-09-18T10:59:00Z",
          "content": "Skip to content\r\nThe House this week will look to take up a GOP-crafted continuing resolution to fund the government beyond Sept. 30 — the conference’s opening move in Congress’s quest to avoid an en… [+8368 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": null,
          "title": "Former Colorado officer avoids jail for putting handcuffed woman in police vehicle that was hit by train - CBS News",
          "description": "\"What happened that night has haunted me for 364 days,\" Jordan Steinke told the woman. \"I remember your cries and your screams.\"",
          "url": "https://www.cbsnews.com/news/colorado-officer-jordan-steinke-probation-handcuffed-woman-police-car-hit-by-train/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/10/05/deb73b3e-3ac9-47f0-a9d2-468024135cf3/thumbnail/1200x630g4/6547ed150ce539cfc1083b57797e0cd8/train-collision-cops-10-pkg-transfer-frame-1833.jpg?v=6616762727d81e1cb010134e0c556e29",
          "publishedAt": "2023-09-18T10:41:00Z",
          "content": "Former officer receives 30 months probation in 2022 train crash near Platteville \r\nFormer officer receives 30 months probation in 2022 train crash near Platteville00:25\r\nA former Colorado police offi… [+3673 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Jennifer Hassan, Lyric Li",
          "title": "Russia-Ukraine war news: Kyiv dismisses Deputy Defense Minister Hanna Maliar - The Washington Post",
          "description": "Hanna Maliar was dismissed as Ukraine’s deputy defense minister, along with six other top officials. Kyiv has not provided a reason for their departures.",
          "url": "https://www.washingtonpost.com/world/2023/09/18/russia-ukraine-war-news/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5VS6X5GRDLZKPOTE5KQH3IANT4.JPG&w=1440",
          "publishedAt": "2023-09-18T10:16:00Z",
          "content": "Ukraines cabinet dismissed Deputy Defense Minister Hanna Maliar from her post, along with six other top officials in the Defense Ministry, according to an update Monday shared on Telegram. The announ… [+4770 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Linda Searing",
          "title": "Obesity tied to more heart disease deaths, especially for Black people - The Washington Post",
          "description": "The increase in obesity-related deaths contrasted with a steady decline (nearly 18 percent) in heart disease deaths overall from 1999 to 2020.",
          "url": "https://www.washingtonpost.com/wellness/2023/09/18/obesity-heart-disease-cardiac-death/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YWWPCU74A5FB5ATYLFWOL3OKCM.jpg&w=1440",
          "publishedAt": "2023-09-18T10:10:04Z",
          "content": "Comment on this story\r\nComment\r\nThe number of U.S. adults who died of heart disease and whose death record cited obesity as a contributing factor was three times greater in 2020 than in 1999, accordi… [+1845 chars]"
        },
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": "David Morgan",
          "title": "US shutdown looms: Top House Republican Kevin McCarthy faces crucial test - Reuters",
          "description": "U.S. House Speaker Kevin McCarthy is facing the biggest challenge of his eight months as the top Republican in the U.S. Congress, as he tries to muster his fractured caucus to avoid a government <a href=\"/world/us/us-government-shutdown-what-does-it-mean-2023…",
          "url": "https://www.reuters.com/world/us/us-shutdown-looms-top-house-republican-kevin-mccarthy-faces-crucial-test-2023-09-18/",
          "urlToImage": "https://www.reuters.com/resizer/w8_j1lIoAPQbjce3v0tgo2a73EE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4SRZ56YMXRPDZJIJCALQLH7XKM.jpg",
          "publishedAt": "2023-09-18T10:03:00Z",
          "content": "WASHINGTON, Sept 18 (Reuters) - U.S. House Speaker Kevin McCarthy is facing the biggest challenge of his eight months as the top Republican in the U.S. Congress, as he tries to muster his fractured c… [+5262 chars]"
        }
      ]
      constructor(props){
        super(props);
        this.state={
            articles:this.articles,
            loading:false

        }
      }
  render() {
    return (
        <>
        <div className="news">
        <h1>Today's top news headlines</h1>
         </div>
         <br />
         <br />
         <div className="newscontent">
         {this.state.articles.map((element)=>{

            return <div className="mycontent" id={element.url}>
            <NewsItem imageUrl={element.urlToImage} description={element.description} author={element.author} readmore={element.url}></NewsItem>
             </div>
         })}
         </div>
        </>
      

    )
  }
}
