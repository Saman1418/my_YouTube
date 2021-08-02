import React from 'react'
import "../StyleCSS/SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import sam1 from "../image/sam1.jpg";



const SearchPage = () => {
    return (
        <div className="SearchPage">
            <div className="SearchPage__filter">
            <TuneIcon />
            <h4>FILTER</h4>
            </div>
            <hr></hr>

            <ChannelRow
                // image="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/RS_Components_logo.svg/1200px-RS_Components_logo.svg.png"
                image={sam1}
                channel="Saman Aggarwal"
                verified = {true}
                // subs="660k"
                // noOfVideos={382}
                description1='”All our dreams can come true, if we have the courage to pursue them.”'
                description2="My name is Saman Aggarwal i am fresher looking for Web Developer Profile.
                Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge. Possess excellent communication skills. Flexible to work in any environment as required."
            
            />
            <hr></hr>

            <VideoRow
                image="https://cdn.vox-cdn.com/thumbor/Qs4wBNTuOyEbzcLRvnZ7M7OkG7o=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10581019/acastro_180403_1777_youtube_0002.jpg"
                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="YouTube Clone"
                // timestamps="18 seconds ago"
                description="Built YouTube Search App using React JS. Performed key role in the development process of UI portion of web application."
                link=""
                linkName="Youtube CLone"
            />

            {/* <VideoRow
                image="https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg"
                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="Netflix App"
                // timestamps="18 seconds ago"
                description="Built Netflix App using React JS."
            /> */}
            <VideoRow
                image="https://i2.wp.com/tvrev.com/wp-content/uploads/2020/02/thibault-penin-AWOl7qqsffM-unsplash-scaled.jpg?fit=2560%2C1709&ssl=1"
                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="Netflix App"
                // timestamps="18 seconds ago"
                description="Built Netflix App using React JS."
                link="https://saman1418.github.io/Netflix_app/"
                linkName="Netflix App"
            />
            
            <VideoRow
                image="https://indianewsdiary.com/wp-content/uploads/2021/04/hu.png"
                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="Covid-Tracker App"
                // timestamps="18 seconds ago"
                description="Built Covid-Tracker App with fetching API "
                link="https://saman1418.github.io/covid19-20/"
                linkName="Covid-Tracker App"
            />
            <VideoRow
                image="https://cdn.educba.com/academy/wp-content/uploads/2020/07/psd-9-9-5-3.jpg"

                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="Static IT website"
                // timestamps="18 seconds ago"
                description="Built Static IT website"
                link="https://saman1418.github.io/ITcompanywebpage/"
                linkName="IT website"
            />
            <VideoRow
                image="https://static.cognitoforms.com/app/cognito.fa4260be46997bedb39f99412bdba828.png"

                channel="Saman Aggarwal"
                // subs="660k"
                // views="1.8M"
                title="Registration Form"
                // timestamps="18 seconds ago"
                description="Built Registration Form"
                link="https://saman1418.github.io/inputRS/"
                linkName="Form"
            />
            
            

        </div>
    )
}

export default SearchPage;
