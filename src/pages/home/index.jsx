import React from 'react';
import './style.scss';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/svgs/90921-laptop.json';
import FbLogo from '../../assets/svgs/fb.svg';
import InstaLogo from '../../assets/svgs/insta.svg';
import LinkedInLogo from '../../assets/svgs/linkedin.svg';
import GithubLogo from '../../assets/svgs/github.svg';
import TwitterLogo from '../../assets/svgs/twitter.svg';
import YtLogo from '../../assets/svgs/youtube.svg';
import FbLogoActive from '../../assets/svgs/facebook_active.png';
import InstaLogoActive from '../../assets/svgs/instagram_active.png';
import LinkedInLogoActive from '../../assets/svgs/linkedin_active.png';
import GithubLogoActive from '../../assets/svgs/github_active.png';
import TwitterLogoActive from '../../assets/svgs/twitter_active.png';
import YtLogoActive from '../../assets/svgs/youtube_active.png';
import { ReactComponent as LineSvg } from '../../assets/svgs/line.svg';
import AboutMePhoto from '../../assets/svgs/about_me.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactComponent as Lines } from '../../assets/svgs/lines.svg';
import { ReactComponent as Polygon } from '../../assets/svgs/polygon.svg';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import * as cube from '../../assets/svgs/cube.json';

const SocialLinks = [
  {
    icon: LinkedInLogo,
    active: LinkedInLogoActive,
    link: 'https://www.linkedin.com/in/bidipto-bose-981b541b6/',
  },
  {
    icon: GithubLogo,
    link: 'https://github.com/bdbose',
    active: GithubLogoActive,
  },
  {
    icon: TwitterLogo,
    link: 'https://twitter.com/bdbose123',
    active: TwitterLogoActive,
  },
  {
    icon: YtLogo,
    link: 'https://www.youtube.com/channel/UC-8SZhRIyLvv2TMHkpghjCQ',
    active: YtLogoActive,
  },
  {
    icon: FbLogo,
    link: 'https://www.facebook.com/bidipto.bose',
    active: FbLogoActive,
  },
  {
    icon: InstaLogo,
    link: 'https://www.instagram.com/bdbose/',
    active: InstaLogoActive,
  },
];

const tech = [
  {
    img: '/logo/react.svg',
    txt: 'React Js',
  },
  {
    img: '/logo/node.svg',
    txt: 'Node Js',
  },
  {
    img: '/logo/mongodb.svg',
    txt: 'MongoDB',
  },
  {
    img: '/logo/firebase.svg',
    txt: 'Firebase',
  },
  {
    img: '/logo/amazon.svg',
    txt: ['Amazon', 'Web Services'],
  },
  {
    img: '/logo/python.svg',
    txt: 'Python',
  },
  {
    img: '/logo/javascript.svg',
    txt: 'Javascript',
  },
  {
    img: '/logo/html.svg',
    txt: 'HTML',
  },
  {
    img: '/logo/css.svg',
    txt: 'CSS',
  },
  {
    img: '/logo/typescript.svg',
    txt: 'Typescript',
  },
  {
    img: '/logo/sass.svg',
    txt: 'Sass',
  },
  {
    img: '/logo/ui.svg',
    txt: ['UI/UX', 'Design'],
  },
  {
    img: '/logo/mysql.svg',
    txt: 'Mysql',
  },
  {
    img: '/logo/c++.svg',
    txt: 'C++',
  },
  {
    img: '/logo/android.svg',
    txt: ['Android', 'Studio'],
  },
  {
    img: '/logo/ml.svg',
    txt: ['Machine', 'Learning'],
  },
  {
    img: '/logo/java.svg',
    txt: 'Java',
  },
  {
    img: '/logo/cloud.svg',
    txt: ['Cloud', 'Computing'],
  },
];

const Companies = [
  {
    name: 'SaffronStays',
    desc: '',
    title: 'Software Development Engineer',
    time: 'June 2022 - Present',
  },
  {
    name: 'Nykaa',
    desc: '',
    time: 'May 2022 - June 2022',
    title: 'Software Engineer Intern',
  },
  {
    name: 'Trell',
    desc: `• Handling backend for 25M+ users. Worked on
Various techs as Kafka, Redis and AWS(EC2,S3).\n
• Created many APIs and also improved response
Time of APIs. (Golang and MySQL)
`,
    time: 'Sept 2021 - May 2022',
    title: 'SDE Intern',
  },
  {
    name: 'Dcoder',
    desc: `• Adding new features to the present application\n
• Fixing some bugs `,
    time: 'Nov 2021 - March 2022',
    title: 'Fullstack Developer Intern',
  },
];

