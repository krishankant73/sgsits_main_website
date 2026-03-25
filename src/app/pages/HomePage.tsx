import { FeaturedHighlights } from '../components/FeaturedHighlights';
import { DirectorMessage } from '../components/DirectorMessage';
import { NewsUpdates } from '../components/NewsUpdates';
import { ResearchShowcase } from '../components/ResearchShowcase';
import { Departments } from '../components/Departments';
import { WhyChoose } from '../components/WhyChoose';
import { Events } from '../components/Events';
import directorImage from '../../assets/director.png';

export function HomePage() {
  const highlights = [
    {
      title: 'Center of Excellence in Research & Innovation',
      description: 'Advanced research facilities in emerging technologies with state-of-the-art computational infrastructure.',
      image: 'https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQzNjczMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research Center',
    },
    {
      title: 'NAAC A+ Accredited Institution',
      description: 'Recognized for academic excellence and quality education with the highest accreditation standards.',
      image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxpYnJhcnklMjBzdHVkeWluZyUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzc0MzY3MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Accreditation',
    },
    {
      title: 'Industry Collaboration & Innovation',
      description: 'Strong industry partnerships with leading organizations for internships, placements, and collaborative research projects.',
      image: 'https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHJvYm90aWNzJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzc0MzY3MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Industry',
    },
  ];

  const news = [
    {
      date: 'March 24, 2026',
      category: 'Achievements',
      title: 'SGSITS Students Win National Level Hackathon',
      excerpt: 'Team from Computer Science department secures first position at Smart India Hackathon with innovative IoT-based solution.',
    },
    {
      date: 'March 18, 2026',
      category: 'Placements',
      title: 'Record Breaking Placement Season 2025-26',
      excerpt: 'Over 95% students placed with average package of 8.5 LPA. Top recruiters include TCS, Infosys, Wipro, and Microsoft.',
    },
    {
      date: 'March 12, 2026',
      category: 'Research',
      title: 'New Research Paper Published in IEEE Journal',
      excerpt: 'Faculty and students publish groundbreaking work on renewable energy optimization in prestigious international journal.',
    },
    {
      date: 'March 05, 2026',
      category: 'Infrastructure',
      title: 'New Innovation & Incubation Center Inaugurated',
      excerpt: 'State-of-the-art facility to support student startups and entrepreneurship initiatives with modern lab equipment.',
    },
  ];

  const researchProjects = [
    {
      title: 'Sustainable Smart City Solutions',
      description: 'Developing IoT-based intelligent systems for traffic management, waste management, and energy optimization in urban areas.',
      image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwcmVzZWFyY2hlcnxlbnwxfHx8fDE3NzQzNjczMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      field: 'Smart Cities',
      size: 'large' as const,
    },
    {
      title: 'Advanced Robotics Lab',
      description: 'Research in autonomous systems, industrial automation, and robotics applications.',
      image: 'https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHJvYm90aWNzJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzc0MzY3MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      field: 'Robotics',
      size: 'small' as const,
    },
    {
      title: 'Biomedical Engineering',
      description: 'Innovative medical devices and healthcare technology for affordable diagnostic solutions.',
      image: 'https://images.unsplash.com/photo-1631556760585-2e846196d5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBtaWNyb3Njb3BlJTIwbGFifGVufDF8fHx8MTc3NDM2NzMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      field: 'Healthcare Tech',
      size: 'small' as const,
    },
    {
      title: 'Green Energy Research',
      description: 'Solar power optimization, energy storage systems, and sustainable energy solutions for rural electrification.',
      image: 'https://images.unsplash.com/photo-1581093449818-2655b2467fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQzNjczMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      field: 'Energy',
      size: 'small' as const,
    },
    {
      title: 'Data Science & Analytics',
      description: 'Big data processing, predictive analytics, and computational research for industry applications.',
      image: 'https://images.unsplash.com/photo-1757192420329-39acf20a12b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc0Mjg5MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      field: 'Data Science',
      size: 'small' as const,
    },
  ];

  const events = [
    {
      date: '29',
      month: 'Mar',
      time: '10:00 - 16:00',
      title: 'SGSITS TechFest 2026 - Annual Technical Symposium',
      location: 'Main Campus',
      category: 'Technical Event',
    },
    {
      date: '05',
      month: 'Apr',
      time: '09:00 - 17:00',
      title: 'Campus Recruitment Drive - Leading IT Companies',
      location: 'Placement Cell',
      category: 'Placement',
    },
    {
      date: '15',
      month: 'Apr',
      time: '14:00 - 16:00',
      title: 'Guest Lecture on Industry 4.0 and Future Technologies',
      location: 'Auditorium',
      category: 'Seminar',
    },
    {
      date: '22',
      month: 'Apr',
      time: '10:00 - 13:00',
      title: 'Workshop on Artificial Intelligence and Deep Learning',
      location: 'CSE Department',
      category: 'Workshop',
    },
  ];

  return (
    <>
      <FeaturedHighlights highlights={highlights} />
      <DirectorMessage directorImage={directorImage} />
      <NewsUpdates news={news} />
      <ResearchShowcase projects={researchProjects} />
      <Departments />
      <WhyChoose />
      <Events events={events} />
    </>
  );
}