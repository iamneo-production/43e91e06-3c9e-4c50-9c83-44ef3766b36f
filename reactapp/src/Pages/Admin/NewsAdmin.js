import React,{useState,useEffect} from 'react';
import * as ReactBootStarp from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {fetchUserData} from '../../Api/AuthenticationService';






export const Dashboard=(props)=>{
    const usenavigate = useNavigate();
    
    const [data,setData]=useState({});

    useEffect(()=>{
        if(data.username==="undefined"){
            localStorage.clear();
            usenavigate('/')
        }
    },)

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
           
        })
    },[])

    const logOut=()=>{
        sessionStorage.clear()
        localStorage.clear();
        usenavigate('/');

    }

    return (
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            
            <ReactBootStarp.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStarp.Container>
        <ReactBootStarp.Navbar.Brand href="/admin/dashboard">PG_Admission</ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStarp.Nav className="me-auto">
        <ReactBootStarp.Nav.Link href="/admin/academyadmin">Academy</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/courseadmin">Course</ReactBootStarp.Nav.Link>
        <ReactBootStarp.Nav.Link href="/admin/studentadmin">Students</ReactBootStarp.Nav.Link>
        
        <ReactBootStarp.Nav.Link  className="active" href="/user/news">News Feed</ReactBootStarp.Nav.Link>
    </ReactBootStarp.Nav>
    <ReactBootStarp.Nav>
      <ReactBootStarp.NavDropdown title="More Info" id="collasible-nav-dropdown">
        <ReactBootStarp.NavDropdown.Item href="/admin/Profile">Profile</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Item href="/admin/moreinfo">About</ReactBootStarp.NavDropdown.Item>
        <ReactBootStarp.NavDropdown.Divider />
        <ReactBootStarp.NavDropdown.Item onClick={() =>logOut()}>LogOut</ReactBootStarp.NavDropdown.Item>
        </ReactBootStarp.NavDropdown>
      </ReactBootStarp.Nav>
      </ReactBootStarp.Navbar.Collapse>
    </ReactBootStarp.Container>
    </ReactBootStarp.Navbar>







    <div class="container">
    <div class="row mb-2">
        <div class="col-12 text-center pt-3">
            <h1>Trending News Across The Global Universities</h1>
            <p>To Get More Information About The News Click On The Images</p>
            <h4>Stay Tuned With Us For More Interesting News</h4>
        </div>
    </div>
    
   
    <div class="row">
        <div class="col-12 pb-5">
          
            <section class="row">
                
                <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                    <div id="featured" class="carousel slide carousel" data-ride="carousel">
                        
                        <ol class="carousel-indicators top-indicator">
                            <li data-target="#featured" data-slide-to="0" class="active"></li>
                            <li data-target="#featured" data-slide-to="1"></li>
                            <li data-target="#featured" data-slide-to="2"></li>
                            <li data-target="#featured" data-slide-to="3"></li>
                        </ol>
                        
                        
                        <div class="carousel-inner">
                           
                            <div class="carousel-item active">
                                <div class="card border-0 rounded-0 text-light overflow zoom">
                                    <div class="position-relative">
                                        
                                        <div class="ratio_left-cover-1 image-wrapper">
                                                <img class="img-fluid w-100"
                                                     src="/Image.jpg"
                                                     alt="Bootstrap news template"/>
                                        </div>

                                        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 class="h3 post-title text-white my-1">Bootstrap 4 template news portal magazine perfect for news site</h2>
                                            </a>
                                           
                                            <div class="news-meta">
                                                <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span class="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                         
                            <div class="carousel-item">
                                <div class="card border-0 rounded-0 text-light overflow zoom">
                                    <div class="position-relative">
                                
                                        <div class="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img class="img-fluid w-100"
                                                     src="/Image.jpg"
                                                     alt="Bootstrap news theme"/>
                                            </a>
                                        </div>
                                        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                       
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 class="h3 post-title text-white my-1">Walmart shares up 10% on online sales lift</h2>
                                            </a>
                                            
                                            <div class="news-meta">
                                                <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span class="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                          
                            <div class="carousel-item">
                                <div class="card border-0 rounded-0 text-light overflow zoom">
                                    <div class="position-relative">
                                        
                                        <div class="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img class="img-fluid w-100"
                                                     src="https://bootstrap.news/source/img3.jpg"
                                                     alt="Bootstrap blog template"/>
                                            </a>
                                        </div>
                                        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                            
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 class="h3 post-title text-white my-1">Bank chief warns on Brexit staff moves to other company</h2>
                                            </a>
                                            
                                            <div class="news-meta">
                                                <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span class="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                       
                            <div class="carousel-item">
                                <div class="card border-0 rounded-0 text-light overflow zoom">
                                    <div class="position-relative">
                                       
                                        <div class="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img class="img-fluid w-100"
                                                     src="https://bootstrap.news/source/img4.jpg"
                                                     alt="Bootstrap portal template"/>
                                            </a>
                                        </div>
                                        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                         
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 class="h3 post-title text-white my-1">The world's first floating farm making waves in Rotterdam</h2>
                                            </a>
                                           
                                            <div class="news-meta">
                                                <span class="news-author">by <a class="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span class="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                       
                    </div>
                    
                    
                    <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                
                <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                    <div class="row">
                      
                        <div class="col-6 pb-1 pt-0 pr-1">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                   
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <img class="img-fluid"
                                                 src="https://bootstrap.news/source/img5.jpg"
                                                 alt="simple blog template bootstrap"/>
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Lifestyle</a>

                                        
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-6 pb-1 pl-1 pt-0">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                    
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://library.harvard.edu/">
                                            <img class="img-fluid"
                                                 src="/Image3.jpg"
                                                 alt="bootstrap templates for blog"/>
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Motocross</a>
                                        
                                        <a href="">
                                            <h2 class="h5 text-white my-1">Three myths about Florida elections recount</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div class="col-6 pb-1 pr-1 pt-1">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                   
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://www.ox.ac.uk/news-and-events">
                                            <img class="img-fluid"
                                                 src="/Image2.jpg"
                                                 alt="bootstrap blog wordpress theme"/>
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="https://news.mit.edu/">MIT - Massachusetts Institute of Technology</a>
                                        
                                        <a href="https://www.undergraduate.study.cam.ac.uk/india">
                                            <h2 class="h5 text-black my-1">This Year The Student Completed UG-58 From India From Cambridge</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-6 pb-1 pl-1 pt-1">
                            <div class="card border-0 rounded-0 text-white overflow zoom">
                                <div class="position-relative">
                                    
                                    <div class="ratio_right-cover-2 image-wrapper">
                                        <a href="https://www.thehindu.com/news/cities/Delhi/Sundar-Pichais-candid-conversation-with-SRCC-students/article60287124.ece">
                                            <img class="img-fluid"
                                                 src="/Image4.jpg"
                                                 alt="blog website templates bootstrap"/>
                                        </a>
                                    </div>
                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                        
                                        <a class="p-1 badge badge-primary rounded-0" href="https://news.stanford.edu/">Stanford University</a>
                                        
                                        <a href="https://digitallearning.eletsonline.com/2017/02/cambridge-university-to-conduct-admission-process-in-india-from-this-year/">
                                            <h2 class="h5 text-black my-1">Cambridge University to conduct admission process in India from this year</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </section>
            
        </div>
    </div>
    
    
    
</div>


















        
        </div>
    )
}

export default Dashboard;