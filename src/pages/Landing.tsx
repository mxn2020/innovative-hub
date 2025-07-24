// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Music, Calendar, Users, Play, Heart, Star, User, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getAlbumCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['album-card-0', 'album-card-1', 'album-card-2', 'album-card-3'];
  return ids[index] || 'noID';
};

const getTourDateCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['tour-date-card-0', 'tour-date-card-1', 'tour-date-card-2', 'tour-date-card-3'];
  return ids[index] || 'noID';
};

const getBandMemberCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['band-member-card-0', 'band-member-card-1', 'band-member-card-2', 'band-member-card-3'];
  return ids[index] || 'noID';
};

const getNewsCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['news-card-0', 'news-card-1', 'news-card-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const albums = [
    {
      title: "Electric Dreams",
      year: "2024",
      cover: "/api/placeholder/300/300",
      genre: "Rock",
      tracks: 12
    },
    {
      title: "Midnight Sessions",
      year: "2023",
      cover: "/api/placeholder/300/300",
      genre: "Alternative",
      tracks: 10
    },
    {
      title: "Acoustic Stories",
      year: "2022",
      cover: "/api/placeholder/300/300",
      genre: "Acoustic",
      tracks: 8
    },
    {
      title: "Live at The Forum",
      year: "2021",
      cover: "/api/placeholder/300/300",
      genre: "Live",
      tracks: 15
    }
  ];

  const upcomingShows = [
    {
      date: "2024-03-15",
      venue: "Madison Square Garden",
      city: "New York, NY",
      time: "8:00 PM",
      ticketsAvailable: true
    },
    {
      date: "2024-03-22",
      venue: "The Hollywood Bowl",
      city: "Los Angeles, CA",
      time: "7:30 PM",
      ticketsAvailable: true
    },
    {
      date: "2024-03-28",
      venue: "Red Rocks Amphitheatre",
      city: "Morrison, CO",
      time: "8:00 PM",
      ticketsAvailable: false
    },
    {
      date: "2024-04-05",
      venue: "Fenway Park",
      city: "Boston, MA",
      time: "7:00 PM",
      ticketsAvailable: true
    }
  ];

  const bandMembers = [
    {
      name: "Alex Rivera",
      role: "Lead Vocals & Guitar",
      image: "/api/placeholder/200/200",
      bio: "Founding member with 15 years of experience"
    },
    {
      name: "Sam Chen",
      role: "Bass Guitar",
      image: "/api/placeholder/200/200",
      bio: "Classically trained musician and songwriter"
    },
    {
      name: "Jordan Blake",
      role: "Drums",
      image: "/api/placeholder/200/200",
      bio: "Former session musician for major labels"
    },
    {
      name: "Casey Morgan",
      role: "Lead Guitar",
      image: "/api/placeholder/200/200",
      bio: "Multi-instrumentalist and producer"
    }
  ];

  const latestNews = [
    {
      title: "New Album 'Electric Dreams' Now Available",
      date: "2024-02-15",
      excerpt: "Our latest studio album featuring 12 new tracks is now streaming on all platforms.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "World Tour 2024 Announced",
      date: "2024-02-10",
      excerpt: "We're hitting the road with our biggest tour yet, spanning 3 continents and 50+ cities.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Behind the Scenes: Recording Process",
      date: "2024-02-05",
      excerpt: "Take a look inside our creative process for the new album with exclusive studio footage.",
      image: "/api/placeholder/400/200"
    }
  ];

  const popularSongs = [
    "Electric Nights",
    "Midnight Drive",
    "Broken Dreams",
    "City Lights",
    "Forever Young"
  ];

  return (
    <Container componentId="band-landing-page">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with dark music theme background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black"
      >
        {/* Header */}
        <Header 
          devId="band-header" 
          devName="Band Header" 
          devDescription="Primary band website header with navigation"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="band-nav" 
            devName="Band Navigation" 
            devDescription="Primary navigation bar for band website"
            className="flex items-center justify-between"
          >
            <Div 
              devId="band-logo-section" 
              devName="Band Logo Section" 
              devDescription="Band logo and name"
              className="flex items-center space-x-2"
            >
              <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </Div>
              <Span 
                devId="band-name" 
                devName="Band Name" 
                devDescription="The Midnight Echoes band name"
                className="text-xl font-bold text-white"
              >
                The Midnight Echoes
              </Span>
            </Div>
            <Div 
              devId="nav-menu" 
              devName="Navigation Menu" 
              devDescription="Main navigation menu items"
              className="hidden md:flex items-center space-x-6"
            >
              <a href="#music" className="text-gray-300 hover:text-white transition-colors">Music</a>
              <a href="#tour" className="text-gray-300 hover:text-white transition-colors">Tour</a>
              <a href="#band" className="text-gray-300 hover:text-white transition-colors">Band</a>
              <a href="#news" className="text-gray-300 hover:text-white transition-colors">News</a>
            </Div>
            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu"
              className="flex items-center space-x-4"
            >
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated user"
                    className="text-gray-300"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Dashboard button for band management"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Band Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons for fans"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button for fans and band members"
                      variant="ghost" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Join the fan community button"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Join Fans
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section with band introduction"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Animated wrapper for hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main band title and tagline"
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                The Midnight
                <Span 
                  devId="echoes-highlight" 
                  devName="Echoes Highlight" 
                  devDescription="Highlighted Echoes text in gradient"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {' '}Echoes
                </Span>
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Band description and music style"
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Electrifying rock anthems that capture the soul of the night. 
                Experience our latest album "Electric Dreams" and join us on our world tour.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons for music and tickets"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  devId="hero-listen-now"
                  devName="Listen Now Button"
                  devDescription="Primary button to listen to music"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Listen Now
                </Button>
                <Button 
                  devId="hero-tour-dates"
                  devName="Tour Dates Button"
                  devDescription="Secondary button to view tour dates"
                  variant="outline"
                  className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Tour Dates
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Latest Music Section */}
        <Container componentId="music-section">
          <Section 
            devId="music-content" 
            devName="Music Content" 
            devDescription="Latest albums and music showcase"
            className="container mx-auto px-4 py-20"
            id="music"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Latest Music</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Discover our discography spanning over a decade of musical evolution
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {albums.map((album, index) => (
                <Card 
                  key={index} 
                  devId={getAlbumCardId(index)}
                  devName={`${album.title} Album Card`}
                  devDescription={`Album card for ${album.title} (${album.year})`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all group"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Music className="w-16 h-16 text-purple-400" />
                    </Div>
                    <Div devId="noID" className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{album.title}</h3>
                      <P devId="noID" className="text-gray-400 text-sm mb-2">{album.year} • {album.genre}</P>
                      <Div devId="noID" className="flex items-center justify-between">
                        <Span devId="noID" className="text-xs text-gray-500">{album.tracks} tracks</Span>
                        <Button 
                          devId="noID"
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="w-3 h-3" />
                        </Button>
                      </Div>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Tour Dates Section */}
        <Container componentId="tour-section">
          <Section 
            devId="tour-content" 
            devName="Tour Content" 
            devDescription="Upcoming tour dates and concerts"
            className="container mx-auto px-4 py-20"
            id="tour"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Upcoming Shows</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Don't miss us live! Get your tickets for the Electric Dreams World Tour 2024
              </P>
            </Div>
            <Div devId="noID" className="max-w-4xl mx-auto space-y-4">
              {upcomingShows.map((show, index) => (
                <Card 
                  key={index} 
                  devId={getTourDateCardId(index)}
                  devName={`${show.venue} Tour Date Card`}
                  devDescription={`Tour date card for ${show.venue} on ${show.date}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <Div devId="noID" className="flex-1">
                        <Div devId="noID" className="flex items-center gap-4 mb-2">
                          <Div devId="noID" className="text-center">
                            <Div devId="noID" className="text-2xl font-bold text-white">
                              {new Date(show.date).getDate()}
                            </Div>
                            <Div devId="noID" className="text-xs text-gray-400 uppercase">
                              {new Date(show.date).toLocaleDateString('en-US', { month: 'short' })}
                            </Div>
                          </Div>
                          <Div devId="noID">
                            <h3 className="text-lg font-semibold text-white">{show.venue}</h3>
                            <Div devId="noID" className="flex items-center gap-4 text-gray-400 text-sm">
                              <Span devId="noID" className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {show.city}
                              </Span>
                              <Span devId="noID" className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {show.time}
                              </Span>
                            </Div>
                          </Div>
                        </Div>
                      </Div>
                      <Div devId="noID" className="flex items-center gap-3">
                        {show.ticketsAvailable ? (
                          <>
                            <Badge devId="noID" className="bg-green-500/20 text-green-400 border-green-500/30">
                              Available
                            </Badge>
                            <Button 
                              devId="noID"
                              className="bg-purple-600 hover:bg-purple-700 text-white"
                            >
                              Get Tickets
                            </Button>
                          </>
                        ) : (
                          <Badge devId="noID" className="bg-red-500/20 text-red-400 border-red-500/30">
                            Sold Out
                          </Badge>
                        )}
                      </Div>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Band Members Section */}
        <Container componentId="band-section">
          <Section 
            devId="band-content" 
            devName="Band Content" 
            devDescription="Band members showcase"
            className="container mx-auto px-4 py-20"
            id="band"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Meet the Band</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                The talented musicians behind The Midnight Echoes
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bandMembers.map((member, index) => (
                <Card 
                  key={index} 
                  devId={getBandMemberCardId(index)}
                  devName={`${member.name} Member Card`}
                  devDescription={`Band member card for ${member.name} - ${member.role}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all group"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <User className="w-16 h-16 text-purple-400" />
                    </Div>
                    <Div devId="noID" className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                      <P devId="noID" className="text-purple-400 text-sm mb-2">{member.role}</P>
                      <P devId="noID" className="text-gray-400 text-xs">{member.bio}</P>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* News Section */}
        <Container componentId="news-section">
          <Section 
            devId="news-content" 
            devName="News Content" 
            devDescription="Latest band news and updates"
            className="container mx-auto px-4 py-20"
            id="news"
          >
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Latest News</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Stay updated with our latest releases, tour announcements, and behind-the-scenes content
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-6">
              {latestNews.map((news, index) => (
                <Card 
                  key={index} 
                  devId={getNewsCardId(index)}
                  devName={`${news.title} News Card`}
                  devDescription={`News article card: ${news.title}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all group"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Star className="w-12 h-12 text-purple-400" />
                    </Div>
                    <Div devId="noID" className="p-4">
                      <Div devId="noID" className="text-xs text-gray-400 mb-2">
                        {new Date(news.date).toLocaleDateString()}
                      </Div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {news.title}
                      </h3>
                      <P devId="noID" className="text-gray-400 text-sm">{news.excerpt}</P>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Newsletter Signup */}
        <Container componentId="newsletter-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 text-center border border-purple-500/30">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Stay Connected</H2>
              <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our mailing list for exclusive updates, early ticket access, and behind-the-scenes content
              </P>
              <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Button 
                  devId="newsletter-signup"
                  devName="Newsletter Signup Button"
                  devDescription="Button to subscribe to band newsletter"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="band-footer" 
          devName="Band Footer" 
          devDescription="Band website footer with social links"
          className="container mx-auto px-4 py-8 border-t border-white/10"
        >
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
            <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
              © 2024 The Midnight Echoes. All rights reserved.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Spotify</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Apple Music</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};