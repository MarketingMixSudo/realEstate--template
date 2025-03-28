
import { Button } from './ui/button';
import Link from 'next/link';

const LinkList = ({ links }: { links: Link[] }) => {
    return (
      links && (
        <div className='flex flex-wrap justify-center items-center gap-12 mt-6'>
          {links.map((link, index) => (
            <Button asChild key={`${link.label}-${index}`} variant={link.variant}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      )
    );
  };

export default LinkList