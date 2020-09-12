import React from 'react';
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import  Tnavbar from "./components/transnav"
import ut from './assets/8.jpg';
import mh from './assets/mh.jpg';
import na from './assets/na.jpg';
import cz from './assets/cz.jpg';
import kc from './assets/kc.jpg';
import fm from './assets/fm.jpg';
import kable from './assets/kable1.jpg';

// import ut from './assets/8.jpg';

import logo from './assets/logo1.png';
import Iframe from 'react-iframe'








export default class home extends Component {
    render() {
        return (

            <div>
            <Tnavbar />
                <div class="container-fluid pl-0 pr-0">
                <div class="site-content">
                    <div class="d-flex justify-content-left">
                        <div class="d-flex flex-column logo">


                            <h1 class="site-title">Cincinnati Lifestyle</h1>

                            <p class="site-desc">Your Guide to The Queen City</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-1" id="features">
                <div class="content text-center">
                    <h1 class="heading-1">Big City Amenities,</h1>
                    <h1 class="heading-2">Small Town Feel.</h1>
                    <p class="para-1">Cincinnati is a major city in the U.S. state of Ohio and the government seat of Hamilton County. Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area, the fastest growing economic power in the Midwestern United States based on increase of economic output, which had a population of 2,190,209 as of the 2018 census estimates. This makes it Ohio's largest metropolitan area and the nation's 29th-largest. </p>
                    
                    <p class="decloration"> This site is dedicated to Cincinati's Unique places.<br/> The information contained is generated by our Users. <br/>Please feel free to add your favorite places to our site! <br/> Here are a few of our favorite places:</p>
                    <div class="row justify-content-content-center text-center container mx-auto">
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={ut} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Union Terminal</div>
                                    <div class="card-text">One of the last great American train stations built, Union Terminal is a Cincinnati icon and one of the most widely regarded examples of the art deco style. Since its opening in 1933, Union Terminal has had a long and storied history, from welcoming soldiers home from World War II to becoming the home of three museums, an OMNIMAX® Theater and the Cincinnati History Library Childrens Museum and Archives.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={mh} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Music Hall</div>
                                    <div class="card-text">Built in 1878 and designated a National Historic Landmark in 1975, Cincinnati’s Music Hall is among the City’s most impressive and recognizable buildings. Impressive from the outside for its Victorian-gothic architecture, it’s arguably more remarkable on the inside as the home to the Cincinnati Opera, Cincinnati Symphony Orchestra, May Festival, and Cincinnati Ballet.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={na} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">The Newport Aquarium</div>
                                    <div class="card-text">Rated #1 U.S. Aquarium by Readers’ Choice Travel Awards and #1 Aquarium in the Midwest by Zagat Survey. Home to thousands of aquatic animals in scores of exhibits, the Newport Aquarium will amaze you with all there is to see and do. You can touch a penguin, pet a shark, hear divers talk to the audience during feeding time, play games in Frog Bog, eat lunch in Sharkey's Cafe and a much, much more!</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={cz} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">The Cincinnati Zoo</div>
                                    <div class="card-text">This second oldest zoo in the United States, considered one of the best in the country, is most renowned for its endangered species and birthing programs, particularly for gorillas, Hippos and white tigers, and has a wonderful collection of felines and a delightful manatees exhibit. And whatever you do, don't forget to visit Cincinnati's number one ambassador, Fiona the ever so cute lovable baby Hippo.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={kc} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Krohn Conservatory</div>
                                    <div class="card-text">Krohn Conservatory was built in 1933 at the height of the Art Deco era.  Boasting five unique floral shows annually, including the ever-popular “Butterfly Show,” which can be viewed mid-March through mid-June.  During that time, thousands of butterflies are free to fly throughout the show room in a specially-themed garden. An ever popular destionation during the holidays, Krohn Conservatory is a joy year round!</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 wider">
                            <div class="card">
                                <img src={fm} alt="Image" class="card-img-top"/>
                                <div class="card-body">
                                    <div class="card-title">Findlay Market</div>
                                    <div class="card-text">Findlay Market - operated continuously in the same iron-framed building  since 1855 - is not just another historic monument; it is an essential institution to life in 21st century Cincinnati. Linking uptown with downtown, Findlay Market is a vibrant living landmark at the heart of Cincinnati's future. Findlay connects farmers, producers, sellers and customers in a dynamic, diverse public marketplace. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-2">
                <div class="container-fluid">                   
                    <h1 class="heading-1 pt-5 ">ADD YOUR OWN <br/>ATTRACTIONS</h1>
                    <div class="col">
                        <a class="btn btn-color col-3"  href="/addattractions">ADD</a>
                    </div>
                </div>
            </div>

            <div class="section-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">Sports</h3>
                                    <p class="m-2">Choose from 3 professional teams or three major College teams. Whether you are a Reds, Bengals or FC Cincinnati fan, Or a die-hard UC, Xavier, or NKU fan, we have you a game for you!</p>
                                </div>
                            </div> 
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">Dining</h3>
                                    <p class="m-2">With it's emerging food scene, Cincinnati has it all covered. Whether you like your Coneys and Cincinnati Chili, or you perfer Master Frence Chef Jean-Robert's high-end delights, Cincinnati has something for you!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">Events</h3>
                                    <p class="m-2">From Nationally recognized Fireworks Displays, to The Taste of Cincinnati, to a World Class Symphony and Ballet, Cincinnati has a vibrant events scene with something to match everyones tastes. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                              
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">Nightlife</h3>
                                    <p class="m-2">With the addition of the Over The Rhine Entertainment District, Cincinnati's Nightlife scene is more vibrant than ever. From the Hilltops of Mt. Adaams to the convenience of Oakley Square, Cincinnati's got it all. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                                
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">The Arts</h3>
                                    <p class="m-2">Including a World Class Art Museum, The Mesuem of Contemporary Art, The Westin Gallery, and private galleries too numerous to count, Cincinnati has a thriving Art and engaging Art Scene sure to please!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row">
                            
                                <div class="d-flex flex-column">
                                    <h3 class="m-2 head">Outdoors</h3>
                                    <p class="m-2">With the Renovation of the Riverfront , a new riverfront park and concert venue, numerous city, county , and State Parks, Cincinnati remains a city wrapped in the natural beauty of its surroundings!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-5">
                <div class="container-fluid">
                        <h1 class="heading-1 pt-5 ">SEE ALL USER<br/>ATTRACTIONS</h1>
                        <div class="col">
                        <a class="btn btn-color1 col-3"  href="/viewattractions">VIEW</a>
                        </div>
                </div>
            </div>

            <div class="section-4 four">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                        <iframe className="video" width="80%vw" height="120%vh" align="center" src="https://www.youtube.com/embed/pKwuW06NvXM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          
                        </div>
                        <div class="col-md-5 videobox">
                            <h2 class="text-white mb-3 taketour">Take The Tour!</h2>
                            {/* <a href="#">just a Click away</a> */}
                            <p class="para-1">While offering all the amenities of a larger city, Cincinnati is one of the easist places in the country to get around. Just get out your door and go. As our featured Tour Video will show you, there is something new, vibrant, and exciting around every corner. Whether it's Live Music, The Arts, World class Park Systems, or just a great cup of joe,....Cincinnati has you covered. </p>
                        </div>
                    </div>
                </div>
            </div>
                <div class="section-6 four1">
                    <div class="container">
                    <div class="row">
                       
                        <div class="col-md-5">
                            <h2 class="text-white mb-3 meetteam">Meet Our Team</h2>
                           
                            <p class="para-1">Located in The University of Cincinnati's 1819 Innovation Hub, The Kable Academy offers Accelerated Learning Opportunities in both Network Security and Web Development.</p>
                             <a href="/about">just a click away</a>
                        </div>
                        <div class="col-md-7 ">
                            <img src={kable} alt="book and glasses"  align="right" id="btmpic1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