const Home = () => {
  const [company, setCompany] = useState(Companies[0]);
  const observer = new IntersectionObserver((ele) => {
    ele.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        // entry.target.classList.remove('show');
      }
    });
  });

  useEffect(() => {
    if (document) {
      const hiddenElements = document.querySelectorAll('.tech-icons');
      hiddenElements.forEach((el) => observer.observe(el));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const cubeOptions = {
    loop: true,
    autoplay: true,
    animationData: cube,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <main>
      <div className='home-wrapper'>
        <div className='home-container'>
          <h1>
            Hi , I am <span>Bidipto Bose</span>
          </h1>
          <h2>
            A{' '}
            <div className='text-animation'>
              <span className='animation-span'>Fullstack Developer</span>
              <span className='animation-span'>Frontend Developer</span>
              <span className='animation-span'>Backend Developer</span>
            </div>
          </h2>
          <div className='banner-btn-wrapper'>
            <button>Hire Me</button>
            <button className='with-border-btn'>Download CV</button>
          </div>
          <div className='social-links'>
            {SocialLinks.map((ele) => (
              <a
                className='socail-link-href'
                href={ele.link}
                key={ele.link}
                target='_blank'
                rel='noreferrer'>
                <img
                  className='img-icon'
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.5)';
                    e.target.src = ele.active;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.src = ele.icon;
                  }}
                  src={ele.icon}
                  alt=''
                />
              </a>
            ))}
          </div>
        </div>
        <div className='home-banner'>
          <Lottie
            options={defaultOptions}
            width={'auto'}
            height={600}
            style={{
              right: '-5vw',
              position: 'relative',
            }}
          />
        </div>
      </div>
      <LineSvg id='lines' />

      <div className='about-me-wrapper'>
        <h2>
          About <span>Me</span>
        </h2>
        <div className='about-me-container'>
          <img src={AboutMePhoto} alt='bidipto bose' />
          <p>
            Hi , I am Bidipto Bose from Kolkata , India . I am currently a 4th
            year student in Calcutta Institute of Engineering and Management ,
            pursuing B.Tech in Computer Science and Engineering. Coding is like
            a Hobby to me and learning new programming language is like my
            passion. Mainly focused on Website Development . Already 3 years of
            experience in Website Development and also have experience in
            multiple internships .
          </p>
        </div>
      </div>
      <div className='tech-stack-wrapper'>
        <h5>Skills I know</h5>
        <h2>
          My <span>TECH STACK</span>
        </h2>
        <div className='tech-container'>
          {tech.map((ele) => {
            return (
              <img
                title={ele.txt.toString()}
                key={ele.txt.toString()}
                className='tech-icons'
                src={ele.img}
                alt={ele.txt.toString()}
              />
            );
          })}
        </div>
      </div>
      <div className='career-wrapper'>
        <Star id='star' className='float-icon' />
        <Polygon id='polygon' className='float-icon' />
        <Lines id='circle-line' className='float-icon' />
        <Lottie
          options={cubeOptions}
          width={'200px'}
          height={'200px'}
          style={{
            right: '100px',
            position: 'absolute',
          }}
        />
        <h2>
          My <span>Career</span>
        </h2>
        <div className='career-container'>
          <div className='company-name-wrapper'>
            {Companies.map((ele) => {
              return (
                <div
                  onClick={() => setCompany(ele)}
                  key={ele.name}
                  className={`company-name ${
                    ele.name === company.name && 'company-active'
                  }`}>
                  {ele.name}
                </div>
              );
            })}
          </div>
          <div className='career-details'>
            <h3>{company.title}</h3>
            <span>{company.time}</span>
            <p>{company.desc}</p>
          </div>
        </div>
      </div>
      <footer>
        <h2>BOSE.CODE</h2>
        <div className='footer-links-wrapper'>
          {SocialLinks.map((ele) => (
            <a
              className='socail-link-href'
              href={ele.link}
              key={ele.link}
              target='_blank'
              rel='noreferrer'>
              <img className='img-icon' src={ele.icon} alt='' />
            </a>
          ))}
        </div>
        <div className='footer-links-container'>
          <a href='/'>Home</a>
          <span>•</span>
          <a href='/project'>Project</a>
          <span>•</span>
          <a href='/contact'>Contact</a>
        </div>
        <h6>COPYRIGHT © 2022 BIDIPTO BOSE</h6>
      </footer>
    </main>
  );
};
export default Home;
