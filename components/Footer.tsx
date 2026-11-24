import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from '@/components/icons';
import { CONTACT, NAV, SOCIAL } from '@/lib/site';

const SOCIAL_LINKS = [
  { href: SOCIAL.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: SOCIAL.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: SOCIAL.youtube, label: 'YouTube', Icon: YoutubeIcon },
  { href: SOCIAL.facebook, label: 'Facebook', Icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer id="contact" className="pk-footer">
      <div className="pk-wrap">
        <div className="pk-footer-top">
          <div className="pk-footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pk-footer-brandmark"
              src="/images/brand/gut-avatar-wordmark.svg"
              alt="gut avatar"
              width={258}
              height={47}
              loading="lazy"
            />
            <p className="pk-footer-tag">Nutrition · Gut Health · Mindset · Wellbeing</p>
          </div>

          <nav aria-label="Footer" className="pk-footer-nav">
            {NAV.filter((n) => n.label !== 'Contact').map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="pk-socials">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="pk-footer-bottom">
          <div className="pk-footer-lines">
            <a href={`mailto:${CONTACT.email}`}>
              <span className="pk-footer-ico">
                <MailIcon size={16} />
              </span>
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneHref}`}>
              <span className="pk-footer-ico">
                <PhoneIcon size={16} />
              </span>
              {CONTACT.phone}
            </a>
          </div>
          <p className="pk-footer-legal">&copy; {new Date().getFullYear()} Payal Kothari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
