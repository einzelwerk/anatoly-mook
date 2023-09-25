import { Hero } from '@/components/sections/Hero';
import { Hits } from '@/components/sections/Hits';
import { Awareness } from '@/components/sections/Awareness';
import { Services } from '@/components/sections/Services';
import { BusinessPartners } from '@/components/sections/BusinessPartners';
import { ThemeModule } from '@/components/sections/ThemeModule';
import { Guide } from '@/components/sections/Guide';
import { Partners } from '@/components/sections/Partners';
import { Feedback } from '@/components/sections/Feedback';
import { FAQ } from '@/components/sections/FAQ';
import Links from '@/components/sections/Links';
import { Contact } from '@/components/sections/Contact';
import { Socials } from '@/components/sections/Socials';

const Sections = {
    Hero: Hero,
    SliderCard: Hits,
    About: Awareness,
    Services: Services,
    Client: BusinessPartners,
    ImageText: ThemeModule,
    AboutInfo: Guide,
    Logos: Partners,
    Feedbacks: Feedback,
    Accordions: FAQ,
    Social: Socials,
    Contact: Contact,
};

export default Sections;
