
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';

const LinkList = ({ links,className }: { links: Link[],className?: string }) => {
    return (
      links && (
        <div className={cn('flex flex-wrap justify-center items-center gap-12 mt-6',className) }>
          {links.map((link, index) => (
            link.button ?
            <Button asChild key={`${link.label}-${index}`} variant={link.variant}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
            :
            <Link key={`${link.label}-${index}`} href={link.href} className='link'>{link.label}</Link>
          ))}
        </div>
      )
    );
  };

export default LinkList