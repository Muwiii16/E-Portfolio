// Your personal info lives in site.json, so the dashboard (/admin) can edit it.
import site from './site.json';

export { site };

export const nav = [
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
];
