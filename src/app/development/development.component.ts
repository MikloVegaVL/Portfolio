import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class DevelopmentComponent {

  readonly projects = [
    { number: '01', title: 'First HTML & CSS Quiz', href: '/showcase/quiz-time/index.html', image: '/assets/img/quiz-640.jpg' },
    { number: '02', title: 'JavaScript Game', href: '/showcase/el-pollo-loco/index.html', image: '/assets/img/el_pollo_loco_big.png' },
    { number: '03', title: 'Management System', href: '/showcase/join/sites/login.html', image: '/assets/img/join_login.png' },
    { number: '04', title: 'Angular Card Game', href: '/showcase/ringoffire/index.html', image: '/assets/img/fire-ring-2091656_640.png' },
    { number: '05', title: 'Personal Website', href: 'https://github.com/MikloVegaVL/Portfolio', image: '/assets/img/homepage_front.png' },
    { number: '06', title: 'WordPress Project', href: 'https://www.europa-foerdert-kultur.eu/', image: '/assets/img/Europa-fördert-Kultur.png' },
    { number: '07', title: 'Star Wars API', href: '/showcase/star-wars/index.html', image: '/assets/img/Star Wars screenshot.png' },
    { number: '08', title: 'ML2.0 App', href: '/showcase/ml2-app/index.html', image: '/assets/img/under_construction.jpg' },
  ];

  readonly skillGroups = [
    { name: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python'] },
    { name: 'Frameworks & Libraries', items: ['Angular', 'Node.js', 'Bootstrap', 'Material', 'Tailwind CSS', 'Sass'] },
    { name: 'Databases & Backend', items: ['REST APIs', 'MySQL', 'PostgreSQL', 'phpMyAdmin', 'Firebase'] },
    { name: 'DevOps & Build Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Webpack', 'npm'] },
    { name: 'Version Control & Collaboration', items: ['Git', 'GitHub', 'GitHub Copilot', 'GitHub CLI', 'Bitbucket', 'Jira', 'Scrum'] },
    { name: 'CMS & Analytics', items: ['WordPress', 'PostHog'] },
  ];
}
